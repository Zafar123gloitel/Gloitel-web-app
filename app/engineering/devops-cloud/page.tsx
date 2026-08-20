'use client';
import { CardShowcase } from '../../../components';
import StrategyBadge from '../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import { MiddleSectionHeads } from 'components/SectionHeads';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  aiEcosystemData,
  aiSystemsData,
  aiSystemsSectionHead,
  devOpsCloudCTAData,
  devOpsCloudHeroData,
} from './data';

export default function Page() {
  return (
    <div>
      <EngineeringHeroSection
        badgeText={devOpsCloudHeroData.badgeText}
        title={devOpsCloudHeroData.title}
        description={devOpsCloudHeroData.description}
        image={devOpsCloudHeroData.image}
        imageAlt={devOpsCloudHeroData.imageAlt}
        primaryButton={devOpsCloudHeroData.primaryButton}
        secondaryButton={devOpsCloudHeroData.secondaryButton}
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
      <Execution_Plan
        badgeText={devOpsCloudCTAData.badgeText}
        title={devOpsCloudCTAData.title}
        description={devOpsCloudCTAData.description}
        buttonText={devOpsCloudCTAData.buttonText}
        buttonLink={devOpsCloudCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
}
