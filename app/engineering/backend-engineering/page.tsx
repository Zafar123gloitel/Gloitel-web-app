'use client';

import { CardShowcase } from '../../../components';
import StrategyBadge from '../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import { MiddleSectionHeads } from 'components/SectionHeads';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  backendAgentsData,
  backendAgentsSectionHead,
  backendEngineeringCTAData,
  backendEngineeringHeroData,
  backendTechStackData,
} from './data';

export default function Page() {
  return (
    <div>
      {' '}
      <EngineeringHeroSection
        badgeText={backendEngineeringHeroData.badgeText}
        title={backendEngineeringHeroData.title}
        description={backendEngineeringHeroData.description}
        image={backendEngineeringHeroData.image}
        imageAlt={backendEngineeringHeroData.imageAlt}
        primaryButton={backendEngineeringHeroData.primaryButton}
        secondaryButton={backendEngineeringHeroData.secondaryButton}
      />
      <section className='w-full'>
        <AI_Solutions
          badge={backendTechStackData.badge}
          title={backendTechStackData.title}
          description={backendTechStackData.description}
          tabs={backendTechStackData.tabs}
          technologies={backendTechStackData.technologies}
        />
      </section>
      <div className='relative z-10 mx-auto mt-24 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text={backendAgentsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={backendAgentsSectionHead.title}
            SectionSubHead=''
            SectionDescription={backendAgentsSectionHead.description}
          />
        </div>
        <section className='mx-auto -mt-5 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={backendAgentsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight='h-[311px] max-w-[411px] '
            gridClassName='gap-y-6'
            titleClassName='text-[28px]'
            descriptionClassName='text-[16px]'
          />
        </section>
      </div>
      <Execution_Plan
        badgeText={backendEngineeringCTAData.badgeText}
        title={backendEngineeringCTAData.title}
        description={backendEngineeringCTAData.description}
        buttonText={backendEngineeringCTAData.buttonText}
        buttonLink={backendEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
}
