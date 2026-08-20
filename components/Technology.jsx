import Link from 'next/link';
import React from 'react';
import { CenterBadge } from './Badge';
import { BgSquare3 } from './BgSquare';
import { MiddleSectionHeads } from './SectionHeads';
import { GlowButton } from './Button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import StrategyBadge from '@/components/StrategyBadge';

const Technology = () => {
  const stages = [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Next.js',
      stage: 'Stage 1',
      description:
        'Build ultra-fast, SEO-friendly web apps with Next.js – featuring SSR, static optimization, and powerful API routes.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp',
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'React Native',
      stage: 'Stage 2',
      description:
        'Build high-performance iOS & Android apps with one codebase using React Native — fast, efficient, and cross-platform.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp',
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Node.JS',
      stage: 'Stage 3',
      description:
        'Power your backend with Node.js — fast, scalable, and perfect for real-time data and high-performance APIs.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/node_z9ziqo.webp',
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'PostgreSQL',
      stage: 'Stage 4',
      description:
        'Supercharge data management with PostgreSQL — fast, scalable, and reliably open-source.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg',
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'GraphQL',
      stage: 'Stage 5',
      description:
        'Fetch only what you need with GraphQL — flexible queries for faster, more efficient apps.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/graph_v7lrwc.webp',
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Nest.JS',
      stage: 'Stage 6',
      description:
        'Build scalable, maintainable backends with NestJS — a TypeScript-ready, modular Node.js framework.',
      img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/nest_fxzqfx.webp',
    },
  ];

  return (
    <section className='relative isolate overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20'>
      <BgSquare3 />
      <div className='z-10 mx-auto flex max-w-7xl flex-col items-center justify-center'>
        {/* HEADER */}
        <div className='flex w-full flex-col items-center text-center sm:w-3/4 lg:w-1/2'>
          {/* Badge */}
          {/* <CenterBadge TechnologyBadge="Technology" /> */}
          <StrategyBadge text={'Technology'} />
          <MiddleSectionHeads
            SectionHead='Unlimited Design Features'
            SectionSubHead='AI-Powered Delivery!'
            SectionDescription='Get unlimited AI-powered design features, giving you the freedom to create without limits.'
          />

          {/* CTA */}
          <GlowButton buttonText='View About Gloitel' buttonlink='/about' />
        </div>

        {/* GRID */}
        <div className='mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {stages.map(item => (
            <Link
              key={item.id}
              href={'/contact'} // make sure each item has an href property
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur-md transition-transform sm:p-8'
            >
              {/* Gradient overlay */}
              <div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50'></div>
              <div className='pointer-events-none absolute -top-10 left-1/2 h-[80px] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/90 blur-[7px]' />

              {/* Stage header */}
              <div className='relative z-10 flex items-center justify-between'>
                <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] sm:h-10 sm:w-10'>
                  <Image
                    width={1920}
                    height={1080}
                    src={item.img}
                    alt=''
                    className='rounded-full'
                    unoptimized
                    loading='lazy'
                  />
                </div>

                {/* Arrow Icon with hover color change */}
                <ArrowUpRight className='text-description group-hover:text-title h-6 w-6 transition-colors duration-300' />
              </div>

              {/* Title */}
              <h3 className='text-md text-title relative z-10 my-4 font-semibold sm:my-6 sm:text-lg'>
                {item.title}
              </h3>

              <div className='relative z-10 my-3 h-px w-full bg-gradient-to-r from-white/10 to-transparent'></div>

              {/* Description */}
              <p className='relative z-10 text-sm leading-relaxed text-gray-400 sm:text-base'>
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
1;
