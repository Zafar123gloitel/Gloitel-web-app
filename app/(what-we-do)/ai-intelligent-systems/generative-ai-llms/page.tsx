'use client';

// import HeroSection from "../../components/HeroSection";

import { MiddleSectionHeads } from 'components/SectionHeads';
import StrategyBadge from '../../../../components/StrategyBadge';
import { BgSquare2 } from 'components/BgSquare';
import { CardShowcase } from '../../../../components';
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";

// import Strategy from "../../components/Strategy";
import GlowPanel from 'components/GlowPanel';
import ImageCard from 'components/ImageCard';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  aiServicesData,
  aiSolutionsData,
  caseStudies,
  executionStepFive,
  executionStepFour,
  executionStepOne,
  executionStepThree,
  executionStepTwo,
  heroSectionDataGenerative,
  Real_World,
} from './data';
import { ArrowRightIcon } from 'components/SvgIcon';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div className='mt-10 overflow-hidden'>
      <HeroSection {...heroSectionDataGenerative} />
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text='What We Build' />
          </span>
          <MiddleSectionHeads
            SectionHead='AI Systems Built for Real Business Workflows.'
            SectionSubHead=''
            SectionDescription='We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments.'
          />
        </div>
        <section className='mx-auto mt-20 p-5 sm:max-w-[90%] sm:p-0'>
          <CardShowcase
            items={aiServicesData}
            showDivider={true}
            showStepBadge={false}
            cardHeight='h-[360px] max-w-[411px] '
            gridClassName='gap-y-6'
            titleClassName=''
            descriptionClassName=''
          />
        </section>
      </div>

      <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text='Our Build Process' />
          </span>
          <MiddleSectionHeads
            SectionHead='How we turn AI Concepts 
into Production Systems.'
            SectionSubHead=''
            SectionDescription='From initial discovery and model selection to deployment and ongoing monitoring, we follow a structured process that transforms AI concepts into secure, scalable, and production-ready solutions.'
          />
        </div>
        <section className='mx-auto w-full md:w-[80%] xl:w-[90%]'>
          <Discover
            badgeText={executionStepOne.badgeText}
            title={executionStepOne.title}
            description={executionStepOne.description}
            buttonText={executionStepOne.buttonText}
            buttonLink={executionStepOne.buttonLink}
            image={executionStepOne.image}
            imageAlt={executionStepOne.imageAlt}
          />
          <Assess
            badgeText={executionStepTwo.badgeText}
            title={executionStepTwo.title}
            description={executionStepTwo.description}
            buttonText={executionStepTwo.buttonText}
            buttonLink={executionStepTwo.buttonLink}
            image={executionStepTwo.image}
            imageAlt={executionStepTwo.imageAlt}
          />
          <Discover
            badgeText={executionStepThree.badgeText}
            title={executionStepThree.title}
            description={executionStepThree.description}
            buttonText={executionStepThree.buttonText}
            buttonLink={executionStepThree.buttonLink}
            image={executionStepThree.image}
            imageAlt={executionStepThree.imageAlt}
          />
          <Assess
            badgeText={executionStepFour.badgeText}
            title={executionStepFour.title}
            description={executionStepFour.description}
            buttonText={executionStepFour.buttonText}
            buttonLink={executionStepFour.buttonLink}
            image={executionStepFour.image}
            imageAlt={executionStepFour.imageAlt}
          />
          <Discover
            badgeText={executionStepFive.badgeText}
            title={executionStepFive.title}
            description={executionStepFive.description}
            buttonText={executionStepFive.buttonText}
            buttonLink={executionStepFive.buttonLink}
            image={executionStepFive.image}
            imageAlt={executionStepFive.imageAlt}
          />
        </section>
        <section className='w-full'>
          <AI_Solutions
            badge={aiSolutionsData.badge}
            title={aiSolutionsData.title}
            description={aiSolutionsData.description}
            tabs={aiSolutionsData.tabs}
            technologies={aiSolutionsData.technologies}
          />
        </section>
        <GlowPanel />
        <Strategy
          cardData={Real_World}
          SectionHead={'Real-World AI '}
          SectionSubHead={'Constraints'}
          SectionDescription={
            'Moving AI from a proof of concept to production introduces challenges around accuracy, security, latency, cost, and reliability. Addressing these constraints requires deliberate architecture, continuous evaluation, and production-grade engineering.'
          }
          StrategyBadgeText={'Production Challenges'}
        />
      </div>
      <div className='relative z-10 mx-auto mt-16 mb-10 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text='Case Study Highlights' />
          </span>
          <MiddleSectionHeads
            SectionHead='Real Results from Production AI Deployments.'
            SectionSubHead='  '
            SectionDescription='Explore how organizations across healthcare, financial services, and e-commerce are using production-ready AI systems to improve efficiency, reduce costs, and accelerate business outcomes.'
          />
        </div>
        <section className='mx-auto mt-20 flex flex-wrap justify-center gap-10 p-5'>
          {caseStudies.map(card => (
            <ImageCard
              key={card.id}
              className={''}
              cradClass={'w-[25rem] min-h-[500px]'}
              padding={'px-4'}
              cardtitle={card.title}
              carddescription={card.description}
              buttintext={card.cta}
              buttonurl={card.href}
              buttonicon={<ArrowRightIcon />}
              image={card.image}
            />
          ))}
        </section>
      </div>
      <Execution_Plan
        badgeText='Production-Ready GenAI starts here'
        title='From Prototype to Production'
        description='Turn promising experiments into reliable systems with the guardrails, observability, 
and engineering needed to scale with confidence.'
        buttonText='Build Your GenAI System with Us'
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
