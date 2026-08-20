'use client';

// import The_Engineering from "../../(what-we-do)/components/The_Engineering";
import ProblemCard from '../../../components/ProblemCard';
import StrategyBadge from '../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import { MiddleSectionHeads } from 'components/SectionHeads';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  frontendDeliverablesData,
  frontendDeliverablesSectionHead,
  frontendEngineeringCTAData,
  frontendEngineeringDeepDiveData,
  frontendEngineeringHeroData,
  frontendTechStackData,
} from './data';
import The_Engineering from '@/components/what-we-do/The_Engineering';

export default function Page() {
  return (
    <div>
      {' '}
      <EngineeringHeroSection
        badgeText={frontendEngineeringHeroData.badgeText}
        title={frontendEngineeringHeroData.title}
        description={frontendEngineeringHeroData.description}
        image={frontendEngineeringHeroData.image}
        imageAlt={frontendEngineeringHeroData.imageAlt}
        primaryButton={frontendEngineeringHeroData.primaryButton}
        secondaryButton={frontendEngineeringHeroData.secondaryButton}
      />
      <section className='w-full'>
        <AI_Solutions
          badge={frontendTechStackData.badge}
          title={frontendTechStackData.title}
          description={frontendTechStackData.description}
          tabs={frontendTechStackData.tabs}
          technologies={frontendTechStackData.technologies}
        />
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={frontendDeliverablesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={frontendDeliverablesSectionHead.title}
              SectionDescription={frontendDeliverablesSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
          {frontendDeliverablesData.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.text}
              step
              number={index + 1}
              isLast={index === frontendDeliverablesData.length - 1}
            />
          ))}
        </section>
      </section>
      <section>
        <The_Engineering
          badgeText={frontendEngineeringDeepDiveData.badgeText}
          sectionHead={frontendEngineeringDeepDiveData.heading}
          sectionDescription={frontendEngineeringDeepDiveData.description}
          data={frontendEngineeringDeepDiveData.cards}
        />
      </section>
      <Execution_Plan
        badgeText={frontendEngineeringCTAData.badgeText}
        title={frontendEngineeringCTAData.title}
        description={frontendEngineeringCTAData.description}
        buttonText={frontendEngineeringCTAData.buttonText}
        buttonLink={frontendEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
}
