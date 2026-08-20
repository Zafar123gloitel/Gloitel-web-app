'use client';

// import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../../components';
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";

import {
  cxCoversData,
  cxCoversSectionHead,
  cxOptimizationCTAData,
  cxOptimizationHeroData,
  cxToolsData,
  designTestData,
  hypothesizeData,
  identifyOpportunitiesData,
  implementMonitorData,
  instrumentMeasureData,
  optimizationProcessSectionHead,
} from './data';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';

const page = () => {
  return (
    <div>
      <HeroSection {...cxOptimizationHeroData} />
      <section>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={cxCoversSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={cxCoversSectionHead.title}
              SectionSubHead=''
              SectionDescription={cxCoversSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-5 w-full px-6 sm:w-[90%] sm:px-0'>
            <CardShowcase
              items={cxCoversData}
              showDivider={true}
              showStepBadge={false}
              cardClassName='h-[411px] max-w-[350px] gap-y-6 '
              gridClassName='h-full'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={optimizationProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={optimizationProcessSectionHead.title}
              SectionDescription={optimizationProcessSectionHead.description}
            />
          </div>
        </div>

        <section className='mx-auto -mt-40 gap-6 md:w-[90%]'>
          <Discover
            badgeText={instrumentMeasureData.badgeText}
            title={instrumentMeasureData.title}
            description={instrumentMeasureData.description}
            buttonText={instrumentMeasureData.buttonText}
            buttonLink={instrumentMeasureData.buttonLink}
            image={instrumentMeasureData.image}
            imageAlt={instrumentMeasureData.imageAlt}
          />

          <Assess
            badgeText={identifyOpportunitiesData.badgeText}
            title={identifyOpportunitiesData.title}
            description={identifyOpportunitiesData.description}
            buttonText={identifyOpportunitiesData.buttonText}
            buttonLink={identifyOpportunitiesData.buttonLink}
            image={identifyOpportunitiesData.image}
            imageAlt={identifyOpportunitiesData.imageAlt}
          />

          <Discover
            badgeText={hypothesizeData.badgeText}
            title={hypothesizeData.title}
            description={hypothesizeData.description}
            buttonText={hypothesizeData.buttonText}
            buttonLink={hypothesizeData.buttonLink}
            image={hypothesizeData.image}
            imageAlt={hypothesizeData.imageAlt}
          />
          <Assess
            badgeText={designTestData.badgeText}
            title={designTestData.title}
            description={designTestData.description}
            buttonText={designTestData.buttonText}
            buttonLink={designTestData.buttonLink}
            image={designTestData.image}
            imageAlt={designTestData.imageAlt}
          />
          <Discover
            badgeText={implementMonitorData.badgeText}
            title={implementMonitorData.title}
            description={implementMonitorData.description}
            buttonText={implementMonitorData.buttonText}
            buttonLink={implementMonitorData.buttonLink}
            image={implementMonitorData.image}
            imageAlt={implementMonitorData.imageAlt}
          />
        </section>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={cxToolsData.badge}
          title={cxToolsData.title}
          description={cxToolsData.description}
          tabs={cxToolsData.tabs}
          technologies={cxToolsData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={cxOptimizationCTAData.badgeText}
        title={cxOptimizationCTAData.title}
        description={cxOptimizationCTAData.description}
        buttonText={cxOptimizationCTAData.buttonText}
        buttonLink={cxOptimizationCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
