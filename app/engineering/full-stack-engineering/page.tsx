'use client';

// import Business from "../../(what-we-do)/components/Business";
// import Strategy from "../../(what-we-do)/components/Strategy";
import Strategy from '@/components/what-we-do/Strategy';
import { BgSquare2 } from 'components/BgSquare';
import EngineeringHeroSection from 'components/EngineeringHeroSection';
import GlowPanel from 'components/GlowPanel';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ArchitectureCircle from 'uiComponents/ArchitectureCircle';
import Execution_Plan from 'uiComponents/Execution_Plan';
import StrategyBadge from '../../../components/StrategyBadge';
import {
  fullStackComplianceData,
  fullStackComplianceSectionHead,
  fullStackHeroData,
  fullStackRoadmapData,
  fullStackRoadmapSectionHead,
  WenToSpecializeData,
} from './data';
import ProblemCard from '@/components/ProblemCard';

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
            image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/Our_Full_Stack_Approach_ieyu74.png'
            positions={positions}
          />
        </section>
        <section>
          <section className='overflow-hidden py-12 lg:py-20'>
            <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
              <BgSquare2 />
              <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
                <span>
                  <StrategyBadge text={fullStackRoadmapSectionHead.badgeText} />
                </span>
                <MiddleSectionHeads
                  SectionHead={fullStackRoadmapSectionHead.title}
                  SectionDescription={fullStackRoadmapSectionHead.description}
                />
              </div>
            </div>

            <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
              {fullStackRoadmapData.map((item, index) => (
                <ProblemCard
                  key={index}
                  title={item.title}
                  step
                  number={index + 1}
                  isLast={index === fullStackRoadmapData.length - 1}
                />
              ))}
            </section>
          </section>
        </section>
        <GlowPanel />
        <Strategy
          cardData={WenToSpecializeData.items}
          SectionHead={WenToSpecializeData.heading}
          SectionSubHead={' '}
          SectionDescription={WenToSpecializeData.description}
          StrategyBadgeText={WenToSpecializeData.badgeText}
        />

        <section>
          <Execution_Plan
            badgeText='Ready to Build?'
            title='Build Your Product End to End'
            description='Bring frontend, backend, data, integrations, and deployment together with an engineering team that can own complete features from idea to production.'
            buttonText='Build Your Full Stack Product'
            buttonLink='/contact'
            onclick={() => ({})}
          />
        </section>
      </section>
    </div>
  );
}
