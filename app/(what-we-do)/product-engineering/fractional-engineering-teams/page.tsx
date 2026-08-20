'use client';

// import HeroSection from "../../components/HeroSection";
import {
  fractionalTeamHeroData,
  showcaseItems2,
  podsData,
  integrationPrinciplesData,
  teamValuesData,
  teamSectionHead,
  scaleReadinessIndicators,
  scaleReadinessSectionHead,
} from './data';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
// import PodCard from "../../components/PodCard";
import { CardShowcase } from '../../../../components';
// import Business from "../../components/Business";
// import Strategy from "../../components/Strategy";
import Execution_Plan from 'uiComponents/Execution_Plan';
import HeroSection from '@/components/HeroSection';
import Business from '@/components/what-we-do/Business';
import PodCard from '@/components/what-we-do/PodCard';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <HeroSection {...fractionalTeamHeroData} />

      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='What a Fractional Engineering Team Is' />
            </span>
            <MiddleSectionHeads
              SectionHead='Dedicated Engineers. Embedded Execution.'
              SectionDescription='Dedicated engineers who integrate into your workflows, collaborate with your team, and deliver consistently without the overhead of traditional hiring.'
            />
          </div>
        </div>
        <section className='mx-auto -mt-20 w-full sm:w-[90%]'>
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={showcaseItems2}
            cardHeight='h-[263px]  max-w-[330px] '
            gridClassName='h-full gap-y-30 '
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </section>

      <section className='overflow-hidden px-10'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='Our Approach' />
            </span>
            <MiddleSectionHeads
              SectionHead='Diagnose Before You Deploy'
              SectionDescription='We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap.'
            />
          </div>
        </div>
        <section className='mx-auto -mt-20 w-full sm:w-[90%]'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {podsData.map((pod, i) => (
              <PodCard key={i} {...pod} />
            ))}
          </div>
        </section>
      </section>
      <Business
        badgeText='How We Integrate with Your Team'
        sectionHead='Working as One Team, Not an External Vendor'
        sectionSubHead=''
        sectionDescription='From onboarding to reporting, our engineers integrate directly into your workflow to ensure fast collaboration, clear communication, and consistent delivery.'
        data={integrationPrinciplesData}
      />
      <section>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={teamSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={teamSectionHead.title}
              SectionSubHead=''
              SectionDescription={teamSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-5 w-full px-6 sm:w-[90%] sm:px-0'>
            <CardShowcase
              items={teamValuesData}
              showDivider={true}
              showStepBadge={false}
              cardClassName='h-[411px] max-w-[350px] gap-y-6 '
              gridClassName='h-full'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <section>
        <Strategy
          cardData={scaleReadinessIndicators}
          SectionHead={scaleReadinessSectionHead.title}
          SectionSubHead=''
          SectionDescription={scaleReadinessSectionHead.description}
          StrategyBadgeText={scaleReadinessSectionHead.badgeText}
        />
      </section>
      <Execution_Plan
        badgeText="Let's Build Together"
        title='Dedicated Engineers. Faster Execution.'
        description='From product iteration to large-scale development, our fractional teams provide the expertise and flexibility needed to support your next stage of growth.'
        buttonText='Build Your Pod'
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
