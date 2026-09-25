'use client';

import type { JobListing } from '@/components/admin/CareerTable';

import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DEPARTMENTS = ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations', 'HR', 'Finance'];

const JOB_TYPES: JobListing['type'][] = ['full-time', 'part-time', 'contract', 'internship'];

export default function NewCareerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL se id milegi
  const id = searchParams.get('id');

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: '',
    department: DEPARTMENTS[0],
    location: '',
    type: 'full-time' as JobListing['type'],
    status: 'active' as 'active' | 'inactive',
    description: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/jobs/${id}`, { cache: 'no-store' })
      .then(async response => {
        const result = await response.json();
        if (!response.ok || !result?.success)
          throw new Error(result?.message || 'Could not load job');
        const job: JobListing = result.data;
        setForm({
          title: job.title,
          department: job.department,
          location: job.location,
          type: job.type,
          status: job.status,
          description: job.description,
        });
      })
      .catch(requestError =>
        setError(requestError instanceof Error ? requestError.message : 'Could not load job'),
      );
  }, [id]);

  // --------------------------------------------------
  // Input change
  // --------------------------------------------------

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm(f => ({
      ...f,
      [name]: value,
    }));
  }

  // --------------------------------------------------
  // Create / Update
  // --------------------------------------------------

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    setError('');
    try {
      const response = await fetch(id ? `/api/jobs/${id}` : '/api/jobs', {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok || !result?.success)
        throw new Error(result?.message || 'Could not save job');
      router.push('/admin/career');
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not save job');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className='mx-auto max-w-2xl space-y-6'>
      {/* Back button */}

      <Link
        href='/admin/career'
        className='inline-flex items-center gap-2 text-sm text-[#969696] transition-colors hover:text-white'
      >
        <ArrowLeft size={16} />
        Back to Career
      </Link>

      {/* Heading */}

      <div>
        <h2 className='text-lg font-bold text-white'>
          {id ? 'Edit Job Listing' : 'New Job Listing'}
        </h2>

        <p className='mt-0.5 text-sm text-[#969696]'>
          {id
            ? 'Update the details for the job opening'
            : 'Fill in the details for the job opening'}
        </p>
      </div>

      {error && (
        <p className='rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400'>
          {error}
        </p>
      )}

      {/* Form */}

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='space-y-5 rounded-xl border border-white/10 bg-[#111111] p-6'>
          {/* Job Title */}

          <div>
            <label className='mb-2 block text-xs font-medium text-[#969696]'>
              Job Title <span className='text-red-400'>*</span>
            </label>

            <input
              type='text'
              name='title'
              value={form.title}
              onChange={handleChange}
              required
              placeholder='e.g. Senior Frontend Developer'
              className='w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
            />
          </div>

          {/* Department + Location */}

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>Department</label>

              <select
                name='department'
                value={form.department}
                onChange={handleChange}
                className='w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 py-2.5 text-sm text-white transition-all outline-none focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
              >
                {DEPARTMENTS.map(d => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>
                Location <span className='text-red-400'>*</span>
              </label>

              <input
                type='text'
                name='location'
                value={form.location}
                onChange={handleChange}
                required
                placeholder='e.g. Remote / Mumbai'
                className='w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
              />
            </div>
          </div>

          {/* Type + Status */}

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>Job Type</label>

              <select
                name='type'
                value={form.type}
                onChange={handleChange}
                className='w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 py-2.5 text-sm text-white capitalize transition-all outline-none focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
              >
                {JOB_TYPES.map(t => (
                  <option key={t} value={t}>
                    {t.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>Status</label>

              <select
                name='status'
                value={form.status}
                onChange={handleChange}
                className='w-full rounded-lg border border-white/10 bg-[#0f0f0f] px-4 py-2.5 text-sm text-white transition-all outline-none focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
              >
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
              </select>
            </div>
          </div>

          {/* Description */}

          <div>
            <label className='mb-2 block text-xs font-medium text-[#969696]'>
              Job Description <span className='text-red-400'>*</span>
            </label>

            <textarea
              name='description'
              value={form.description}
              onChange={handleChange}
              required
              rows={8}
              placeholder='Describe responsibilities, requirements, and what the candidate can expect...'
              className='w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:ring-1 focus:ring-[#1447e6]/30'
            />
          </div>
        </div>

        {/* Actions */}

        <div className='flex items-center justify-end gap-3'>
          <Link
            href='/admin/career'
            className='rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10'
          >
            Cancel
          </Link>

          <button
            type='submit'
            disabled={saving}
            className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80 disabled:opacity-60'
          >
            {saving ? (
              <>
                <span className='h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white' />
                Saving...
              </>
            ) : (
              <>
                <Save size={15} />
                {id ? 'Update Job' : 'Post Job'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
