'use client';

// import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../../components/ProblemCard';
import Image from 'next/image';
import { CardShowcase } from '../../../../components';
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";
import GlowPanel from 'components/GlowPanel';
// import Strategy from "../../components/Strategy";
import IconCard from '../../../../components/card-showcase/IconCard';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  Agent_Projects,
  ai_agents_designed,
  aiAgentTechnologyData,
  ApproachStepFive,
  ApproachStepFour,
  ApproachStepOne,
  ApproachStepThree,
  ApproachStepTwo,
  industries,
} from './data';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  const problems = [
    {
      title: 'Browse the web, query databases, call APIs, and write/execute code',
    },
    {
      title: 'Break a complex goal into sub-tasks and orchestrate them in sequence',
    },
    {
      title: 'YDecide when to ask a human for input and when to proceed autonomously',
    },
    {
      title: 'Maintain long-term memory across sessions and learn from feedback',
    },
  ];

  return (
    <div className='overflow-hidden'>
      <section>
        <HeroSection
          badgeText='AI Agents & Automation'
          title='AI Agents that Take Action, Not Just Instructions.'
          description='We design and deploy production-ready AI agents that can make decisions, interact with systems, and automate complex workflows with minimal human intervention.'
          image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613040/Gloitel/what%20we%20do/AI_Agents_Automation_pjmzaj.png'
          imageAlt='Hero Image'
          video='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          primaryButton={{
            href: '/contact',
            text: 'Discuss Your Automation Use Case',
          }}
          secondaryButton={{
            href: '/case-studies',
            text: 'Explore Agentic AI',
            icon: (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4'
              >
                <path d='M5 12h14' />
                <path d='m12 5 7 7-7 7' />
              </svg>
            ),
          }}
        />
      </section>

      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='How AI Agents Work' />
            </span>
            <MiddleSectionHeads
              SectionHead='AI Agents that Think through Tasks and Execute them'
              SectionSubHead=' '
              SectionDescription='Unlike traditional AI assistants, agents can interact with systems, break 
down complex objectives, and take actions across multiple steps to 
achieve outcomes.'
            />
          </div>
        </div>
        <div className='relative mx-auto mb-16 h-[400px] w-[80%] overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/How_AI_Agents_Work_zed02c.png'
            alt='Problem'
            fill
            className='h-full w-full rounded-2xl bg-white object-cover'
            loading='lazy'
          />
        </div>

        <section className='mx-auto mb-10 grid w-[80%] grid-cols-1 gap-6 md:grid-cols-2'>
          {problems.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className='h-full'>
        <div className='relative z-10 mx-auto mt-40 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='What We Build' />
            </span>
            <MiddleSectionHeads
              SectionHead='AI Agents Designed for Real Business Workflows'
              SectionSubHead=''
              SectionDescription='We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments.'
            />
          </div>
          <section className='mx-auto mt-20 w-[90%]'>
            <CardShowcase
              items={ai_agents_designed}
              showDivider={true}
              showStepBadge={false}
              cardClassName='h-[400px] max-w-[350px]  '
              gridClassName='h-full'
              titleClassName=''
              descriptionClassName=''
              iconClassName=''
            />
          </section>
        </div>
      </section>
      <section className='my-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 mb-52 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='Industries We Serve' />
            </span>
            <MiddleSectionHeads
              SectionHead='AI Agents Driving Results Across Industries.'
              SectionSubHead=' '
              SectionDescription='From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support 
faster decision-making.'
            />
          </div>
        </div>

        <div className='-mt-20 flex flex-wrap justify-center gap-6'>
          {industries.map(item => (
            <IconCard key={item.id} name={item.name} icontype={true} Icon={item.icon} />
          ))}
        </div>
      </section>
      <section>
        <AI_Solutions
          badge={aiAgentTechnologyData.badge}
          title={aiAgentTechnologyData.title}
          description={aiAgentTechnologyData.description}
          tabs={aiAgentTechnologyData.tabs}
          technologies={aiAgentTechnologyData.technologies}
        />
      </section>
      <section className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text='How We Approach Agent Design' />
          </span>
          <MiddleSectionHeads
            SectionHead='A Structured Approach to Building Production-Ready AI Agents.'
            SectionSubHead=''
            SectionDescription='Every successful agent starts with a clear process. From workflow 
            analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments.'
          />
        </div>
        <section className='mx-auto w-full md:w-[80%]'>
          <Discover
            badgeText={ApproachStepOne.badgeText}
            title={ApproachStepOne.title}
            description={ApproachStepOne.description}
            buttonText={ApproachStepOne.buttonText}
            buttonLink={ApproachStepOne.buttonLink}
            image={ApproachStepOne.image}
            imageAlt={ApproachStepOne.imageAlt}
          />
          <Assess
            badgeText={ApproachStepTwo.badgeText}
            title={ApproachStepTwo.title}
            description={ApproachStepTwo.description}
            buttonText={ApproachStepTwo.buttonText}
            buttonLink={ApproachStepTwo.buttonLink}
            image={ApproachStepTwo.image}
            imageAlt={ApproachStepTwo.imageAlt}
          />
          <Discover
            badgeText={ApproachStepThree.badgeText}
            title={ApproachStepThree.title}
            description={ApproachStepThree.description}
            buttonText={ApproachStepThree.buttonText}
            buttonLink={ApproachStepThree.buttonLink}
            image={ApproachStepThree.image}
            imageAlt={ApproachStepThree.imageAlt}
          />
          <Assess
            badgeText={ApproachStepFour.badgeText}
            title={ApproachStepFour.title}
            description={ApproachStepFour.description}
            buttonText={ApproachStepFour.buttonText}
            buttonLink={ApproachStepFour.buttonLink}
            image={ApproachStepFour.image}
            imageAlt={ApproachStepFour.imageAlt}
          />
          <Discover
            badgeText={ApproachStepFive.badgeText}
            title={ApproachStepFive.title}
            description={ApproachStepFive.description}
            buttonText={ApproachStepFive.buttonText}
            buttonLink={ApproachStepFive.buttonLink}
            image={ApproachStepFive.image}
            imageAlt={ApproachStepFive.imageAlt}
          />
        </section>
      </section>
      <section>
        <GlowPanel />
        <Strategy
          cardData={Agent_Projects}
          SectionHead={'The Challenges that Derail Agent Initiatives'}
          SectionSubHead={''}
          SectionDescription={
            'Building AI agents is not just about models and automation. Without the right processes, oversight, observability, and safeguards, even promising agent initiatives can struggle to deliver results in production.'
          }
          StrategyBadgeText={'What Makes Agent Projects Fail'}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText='Move Beyond Reactive AI'
          title='Deploy Agents that 
Think, Decide, and Act'
          description='From multi-agent orchestration to autonomous workflow execution, we design 
AI systems that operate reliably, securely, and with the right level of human oversight.'
          buttonText='Design Your Agent System with Us'
          buttonLink='/contact'
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
