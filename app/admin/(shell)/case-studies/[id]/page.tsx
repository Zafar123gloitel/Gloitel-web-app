'use client';

import BlogEditor from '@/components/admin/Blogeditor';
import type { BlogPost } from '@/components/admin/BlogTable';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'admin_case_studies';

export default function CaseStudyEditorPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isNew = params.id === 'new';
  const [caseStudy, setCaseStudy] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(!isNew);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (isNew) return;

    try {
      const caseStudies: BlogPost[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      const storedCaseStudy = caseStudies.find(item => item.id === params.id) ?? null;

      if (storedCaseStudy) {
        setCaseStudy(storedCaseStudy);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  }, [isNew, params.id]);

  if (isNew) {
    return <BlogEditor mode='create' contentType='case-study' />;
  }

  if (isLoading) {
    return <p className='text-sm text-[#969696]'>Loading...</p>;
  }

  if (notFound || !caseStudy) {
    return (
      <div className='space-y-3 text-center'>
        <p className='text-sm text-white'>Case study not found.</p>
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

  return <BlogEditor mode='edit' initialData={caseStudy} contentType='case-study' />;
}
