'use client';

import CareerTable, { type JobListing } from '@/components/admin/CareerTable';
import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import { Briefcase, ClipboardList, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function CareerPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [savedJobs, setSavedJobs] = useState<JobListing[]>([]);
  const [importing, setImporting] = useState(false);
  const { search } = useAdminSearch();

  async function loadJobs() {
    setLoading(true);
    setError('');
    try {
      const allJobs: JobListing[] = [];
      let page = 1;
      let totalPages = 1;
      do {
        const response = await fetch(`/api/jobs?scope=all&page=${page}&limit=100`, {
          cache: 'no-store',
        });
        const result = await response.json();
        if (!response.ok || !result?.success)
          throw new Error(result?.message || 'Failed to load jobs');
        allJobs.push(...(result.data ?? []));
        totalPages = result.pagination?.totalPages ?? 1;
        page += 1;
      } while (page <= totalPages);
      setJobs(allJobs);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadJobs();
    try {
      const stored = JSON.parse(localStorage.getItem('admin_jobs') ?? '[]');
      if (Array.isArray(stored)) setSavedJobs(stored);
    } catch {
      /* Ignore invalid old browser data. */
    }
  }, []);

  async function importSavedJobs() {
    setImporting(true);
    setError('');
    try {
      const remaining = [...savedJobs];
      for (const job of savedJobs) {
        const response = await fetch('/api/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...job, status: job.status === 'active' ? 'active' : 'inactive' }),
        });
        const result = await response.json();
        if (!response.ok || !result?.success)
          throw new Error(result?.message || 'Could not import job');
        remaining.shift();
        localStorage.setItem('admin_jobs', JSON.stringify(remaining));
        setSavedJobs([...remaining]);
      }
      await loadJobs();
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : 'Could not import saved jobs',
      );
    } finally {
      setImporting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Delete this job listing?')) return;
    try {
      const response = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (!response.ok || !result?.success)
        throw new Error(result?.message || 'Could not delete job');
      setJobs(current => current.filter(job => job.id !== id));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not delete job');
    }
  }

  async function handleToggleStatus(job: JobListing) {
    try {
      const response = await fetch(`/api/jobs/${job.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: job.status === 'active' ? 'inactive' : 'active' }),
      });
      const result = await response.json();
      if (!response.ok || !result?.success)
        throw new Error(result?.message || 'Could not update job');
      setJobs(current => current.map(item => (item.id === job.id ? result.data : item)));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not update job');
    }
  }

  const filteredJobs = useMemo(() => {
    const filteredByStatus =
      statusFilter === 'all' ? jobs : jobs.filter(job => job.status === statusFilter);
    if (!search.trim()) return filteredByStatus;
    const query = search.toLowerCase();
    return filteredByStatus.filter(
      job =>
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query),
    );
  }, [jobs, search, statusFilter]);

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

      {savedJobs.length > 0 && (
        <div className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4'>
          <p className='text-sm text-amber-100'>
            {savedJobs.length} job listing{savedJobs.length !== 1 ? 's' : ''} saved in this browser.
            Import them into the shared database.
          </p>
          <button
            type='button'
            onClick={() => void importSavedJobs()}
            disabled={importing}
            className='rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black disabled:opacity-50'
          >
            {importing ? 'Importing...' : 'Import saved jobs'}
          </button>
        </div>
      )}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Link
          href='/admin/career/new'
          className='flex items-center justify-between rounded-xl border border-white/10 bg-[#111111] p-5 transition-all hover:border-white/20'
        >
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#1447e6]/15'>
              <Briefcase size={18} className='text-[#1447e6]' />
            </div>
            <div>
              <p className='text-sm font-semibold text-white'>Create Job Listing</p>
              <p className='text-xs text-[#969696]'>Add a new role for applicants</p>
            </div>
          </div>
          <Plus size={16} className='text-[#969696]' />
        </Link>

        <Link
          href='/admin/job-applications'
          className='flex items-center justify-between rounded-xl border border-white/10 bg-[#111111] p-5 transition-all hover:border-white/20'
        >
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b8a6]/15'>
              <ClipboardList size={18} className='text-[#14b8a6]' />
            </div>
            <div>
              <p className='text-sm font-semibold text-white'>Applications</p>
              <p className='text-xs text-[#969696]'>View all submitted applications</p>
            </div>
          </div>
          <Plus size={16} className='text-[#969696]' />
        </Link>
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        {(['all', 'active', 'inactive'] as const).map(status => (
          <button
            key={status}
            type='button'
            onClick={() => setStatusFilter(status)}
            className={`rounded-lg px-3 py-2 text-sm capitalize ${statusFilter === status ? 'bg-[#1447e6] text-white' : 'border border-white/10 bg-white/5 text-[#969696] hover:text-white'}`}
          >
            {status}
          </button>
        ))}
        <button
          type='button'
          onClick={() => void loadJobs()}
          className='ml-auto text-sm text-[#969696] hover:text-white'
        >
          Refresh
        </button>
      </div>
      {error && (
        <p className='rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400'>
          {error}
        </p>
      )}
      {loading ? (
        <p className='text-sm text-[#969696]'>Loading jobs...</p>
      ) : (
        <CareerTable
          jobs={filteredJobs}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
}
