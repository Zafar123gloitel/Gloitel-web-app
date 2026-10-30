'use client';

import { Edit2, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DataTable, { type TableColumn } from './DataTable';

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  status: 'active' | 'inactive';
  createdAt: string;
  description: string;
}

interface CareerTableProps {
  jobs: JobListing[];
  onDelete: (id: string) => void;
  onToggleStatus: (job: JobListing) => void;
}

const typeColors: Record<JobListing['type'], string> = {
  'full-time': 'bg-blue-500/15 text-blue-400',
  'part-time': 'bg-purple-500/15 text-purple-400',
  contract: 'bg-orange-500/15 text-orange-400',
  internship: 'bg-pink-500/15 text-pink-400',
};
const statusColors = {
  active: 'bg-green-500/15 text-green-400',
  inactive: 'bg-red-500/15 text-red-400',
};

export default function CareerTable({ jobs, onDelete, onToggleStatus }: CareerTableProps) {
  const router = useRouter();
  if (jobs.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16 text-center'>
        <Plus size={20} className='mb-3 text-[#969696]' />
        <p className='text-sm font-medium text-white'>No job listings found</p>
        <Link
          href='/admin/career/new'
          className='mt-4 rounded-lg bg-[#1447e6] px-4 py-2 text-sm font-medium text-white'
        >
          New Job
        </Link>
      </div>
    );
  }

  const columns: TableColumn<JobListing>[] = [
    {
      key: 'title',
      label: 'Position',
      render: job => (
        <div>
          <p className='text-sm font-medium text-white'>{job.title}</p>
          <p className='mt-0.5 text-xs text-[#969696]'>
            {new Date(job.createdAt).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      className: 'hidden md:table-cell',
      headerClassName: 'hidden md:table-cell',
      render: job => <span className='text-sm text-[#969696]'>{job.department}</span>,
    },
    {
      key: 'location',
      label: 'Location',
      className: 'hidden lg:table-cell',
      headerClassName: 'hidden lg:table-cell',
      render: job => <span className='text-sm text-[#969696]'>{job.location}</span>,
    },
    {
      key: 'type',
      label: 'Type',
      render: job => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${typeColors[job.type]}`}
        >
          {job.type.replace('-', ' ')}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: job => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusColors[job.status]}`}
        >
          {job.status}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      className: 'text-right',
      headerClassName: 'text-right',
      render: job => (
        <div className='flex items-center justify-end gap-2'>
          <button
            type='button'
            onClick={() => onToggleStatus(job)}
            className='rounded-lg px-2 py-1.5 text-xs text-[#969696] hover:bg-white/5 hover:text-white'
            aria-label={`${job.status === 'active' ? 'Deactivate' : 'Activate'} ${job.title}`}
          >
            {job.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
          <button
            type='button'
            onClick={() => router.push(`/admin/career/new?id=${job.id}`)}
            className='rounded-lg p-1.5 text-[#969696] hover:bg-white/5 hover:text-white'
            aria-label={`Edit ${job.title}`}
          >
            <Edit2 size={14} />
          </button>
          <button
            type='button'
            onClick={() => onDelete(job.id)}
            className='rounded-lg p-1.5 text-[#969696] hover:bg-red-500/10 hover:text-red-400'
            aria-label={`Delete ${job.title}`}
          >
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ];
  return (
    <DataTable columns={columns} data={jobs} rowKey='id' emptyMessage='No job listings found' />
  );
}
