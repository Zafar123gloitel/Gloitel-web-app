'use client';

// import HeroSection from "../../components/HeroSection";
import {
  cloudCoverageData,
  cloudCoverageSectionHead,
  cloudMigrationHeroData,
  cloudPlatformsData,
  migrationApproachData,
  migrationApproachSectionHead,
  migrationStrategySectionHead,
  migrationStrategySteps,
} from './data';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../../components';
import ProblemCard from '../../../../components/ProblemCard';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';

const page = () => {
  return (
    <div>
      <HeroSection {...cloudMigrationHeroData} />
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={migrationApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={migrationApproachSectionHead.title}
              SectionDescription={migrationApproachSectionHead.description}
            />
          </div>
        </div>
        <section className='mx-auto -mt-20 w-full sm:w-[90%]'>
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={migrationApproachData}
            cardHeight='h-[330px]  max-w-[330px] '
            gridClassName='gap-y-28'
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={cloudCoverageSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={cloudCoverageSectionHead.title}
              SectionDescription={cloudCoverageSectionHead.description}
            />
          </div>
        </div>

        <section className='mx-auto -mt-20 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
          {cloudCoverageData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={migrationStrategySectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={migrationStrategySectionHead.title}
              SectionDescription={migrationStrategySectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
          {migrationStrategySteps.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.title}
              step
              number={index + 1}
              isLast={index === migrationStrategySteps.length - 1}
            />
          ))}
        </section>
      </section>
      <section className='w-full'>
        <AI_Solutions
          badge={cloudPlatformsData.badge}
          title={cloudPlatformsData.title}
          description={cloudPlatformsData.description}
          tabs={cloudPlatformsData.tabs}
          technologies={cloudPlatformsData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText="Don't Just Move. Modernize."
        title='Build Better Than Before'
        description="Don't replicate yesterday's limitations. Design a cloud environment optimized for efficiency, flexibility, and future demands."
        buttonText='Start Your Cloud Migration'
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
