'use client';

import BlogEditor from '@/components/admin/Blogeditor';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (isNew) return;
    const controller = new AbortController();
    setLoading(true);
    setError('');
    setPost(null);
    async function load() {
      try {
        const response = await fetch(`/api/blog/${params.id}`, {
          cache: 'no-store',
          signal: controller.signal,
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || !result?.success || !result.data) {
          throw new Error(result?.message || 'Could not load the article. Please try again.');
        }
        if (!controller.signal.aborted) setPost(result.data);
      } catch (error) {
        if (!controller.signal.aborted)
          setError(error instanceof Error ? error.message : 'Could not load the article.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [isNew, params.id, retry]);

  if (isNew) {
    return <BlogEditor key='new' mode='create' />;
  }

  if (loading || (post && post.id !== params.id)) {
    return <p className='text-sm text-[#969696]'>Loading...</p>;
  }

  if (error || !post) {
    return (
      <div className='space-y-3 text-center'>
        <p role='alert' className='text-sm text-white'>
          {error || 'Post not found.'}
        </p>
        <button onClick={() => setRetry(value => value + 1)} className='text-sm text-[#5b8def]'>
          Try again
        </button>
        <button
          onClick={() => router.push('/admin/blog')}
          className='text-sm font-medium text-[#5b8def] hover:underline'
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return <BlogEditor key={post.id} mode='edit' initialData={post} />;
}
