/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled route modules. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const { ObjectId, MongoServerError } = require('mongodb');

function load(file, overrides = {}) {
  const filename = path.join(__dirname, '..', file);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const run = vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename });
  run(
    name => (name === 'server-only' ? {} : (overrides[name] ?? require(name))),
    module,
    module.exports,
  );
  return module.exports;
}

const helpers = load('lib/caseStudies.ts');
const valid = {
  title: 'Healthcare platform',
  Description: 'A client transformation',
  slug: 'healthcare-platform',
  excerpt: 'A short summary',
  content: '# Challenge\nA real story.',
  category: 'Healthcare',
  industry: 'Healthcare & MedTech',
  service: 'Product Engineering',
  thumbnail: 'data:image/png;base64,aGVsbG8=',
};

function matches(row, filter) {
  return Object.entries(filter).every(([key, value]) => {
    if (key === '$or') return value.some(condition => matches(row, condition));
    if (value && typeof value === 'object' && '$ne' in value) return row[key] !== value.$ne;
    if (value && typeof value === 'object' && '$regex' in value)
      return new RegExp(value.$regex, value.$options).test(row[key] ?? '');
    return String(row[key]) === String(value);
  });
}

test('validation accepts editor fields and rejects invalid input', () => {
  const fields = helpers.validateCaseStudy({ ...valid, status: 'published', id: 'untrusted' });
  assert.equal(fields.id, undefined);
  assert.equal(fields.category, 'Healthcare');
  assert.equal(fields.status, 'published');
  for (const body of [
    null,
    {},
    { ...valid, slug: '../bad' },
    { ...valid, status: 'bad' },
    { ...valid, status: 'scheduled' },
    { ...valid, industry: '' },
    { ...valid, liveWebsiteLink: 'javascript:alert(1)' },
    { ...valid, thumbnail: 'bad' },
    { ...valid, status: 'published', content: '' },
  ]) {
    assert.throws(() => helpers.validateCaseStudy(body), helpers.CaseStudyInputError);
  }
  assert.throws(() => helpers.validateCaseStudy({}, true), helpers.CaseStudyInputError);
  assert.throws(() => helpers.caseStudyId('bad'), helpers.CaseStudyInputError);
});

test('authenticated CRUD, published visibility, search, pagination and errors', async () => {
  const rows = new Map();
  const collection = {
    async insertOne(study) {
      if ([...rows.values()].some(row => row.slug === study.slug))
        throw new MongoServerError({ code: 11000 });
      const _id = new ObjectId();
      rows.set(String(_id), { ...study, _id });
      return { insertedId: _id };
    },
    async findOne(filter) {
      return [...rows.values()].find(row => matches(row, filter)) ?? null;
    },
    async findOneAndUpdate({ _id }, { $set }) {
      const row = { ...rows.get(String(_id)), ...$set };
      rows.set(String(_id), row);
      return row;
    },
    async deleteOne({ _id }) {
      return { deletedCount: Number(rows.delete(String(_id))) };
    },
    async countDocuments(filter) {
      return [...rows.values()].filter(row => matches(row, filter)).length;
    },
    find(filter) {
      let selected = [...rows.values()].filter(row => matches(row, filter));
      return {
        sort() {
          return this;
        },
        skip(count) {
          selected = selected.slice(count);
          return this;
        },
        limit(count) {
          selected = selected.slice(0, count);
          return this;
        },
        async toArray() {
          return selected;
        },
      };
    },
  };
  const deps = {
    '@/lib/caseStudies': { ...helpers, getCaseStudies: async () => collection },
    '@/lib/auth': {
      requireAuth: async request =>
        request.headers.get('cookie') === 'admin=yes'
          ? null
          : Response.json(
              { success: false, message: 'Valid admin session required' },
              { status: 401 },
            ),
    },
  };
  const root = load('app/api/case-studies/route.ts', deps);
  const item = load('app/api/case-studies/[id]/route.ts', deps);
  const request = (url, method = 'GET', body, admin = true) =>
    new Request(`http://localhost${url}`, {
      method,
      headers: admin ? { cookie: 'admin=yes' } : {},
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
  assert.equal((await root.POST(request('/api/case-studies', 'POST', valid, false))).status, 401);
  const created = await root.POST(request('/api/case-studies', 'POST', valid));
  assert.equal(created.status, 201);
  const { data } = await created.json();
  const context = { params: Promise.resolve({ id: data.id }) };
  assert.equal((await root.POST(request('/api/case-studies', 'POST', valid))).status, 409);
  assert.equal(
    (await (await root.GET(request('/api/case-studies', 'GET', undefined, false))).json())
      .pagination.total,
    0,
  );
  assert.equal(
    (await root.GET(request('/api/case-studies?scope=all', 'GET', undefined, false))).status,
    401,
  );
  assert.equal(
    (await item.GET(request(`/api/case-studies/${data.id}`, 'GET', undefined, false), context))
      .status,
    404,
  );
  assert.equal((await item.GET(request(`/api/case-studies/${data.id}`), context)).status, 200);
  assert.equal(
    (
      await item.PUT(
        request(`/api/case-studies/${data.id}`, 'PUT', { status: 'published' }, false),
        context,
      )
    ).status,
    401,
  );
  assert.equal(
    (
      await item.PUT(
        request(`/api/case-studies/${data.id}`, 'PUT', { status: 'published' }),
        context,
      )
    ).status,
    200,
  );
  assert.equal(
    (await item.PUT(request(`/api/case-studies/${data.id}`, 'PUT', { content: '' }), context))
      .status,
    400,
  );
  const replaced = await item.PUT(
    request(`/api/case-studies/${data.id}`, 'PUT', { thumbnail: 'https://example.com/new.png' }),
    context,
  );
  assert.equal((await replaced.json()).data.thumbnail, 'https://example.com/new.png');
  const cleared = await item.PUT(
    request(`/api/case-studies/${data.id}`, 'PUT', { thumbnail: '' }),
    context,
  );
  assert.equal((await cleared.json()).data.thumbnail, '');
  const listed = await (
    await root.GET(
      request('/api/case-studies?search=healthcare&page=0&limit=999', 'GET', undefined, false),
    )
  ).json();
  assert.equal(listed.pagination.page, 1);
  assert.equal(listed.pagination.limit, 100);
  assert.equal(listed.pagination.total, 1);
  assert.equal(listed.data[0].slug, valid.slug);
  const bySlug = await item.GET(
    request(`/api/case-studies/${valid.slug}`, 'GET', undefined, false),
    { params: Promise.resolve({ id: valid.slug }) },
  );
  assert.equal(bySlug.status, 200);
  assert.equal(
    (
      await item.DELETE(
        request(`/api/case-studies/${data.id}`, 'DELETE', undefined, undefined),
        context,
      )
    ).status,
    200,
  );
  assert.equal((await item.GET(request(`/api/case-studies/${data.id}`), context)).status, 404);
});
