import React from 'react';
import TechScroll from './TechScroll';
import { GlowButton } from './Button';
import { BgSquare2 } from './BgSquare';
import { MiddleSectionHeads } from './SectionHeads';
import StrategyBadge from '@/components/StrategyBadge';

const LaunchYourSite = () => {
  return (
    <section className='relative isolate overflow-hidden py-0 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='flex w-full flex-col items-center text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          {/* <CenterBadge LaunchYourSiteBadge="Launch Your Site" /> */}
          <StrategyBadge text={'Launch Your Site'} />

          {/* Headings */}
          <MiddleSectionHeads
            SectionHead='The Trusted Rise Partner'
            SectionSubHead='For Startups And Agencies'
            SectionDescription='We leverage industry-leading platforms and tools to deliver cutting-edge AI, cloud, and data-driven solutions.'
          />

          <GlowButton buttonText='View About Gloitel' buttonlink='/about' />
        </div>

        {/* AutoScroll */}
        <div className='scrollbar-hide mt-12 w-full overflow-x-auto'>
          <TechScroll />
        </div>
      </div>
    </section>
  );
};

export default LaunchYourSite;
