'use client';

// import Business from "../../(what-we-do)/components/Business";
// import PurposeCard from "../../(what-we-do)/components/PurposeCard";
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
} from '../frontend-engineering/data';
import { fullStackHeroData } from '../full-stack-engineering/data';
import {
  mobileEngineeringCTAData,
  mobileProcessData,
  mobileProcessSectionHead,
  mobileRoadmapData,
  mobileRoadmapSectionHead,
} from '../mobile-engineering/data';
import { aiEcosystemData } from '../qa-engineering/data';
import {
  businessAnalysisCTAData,
  businessAnalysisDeliverablesData,
  businessAnalysisDeliverablesSectionHead,
  businessAnalysisEcosystemData,
  businessAnalysisHeroData,
  businessAnalysisProcessData,
  businessAnalysisProcessSectionHead,
} from './data';
import PurposeCard from '@/components/what-we-do/PurposeCard';

export default function Page() {
  return (
    <div>
      <EngineeringHeroSection
        badgeText={businessAnalysisHeroData.badgeText}
        title={businessAnalysisHeroData.title}
        description={businessAnalysisHeroData.description}
        image={businessAnalysisHeroData.image}
        imageAlt={businessAnalysisHeroData.imageAlt}
        primaryButton={businessAnalysisHeroData.primaryButton}
        secondaryButton={businessAnalysisHeroData.secondaryButton}
      />
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={businessAnalysisProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={businessAnalysisProcessSectionHead.title}
              SectionSubHead=''
              SectionDescription={businessAnalysisProcessSectionHead.description}
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 sm:w-[80%]'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {businessAnalysisProcessData.map(item => (
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
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={businessAnalysisDeliverablesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={businessAnalysisDeliverablesSectionHead.title}
              SectionDescription={businessAnalysisDeliverablesSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
          {businessAnalysisDeliverablesData.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.text}
              step
              number={index + 1}
              isLast={index === businessAnalysisDeliverablesData.length - 1}
            />
          ))}
        </section>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={businessAnalysisEcosystemData.badge}
          title={businessAnalysisEcosystemData.title}
          description={businessAnalysisEcosystemData.description}
          tabs={businessAnalysisEcosystemData.tabs}
          technologies={businessAnalysisEcosystemData.technologies}
        />
      </section>

      <section>
        <Execution_Plan
          badgeText={businessAnalysisCTAData.badgeText}
          title={businessAnalysisCTAData.title}
          description={businessAnalysisCTAData.description}
          buttonText={businessAnalysisCTAData.buttonText}
          buttonLink={businessAnalysisCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
}
