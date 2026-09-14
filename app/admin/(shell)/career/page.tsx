'use client';

import CareerTable, { type JobListing } from '@/components/admin/CareerTable';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'admin_jobs';

export default function CareerPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      setJobs(stored);
    } catch {
      setJobs([]);
    }
  }, []);

  function handleDelete(id: string) {
    const updated = jobs.filter(j => j.id !== id);
    setJobs(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  return (
    <div className='space-y-6'>
      {/* Header row */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-bold text-white'>Job Listings</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            {jobs.length} listing{jobs.length !== 1 ? 's' : ''} total
          </p>
        </div>
        <Link
          href='/admin/career/new'
          className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80'
        >
          <Plus size={16} />
          New Job
        </Link>
      </div>

      {/* Table */}
      <CareerTable jobs={jobs} onDelete={handleDelete} />
    </div>
  );
}
