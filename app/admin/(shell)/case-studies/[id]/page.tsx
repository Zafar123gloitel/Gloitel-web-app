'use client';

import { useApi } from '@/hooks/useApi';

import BlogEditor from '@/components/admin/Blogeditor';
import PageLoader from '@/components/PageLoader';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';

export default function CaseStudyEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';
  const {
    data: caseStudy,
    loading: isLoading,
    error,
    refetch,
  } = useApi<BlogPost>(isNew ? null : `/api/case-studies/${params.id}`);

  if (isNew) {
    return <BlogEditor mode='create' contentType='case-study' />;
  }

  if (isLoading || (caseStudy && caseStudy.id !== params.id)) {
    return <PageLoader />;
  }

  if (error || !caseStudy) {
    return (
      <div className='space-y-3 text-center'>
        <p role='alert' className='text-sm text-white'>
          {error || 'Case study not found.'}
        </p>
        <button onClick={() => void refetch()} className='text-sm text-[#5b8def]'>
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
