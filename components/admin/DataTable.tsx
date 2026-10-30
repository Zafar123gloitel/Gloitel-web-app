'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export interface TableColumn<T> {
  key: string;
  label: string;
  className?: string;
  headerClassName?: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: keyof T | ((row: T) => string);
  emptyMessage?: string;
  pagination?: boolean;
  tableClassName?: string;
}

export default function DataTable<T>({
  columns,
  data,
  rowKey,
  emptyMessage = 'No data found',
  pagination = true,
  tableClassName = '',
}: DataTableProps<T>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const visibleRows = pagination ? data.slice(start, start + pageSize) : data;

  useEffect(() => {
    setPage(1);
  }, [data]);

  const getRowKey = (row: T) => {
    if (typeof rowKey === 'function') {
      return rowKey(row);
    }

    return String(row[rowKey]);
  };

  // Helper: generates page numbers with ellipsis for large page counts
  function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages: (number | 'ellipsis')[] = [1];

    if (current > 3) pages.push('ellipsis');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 2) pages.push('ellipsis');

    pages.push(total);
    return pages;
  }

  return (
    <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]'>
      <div className='custom-scrollbar overflow-x-auto'>
        <table className={`w-full ${tableClassName}`}>
          {/* Table Header */}
          <thead>
            <tr className='border-b border-white/10 bg-white/5'>
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase ${column.headerClassName ?? ''}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className='divide-y divide-white/5'>
            {data.length > 0 ? (
              visibleRows.map(row => (
                <tr key={getRowKey(row)} className='transition-colors hover:bg-white/[0.03]'>
                  {columns.map(column => (
                    <td key={column.key} className={`px-4 py-4 ${column.className ?? ''}`}>
                      {column.render
                        ? column.render(row)
                        : String(row[column.key as keyof T] ?? '—')}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className='px-4 py-10 text-center text-sm text-[#969696]'
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className='flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 py-3.5 text-xs text-[#969696]'>
          <div className='flex flex-wrap items-center gap-4'>
            <label className='flex items-center gap-2'>
              Rows per page
              <select
                value={pageSize}
                onChange={event => {
                  setPageSize(Number(event.target.value));
                  setPage(1);
                }}
                className='cursor-pointer rounded-md border border-white/10 bg-[#0f0f0f] px-2.5 py-1.5 text-white transition hover:border-white/20 focus:ring-1 focus:ring-blue-500/50 focus:outline-none'
              >
                {[10, 20, 50].map(size => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
            <span aria-live='polite' className='text-[#969696]'>
              <span className='text-white'>
                {data.length ? start + 1 : 0}–{Math.min(start + pageSize, data.length)}
              </span>{' '}
              of <span className='text-white'>{data.length}</span>
            </span>
          </div>

          <nav aria-label='Table pagination' className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => setPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label='Previous page'
              className='flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white transition hover:border-white/20 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent'
            >
              <ChevronLeft size={16} />
            </button>

            {getPageNumbers(currentPage, totalPages).map((item, index) =>
              item === 'ellipsis' ? (
                <span
                  key={`ellipsis-${index}`}
                  className='flex h-8 w-8 items-center justify-center text-[#969696]'
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type='button'
                  onClick={() => setPage(item)}
                  aria-current={item === currentPage ? 'page' : undefined}
                  className={`flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium transition ${
                    item === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'border border-white/10 text-white hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            <button
              type='button'
              onClick={() => setPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label='Next page'
              className='flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white transition hover:border-white/20 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent'
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
