'use client';

// import HeroSection from "../../components/HeroSection";
// import Business from "../../components/Business";
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";
// import Strategy from "../../components/Strategy";
// import TimeLine from "../../components/TimeLine";
// import Asked_Q from "../../components/Asked_Q";
import Execution_Plan from 'uiComponents/Execution_Plan';
import GlowPanel from 'components/GlowPanel';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../../components/ProblemCard';
import {
  heroSectionData,
  whoThisIsForData,
  discoverPhaseData,
  assessPhaseData,
  prioritizePhaseData,
  enablePhaseData,
  outcomesData,
  strategyCards,
  noteveryproduct,
} from './data';
import { CardShowcase } from '../../../../components';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Business from '@/components/what-we-do/Business';
import Discover from '@/components/what-we-do/Discover';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection {...heroSectionData} />

      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text='What Discovery Actually Delivers' />
            </span>
            <MiddleSectionHeads
              SectionHead='The Outputs of Discovery'
              SectionDescription='These outputs provide the clarity needed to align teams, define scope, and make confident product decisions.'
            />
          </div>
        </div>

        <section className='mx-auto -mt-20 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
          {whoThisIsForData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text='The Discovery Process' />
            </span>
            <MiddleSectionHeads
              SectionHead='A Structured Process for Product Decision-Making'
              SectionDescription='Follow a structured four-week discovery process that transforms research, user insights, and assumptions into clear product decisions, MVP priorities, and an actionable roadmap.'
            />
          </div>
        </div>

        <section className='mx-auto -mt-40 gap-6 md:w-[80%] xl:w-[90%]'>
          <Discover
            badgeText={discoverPhaseData.badgeText}
            title={discoverPhaseData.title}
            description={discoverPhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={discoverPhaseData.image}
            imageAlt={discoverPhaseData.imageAlt}
          />

          <Assess
            badgeText={assessPhaseData.badgeText}
            title={assessPhaseData.title}
            description={assessPhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={assessPhaseData.image}
            imageAlt={assessPhaseData.imageAlt}
          />

          <Discover
            badgeText={prioritizePhaseData.badgeText}
            title={prioritizePhaseData.title}
            description={prioritizePhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={prioritizePhaseData.image}
            imageAlt={prioritizePhaseData.imageAlt}
          />

          <Assess
            badgeText={enablePhaseData.badgeText}
            title={enablePhaseData.title}
            description={enablePhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={enablePhaseData.image}
            imageAlt={enablePhaseData.imageAlt}
          />
        </section>
      </section>

      <Business
        badgeText='Deliverables The Outputs That Guide'
        sectionHead='The Outputs That Guide 
Product Decisions'
        sectionSubHead=''
        sectionDescription='A practical set of research, strategy, and planning deliverables that help align stakeholders, define priorities, and guide the product build with clarity.'
        data={outcomesData}
      />

      <GlowPanel />

      <Strategy
        cardData={strategyCards}
        SectionHead='Indicators Your Product Needs Validation'
        SectionSubHead=''
        SectionDescription='These common signs suggest your product direction, user needs, or priorities require validation before moving into design and engineering.'
        StrategyBadgeText='When to Run Discovery'
      />

      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='When Discovery Is Probably Not Needed' />
            </span>
            <MiddleSectionHeads
              SectionHead='Not Every Product Needs Discovery'
              SectionDescription='Discovery is most valuable when uncertainty exists. If key decisions have already been validated, it may be time to move directly into execution.'
            />
          </div>
        </div>
        <section className='mx-auto -mt-20 w-full sm:w-[90%]'>
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={noteveryproduct}
            cardHeight='h-[263px]  max-w-[330px] '
            gridClassName='h-full gap-y-30 '
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </section>

      <Execution_Plan
        badgeText='Ready for Clarity?'
        title='Know What to Build and Why'
        description='Reduce uncertainty, align stakeholders, and define a roadmap for execution.'
        buttonText='Run a Discovery Sprint with Us'
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
