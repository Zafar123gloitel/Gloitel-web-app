'use client';

import CareerTable, { type JobListing } from '@/components/admin/CareerTable';
import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'admin_jobs';

export default function CareerPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const { search } = useAdminSearch();

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

  const filteredJobs = useMemo(() => {
    if (!search.trim()) return jobs;
    const query = search.toLowerCase();
    return jobs.filter(
      job =>
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query),
    );
  }, [jobs, search]);

  return (
    <div className='space-y-6'>
      {/* Header row */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-bold text-white'>Job Listings</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            {filteredJobs.length} listing{filteredJobs.length !== 1 ? 's' : ''} total
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
      <CareerTable jobs={filteredJobs} onDelete={handleDelete} />
    </div>
  );
}
