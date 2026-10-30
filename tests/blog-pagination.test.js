/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads transpiled helper. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const ts = require('typescript');
const file = path.join(__dirname, '../lib/blogPagination.ts');
const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const moduleRef = { exports: {} };
vm.runInThisContext(`(function(module,exports){${code}\n})`, { filename: file })(
  moduleRef,
  moduleRef.exports,
);
const { getBlogPageNumbers, getBlogPagination } = moduleRef.exports;

test('shows all page buttons for small result sets', () => {
  assert.deepEqual(getBlogPageNumbers(1, 4), [1, 2, 3, 4]);
  assert.deepEqual(getBlogPageNumbers(1, 7), [1, 2, 3, 4, 5, 6, 7]);
});

test('uses ellipses only for real gaps', () => {
  assert.deepEqual(getBlogPageNumbers(5, 12), [1, 'ellipsis', 4, 5, 6, 'ellipsis', 12]);
  assert.deepEqual(getBlogPageNumbers(1, 10), [1, 2, 3, 'ellipsis', 10]);
});

test('clamps stale page after result count changes', () => {
  assert.deepEqual(getBlogPagination(5, 4, 9), {
    totalPages: 2,
    currentPage: 2,
    startIndex: 4,
    rangeStart: 5,
    rangeEnd: 5,
  });
  assert.deepEqual(getBlogPagination(0, 4, 3), {
    totalPages: 1,
    currentPage: 1,
    startIndex: 0,
    rangeStart: 0,
    rangeEnd: 0,
  });
});
