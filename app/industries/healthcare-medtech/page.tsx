'use client';

import React from 'react';
import {
  healthcareChallengesData,
  healthcareChallengesSectionHead,
  healthcareComplianceData,
  healthcareComplianceSectionHead,
  healthcareCTAData,
  healthcareHeroData,
  healthcareSolutionsData,
  healthcareSolutionsSectionHead,
  healthcareTechStackData,
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
import ArchitectureCircle from 'uiComponents/ArchitectureCircle';

const page = () => {
  const positions = {
    top: 'lg:top-2 lg:left-1/2 lg:-translate-x-1/2',
    leftTop: 'lg:left-8 xl:left-24 2xl:left-40 lg:top-52',
    rightTop: 'lg:right-8 xl:right-24 2xl:right-40 lg:top-52',
    leftBottom: 'lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52',
    bottom: 'lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2',
    rightBottom: 'lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52',
  };
  return (
    <div>
      <HeroSection {...healthcareHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={healthcareChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={healthcareChallengesSectionHead.title}
              SectionSubHead=' '
              SectionDescription={healthcareChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className='-mt-20'>
          <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
            <Image
              src={healthcareChallengesSectionHead.image}
              alt={healthcareChallengesSectionHead.imageAlt}
              fill
              className='h-full w-full rounded-2xl bg-white object-cover'
              loading='lazy'
            />
          </div>

          <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {healthcareChallengesData.map((item, index) => (
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
            <StrategyBadge text={healthcareSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={healthcareSolutionsSectionHead.title}
            SectionSubHead=''
            SectionDescription={healthcareSolutionsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={healthcareSolutionsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight='h-[411px] max-w-[411px] '
            gridClassName='gap-y-6'
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </div>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={healthcareComplianceSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={healthcareComplianceSectionHead.title}
              SectionDescription={healthcareComplianceSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-10 flex items-center'>
          <ArchitectureCircle
            data={healthcareComplianceData}
            image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056266/Gloitel/Industries/Compliance_Standards_We_Work_To_v1ewu9.png'
            positions={positions}
          />
          ;
        </section>
      </section>
      <section>
        <AI_Solutions
          badge={healthcareTechStackData.badge}
          title={healthcareTechStackData.title}
          description={healthcareTechStackData.description}
          tabs={healthcareTechStackData.tabs}
          technologies={healthcareTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={healthcareCTAData.badgeText}
          title={healthcareCTAData.title}
          description={healthcareCTAData.description}
          buttonText={healthcareCTAData.badgeText}
          buttonLink={healthcareCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
