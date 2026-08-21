'use client';

// import Business from "../../(what-we-do)/components/Business";
// import Strategy from "../../(what-we-do)/components/Strategy";
import Business from '@/components/what-we-do/Business';
import Strategy from '@/components/what-we-do/Strategy';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import GlowPanel from 'components/GlowPanel';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ArchitectureCircle from 'uiComponents/ArchitectureCircle';
import Execution_Plan from 'uiComponents/Execution_Plan';
import StrategyBadge from '../../../components/StrategyBadge';
import { aiEngineeringNotData } from '../ai-engineering/data';
import {
  fullStackComplianceData,
  fullStackComplianceSectionHead,
  fullStackHeroData,
  fullStackRoadmapData,
  fullStackRoadmapSectionHead,
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
        badgeText={fullStackHeroData.badgeText}
        title={fullStackHeroData.title}
        description={fullStackHeroData.description}
        image={fullStackHeroData.image}
        imageAlt={fullStackHeroData.imageAlt}
        primaryButton={fullStackHeroData.primaryButton}
        secondaryButton={fullStackHeroData.secondaryButton}
      />
      <section className='overflow-hidden py-12 lg:py-20'>
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

        <section className='-mt-10 flex items-center'>
          <ArchitectureCircle
            data={fullStackComplianceData}
            image='/images/hrm.png'
            positions={positions}
          />
        </section>
        <section>
          <Business
            badgeText={fullStackRoadmapSectionHead.badgeText}
            sectionHead={fullStackRoadmapSectionHead.title}
            sectionSubHead=''
            sectionDescription={fullStackRoadmapSectionHead.description}
            data={fullStackRoadmapData}
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

        <section>
          <Execution_Plan
            badgeText='Production AI Starts with Integration'
            title='Turn AI Capabilities into 
Business Infrastructure'
            description='Deploy AI into products and enterprise systems with the infrastructure, safeguards, 
and monitoring required to scale confidently.'
            buttonText='Talk to Our Integration Team'
            buttonLink='/contact'
            onclick={() => ({})}
          />
        </section>
      </section>
    </div>
  );
}
