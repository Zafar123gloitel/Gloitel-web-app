'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useApi } from '@/hooks/useApi';
import { useAdminSearch } from './AdminSearchContext';

export default function AdminHeader() {
  const pathname = usePathname();
  const { search, setSearch } = useAdminSearch();
  const { data: session } = useApi<{
    user?: { name?: string; role?: string };
  }>('/api/auth/verify');
  const adminName = session?.user?.name ?? 'Admin';
  const adminRole = session?.user?.role;
  const isCareerPage = pathname.startsWith('/admin/career');
  const isApplicationsPage = pathname.startsWith('/admin/job-applications');
  const isCaseStudiesPage = pathname.startsWith('/admin/case-studies');

  useEffect(() => {
    setSearch('');
  }, [pathname, setSearch]);

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between px-6 py-4 backdrop-blur-md'>
      {/* Search bar */}
      <div className='hidden w-120 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 sm:flex'>
        <Search size={14} className='text-[#969696]' />
        <input
          type='text'
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder={
            isApplicationsPage
              ? 'Search applications...'
              : isCaseStudiesPage
                ? 'Search case studies...'
                : isCareerPage
                  ? 'Search jobs...'
                  : 'Search articles...'
          }
          className='w-full bg-transparent text-sm text-white outline-none placeholder:text-[#969696]'
        />
      </div>

      {/* Right actions */}
      <div className='flex items-center gap-3'>
        {/* Profile Image */}
        <div className='flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1447e6]'>
          <Image
            src='https://placehold.co/800x520/png?text=Admin'
            width={40}
            height={40}
            alt={adminName}
            className='h-full w-full object-cover'
            unoptimized
            loading='lazy'
          />
        </div>

        {/* Name + Role */}
        <div className='flex flex-col'>
          <span className='text-sm font-semibold text-white'>{adminName}</span>

          <span className='text-xs text-[#969696]'>
            {adminRole ? adminRole.charAt(0).toUpperCase() + adminRole.slice(1) : 'Admin'}
          </span>
        </div>
      </div>
    </header>
  );
}
