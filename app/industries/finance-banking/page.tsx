'use client';

import React from 'react';
import {
  financeHeroData,
  financeChallengesData,
  financeChallengesSectionHead,
  financeComplianceData,
  financeComplianceSectionHead,
  financeCTAData,
  financeSolutionsData,
  financeSolutionsSectionHead,
} from './data';
import HeroSection from '../../../components/HeroSection';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../components/ProblemCard';
import Image from 'next/image';
import { CardShowcase } from '../../../components';
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
      <HeroSection {...financeHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={financeChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={financeChallengesSectionHead.title}
              SectionSubHead=' '
              SectionDescription={financeChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className='-mt-20'>
          <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
            <Image
              src={financeChallengesSectionHead.image}
              alt={financeChallengesSectionHead.imageAlt}
              fill
              className='h-full w-full rounded-2xl bg-white object-cover'
              loading='lazy'
            />
          </div>

          <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {financeChallengesData.map((item, index) => (
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
            <StrategyBadge text={financeSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={financeSolutionsSectionHead.title}
            SectionSubHead=''
            SectionDescription={financeSolutionsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={financeSolutionsData}
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
              <StrategyBadge text={financeComplianceSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={financeComplianceSectionHead.title}
              SectionDescription={financeComplianceSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-10 flex items-center'>
          <ArchitectureCircle
            data={financeComplianceData}
            image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056266/Gloitel/Industries/Compliance_Standards_We_Work_To22_ak2odb.png'
            positions={positions}
          />
        </section>
      </section>
      <section>
        <Execution_Plan
          badgeText={financeCTAData.badgeText}
          title={financeCTAData.title}
          description={financeCTAData.description}
          buttonText={financeCTAData.badgeText}
          buttonLink={financeCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
