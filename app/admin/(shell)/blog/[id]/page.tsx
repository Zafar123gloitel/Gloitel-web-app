'use client';

import { useApi } from '@/hooks/useApi';

import BlogEditor from '@/components/admin/Blogeditor';
import PageLoader from '@/components/PageLoader';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';

export default function BlogEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';

  const {
    data: post,
    loading: loading,
    error,
    refetch,
  } = useApi<BlogPost>(isNew ? null : `/api/blog/${params.id}`);

  if (isNew) {
    return <BlogEditor key='new' mode='create' />;
  }

  if (loading || (post && post.id !== params.id)) {
    return <PageLoader />;
  }

  if (error || !post) {
    return (
      <div className='space-y-3 text-center'>
        <p role='alert' className='text-sm text-white'>
          {error || 'Post not found.'}
        </p>
        <button onClick={() => void refetch()} className='text-sm text-[#5b8def]'>
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
