'use client';

import BlogTable, { type BlogPost } from '@/components/admin/BlogTable';
import { useAdminSearch } from '@/components/admin/AdminSearchContext';
import { BookOpen, Edit2, CheckCircle2, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

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
  const { search } = useAdminSearch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    async function load() {
      try {
        const posts: BlogPost[] = [];
        let page = 1;
        let totalPages = 1;
        do {
          const response = await fetch(`/api/blog?page=${page}&limit=100`, {
            cache: 'no-store',
            signal: controller.signal,
          });
          const result = await response.json().catch(() => null);
          if (!response.ok || !result?.success || !Array.isArray(result.data)) {
            throw new Error(result?.message || 'Could not load articles. Please try again.');
          }
          posts.push(...result.data);
          totalPages = result.pagination.totalPages;
          page++;
        } while (page <= totalPages);
        if (!controller.signal.aborted) setPosts(posts);
      } catch (error) {
        if (!controller.signal.aborted)
          setError(error instanceof Error ? error.message : 'Could not load articles.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [retry]);

  async function handleDelete(id: string) {
    setError('');
    try {
      const response = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Could not delete the article.');
      }
      setPosts(current => current.filter(post => post.id !== id));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Could not delete the article.');
    }
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

      {/* Table */}
      {error && (
        <div role='alert' className='space-y-2 text-sm text-red-400'>
          <p>{error}</p>
          <button onClick={() => setRetry(value => value + 1)} className='text-[#5b8def]'>
            Reload articles
          </button>
        </div>
      )}
      {loading ? (
        <p role='status' className='text-sm text-[#969696]'>
          Loading articles...
        </p>
      ) : (
        <BlogTable posts={filteredPosts} onDelete={handleDelete} />
      )}
    </div>
  );
}
