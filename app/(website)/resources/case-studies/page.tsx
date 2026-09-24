'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, SearchIcon } from '@/components/SvgIcon';
import { useEffect, useMemo, useState } from 'react';
import Execution_Plan from '@/uiComponents/Execution_Plan';
import { resourcesCTAData } from '../data';

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

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Projects');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    async function load() {
      try {
        const studies: CaseStudyCard[] = [];
        let page = 1;
        let totalPages = 1;
        do {
          const response = await fetch(`/api/case-studies?page=${page}&limit=100`, {
            cache: 'no-store',
            signal: controller.signal,
          });
          const result = await response.json().catch(() => null);
          if (!response.ok || !result?.success || !Array.isArray(result.data))
            throw new Error(result?.message || 'Could not load case studies.');
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
          totalPages = result.pagination.totalPages;
          page++;
        } while (page <= totalPages);
        if (!controller.signal.aborted) setCaseStudies(studies);
      } catch (error) {
        if (!controller.signal.aborted)
          setError(error instanceof Error ? error.message : 'Could not load case studies.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void load();
    return () => controller.abort();
  }, [retry]);

  const filters = useMemo(
    () => ['All Projects', ...new Set(caseStudies.map(study => study.category).filter(Boolean))],
    [caseStudies],
  );

  const filteredCaseStudies = useMemo(() => {
    let items = caseStudies;

    if (activeFilter !== 'All Projects') {
      items = items.filter(item => item.category === activeFilter);
    }

    if (query.trim()) {
      const search = query.toLowerCase();
      items = items.filter(
        item =>
          item.title.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search),
      );
    }

    return items;
  }, [caseStudies, query, activeFilter]);

  return (
    <main className='relative min-h-screen text-white'>
      {/* Fixed full-page video background */}
      <video
        className='fixed top-0 left-0 -z-10 h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          type='video/mp4'
        />
      </video>

      {/* Dark overlay for readability, also fixed so it covers the whole scroll */}
      <div className='fixed inset-0 -z-10 bg-black/60' />

      {/* Hero */}
      <section className='relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mt-5 mb-4 flex items-center justify-center gap-2 text-sm'>
            <Link href='/resources' className='text-white/55 transition hover:text-white'>
              Resources
            </Link>
            <span className='text-white/30'>›</span>
            <span className='text-white/85'>Case Study</span>
          </div>

          <h1 className='mt-5 text-4xl font-medium tracking-tight sm:text-5xl'>
            Real Projects. Measurable Impact.
          </h1>
          <p className='mt-4 text-sm leading-6 text-gray-400'>
            Explore how we partner with businesses across industries to design, build, and scale
            digital products that solve real problems and create lasting value.
          </p>

          <div className='mt-7 flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-gray-500 focus-within:border-white/25'>
            <input
              type='text'
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Search case study...'
              className='text-title w-full bg-transparent text-left text-lg placeholder:text-lg placeholder:text-gray-500 focus:outline-none'
            />
            <span className='ml-auto text-gray-400'>
              <SearchIcon size={25} />
            </span>
          </div>
        </div>

        {/* Filter pills */}
        <div className='mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3'>
          {filters.map(filter => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type='button'
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-[#1447e6] text-white'
                    : 'border border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/25 hover:text-white'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className='relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12'>
        {error && (
          <div role='alert' className='mb-6 text-sm text-red-400'>
            {error}{' '}
            <button onClick={() => setRetry(value => value + 1)} className='text-[#5b8def]'>
              Try again
            </button>
          </div>
        )}
        {loading && (
          <p role='status' className='mb-6 text-sm text-gray-400'>
            Loading case studies...
          </p>
        )}
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {!loading && filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className='group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition hover:border-white/20'
              >
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className='object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='space-y-3 p-5'>
                  <span className='inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-gray-300'>
                    {item.category}
                  </span>

                  <h2 className='text-lg leading-6 font-medium text-white'>{item.title}</h2>
                  <p className='text-sm leading-6 text-gray-400'>{item.description}</p>

                  <span className='flex items-center gap-1 pt-2 text-sm font-medium text-[#5b8def]'>
                    Read Case Study <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            ))
          ) : !loading && !error ? (
            <div className='col-span-full rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-gray-400'>
              No case studies found for this search.
            </div>
          ) : null}
        </div>
      </section>

      <Execution_Plan
        badgeText={resourcesCTAData.badgeText}
        title={resourcesCTAData.title}
        description={resourcesCTAData.description}
        buttonText={resourcesCTAData.buttonText}
        secondaryButton={resourcesCTAData.secondaryButton}
        buttonLink='/contact'
      />
    </main>
  );
}
