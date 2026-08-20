import Link from 'next/link';
import React from 'react';
import AutoScroll from './AutoScroll';
import { CenterBadge } from './Badge';
import { BgSquare1, BgSquare2 } from './BgSquare';
import { GlowButton } from './Button';
import { MiddleSectionHeads } from './SectionHeads';
import GlowPanel from './GlowPanel';
import StrategyBadge from '@/components/StrategyBadge';

const Result = () => {
  return (
    <section className='relative isolate overflow-hidden py-0 pt-10 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='flex w-full flex-col items-center text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          {/* <CenterBadge ResultsBadge="Results" /> */}
          <StrategyBadge text={'Results'} />
          <MiddleSectionHeads
            SectionHead='Powering Your Success'
            SectionSubHead='With Intelligent Solutions!'
            SectionDescription='We focus on AI-driven innovation at every step. Our goal: measurable results that accelerate your growth.'
          />
          <GlowButton buttonText='Book a 15-min call' buttonLink='/contact' />
        </div>

        {/* AutoScroll */}
        <div className='mt-12 w-full'>
          <AutoScroll />
        </div>
      </div>
      <GlowPanel />
    </section>
  );
};

export default Result;
