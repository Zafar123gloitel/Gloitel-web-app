'use client';

// import HeroSection from "../../components/HeroSection";
import {
  auditPhaseData,
  executionPhaseData,
  handoffPhaseData,
  platformHeroSection,
  principlesData,
  roadmapPhaseData,
  scalingIndicators,
  scalingSolutions,
} from './data';
// import Strategy from "../../components/Strategy";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
// import PurposeCard from "../../components/PurposeCard";
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Business from '@/components/what-we-do/Business';
import Discover from '@/components/what-we-do/Discover';
import PurposeCard from '@/components/what-we-do/PurposeCard';
import Strategy from '@/components/what-we-do/Strategy';
// import Business from "../../components/Business";
// import Assess from "../../components/Assess";
// import Discover from "../../components/Discover";

const page = () => {
  return (
    <div>
      <HeroSection {...platformHeroSection} />
      <section>
        <Strategy
          cardData={scalingIndicators}
          SectionHead="Indicators that 
It's Time to Scale"
          SectionSubHead=''
          SectionDescription="As products evolve, the systems that once supported rapid growth can begin to slow it down. These indicators reveal when it's time  to scale intentionally."
          StrategyBadgeText="When You Know It's Time to Scale"
        />
      </section>
      <section>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='How we Help you Scale' />
            </span>
            <MiddleSectionHeads
              SectionHead='Engineering for the 
Next Stage of Growth'
              SectionSubHead=''
              SectionDescription='From infrastructure and databases to engineering processes, we focus 
on the areas that matter most for sustainable scale.'
            />
          </div>
        </div>

        <div className='mx-auto -mt-20 sm:w-[80%]'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {scalingSolutions.map(item => (
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
              <StrategyBadge text='Our Scaling Process' />
            </span>
            <MiddleSectionHeads
              SectionHead='A Structured Approach to Scaling'
              SectionDescription='We assess, prioritize, and execute improvements in phases—helping your platform scale without disrupting day-to-day operations.'
            />
          </div>
        </div>

        <section className='mx-auto -mt-40 gap-6 md:w-[80%] xl:w-[90%]'>
          <Discover
            badgeText={auditPhaseData.badgeText}
            title={auditPhaseData.title}
            description={auditPhaseData.description}
            buttonText={auditPhaseData.buttonText}
            buttonLink={auditPhaseData.buttonLink}
            image={auditPhaseData.image}
            imageAlt={auditPhaseData.imageAlt}
          />

          <Assess
            badgeText={roadmapPhaseData.badgeText}
            title={roadmapPhaseData.title}
            description={roadmapPhaseData.description}
            buttonText={roadmapPhaseData.buttonText}
            buttonLink={roadmapPhaseData.buttonLink}
            image={roadmapPhaseData.image}
            imageAlt={roadmapPhaseData.imageAlt}
          />

          <Discover
            badgeText={executionPhaseData.badgeText}
            title={executionPhaseData.title}
            description={executionPhaseData.description}
            buttonText={executionPhaseData.buttonText}
            buttonLink={executionPhaseData.buttonLink}
            image={executionPhaseData.image}
            imageAlt={executionPhaseData.imageAlt}
          />

          <Assess
            badgeText={handoffPhaseData.badgeText}
            title={handoffPhaseData.title}
            description={handoffPhaseData.description}
            buttonText={handoffPhaseData.buttonText}
            buttonLink={handoffPhaseData.buttonLink}
            image={handoffPhaseData.image}
            imageAlt={handoffPhaseData.imageAlt}
          />
        </section>
      </section>

      <Business
        badgeText='Research Deliverables'
        sectionHead='Outputs of the Research Process'
        sectionSubHead=''
        sectionDescription='A structured set of deliverables designed to capture insights, 
communicate findings, and provide clear direction for product and UX teams.'
        data={principlesData}
      />
      <Execution_Plan
        badgeText='Scale without Starting Over'
        title='Built for Today. Ready for Tomorrow.'
        description='Modernize the architecture, processes, and infrastructure your team depends on as complexity grows.'
        buttonText='Start with a Technical Audit'
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
