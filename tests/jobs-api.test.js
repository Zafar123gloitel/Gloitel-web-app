/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled route modules. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const { ObjectId } = require('mongodb');

function load(file, deps = {}) {
  const filename = path.join(__dirname, '..', file);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename })(
    name => (name === 'server-only' ? {} : (deps[name] ?? require(name))),
    module,
    module.exports,
  );
  return module.exports;
}

const helpers = load('lib/jobs.ts');
const payload = {
  title: 'Engineer',
  department: 'Engineering',
  location: 'Remote',
  type: 'full-time',
  description: 'Build software',
  status: 'active',
};

test('job validation accepts only active or inactive status', () => {
  assert.equal(helpers.validateJob(payload).status, 'active');
  assert.throws(() => helpers.validateJob({ ...payload, status: 'closed' }), helpers.JobInputError);
  assert.throws(() => helpers.validateJob({ ...payload, title: '' }), helpers.JobInputError);
});

test('public list sees active jobs; admin can list all and change status', async () => {
  const rows = new Map();
  const collection = {
    async insertOne(job) {
      const _id = new ObjectId();
      rows.set(String(_id), { ...job, _id });
      return { insertedId: _id };
    },
    find(filter) {
      const selected = [...rows.values()].filter(
        job => !filter.status || job.status === filter.status,
      );
      return {
        sort() {
          return this;
        },
        skip(offset) {
          this.offset = offset;
          return this;
        },
        limit(limit) {
          this.limitValue = limit;
          return this;
        },
        async toArray() {
          return selected.slice(this.offset, this.offset + this.limitValue);
        },
      };
    },
    async countDocuments(filter) {
      return [...rows.values()].filter(job => !filter.status || job.status === filter.status)
        .length;
    },
    async findOneAndUpdate({ _id }, { $set }) {
      const job = rows.get(String(_id));
      if (!job) return null;
      const updated = { ...job, ...$set };
      rows.set(String(_id), updated);
      return updated;
    },
    async findOne({ _id }) {
      return rows.get(String(_id)) ?? null;
    },
    async deleteOne({ _id }) {
      return { deletedCount: Number(rows.delete(String(_id))) };
    },
  };
  const deps = {
    '@/lib/jobs': { ...helpers, getJobs: async () => collection },
    '@/lib/auth': {
      verifyToken: async request =>
        request.headers.get('cookie') === 'admin=yes' ? { role: 'admin' } : null,
    },
  };
  const root = load('app/api/jobs/route.ts', deps);
  const item = load('app/api/jobs/[id]/route.ts', deps);
  const adminHeaders = { cookie: 'admin=yes' };
  const create = body =>
    root.POST(
      new Request('http://localhost/api/jobs', {
        method: 'POST',
        headers: adminHeaders,
        body: JSON.stringify(body),
      }),
    );
  assert.equal(
    (
      await root.POST(
        new Request('http://localhost/api/jobs', { method: 'POST', body: JSON.stringify(payload) }),
      )
    ).status,
    401,
  );
  const first = (await (await create(payload)).json()).data;
  const second = (
    await (await create({ ...payload, title: 'Designer', status: 'inactive' })).json()
  ).data;
  const publicList = await (await root.GET(new Request('http://localhost/api/jobs'))).json();
  assert.equal(publicList.pagination.total, 1);
  assert.equal(publicList.data[0].id, first.id);
  assert.equal((await root.GET(new Request('http://localhost/api/jobs?scope=all'))).status, 401);
  const adminList = await (
    await root.GET(new Request('http://localhost/api/jobs?scope=all', { headers: adminHeaders }))
  ).json();
  assert.equal(adminList.pagination.total, 2);
  const context = { params: Promise.resolve({ id: second.id }) };
  assert.equal((await item.GET(new Request('http://localhost/api/jobs/one'), context)).status, 404);
  const updated = await item.PATCH(
    new Request('http://localhost/api/jobs/one', {
      method: 'PATCH',
      headers: adminHeaders,
      body: JSON.stringify({ status: 'active' }),
    }),
    context,
  );
  assert.equal((await updated.json()).data.status, 'active');
  assert.equal((await item.GET(new Request('http://localhost/api/jobs/one'), context)).status, 200);
  assert.equal(
    (await (await root.GET(new Request('http://localhost/api/jobs'))).json()).pagination.total,
    2,
  );
});
