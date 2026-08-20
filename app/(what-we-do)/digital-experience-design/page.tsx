'use client';
// import HeroSection from "../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { LeftSectionHeads, MiddleSectionHeads } from 'components/SectionHeads';
import { Card, CardShowcase, CardTitle } from '../../../components';
import {
  designGapData,
  designGapNote,
  designGapSectionHead,
  designTeamData,
  designTeamSectionHead,
  designToolsData,
  digitalExperienceCTAData,
  digitalExperienceHeroData,
  digitalPracticeData,
  digitalPracticeSectionHead,
} from './data';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import GlowPanel from 'components/GlowPanel';
import ImageCard from 'components/ImageCard';
import { ArrowRightIcon } from 'components/SvgIcon';
import HeroSection from '@/components/HeroSection';

const page = () => {
  return (
    <div>
      <section>
        <HeroSection
          badgeText={digitalExperienceHeroData.badgeText}
          title={digitalExperienceHeroData.title}
          description={digitalExperienceHeroData.description}
          image={digitalExperienceHeroData.image}
          imageAlt={digitalExperienceHeroData.imageAlt}
          video={digitalExperienceHeroData.video}
          primaryButton={digitalExperienceHeroData.primaryButton}
          secondaryButton={digitalExperienceHeroData.secondaryButton}
        />
      </section>
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={designGapSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={designGapSectionHead.title}
              SectionDescription={designGapSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={designGapData}
              cardHeight='h-[290px]   max-w-[300px] '
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
                {designGapNote.icon}
              </span>
              <p className='text-title'>{designGapNote.text}</p>
            </div>
          </section>
        </div>
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={digitalPracticeSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={digitalPracticeSectionHead.title}
              SectionDescription={digitalPracticeSectionHead.description}
            />
          </div>
        </div>

        <div className='-mt-10 flex flex-wrap items-center justify-center gap-6'>
          {digitalPracticeData.map(item => (
            <ImageCard
              key={item.id}
              className={''}
              cradClass={'w-[25rem] min-h-[550px]'}
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
      <section>
        <AI_Solutions
          badge={designToolsData.badge}
          title={designToolsData.title}
          description={designToolsData.description}
          tabs={designToolsData.tabs}
          technologies={designToolsData.technologies}
        />
      </section>
      <section>
        <GlowPanel />
        <section className='max-w-8xl mx-auto px-4 sm:px-6 sm:py-10 lg:px-8 lg:pt-10 lg:pb-20 xl:px-20'>
          <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16'>
            {/* LEFT */}
            <div className='flex flex-col gap-4'>
              <span>
                <StrategyBadge text={designTeamSectionHead.badgeText} />
              </span>
              <LeftSectionHeads
                SectionHead={designTeamSectionHead.title}
                SectionSubHead={''}
                SectionDescription={designTeamSectionHead.description}
              />

              <div className='mt-2 grid gap-4 sm:mt-4 sm:gap-6'></div>
            </div>
            <div className='flex flex-col justify-center gap-4 lg:justify-end'>
              {designTeamData.map(item => (
                <Card
                  key={item.id}
                  className='flex items-center gap-4 rounded-2xl border border-white/10'
                >
                  <CardTitle className='text-title flex items-center gap-4 text-xl'>
                    <span className='h-2 w-2 shrink-0 rounded-full bg-white' />
                    {item.text}
                  </CardTitle>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section>
        <Execution_Plan
          badgeText={digitalExperienceCTAData.badgeText}
          title={digitalExperienceCTAData.title}
          description={digitalExperienceCTAData.description}
          buttonText={digitalExperienceCTAData.buttonText}
          buttonLink={digitalExperienceCTAData.buttonLink}
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
