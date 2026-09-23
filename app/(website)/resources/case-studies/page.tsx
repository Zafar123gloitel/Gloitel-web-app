'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, SearchIcon } from '@/components/SvgIcon';
import { useMemo, useState } from 'react';
import Execution_Plan from '@/uiComponents/Execution_Plan';
import { resourcesCTAData } from '../data';

const caseStudies = [
  {
    id: 'experteeth-dental-clinic',
    category: 'Healthcare',
    title: 'Experteeth Dental Clinic',
    description:
      'A modern dental website designed to improve patient trust, treatment discovery, and appointment booking.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    href: '/resources/case-studies/experteeth-dental-clinic',
  },
  {
    id: 'pathshala-academy',
    category: 'Education',
    title: 'Pathshala Academy',
    description:
      'A comprehensive learning platform to simplify class management and enhance student engagement.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/case-studies/pathshala-academy',
  },
  {
    id: 'gloitel-care',
    category: 'Healthcare',
    title: 'Gloitel Care',
    description:
      'A centralized healthcare management platform designed to streamline Mobile Medical Unit operations.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/case-studies/gloitel-care',
  },
  {
    id: 'nashamukti',
    category: 'Mobile App',
    title: 'NashaMukti',
    description:
      'A productivity platform to help teams manage tasks, collaborate, and deliver projects faster.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    href: '/resources/case-studies/nashamukti',
  },
  {
    id: 'bookmyq',
    category: 'SaaS',
    title: 'BookMyQ',
    description:
      'A comprehensive, highly scalable B2B SaaS platform that streamlines complex appointment scheduling, resource allocation, and daily operations.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/case-studies/bookmyq',
  },
  {
    id: 'smart-attendance',
    category: 'Enterprise',
    title: 'Smart Attendance',
    description:
      'A comprehensive, geo-aware attendance and HR management platform built to streamline workforce operations.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/case-studies/smart-attendance',
  },
  {
    id: 'smart-task',
    category: 'SaaS',
    title: 'Smart Task',
    description:
      'A comprehensive, Apple-inspired business management and employee collaboration platform.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    href: '/resources/case-studies/smart-task',
  },
  {
    id: 'gloitel-smart-tracking',
    category: 'SaaS',
    title: 'Gloitel Smart Tracking',
    description:
      'A comprehensive real-time fleet and workforce tracking platform that delivers actionable insights and operational visibility.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    href: '/resources/case-studies/gloitel-smart-tracking',
  },
  {
    id: 'skillmentor',
    category: 'Education',
    title: 'SkillMentor',
    description:
      'An online learning platform focused on career growth with expert-led courses and certifications.',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    href: '/resources/case-studies/skillmentor',
  },
];

const FILTERS = [
  'All Projects',
  'Healthcare',
  'Education',
  'Enterprise',
  'SaaS',
  'Mobile App',
  'Web Platform',
];

export default function CaseStudiesPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Projects');

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
  }, [query, activeFilter]);

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
          {FILTERS.map(filter => {
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
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {filteredCaseStudies.length > 0 ? (
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
          ) : (
            <div className='col-span-full rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-gray-400'>
              No case studies found for this search.
            </div>
          )}
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
