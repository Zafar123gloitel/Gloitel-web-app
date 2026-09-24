'use client';

import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import JobApplicationsTable, { type JobApplication } from '@/components/admin/JobApplicationsTable';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

const initialPagination: Pagination = {
  page: 1,
  limit: 20,
  total: 0,
  totalPages: 0,
};

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { search } = useAdminSearch();

  /** Fetches one application page and keeps the table synchronized with the API. */
  const loadApplications = useCallback(async (page: number) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/career/apply?page=${page}&limit=20`, {
        cache: 'no-store',
      });
      const result = (await response.json()) as {
        success: boolean;
        message?: string;
        data?: JobApplication[];
        pagination?: Pagination;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to load job applications');
      }

      setApplications(result.data ?? []);
      setPagination(result.pagination ?? initialPagination);
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : 'Failed to load job applications',
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadApplications(1);
  }, [loadApplications]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return applications;

    return applications.filter(application =>
      [
        application.fullName,
        application.email,
        application.phone,
        application.location,
        application.status,
        application.jobDetail?.title,
        application.jobDetail?.department,
      ].some(value => value?.toLowerCase().includes(query)),
    );
  }, [applications, search]);

  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div>
          <h2 className='text-lg font-bold text-white'>Job Applications</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            {pagination.total} application{pagination.total !== 1 ? 's' : ''} received
          </p>
        </div>
        <button
          type='button'
          onClick={() => void loadApplications(pagination.page)}
          disabled={isLoading}
          className='inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-[#cccccc] transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50'
        >
          <RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {error ? (
        <div className='rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm text-red-400'>
          <p>{error}</p>
          <button
            type='button'
            onClick={() => void loadApplications(pagination.page)}
            className='mt-2 font-medium text-red-300 underline underline-offset-2'
          >
            Try again
          </button>
        </div>
      ) : isLoading ? (
        <div className='flex min-h-64 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f0f]'>
          <RefreshCw size={22} className='animate-spin text-[#5b8def]' />
        </div>
      ) : (
        <JobApplicationsTable applications={filteredApplications} />
      )}

      {!error && pagination.totalPages > 1 && (
        <div className='flex items-center justify-between'>
          <p className='text-xs text-[#969696]'>
            Page {pagination.page} of {pagination.totalPages}
          </p>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              onClick={() => void loadApplications(pagination.page - 1)}
              disabled={isLoading || pagination.page <= 1}
              className='rounded-lg border border-white/10 p-2 text-[#969696] transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
              aria-label='Previous page'
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type='button'
              onClick={() => void loadApplications(pagination.page + 1)}
              disabled={isLoading || pagination.page >= pagination.totalPages}
              className='rounded-lg border border-white/10 p-2 text-[#969696] transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40'
              aria-label='Next page'
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
