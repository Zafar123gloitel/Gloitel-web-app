'use client';

import BlogTable, { type BlogPost } from '@/components/admin/BlogTable';
import { BookOpen, Edit2, Clock, CheckCircle2, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'admin_blogs';

function StatCard({
  icon,
  label,
  value,
  trend,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  trend?: string;
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
      <div className='mt-3 flex items-baseline gap-2'>
        <p className='text-2xl font-bold text-white'>{value}</p>
        {trend && <span className='text-xs font-medium text-green-400'>↑ {trend}</span>}
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      setPosts(stored);
    } catch {
      setPosts([]);
    }
  }, []);

  function handleDelete(id: string) {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts;
    const q = search.toLowerCase();
    return posts.filter(
      p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
    );
  }, [posts, search]);

  const stats = useMemo(
    () => ({
      total: posts.length,
      drafts: posts.filter(p => p.status === 'draft').length,
      scheduled: posts.filter(p => p.status === 'scheduled').length,
      published: posts.filter(p => p.status === 'published').length,
    }),
    [posts],
  );

  return (
    <div className='space-y-6'>
      {/* Search bar */}
      <div className='relative max-w-md'>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search articles...'
          className='w-full rounded-lg border border-white/10 bg-[#111111] py-2.5 pr-4 pl-10 text-sm text-white placeholder-[#6b6b6b] outline-none focus:border-[#1447e6]/50'
        />
        <svg
          className='pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z'
          />
        </svg>
      </div>

      {/* Header row */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-white'>All Articles</h2>
          <p className='mt-0.5 text-sm text-[#969696]'>
            Manage, edit, and organize your content. Create impactful articles that inform and
            inspire.
          </p>
        </div>
        <Link
          href='/admin/blog/new'
          className='flex items-center gap-2 rounded-lg bg-[#1447e6] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80'
        >
          <Plus size={16} />
          Create Article
        </Link>
      </div>

      {/* Stats cards */}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <StatCard
          icon={<BookOpen size={18} className='text-white' />}
          label='Total Articles'
          value={stats.total}
          trend='12%'
          iconBg='bg-teal-500/20'
        />
        <StatCard
          icon={<Edit2 size={18} className='text-white' />}
          label='Drafts'
          value={stats.drafts}
          iconBg='bg-purple-500/20'
        />
        <StatCard
          icon={<Clock size={18} className='text-white' />}
          label='Scheduled'
          value={stats.scheduled}
          iconBg='bg-white/10'
        />
        <StatCard
          icon={<CheckCircle2 size={18} className='text-white' />}
          label='Published'
          value={stats.published}
          iconBg='bg-white/10'
        />
      </div>

      {/* Table */}
      <BlogTable posts={filteredPosts} onDelete={handleDelete} />
    </div>
  );
}
