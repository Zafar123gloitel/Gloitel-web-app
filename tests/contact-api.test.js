/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled route module. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');

function load(deps) {
  const filename = path.join(__dirname, '../app/api/contact/route.ts');
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename })(
    name => deps[name] ?? require(name),
    module,
    module.exports,
  );
  return module.exports;
}

test('contact GET requires admin session and lists paginated submissions', async () => {
  const previousUri = process.env.MONGODB_URI;
  process.env.MONGODB_URI = 'mongodb://localhost/test';
  let connected = false;
  const rows = Array.from({ length: 3 }, (_, index) => ({
    _id: { toString: () => String(index + 1) },
    firstName: `Person ${index + 1}`,
    email: `person${index + 1}@example.com`,
    createdAt: new Date(2026, 0, index + 1),
  }));
  const collection = {
    find() {
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
        toArray() {
          return rows.slice(this.offset, this.offset + this.limitValue);
        },
      };
    },
    countDocuments: async () => rows.length,
  };
  const route = load({
    '@/lib/auth': {
      requireAuth: async request =>
        request.headers.get('cookie') === 'admin=yes'
          ? null
          : Response.json({ success: false }, { status: 401 }),
    },
    mongodb: {
      MongoClient: class {
        async connect() {
          connected = true;
          return this;
        }
        db() {
          return { collection: () => collection };
        }
      },
    },
  });
  assert.equal((await route.GET(new Request('http://localhost/api/contact'))).status, 401);
  assert.equal(connected, false);
  const response = await route.GET(
    new Request('http://localhost/api/contact?page=2&limit=2', {
      headers: { cookie: 'admin=yes' },
    }),
  );
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.data.length, 1);
  assert.equal(body.data[0].id, '3');
  assert.deepEqual(body.pagination, { page: 2, limit: 2, total: 3, totalPages: 2 });
  if (previousUri === undefined) delete process.env.MONGODB_URI;
  else process.env.MONGODB_URI = previousUri;
});
