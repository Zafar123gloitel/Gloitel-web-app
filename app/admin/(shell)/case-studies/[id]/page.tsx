'use client';

import BlogEditor from '@/components/admin/Blogeditor';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CaseStudyEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';
  const [caseStudy, setCaseStudy] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(!isNew);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (isNew) return;
    const controller = new AbortController();
    setIsLoading(true);
    setError('');
    setCaseStudy(null);
    async function load() {
      try {
        const response = await fetch(`/api/case-studies/${params.id}`, {
          cache: 'no-store',
          signal: controller.signal,
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || !result?.success || !result.data)
          throw new Error(result?.message || 'Could not load the case study.');
        if (!controller.signal.aborted) setCaseStudy(result.data);
      } catch (error) {
        if (!controller.signal.aborted)
          setError(error instanceof Error ? error.message : 'Could not load the case study.');
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [isNew, params.id, retry]);

  if (isNew) {
    return <BlogEditor mode='create' contentType='case-study' />;
  }

  if (isLoading || (caseStudy && caseStudy.id !== params.id)) {
    return <p className='text-sm text-[#969696]'>Loading...</p>;
  }

  if (error || !caseStudy) {
    return (
      <div className='space-y-3 text-center'>
        <p role='alert' className='text-sm text-white'>
          {error || 'Case study not found.'}
        </p>
        <button onClick={() => setRetry(value => value + 1)} className='text-sm text-[#5b8def]'>
          Try again
        </button>
        <button
          type='button'
          onClick={() => router.push('/admin/case-studies')}
          className='text-sm font-medium text-[#5b8def] hover:underline'
        >
          ← Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <BlogEditor key={caseStudy.id} mode='edit' initialData={caseStudy} contentType='case-study' />
  );
}
