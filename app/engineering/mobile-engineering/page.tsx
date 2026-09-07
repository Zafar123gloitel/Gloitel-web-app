'use client';
// import Business from "../../(what-we-do)/components/Business";
// import PurposeCard from "../../(what-we-do)/components/PurposeCard";
import StrategyBadge from '../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import { MiddleSectionHeads } from 'components/SectionHeads';
import EngineeringArchitecture from 'uiComponents/EngineeringArchitecture';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  architectureData,
  mobileAgentsSectionHead,
  mobileEngineeringCTAData,
  mobileEngineeringHeroData,
  mobileProcessData,
  mobileProcessSectionHead,
  mobileRoadmapData,
  mobileRoadmapSectionHead,
} from './data';
import PurposeCard from '@/components/what-we-do/PurposeCard';
import ProblemCard from '@/components/ProblemCard';
import { frontendDeliverablesData } from '../frontend-engineering/data';

export default function Page() {
  const architecturePositions = {
    leftTop: 'lg:left-8 xl:left-24 2xl:left-30 lg:-top-90',
    rightTop: 'lg:right-8 xl:right-24 2xl:right-40 lg:-top-90',
    leftBottom: 'lg:left-8 xl:left-24 2xl:left-30 lg:-bottom-90',
    rightBottom: 'lg:right-8 xl:right-24 2xl:right-40 lg:-bottom-90',
  };
  return (
    <div>
      <EngineeringHeroSection
        badgeText={mobileEngineeringHeroData.badgeText}
        title={mobileEngineeringHeroData.title}
        description={mobileEngineeringHeroData.description}
        image={mobileEngineeringHeroData.image}
        imageAlt={mobileEngineeringHeroData.imageAlt}
        primaryButton={mobileEngineeringHeroData.primaryButton}
        secondaryButton={mobileEngineeringHeroData.secondaryButton}
      />
      <section className='-mt-10 flex items-center'>
        <EngineeringArchitecture
          image='/images/iPhone 16 Plus Dark.png'
          imageWidth='w-[260px]'
          imageHeight='h-[760px]'
          cardWidth='w-[320px]'
          positions={architecturePositions}
          data={architectureData}
          titledata={mobileAgentsSectionHead}
        />
      </section>
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={mobileProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={mobileProcessSectionHead.title}
              SectionSubHead=''
              SectionDescription={mobileProcessSectionHead.description}
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 sm:w-[80%]'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {mobileProcessData.map(item => (
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
      <section>
        <section className='overflow-hidden py-12 lg:py-20'>
          <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
            <BgSquare2 />
            <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
              <span>
                <StrategyBadge text={mobileRoadmapSectionHead.badgeText} />
              </span>
              <MiddleSectionHeads
                SectionHead={mobileRoadmapSectionHead.title}
                SectionDescription={mobileRoadmapSectionHead.description}
              />
            </div>
          </div>

          <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
            {mobileRoadmapData.map((item, index) => (
              <ProblemCard
                key={index}
                title={item.title}
                step
                number={index + 1}
                isLast={index === frontendDeliverablesData.length - 1}
              />
            ))}
          </section>
        </section>
      </section>

      <section>
        <Execution_Plan
          badgeText={mobileEngineeringCTAData.badgeText}
          title={mobileEngineeringCTAData.title}
          description={mobileEngineeringCTAData.description}
          buttonText={mobileEngineeringCTAData.buttonText}
          buttonLink={mobileEngineeringCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
}
