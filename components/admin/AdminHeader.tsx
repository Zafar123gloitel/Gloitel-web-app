'use client';

import { Bell, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/blog': 'Blog Management',
  '/admin/blog/new': 'New Blog Post',
  '/admin/career': 'Career Management',
  '/admin/career/new': 'New Job Listing',
};

export default function AdminHeader() {
  const pathname = usePathname() ?? '';

  // Match exact or prefix
  const title =
    pageTitles[pathname] ??
    Object.entries(pageTitles).find(([k]) => pathname.startsWith(k))?.[1] ??
    'Admin';

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]/80 px-6 py-4 backdrop-blur-md'>
      {/* Page title */}
      <div>
        <h1 className='text-base font-semibold text-white'>{title}</h1>
        <p className='text-xs text-[#969696]'>Gloitel Admin Panel</p>
      </div>

      {/* Right actions */}
      <div className='flex items-center gap-3'>
        {/* Search bar */}
        <div className='hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 sm:flex'>
          <Search size={14} className='text-[#969696]' />
          <input
            type='text'
            placeholder='Search...'
            className='w-40 bg-transparent text-sm text-white outline-none placeholder:text-[#969696]'
          />
        </div>

        {/* Notification bell */}
        <button className='relative rounded-lg border border-white/10 bg-white/5 p-2 text-[#969696] transition-colors hover:bg-white/10 hover:text-white'>
          <Bell size={16} />
          <span className='absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#1447e6]' />
        </button>

        {/* Avatar */}
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#1447e6] text-xs font-bold text-white'>
          A
        </div>
      </div>
    </header>
  );
}
