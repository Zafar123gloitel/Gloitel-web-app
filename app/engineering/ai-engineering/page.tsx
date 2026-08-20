'use client';

import React from 'react';
import EngineeringHeroSection from '@/components/EngineeringHeroSection';
import {
  aiEcosystemData,
  aiEngineeringCTAData,
  aiEngineeringHeroData,
  aiEngineeringNotData,
  aiSystemsData,
  aiSystemsSectionHead,
} from './data';
import { BgSquare2 } from '@/components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import { CardShowcase } from '@/components';
import GlowPanel from '@/components/GlowPanel';
// import Strategy from "../../(what-we-do)/components/Strategy";
import Execution_Plan from 'uiComponents/Execution_Plan';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div>
      <EngineeringHeroSection
        badgeText={aiEngineeringHeroData.badgeText}
        title={aiEngineeringHeroData.title}
        description={aiEngineeringHeroData.description}
        image={aiEngineeringHeroData.image}
        imageAlt={aiEngineeringHeroData.imageAlt}
        primaryButton={aiEngineeringHeroData.primaryButton}
        secondaryButton={aiEngineeringHeroData.secondaryButton}
      />

      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={aiSystemsSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiSystemsSectionHead.title}
              SectionDescription={aiSystemsSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={aiSystemsData}
              cardHeight='h-[300px]   max-w-[350px] '
              gridClassName='gap-y-28'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={aiEcosystemData.badge}
          title={aiEcosystemData.title}
          description={aiEcosystemData.description}
          tabs={aiEcosystemData.tabs}
          technologies={aiEcosystemData.technologies}
        />
      </section>
      <GlowPanel />
      <Strategy
        cardData={aiEngineeringNotData.items}
        SectionHead={aiEngineeringNotData.heading}
        SectionSubHead={' '}
        SectionDescription={aiEngineeringNotData.description}
        StrategyBadgeText={aiEngineeringNotData.badgeText}
      />
      <Execution_Plan
        badgeText={aiEngineeringCTAData.badgeText}
        title={aiEngineeringCTAData.title}
        description={aiEngineeringCTAData.description}
        buttonText={aiEngineeringCTAData.buttonText}
        buttonLink={aiEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
