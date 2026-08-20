'use client';

import React from 'react';
import {
  edtechHeroData,
  edtechChallengesSectionHead,
  edtechCTAData,
  edtechSolutionsSectionHead,
  edtechTechStackData,
  edtechChallengesData,
  edtechSolutionsData,
} from './data';
import HeroSection from '../../../components/HeroSection';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../components/ProblemCard';
import Image from 'next/image';
import { CardShowcase } from '../../../components';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';

const page = () => {
  return (
    <div>
      <HeroSection {...edtechHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={edtechChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={edtechChallengesSectionHead.title}
              SectionSubHead=' '
              SectionDescription={edtechChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className='-mt-20'>
          <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
            <Image
              src={edtechChallengesSectionHead.image}
              alt={edtechChallengesSectionHead.imageAlt}
              fill
              className='h-full w-full rounded-2xl bg-white object-cover'
              loading='lazy'
            />
          </div>

          <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {edtechChallengesData.map((item, index) => (
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
            <StrategyBadge text={edtechSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={edtechSolutionsSectionHead.title}
            SectionSubHead=''
            SectionDescription={edtechSolutionsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={edtechSolutionsData}
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
          badge={edtechTechStackData.badge}
          title={edtechTechStackData.title}
          description={edtechTechStackData.description}
          tabs={edtechTechStackData.tabs}
          technologies={edtechTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={edtechCTAData.badgeText}
          title={edtechCTAData.title}
          description={edtechCTAData.description}
          buttonText={edtechCTAData.badgeText}
          buttonLink={edtechCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
