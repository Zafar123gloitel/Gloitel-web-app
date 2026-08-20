'use client';

import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../components';
// import Discover from "../components/Discover";
// import Assess from "../components/Assess";
import GlowPanel from 'components/GlowPanel';
// import Strategy from "../components/Strategy";
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import { ArrowRightIcon, InfoIcon } from 'components/SvgIcon';
import {
  aiClarityData,
  aiEngagementSectionHead,
  aiGapData,
  aiGapSectionHead,
  aiIntelligentSystemsCTAData,
  aiIntelligentSystemsHeroData,
  aiPilotData,
  aiPracticeAreasData,
  aiPracticeAreasSectionHead,
  aiTechStackLandingData,
  discoverySprintData,
  productionScaleData,
} from './data';
import ImageCard from 'components/ImageCard';
import HeroSection from '@/components/what-we-do/HeroSection';
import Discover from '@/components/what-we-do/Discover';
import Assess from '@/components/what-we-do/Assess';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div>
      <section>
        <HeroSection
          badgeText={aiIntelligentSystemsHeroData.badgeText}
          title={aiIntelligentSystemsHeroData.title}
          description={aiIntelligentSystemsHeroData.description}
          image={aiIntelligentSystemsHeroData.image}
          imageAlt={aiIntelligentSystemsHeroData.imageAlt}
          video={aiIntelligentSystemsHeroData.video}
          primaryButton={aiIntelligentSystemsHeroData.primaryButton}
          secondaryButton={aiIntelligentSystemsHeroData.secondaryButton}
        />
      </section>
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={aiGapSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiGapSectionHead.title}
              SectionDescription={aiGapSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={aiGapData}
              cardHeight=' h-[300px] max-w-[300px] '
              gridClassName='gap-y-28'
              titleClassName=''
              descriptionClassName=''
            />
            <div
              className='mx-auto mt-4 flex max-w-[75%] items-center gap-3 rounded-2xl border border-transparent p-3'
              style={{
                background: `
                linear-gradient(#080B18, #080B18) padding-box,
                linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
              `,
              }}
            >
              <span className='text-title inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#1447E633] text-2xl'>
                <InfoIcon className='h-5 w-5 text-blue-400' />
              </span>
              <p className='text-title'>
                {
                  "We diagnose before we build. Engineering starts only after we've defined where AI will create measurable business impact and long-term value."
                }
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={aiPracticeAreasSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiPracticeAreasSectionHead.title}
              SectionDescription={aiPracticeAreasSectionHead.description}
            />
          </div>
        </div>

        <div className='-mt-10 flex flex-wrap items-center justify-center gap-6'>
          {aiPracticeAreasData.map(item => (
            <ImageCard
              key={item.id}
              className={''}
              cradClass={'w-[25rem] min-h-[500px]'}
              padding={'px-4'}
              cardtitle={item.title}
              carddescription={item.description}
              buttintext={item.buttonText}
              buttonurl={item.buttonLink}
              buttonicon={<ArrowRightIcon />}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <div className=''>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={aiEngagementSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiEngagementSectionHead.title}
              SectionDescription={aiEngagementSectionHead.description}
            />
          </div>

          <Discover
            badgeText={discoverySprintData.badgeText}
            title={discoverySprintData.title}
            description={discoverySprintData.description}
            cardTitle={discoverySprintData.cardTitle}
            image={discoverySprintData.image}
            imageAlt={discoverySprintData.imageAlt}
          />
          <Assess
            badgeText={aiPilotData.badgeText}
            title={aiPilotData.title}
            description={aiPilotData.description}
            cardTitle={aiPilotData.cardTitle}
            image={aiPilotData.image}
            imageAlt={aiPilotData.imageAlt}
          />
          <Discover
            badgeText={productionScaleData.badgeText}
            title={productionScaleData.title}
            description={productionScaleData.description}
            cardTitle={productionScaleData.cardTitle}
            image={productionScaleData.image}
            imageAlt={productionScaleData.imageAlt}
          />
        </div>
      </div>
      <GlowPanel />
      <Strategy
        cardData={aiClarityData.items}
        SectionHead={aiClarityData.title}
        SectionSubHead={''}
        SectionDescription={aiClarityData.description}
        StrategyBadgeText={aiClarityData.badgeText}
      />
      <section>
        <AI_Solutions
          badge={aiTechStackLandingData.badge}
          title={aiTechStackLandingData.title}
          description={aiTechStackLandingData.description}
          tabs={aiTechStackLandingData.tabs}
          technologies={aiTechStackLandingData.technologies}
        />
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={'Our Engagement Model'} />
            </span>
            <MiddleSectionHeads
              SectionHead={'From Discovery to Production-Ready AI'}
              SectionDescription={
                'A structured approach that validates opportunities, proves value, and scales successful AI initiatives with confidence.'
              }
            />
          </div>
        </div>
      </section>
      <section>
        <Execution_Plan
          badgeText={aiIntelligentSystemsCTAData.badgeText}
          title={aiIntelligentSystemsCTAData.title}
          description={aiIntelligentSystemsCTAData.description}
          buttonText={aiIntelligentSystemsCTAData.buttonText}
          buttonLink={aiIntelligentSystemsCTAData.buttonLink}
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
