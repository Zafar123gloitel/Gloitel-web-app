'use client';
import { useMemo } from 'react';
import { useApiList } from './useApi';

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  category?: string;
  excerpt?: string;
  Description?: string;
  thumbnail?: string;
};
const fallbackImage =
  'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png';
export function useCaseStudies() {
  const query = useApiList<CaseStudy>('/api/case-studies');
  const caseStudies = useMemo(
    () =>
      query.data.map(study => ({
        id: study.id,
        category: study.category || '',
        title: study.title,
        description: study.excerpt || study.Description || '',
        image: study.thumbnail || fallbackImage,
        href: `/resources/case-studies/${study.slug}`,
      })),
    [query.data],
  );
  return { ...query, caseStudies };
}
