'use client';

import { InfoIcon } from 'components/SvgIcon';
// import HeroSection from "../../components/HeroSection";
import {
  buildingBlocksSectionHead,
  decompositionApproachSectionHead,
  domainDrivenDesignData,
  incrementalExtractionData,
  microservicesHeroData,
  antiCorruptionLayerData,
  signalsData,
  signalsSectionHead,
  buildingBlocksData,
  techStackSectionHead,
  techStackData,
  microservicesCTAData,
} from './data';
// import Strategy from "../../components/Strategy";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";
import ProblemCard from '../../../../components/ProblemCard';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div>
      <HeroSection {...microservicesHeroData} />
      <section>
        <Strategy
          cardData={signalsData}
          SectionHead={signalsSectionHead.title}
          SectionSubHead=''
          SectionDescription={signalsSectionHead.description}
          StrategyBadgeText={signalsSectionHead.badgeText}
        />
        <div
          className='mx-auto mt-5 mb-10 flex max-w-[75%] items-center gap-3 rounded-2xl border border-transparent p-3 sm:mt-0 md:-mt-5 lg:-mt-10'
          style={{
            background: `
      linear-gradient(#080B18, #080B18) padding-box,
      linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
    `,
          }}
        >
          <span className='inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#1447E633] text-2xl'>
            <InfoIcon className='h-5 w-5 text-blue-400' />
          </span>
          <p className='text-title text-[14px] sm:text-[16px]'>
            If these aren&apos;t your problems, a well-modularized monolith may serve you better.
          </p>
        </div>
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={decompositionApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={decompositionApproachSectionHead.title}
              SectionDescription={decompositionApproachSectionHead.description}
            />
          </div>
        </div>

        <section className='mx-auto -mt-40 gap-6 md:w-[90%]'>
          <Discover
            badgeText={domainDrivenDesignData.badgeText}
            title={domainDrivenDesignData.title}
            description={domainDrivenDesignData.description}
            buttonText={domainDrivenDesignData.buttonText}
            buttonLink={domainDrivenDesignData.buttonLink}
            image={domainDrivenDesignData.image}
            imageAlt={domainDrivenDesignData.imageAlt}
          />

          <Assess
            badgeText={incrementalExtractionData.badgeText}
            title={incrementalExtractionData.title}
            description={incrementalExtractionData.description}
            buttonText={incrementalExtractionData.buttonText}
            buttonLink={incrementalExtractionData.buttonLink}
            image={incrementalExtractionData.image}
            imageAlt={incrementalExtractionData.imageAlt}
          />

          <Discover
            badgeText={antiCorruptionLayerData.badgeText}
            title={antiCorruptionLayerData.title}
            description={antiCorruptionLayerData.description}
            buttonText={antiCorruptionLayerData.buttonText}
            buttonLink={antiCorruptionLayerData.buttonLink}
            image={antiCorruptionLayerData.image}
            imageAlt={antiCorruptionLayerData.imageAlt}
          />
        </section>
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={buildingBlocksSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={buildingBlocksSectionHead.title}
              SectionDescription={buildingBlocksSectionHead.description}
            />
          </div>
        </div>

        <section className='mx-auto -mt-20 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
          {buildingBlocksData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={techStackSectionHead.badgeText}
          title={techStackSectionHead.title}
          description={techStackSectionHead.description}
          tabs={techStackData.tabs}
          technologies={techStackData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={microservicesCTAData.badgeText}
        title={microservicesCTAData.title}
        description={microservicesCTAData.description}
        buttonText={microservicesCTAData.buttonText}
        buttonLink={microservicesCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
