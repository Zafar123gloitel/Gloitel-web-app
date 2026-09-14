'use client';

import { Edit2, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  status: 'active' | 'closed';
  createdAt: string;
  description: string;
}

interface CareerTableProps {
  jobs: JobListing[];
  onDelete: (id: string) => void;
}

const typeColors: Record<JobListing['type'], string> = {
  'full-time': 'bg-blue-500/15 text-blue-400',
  'part-time': 'bg-purple-500/15 text-purple-400',
  contract: 'bg-orange-500/15 text-orange-400',
  internship: 'bg-pink-500/15 text-pink-400',
};

const statusColors = {
  active: 'bg-green-500/15 text-green-400',
  closed: 'bg-red-500/15 text-red-400',
};

export default function CareerTable({ jobs, onDelete }: CareerTableProps) {
  const router = useRouter();

  if (jobs.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16 text-center'>
        <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5'>
          <Plus size={20} className='text-[#969696]' />
        </div>
        <p className='text-sm font-medium text-white'>No job listings yet</p>
        <p className='mt-1 text-xs text-[#969696]'>Post your first opening to attract talent</p>
        <Link
          href='/admin/career/new'
          className='mt-4 rounded-lg bg-[#1447e6] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#1447e6]/80'
        >
          New Job
        </Link>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border border-white/10'>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-white/10 bg-white/5'>
            <th className='px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase'>
              Position
            </th>
            <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase md:table-cell'>
              Department
            </th>
            <th className='hidden px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase lg:table-cell'>
              Location
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase'>
              Type
            </th>
            <th className='px-4 py-3 text-left text-xs font-medium tracking-wider text-[#969696] uppercase'>
              Status
            </th>
            <th className='px-4 py-3 text-right text-xs font-medium tracking-wider text-[#969696] uppercase'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-white/5 bg-[#0f0f0f]'>
          {jobs.map(job => (
            <tr key={job.id} className='transition-colors hover:bg-white/[0.03]'>
              <td className='px-4 py-4'>
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
              </td>
              <td className='hidden px-4 py-4 md:table-cell'>
                <span className='text-sm text-[#969696]'>{job.department}</span>
              </td>
              <td className='hidden px-4 py-4 text-sm text-[#969696] lg:table-cell'>
                {job.location}
              </td>
              <td className='px-4 py-4'>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${typeColors[job.type]}`}
                >
                  {job.type.replace('-', ' ')}
                </span>
              </td>
              <td className='px-4 py-4'>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusColors[job.status]}`}
                >
                  {job.status}
                </span>
              </td>
              <td className='px-4 py-4'>
                <div className='flex items-center justify-end gap-2'>
                  <button
                    onClick={() => router.push(`/admin/career/new?id=${job.id}`)}
                    className='rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-white/5 hover:text-white'
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => onDelete(job.id)}
                    className='rounded-lg p-1.5 text-[#969696] transition-colors hover:bg-red-500/10 hover:text-red-400'
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
