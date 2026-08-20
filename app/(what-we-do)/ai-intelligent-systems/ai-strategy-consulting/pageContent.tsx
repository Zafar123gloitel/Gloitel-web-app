'use client';

import StrategyBadge from '../../../../components/StrategyBadge';
import ProblemCard from '../../../../components/ProblemCard';
import { BgSquare2 } from 'components/BgSquare';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../../components';
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";

// import Business from "../../components/Business";
// import Strategy from "../../components/Strategy";
// import TimeLine from "../../components/TimeLine";
// import Asked_Q from "../../components/Asked_Q";
import Execution_Plan from 'uiComponents/Execution_Plan';
// import HeroSection from "../../components/HeroSection";
import GlowPanel from 'components/GlowPanel';
import {
  accordionData,
  assessData,
  discoverData,
  enableData,
  heroSectionData,
  notIncludedData,
  outcomesData,
  problems,
  RankData,
  showcaseItems,
} from './data';
import HeroSection from '@/components/HeroSection';
import Asked_Q from '@/components/what-we-do/Asked_Q';
import Assess from '@/components/what-we-do/Assess';
import Business from '@/components/what-we-do/Business';
import Discover from '@/components/what-we-do/Discover';
import Strategy from '@/components/what-we-do/Strategy';
import TimeLine from '@/components/what-we-do/TimeLine';

export default function WhatWeDoPage() {
  return (
    <div className=''>
      <div className=''>
        <HeroSection {...heroSectionData} />
      </div>
      <div className='overflow-hidden'>
        <section className='my-14 lg:my-24'>
          <div className='relative z-10 mx-auto flex flex-col items-center justify-center'>
            <BgSquare2 />
            <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:-mt-10 lg:w-1/2'>
              {/* Badge */}
              <span>
                <StrategyBadge text='Who This Is For' />
              </span>
              <MiddleSectionHeads
                SectionHead='Built for Teams Ready to move beyond AI Experimentation'
                SectionSubHead=''
                SectionDescription='Designed for organizations that want to invest in AI strategically, align initiatives with business outcomes, and prioritize the right opportunities before committing resources.'
                headingTag='h2'
                subHeadingTag='h3'
              />
            </div>
          </div>
          <section className='mx-auto mt-5 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
            {problems.map((item, index) => (
              <ProblemCard key={index} title={item.title} />
            ))}
          </section>
        </section>
      </div>
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='Our Approach' />
            </span>
            <MiddleSectionHeads
              SectionHead='Diagnose Before You Deploy'
              SectionDescription='We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap.'
              headingTag='h2'
              subHeadingTag='h3'
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={showcaseItems}
              cardHeight='h-[230px]   max-w-[300px] '
              gridClassName='gap-y-28'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <div className=''>
        <Discover
          badgeText={discoverData.badgeText}
          title={discoverData.title}
          description={discoverData.description}
          cardTitle={discoverData.cardTitle}
          image={discoverData.image}
          imageAlt={discoverData.imageAlt}
        />
        <Assess
          badgeText={assessData.badgeText}
          title={assessData.title}
          description={assessData.description}
          cardTitle={assessData.cardTitle}
          image={assessData.image}
          imageAlt={assessData.imageAlt}
        />
        <Discover
          badgeText={RankData.badgeText}
          title={RankData.title}
          description={RankData.description}
          cardTitle={RankData.cardTitle}
          image={RankData.image}
          imageAlt={RankData.imageAlt}
        />
        <Assess
          badgeText={enableData.badgeText}
          title={assessData.title}
          description={assessData.description}
          cardTitle={assessData.cardTitle}
          image={assessData.image}
          imageAlt={enableData.imageAlt}
        />
      </div>
      <Business
        badgeText='What You Walk Away With'
        sectionHead='A Clear AI Roadmap backed by Business Value'
        sectionSubHead=''
        sectionDescription='Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.'
        data={outcomesData}
        headingTag='h2'
        subHeadingTag='h3'
      />
      <GlowPanel />
      <Strategy
        cardData={notIncludedData}
        SectionHead={'Strategy before Solutions'}
        SectionSubHead={''}
        SectionDescription={
          'Every recommendation is grounded in business impact and feasibility. We do not start with technology, products, or predetermined solutions.'
        }
        StrategyBadgeText={'What This Is Not'}
        headingTag='h2'
        subHeadingTag='h3'
      />
      <TimeLine headingTag='h2' subHeadingTag='h3' />
      <Asked_Q
        accordionData={accordionData}
        badgeText={'Everything You Need to Know'}
        sectionHead={'Frequently Asked Questions'}
        sectionSubHead=''
        sectionDescription={
          'Answers to common questions about the Discovery Sprint, engagement process, timelines, and expected outcomes.'
        }
        headingTag='h2'
        subHeadingTag='h3'
      />
      <Execution_Plan
        badgeText='Start with Strategy, Not Assumptions'
        title='Turn AI Ambition into an Execution Plan'
        description='Every successful AI initiative starts with the right decisions. We provide the structure, insight, and direction needed to make them.'
        buttonText='Start with a Discovery Call'
        buttonLink='/'
        onclick={() => ({})}
      />
    </div>
  );
}
