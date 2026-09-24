/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled route modules. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');

function load(file, deps) {
  const filename = path.join(__dirname, '..', file);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const run = vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename });
  run(name => deps[name] ?? require(name), module, module.exports);
  return module.exports;
}

const auth = {
  AUTH_COOKIE_NAME: 'gloitel_admin_session',
  TOKEN_LIFETIME: 604800,
  authenticate: async () => ({ token: 'signed-token', expiresIn: 604800, user: { role: 'admin' } }),
  authError: error => {
    throw error;
  },
  verifyToken: async request =>
    request.headers.get('cookie') === 'gloitel_admin_session=signed-token'
      ? { role: 'admin' }
      : null,
};

test('login sets an HttpOnly cookie without exposing token in JSON', async () => {
  const route = load('app/api/auth/login/route.ts', { '@/lib/auth': auth });
  const response = await route.POST(
    new Request('http://localhost/api/auth/login', { method: 'POST', body: '{}' }),
  );
  assert.equal(response.status, 200);
  const cookie = response.headers.get('set-cookie');
  assert.match(cookie, /gloitel_admin_session=signed-token/);
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Strict/);
  assert.match(cookie, /Max-Age=604800/);
  assert.equal((await response.json()).data.token, undefined);
});

test('verify reads cookie and logout clears it', async () => {
  const verify = load('app/api/auth/verify/route.ts', { '@/lib/auth': auth });
  const logout = load('app/api/auth/logout/route.ts', { '@/lib/auth': auth });
  assert.equal((await verify.GET(new Request('http://localhost/api/auth/verify'))).status, 401);
  assert.equal(
    (
      await verify.GET(
        new Request('http://localhost/api/auth/verify', {
          headers: { cookie: 'gloitel_admin_session=signed-token' },
        }),
      )
    ).status,
    200,
  );
  const response = await logout.POST();
  assert.match(response.headers.get('set-cookie'), /Max-Age=0/);
});
