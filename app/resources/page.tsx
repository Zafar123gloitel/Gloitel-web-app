'use client';

import React from 'react';
import HeroSection from '../../components/HeroSection';
import {
  aiStrategySectionHead,
  enterpriseModernizationTagsData,
  integrationStabilityData,
  resourceCaseStudiesData,
  resourceCategoriesData,
  resourcesCTAData,
  resourcesHeroData,
  whoThisIsForSectionHead,
  whoThisIsForSectionHead2,
} from './data';
// import Assess from '../(what-we-do)/components/Assess';

import GlowPanel from 'components/GlowPanel';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../components/StrategyBadge';

import { MiddleSectionHeads } from 'components/SectionHeads';
// import PurposeCard from '../(what-we-do)/components/PurposeCard';

import ImageCard from 'components/ImageCard';
import { CardIcon, CardTitle } from '../../components';
import Execution_Plan from 'uiComponents/Execution_Plan';
import Assess from '@/components/what-we-do/Assess';
import PurposeCard from '@/components/what-we-do/PurposeCard';

const page = () => {
  const cardPositions = {
    'top-left': 'left-0 top-0 sm:left-4 sm:top-4',
    'top-right': 'right-0 top-0 sm:right-4 sm:top-4',
    'bottom-left': '-bottom-5 -left-5 sm:bottom-4 sm:left-4',
    'bottom-right': '-bottom-5 -right-5 sm:bottom-4 sm:right-4',
  };

  return (
    <div>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <HeroSection
          badgeText={resourcesHeroData.badgeText}
          image={resourcesHeroData.image}
          video={resourcesHeroData.video}
          imageAlt={resourcesHeroData.imageAlt}
          title={resourcesHeroData.title}
          description={resourcesHeroData.description}
          primaryButton={resourcesHeroData.primaryButton}
          secondaryButton={resourcesHeroData.secondaryButton}
          cardPositions={cardPositions}
          heroCards={resourceCategoriesData}
        />
      </div>
      <section className='font-dmSans relative isolate -mt-20 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <GlowPanel />
        <Assess
          badgeText={aiStrategySectionHead.badgeText}
          title={aiStrategySectionHead.title}
          description={aiStrategySectionHead.description}
          image={aiStrategySectionHead.image}
          imageAlt={aiStrategySectionHead.imageAlt}
        />
      </section>
      <section className='mb-10'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={whoThisIsForSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={whoThisIsForSectionHead.title}
              SectionSubHead=''
              SectionDescription={whoThisIsForSectionHead.description}
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 md:px-10'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {integrationStabilityData.map(item => (
              <PurposeCard
                key={item.id}
                image={'/images/megananu.png'}
                imageAlt={item.title}
                viewText='View Case Study'
                viewLink='view_case_studay'
                title={item.title}
                description={item.description}
                className=''
              />
            ))}
          </div>
        </div>
      </section>
      <div className='relative z-10 mx-auto mt-20 mb-10 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text={whoThisIsForSectionHead2.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={whoThisIsForSectionHead2.title}
            SectionSubHead='  '
            SectionDescription={whoThisIsForSectionHead2.description}
          />
        </div>
        <section className='mx-auto mt-20 flex flex-wrap justify-center gap-3 p-5'>
          {resourceCaseStudiesData.map(card => (
            <ImageCard
              key={card.id}
              cradClass={''}
              className={'w-full sm:w-[21rem]'}
              padding={'px-4'}
              cardtitle={card.title}
              carddescription={card.description}
              buttintext={card.buttonText}
              buttonurl={card.buttonLink}
              buttonicon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='transition-transform duration-300 group-hover:translate-x-1'
                  aria-hidden='true'
                >
                  <path d='M5 12h14' />
                  <path d='m13 6 6 6-6 6' />
                </svg>
              }
              image={card.image}
            />
          ))}
        </section>
      </div>
      <section className='mb-10'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={whoThisIsForSectionHead2.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={whoThisIsForSectionHead2.title}
              SectionSubHead=''
              SectionDescription={whoThisIsForSectionHead2.description}
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 md:px-10'>
          <div className='grid grid-cols-1 gap-4 p-5 md:grid-cols-2 xl:grid-cols-3'>
            {enterpriseModernizationTagsData.map(item => (
              <div
                key={item.id}
                className='flex items-center justify-between gap-3 rounded-2xl border border-[#c2c2c260] p-2'
              >
                <CardIcon className='h-10 w-10'>{item.icon}</CardIcon>
                <CardTitle className='text-md text-title text-nowrap md:text-lg'>
                  {item.label}
                </CardTitle>
                <CardIcon>{item.icons}</CardIcon>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Execution_Plan
        badgeText={resourcesCTAData.badgeText}
        title={resourcesCTAData.title}
        description={resourcesCTAData.description}
        buttonText={resourcesCTAData.buttonText}
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
