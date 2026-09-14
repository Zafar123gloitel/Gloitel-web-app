'use client';

import BlogEditor from '@/components/admin/Blogeditor';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'admin_blogs';

export default function BlogEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (isNew) return; // create mode, nothing to load

    try {
      const posts: BlogPost[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      const found = posts.find(p => p.id === params.id) ?? null;
      if (!found) {
        setNotFound(true);
      } else {
        setPost(found);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }, [isNew, params.id]);

  if (isNew) {
    return <BlogEditor mode='create' />;
  }

  if (loading) {
    return <p className='text-sm text-[#969696]'>Loading...</p>;
  }

  if (notFound || !post) {
    return (
      <div className='space-y-3 text-center'>
        <p className='text-sm text-white'>Post not found.</p>
        <button
          onClick={() => router.push('/admin/blog')}
          className='text-sm font-medium text-[#5b8def] hover:underline'
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return <BlogEditor mode='edit' initialData={post} />;
}
