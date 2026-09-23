'use client';

import React from 'react';

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
}

export default function DataTable<T>({
  columns,
  data,
  rowKey,
  emptyMessage = 'No data found',
}: DataTableProps<T>) {
  const getRowKey = (row: T) => {
    if (typeof rowKey === 'function') {
      return rowKey(row);
    }

    return String(row[rowKey]);
  };

  return (
    <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]'>
      <div className='custom-scrollbar overflow-x-auto'>
        <table className='w-full'>
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
              data.map(row => (
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
    </div>
  );
}
