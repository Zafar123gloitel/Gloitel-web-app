'use client';

import StrategyBadge from '../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import { MiddleSectionHeads } from 'components/SectionHeads';
import AI_Solutions from 'uiComponents/AI_Solutions';
import ArchitectureCircle from 'uiComponents/ArchitectureCircle';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  aiEcosystemData,
  aiEngineeringCTAData,
  fullStackComplianceData,
  fullStackComplianceSectionHead,
  iotHeroData,
} from './data';

export default function Page() {
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
      <EngineeringHeroSection
        badgeText={iotHeroData.badgeText}
        title={iotHeroData.title}
        description={iotHeroData.description}
        image={iotHeroData.image}
        imageAlt={iotHeroData.imageAlt}
        primaryButton={iotHeroData.primaryButton}
        secondaryButton={iotHeroData.secondaryButton}
      />
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={fullStackComplianceSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={fullStackComplianceSectionHead.title}
            SectionDescription={fullStackComplianceSectionHead.description}
          />
        </div>
      </div>

      <section className='-mt-40 mb-10 flex items-center'>
        <ArchitectureCircle
          data={fullStackComplianceData}
          image='/images/hrm.png'
          positions={positions}
        />
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
        badgeText={aiEngineeringCTAData.badgeText}
        title={aiEngineeringCTAData.title}
        description={aiEngineeringCTAData.description}
        buttonText={aiEngineeringCTAData.buttonText}
        buttonLink={aiEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
}
