'use client';

import React from 'react';
import {
  realEstateChallengesSectionHead,
  realEstateCTAData,
  realEstateSolutionsSectionHead,
  realEstateHeroData,
  realEstateChallengesData,
  realEstateSolutionsData,
} from './data';
import HeroSection from '../../../components/HeroSection';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../components/ProblemCard';
import Image from 'next/image';
import { CardShowcase } from '../../../components';
import Execution_Plan from 'uiComponents/Execution_Plan';

const page = () => {
  return (
    <div>
      <HeroSection {...realEstateHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={realEstateChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={realEstateChallengesSectionHead.title}
              SectionSubHead=' '
              SectionDescription={realEstateChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className='-mt-20'>
          <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
            <Image
              src={realEstateChallengesSectionHead.image}
              alt={realEstateChallengesSectionHead.imageAlt}
              fill
              className='h-full w-full rounded-2xl bg-white object-cover'
              loading='lazy'
            />
          </div>

          <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {realEstateChallengesData.map((item, index) => (
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
            <StrategyBadge text={realEstateSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={realEstateSolutionsSectionHead.title}
            SectionSubHead=''
            SectionDescription={realEstateSolutionsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={realEstateSolutionsData}
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
        <Execution_Plan
          badgeText={realEstateCTAData.badgeText}
          title={realEstateCTAData.title}
          description={realEstateCTAData.description}
          buttonText={realEstateCTAData.badgeText}
          buttonLink={realEstateCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
