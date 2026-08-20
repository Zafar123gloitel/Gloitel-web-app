'use client';

import React from 'react';
import {
  ecommerceHeroData,
  ecommerceChallengesData,
  ecommerceChallengesSectionHead,
  ecommerceCTAData,
  ecommerceSolutionsData,
  ecommerceSolutionsSectionHead,
  ecommerceTechStackData,
} from './data';
import HeroSection from '../../../components/HeroSection';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../components/ProblemCard';
import Image from 'next/image';
import { CardShowcase } from '../../../components';
import Execution_Plan from 'uiComponents/Execution_Plan';
import dynamic from 'next/dynamic';
import { LoadingSection } from 'components/LoadingSection';

const AI_Solutions = dynamic(() => import('uiComponents/AI_Solutions'), {
  loading: () => <LoadingSection minHeight='min-h-[500px]' />,
});

const page = () => {
  return (
    <div>
      <HeroSection {...ecommerceHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={ecommerceChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={ecommerceChallengesSectionHead.title}
              SectionSubHead=' '
              SectionDescription={ecommerceChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className='-mt-20'>
          <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
            <Image
              src={ecommerceChallengesSectionHead.image}
              alt={ecommerceChallengesSectionHead.imageAlt}
              fill
              className='h-full w-full rounded-2xl bg-white object-cover'
              loading='lazy'
            />
          </div>

          <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {ecommerceChallengesData.map((item, index) => (
              <ProblemCard key={index} title={item.text} />
            ))}
          </section>
        </div>
      </section>
      <div className='relative z-10 mx-auto mt-24 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text={ecommerceSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={ecommerceSolutionsSectionHead.title}
            SectionSubHead=''
            SectionDescription={ecommerceSolutionsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={ecommerceSolutionsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight='h-[411px] max-w-[411px] '
            gridClassName='gap-y-6'
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </div>

      <section>
        <AI_Solutions
          badge={ecommerceTechStackData.badge}
          title={ecommerceTechStackData.title}
          description={ecommerceTechStackData.description}
          tabs={ecommerceTechStackData.tabs}
          technologies={ecommerceTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={ecommerceCTAData.badgeText}
          title={ecommerceCTAData.title}
          description={ecommerceCTAData.description}
          buttonText={ecommerceCTAData.badgeText}
          buttonLink={ecommerceCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
