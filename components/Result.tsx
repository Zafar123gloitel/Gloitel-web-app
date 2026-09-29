'use client';

import { useEffect, useState } from 'react';

import StrategyBadge from '@/components/StrategyBadge';
import { BgSquare2 } from './BgSquare';
import { GlowButton } from './Button';
import GlowPanel from './GlowPanel';
import { MiddleSectionHeads } from './SectionHeads';
import AutoScroll from './AutoScroll';
import { LoadingSection } from './LoadingSection';

type CaseStudyCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const fallbackImage =
  'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png';

const Result = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudyCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadCaseStudies = async () => {
      try {
        setLoading(true);
        setError('');

        const studies: CaseStudyCard[] = [];

        let page = 1;
        let totalPages = 1;

        do {
          const response = await fetch(`/api/case-studies?page=${page}&limit=100`, {
            cache: 'no-store',
            signal: controller.signal,
          });

          const result = await response.json().catch(() => null);

          if (!response.ok || !result?.success || !Array.isArray(result.data)) {
            throw new Error(result?.message || 'Could not load case studies.');
          }

          studies.push(
            ...result.data.map(
              (study: {
                id: string;
                slug: string;
                category?: string;
                title: string;
                excerpt?: string;
                Description?: string;
                thumbnail?: string;
              }) => ({
                id: study.id,
                category: study.category || '',
                title: study.title,
                description: study.excerpt || study.Description || '',
                image: study.thumbnail || fallbackImage,
                href: `/resources/case-studies/${study.slug}`,
              }),
            ),
          );

          totalPages = result.pagination?.totalPages || 1;
          page++;
        } while (page <= totalPages);

        if (!controller.signal.aborted) {
          setCaseStudies(studies);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error instanceof Error ? error.message : 'Could not load case studies.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadCaseStudies();

    return () => controller.abort();
  }, []);

  return (
    <section className='relative isolate overflow-hidden py-0 pt-10 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />

        <div className='flex w-full flex-col items-center text-center sm:w-1/2 lg:w-1/2'>
          <StrategyBadge text='Results' />

          <MiddleSectionHeads
            SectionHead='Powering Your Success'
            SectionSubHead='With Intelligent Solutions!'
            SectionDescription='We focus on AI-driven innovation at every step. Our goal: measurable results that accelerate your growth.'
          />

          <GlowButton buttonText='Book a 15-min call' buttonLink='/contact' />
        </div>

        {loading ? (
          <LoadingSection />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <div className='mt-12 w-full'>
            <AutoScroll features={caseStudies} />
          </div>
        )}
      </div>

      <GlowPanel />
    </section>
  );
};

export default Result;
