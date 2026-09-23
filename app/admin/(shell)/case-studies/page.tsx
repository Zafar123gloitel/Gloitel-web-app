'use client';

import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import CaseStudyTable from '@/components/admin/CaseStudyTable';
import type { BlogPost } from '@/components/admin/BlogTable';
import { BookOpen, CheckCircle2, Edit2, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'admin_case_studies';

function StatCard({
  icon,
  label,
  value,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  iconBg: string;
}) {
  return (
    <div className='rounded-xl border border-white/10 bg-[#0f0f0f] p-5'>
      <div className='flex items-center gap-3'>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}>
          {icon}
        </div>
        <p className='text-sm text-[#969696]'>{label}</p>
      </div>
      <p className='mt-3 text-2xl font-bold text-white'>{value}</p>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<BlogPost[]>([]);
  const { search } = useAdminSearch();

  useEffect(() => {
    try {
      setCaseStudies(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'));
    } catch {
      setCaseStudies([]);
    }
  }, []);

  function handleDelete(id: string) {
    const updatedCaseStudies = caseStudies.filter(caseStudy => caseStudy.id !== id);
    setCaseStudies(updatedCaseStudies);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCaseStudies));
  }

  const filteredCaseStudies = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return caseStudies;

    return caseStudies.filter(
      caseStudy =>
        caseStudy.title.toLowerCase().includes(query) ||
        caseStudy.category.toLowerCase().includes(query),
    );
  }, [caseStudies, search]);

  const stats = useMemo(
    () => ({
      total: caseStudies.length,
      drafts: caseStudies.filter(caseStudy => caseStudy.status === 'draft').length,
      scheduled: caseStudies.filter(caseStudy => caseStudy.status === 'scheduled').length,
      published: caseStudies.filter(caseStudy => caseStudy.status === 'published').length,
    }),
    [caseStudies],
  );

  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div>
          <h2 className='text-2xl font-bold text-white'>Case Studies</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            Create and manage detailed stories about client challenges, solutions, and outcomes.
          </p>
        </div>
        <Link
          href='/admin/case-studies/new'
          className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80'
        >
          <Plus size={16} />
          Create Case Study
        </Link>
      </div>

      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <StatCard
          icon={<BookOpen size={18} className='text-white' />}
          label='Total Case Studies'
          value={stats.total}
          iconBg='bg-teal-500/20'
        />
        <StatCard
          icon={<Edit2 size={18} className='text-white' />}
          label='Drafts'
          value={stats.drafts}
          iconBg='bg-purple-500/20'
        />
        {/* <StatCard
          icon={<Clock size={18} className='text-white' />}
          label='Scheduled'
          value={stats.scheduled}
          iconBg='bg-white/10'
        /> */}
        <StatCard
          icon={<CheckCircle2 size={18} className='text-white' />}
          label='Published'
          value={stats.published}
          iconBg='bg-white/10'
        />
      </div>

      <CaseStudyTable
        posts={filteredCaseStudies}
        onDelete={handleDelete}
        basePath='/admin/case-studies'
      />
    </div>
  );
}
