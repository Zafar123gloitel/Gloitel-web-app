'use client';

import {
  automationApproachSectionHead,
  phasedImplementationData,
  buildVsBuyData,
  processAutomationHeroData,
  processCategoriesData,
  processCategoriesSectionHead,
  processInventoryData,
  automationTechStackData,
  processAutomationCTAData,
  PhasedImplementation,
} from './data';
// import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
// import PurposeCard from "../../components/PurposeCard";
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';
import PurposeCard from '@/components/what-we-do/PurposeCard';

const page = () => {
  return (
    <div>
      <HeroSection {...processAutomationHeroData} />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={processCategoriesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={processCategoriesSectionHead.title}
              SectionSubHead=''
              SectionDescription={processCategoriesSectionHead.description}
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 sm:w-[80%]'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {processCategoriesData.map(item => (
              <PurposeCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className=''
              />
            ))}
          </div>
        </div>
      </section>

      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={automationApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={automationApproachSectionHead.title}
              SectionDescription={automationApproachSectionHead.description}
            />
          </div>
        </div>

        <section className='mx-auto -mt-40 gap-6 md:w-[90%]'>
          <Discover
            badgeText={processInventoryData.badgeText}
            title={processInventoryData.title}
            description={processInventoryData.description}
            buttonText={processInventoryData.buttonText}
            buttonLink={processInventoryData.buttonLink}
            image={processInventoryData.image}
            imageAlt={processInventoryData.imageAlt}
          />

          <Assess
            badgeText={phasedImplementationData.badgeText}
            title={phasedImplementationData.title}
            description={phasedImplementationData.description}
            buttonText={phasedImplementationData.buttonText}
            buttonLink={phasedImplementationData.buttonLink}
            image={phasedImplementationData.image}
            imageAlt={phasedImplementationData.imageAlt}
          />

          <Discover
            badgeText={buildVsBuyData.badgeText}
            title={buildVsBuyData.title}
            description={buildVsBuyData.description}
            buttonText={buildVsBuyData.buttonText}
            buttonLink={buildVsBuyData.buttonLink}
            image={buildVsBuyData.image}
            imageAlt={buildVsBuyData.imageAlt}
          />
          <Assess
            badgeText={PhasedImplementation.badgeText}
            title={PhasedImplementation.title}
            description={PhasedImplementation.description}
            buttonText={PhasedImplementation.buttonText}
            buttonLink={PhasedImplementation.buttonLink}
            image={PhasedImplementation.image}
            imageAlt={PhasedImplementation.imageAlt}
          />
        </section>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={automationTechStackData.badgeText}
          title={automationTechStackData.title}
          description={automationTechStackData.description}
          tabs={automationTechStackData.tabs}
          technologies={automationTechStackData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={processAutomationCTAData.badgeText}
        title={processAutomationCTAData.title}
        description={processAutomationCTAData.description}
        buttonText={processAutomationCTAData.buttonText}
        buttonLink={processAutomationCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
