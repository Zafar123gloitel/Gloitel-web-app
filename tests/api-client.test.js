/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads TypeScript helpers. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { test } = require('node:test');

function setup(fetch) {
  const modules = new Map();
  function load(name) {
    if (modules.has(name)) return modules.get(name);
    const filename = path.join(__dirname, '../lib', `${name}.ts`);
    const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const module = { exports: {} };
    new Function('module', 'exports', 'require', 'fetch', code)(
      module,
      module.exports,
      id => load(id.replace('./', '')),
      fetch,
    );
    modules.set(name, module.exports);
    return module.exports;
  }
  return { api: load('api'), store: load('apiStore') };
}
const response = (data, status = 200) => ({ ok: status < 400, status, json: async () => data });
const tick = () => new Promise(resolve => setTimeout(resolve, 5));

test('two subscribers share a request; one unmount does not cancel the other', async () => {
  let calls = 0;
  let signal;
  let finish;
  const { store } = setup((_url, options) => {
    calls++;
    signal = options.signal;
    return new Promise(resolve => {
      finish = resolve;
    });
  });
  const first = store.subscribeApi('/api/blog', false, () => {
    /* No UI subscriber needed in this test. */
  });
  const second = store.subscribeApi('/api/blog', false, () => {
    /* No UI subscriber needed in this test. */
  });
  first();
  await tick();
  assert.equal(signal.aborted, false);
  assert.equal(calls, 1);
  finish(response({ success: true, data: ['shared'] }));
  await tick();
  assert.deepEqual(store.getApiSnapshot('/api/blog', false).result.data, ['shared']);
  second();
  await tick();
  assert.equal(signal.aborted, true);
  assert.equal(store.getApiSnapshot('/api/blog', false).result, undefined);
});

test('pagination preserves scope and collects every page', async () => {
  const urls = [];
  const { api } = setup(async url => {
    urls.push(url);
    return response({ success: true, data: [urls.length], pagination: { totalPages: 2 } });
  });
  const result = await api.apiAllPages('/api/blog?scope=all');
  assert.deepEqual(result.data, [1, 2]);
  assert.deepEqual(urls, [
    '/api/blog?scope=all&page=1&limit=100',
    '/api/blog?scope=all&page=2&limit=100',
  ]);
});

test('HTTP errors expose server messages; malformed list responses fail', async () => {
  const { api } = setup(async () => response({ success: false, message: 'Session expired' }, 401));
  await assert.rejects(
    api.apiRequest('/api/jobs'),
    error => error.status === 401 && error.message === 'Session expired',
  );
  const malformed = setup(async () => response({ success: true, data: null }));
  await assert.rejects(malformed.api.apiAllPages('/api/blog'), /Invalid list/);
});

test('mutations refresh public and admin variants, ignoring an older pending response', async () => {
  let finishOld;
  let publicReads = 0;
  let adminReads = 0;
  const { api, store } = setup(async (url, options) => {
    if (options.method === 'DELETE') return response({ success: true });
    if (url.includes('scope=all')) {
      adminReads++;
      return response({ success: true, data: ['admin'] });
    }
    publicReads++;
    if (publicReads === 1)
      return new Promise(resolve => {
        finishOld = resolve;
      });
    return response({ success: true, data: ['new'] });
  });
  const offPublic = store.subscribeApi('/api/blog', false, () => {
    /* No UI subscriber needed in this test. */
  });
  const offAdmin = store.subscribeApi('/api/blog?scope=all', false, () => {
    /* No UI subscriber needed in this test. */
  });
  await tick();
  await api.apiRequest('/api/blog/123', { method: 'DELETE' });
  await tick();
  finishOld(response({ success: true, data: ['old'] }));
  await tick();
  assert.equal(publicReads, 2);
  assert.equal(adminReads, 2);
  assert.deepEqual(store.getApiSnapshot('/api/blog', false).result.data, ['new']);
  offPublic();
  offAdmin();
  await tick();
});

test('failed request can be retried and multipart body is forwarded unchanged', async () => {
  let count = 0;
  const body = new globalThis.FormData();
  body.append('fullName', 'Test');
  const { api, store } = setup(async (_url, options) => {
    if (options.method === 'POST') {
      assert.equal(options.body, body);
      assert.equal(options.headers, undefined);
      return response({ success: true });
    }
    count++;
    return count === 1
      ? response({ message: 'Unavailable' }, 500)
      : response({ success: true, data: [] });
  });
  const off = store.subscribeApi('/api/blog', false, () => {
    /* No UI subscriber needed in this test. */
  });
  await tick();
  assert.equal(store.getApiSnapshot('/api/blog', false).error, 'Unavailable');
  await store.refreshApi('/api/blog', false);
  assert.equal(store.getApiSnapshot('/api/blog', false).error, '');
  await api.apiRequest('/api/career/apply', { method: 'POST', body });
  off();
  await tick();
});

test('Strict Mode resubscription reuses pending work and separate URLs stay isolated', async () => {
  const urls = [];
  const { store } = setup(async url => {
    urls.push(url);
    return response({ success: true, data: [url] });
  });
  const listener = () => {
    /* Observe through snapshots below. */
  };
  const first = store.subscribeApi('/api/blog/one', false, listener);
  first();
  const second = store.subscribeApi('/api/blog/one', false, listener);
  const third = store.subscribeApi('/api/blog/two', false, listener);
  await tick();
  assert.deepEqual(urls, ['/api/blog/one', '/api/blog/two']);
  assert.deepEqual(store.getApiSnapshot('/api/blog/two', false).result.data, ['/api/blog/two']);
  second();
  third();
  await tick();
});

test('logout discards authenticated data even when an old read resolves later', async () => {
  let finishOld;
  let loggedOut = false;
  const { api, store } = setup(async (_url, options) => {
    if (options.method === 'POST') {
      loggedOut = true;
      return response({ success: true });
    }
    if (loggedOut) return response({ success: false, message: 'Unauthorized' }, 401);
    return new Promise(resolve => {
      finishOld = resolve;
    });
  });
  const off = store.subscribeApi('/api/contact', false, () => {
    /* Inspect the snapshot below. */
  });
  await api.apiRequest('/api/auth/logout', { method: 'POST' });
  finishOld(response({ success: true, data: ['private'] }));
  await tick();
  assert.equal(store.getApiSnapshot('/api/contact', false).result, undefined);
  assert.equal(store.getApiSnapshot('/api/contact', false).error, 'Unauthorized');
  off();
  await tick();
});

test('invalidation cannot let an old cleanup remove a newly mounted query', async () => {
  const { api, store } = setup(async () => response({ success: true, data: ['fresh'] }));
  const listener = () => {
    /* Inspect the fresh entry below. */
  };
  const first = store.subscribeApi('/api/blog', false, listener);
  first();
  api.invalidateApi('/api/blog');
  const second = store.subscribeApi('/api/blog', false, listener);
  await tick();
  assert.deepEqual(store.getApiSnapshot('/api/blog', false).result.data, ['fresh']);
  second();
  await tick();
});
