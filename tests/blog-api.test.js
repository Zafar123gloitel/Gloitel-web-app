/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled route modules. */
const { Request } = globalThis;
const { Buffer } = require('node:buffer');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const { ObjectId, MongoServerError } = require('mongodb');

// Load the actual TypeScript handlers with an in-memory collection, without Next or live credentials.
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

const cloudinaryMock = {
  CloudinaryService: {
    uploadMedia: async () => ({
      secure_url: 'https://res.cloudinary.com/test/image/upload/blog-thumbnail.png',
    }),
  },
};
const helpers = load('lib/blogs.ts', { '@/lib/cloudinary': cloudinaryMock });
const valid = {
  title: 'First blog',
  slug: 'first-blog',
  content: 'Hello',
  excerpt: 'Summary',
  thumbnail: 'data:image/png;base64,aGVsbG8=',
  banner: 'data:image/jpeg;base64,aGVsbG8=',
};

test('editor payload, defaults and server-owned fields', () => {
  const blog = helpers.validateBlog({
    ...valid,
    Description: 'Description',
    author: { name: 'Author' },
    id: 'untrusted',
    createdAt: 'untrusted',
    $set: {},
  });
  assert.equal(blog.status, 'draft');
  assert.equal(blog.Description, 'Description');
  assert.equal(blog.author.name, 'Author');
  assert.equal(blog.allowComments, true);
  assert.equal(blog.id, undefined);
  assert.equal(blog.createdAt, undefined);
  assert.equal(blog.$set, undefined);
});

test('invalid fields and incomplete published/scheduled blogs are rejected', () => {
  for (const body of [
    null,
    [],
    {},
    { ...valid, slug: '../bad' },
    { ...valid, status: 'unknown' },
    { ...valid, featured: 'yes' },
    { ...valid, author: [] },
    { ...valid, publishDate: 'bad' },
    { ...valid, status: 'scheduled' },
    { ...valid, status: 'published', content: '' },
    { ...valid, thumbnail: 'javascript:alert(1)' },
  ]) {
    assert.throws(() => helpers.validateBlog(body), helpers.BlogInputError);
  }
  assert.throws(() => helpers.validateBlog({}, true), helpers.BlogInputError);
  assert.deepEqual(helpers.validateBlog({ title: 'Updated' }, true), { title: 'Updated' });
  assert.throws(() => helpers.blogId('bad'), helpers.BlogInputError);
});

test('thumbnail accepts editor image data and enforces the 5 MB limit', () => {
  const thumbnail = 'data:image/png;base64,aGVsbG8=';
  assert.equal(helpers.validateBlog({ ...valid, thumbnail }).thumbnail, thumbnail);
  assert.throws(
    () =>
      helpers.validateBlog({
        ...valid,
        thumbnail: `data:image/png;base64,${Buffer.alloc(5 * 1024 * 1024 + 1).toString('base64')}`,
      }),
    helpers.BlogInputError,
  );
});

test('create, read, update, duplicate slug, delete and error responses', async () => {
  const rows = new Map();
  const collection = {
    async insertOne(blog) {
      if ([...rows.values()].some(row => row.slug === blog.slug))
        throw new MongoServerError({ code: 11000 });
      const _id = new ObjectId();
      rows.set(String(_id), { ...blog, _id });
      return { insertedId: _id };
    },
    async findOne({ _id }) {
      return rows.get(String(_id)) ?? null;
    },
    async findOneAndUpdate({ _id }, { $set }) {
      const blog = { ...rows.get(String(_id)), ...$set };
      rows.set(String(_id), blog);
      return blog;
    },
    async deleteOne({ _id }) {
      return { deletedCount: Number(rows.delete(String(_id))) };
    },
    async countDocuments(filter = {}) {
      return [...rows.values()].filter(row => !filter.status || row.status === filter.status)
        .length;
    },
    find(filter = {}) {
      const selected = [...rows.values()].filter(
        row => !filter.status || row.status === filter.status,
      );
      return {
        sort() {
          return this;
        },
        skip() {
          return this;
        },
        limit() {
          return this;
        },
        async toArray() {
          return selected;
        },
      };
    },
  };
  const deps = {
    '@/lib/blogs': { ...helpers, getBlogs: async () => collection },
    '@/lib/auth': {
      requireAuth: async request =>
        request.headers.get('cookie') === 'gloitel_admin_session=test-admin'
          ? null
          : Response.json(
              { success: false, message: 'Valid admin session required' },
              { status: 401 },
            ),
    },
    '@/lib/cloudinary': cloudinaryMock,
  };
  const root = load('app/api/blog/route.ts', deps);
  const item = load('app/api/blog/[id]/route.ts', deps);
  const request = body =>
    new Request('http://localhost/api/blog', {
      method: 'POST',
      headers: { cookie: 'gloitel_admin_session=test-admin' },
      body: JSON.stringify(body),
    });
  assert.equal(
    (
      await root.POST(
        new Request('http://localhost/api/blog', { method: 'POST', body: JSON.stringify(valid) }),
      )
    ).status,
    401,
  );
  const created = await root.POST(request(valid));
  assert.equal(created.status, 201);
  const { data } = await created.json();
  assert.equal(data.thumbnail, 'https://res.cloudinary.com/test/image/upload/blog-thumbnail.png');
  assert.equal(data.banner, 'https://res.cloudinary.com/test/image/upload/blog-thumbnail.png');
  const context = { params: Promise.resolve({ id: data.id }) };
  assert.equal((await root.POST(request(valid))).status, 409);
  const publicDraftList = await (await root.GET(new Request('http://localhost/api/blog'))).json();
  assert.equal(publicDraftList.pagination.total, 0);
  assert.equal((await root.GET(new Request('http://localhost/api/blog?scope=all'))).status, 401);
  assert.equal((await item.GET(request({}), context)).status, 200);
  const updated = await item.PATCH(request({ title: 'Updated', status: 'published' }), context);
  assert.equal(updated.status, 200);
  assert.equal((await updated.json()).data.content, valid.content);
  assert.equal((await item.PUT(request({ content: '' }), context)).status, 400);
  const listing = await (
    await root.GET(
      new Request('http://localhost/api/blog?scope=all&page=0&limit=999', {
        headers: { cookie: 'gloitel_admin_session=test-admin' },
      }),
    )
  ).json();
  assert.equal(listing.pagination.page, 1);
  assert.equal(listing.pagination.limit, 100);
  assert.equal(listing.pagination.total, 1);
  const publicPublishedList = await (
    await root.GET(new Request('http://localhost/api/blog'))
  ).json();
  assert.equal(publicPublishedList.data.length, 1);
  assert.equal((await item.DELETE(request({}), context)).status, 200);
  assert.equal((await item.GET(request({}), context)).status, 404);
  assert.equal((await item.PATCH(request({ title: 'Missing' }), context)).status, 404);
  assert.equal((await item.DELETE(request({}), context)).status, 404);
  assert.equal(
    (await item.GET(request({}), { params: Promise.resolve({ id: 'bad' }) })).status,
    400,
  );
  assert.equal(
    (
      await root.POST(
        new Request('http://localhost/api/blog', {
          method: 'POST',
          headers: { cookie: 'gloitel_admin_session=test-admin' },
          body: '{',
        }),
      )
    ).status,
    400,
  );
  const failing = load('app/api/blog/route.ts', {
    '@/lib/auth': deps['@/lib/auth'],
    '@/lib/blogs': {
      ...helpers,
      getBlogs: async () => {
        throw new Error('private database information');
      },
    },
  });
  const failure = await failing.POST(request(valid));
  assert.equal(failure.status, 500);
  assert.equal((await failure.json()).message, 'Blog request failed');
});
