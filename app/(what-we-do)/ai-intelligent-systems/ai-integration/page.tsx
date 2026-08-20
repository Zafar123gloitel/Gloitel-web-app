'use client';

import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../../components';

import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import { ArrowRightIcon } from 'components/SvgIcon';
import {
  engineeringData,
  engineeringSectionData,
  engineeringServicesData,
  architecturePatternsData,
  TechnologiesData,
  deliverablesData,
} from './data';
import HeroSection from '@/components/HeroSection';
import Business from '@/components/what-we-do/Business';
import PurposeCard from '@/components/what-we-do/PurposeCard';
import The_Engineering from '@/components/what-we-do/The_Engineering';

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <section>
        <HeroSection
          badgeText='AI Integration'
          title='Connect AI to the Systems that Run Your Business.'
          description='Building an AI model is one challenge. Getting it to work reliably inside your product, ERP, CRM, or data platform is another. We handle the engineering that makes AI operational in production.'
          image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/AI_Integration_lzjw5j.png'
          imageAlt='Hero Image'
          video='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          primaryButton={{
            href: '/contact',
            text: 'Discuss Your Integration Needs',
          }}
          secondaryButton={{
            href: '/case-studies',
            text: 'Book a Technical Review',
            icon: <ArrowRightIcon size={20} />,
          }}
        />
      </section>
      <section>
        <The_Engineering
          badgeText={engineeringSectionData.badgeText}
          sectionHead={engineeringSectionData.sectionHead}
          sectionSubHead={engineeringSectionData.sectionSubHead}
          sectionDescription={engineeringSectionData.sectionDescription}
          data={engineeringData}
        />
        ;
      </section>
      <section>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='Integration Services' />
            </span>
            <MiddleSectionHeads
              SectionHead='AI Integration Services built for Production'
              SectionSubHead=''
              SectionDescription='From API connectivity and model serving to monitoring, data pipelines, and enterprise platform setup, we build the engineering layer that enables AI systems to operate effectively within real-world business environments.'
            />
          </div>
          <section className='mx-auto mt-5 w-full px-6 sm:w-[90%] sm:px-0'>
            <CardShowcase
              items={engineeringServicesData}
              showDivider={true}
              showStepBadge={false}
              cardClassName='h-[370px] max-w-[350px] gap-y-6 '
              gridClassName='h-full'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <section>
        <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='Common Integration Patterns' />
            </span>
            <MiddleSectionHeads
              SectionHead='Integration Patterns that Scale with your Business'
              SectionSubHead=''
              SectionDescription='From real-time AI experiences to event-driven automation and retrieval-based systems, we design architectures that align with how your applications and business processes operate.'
            />
          </div>
        </div>

        <div className='mx-auto -mt-20 mb-10 w-full px-6 sm:w-[80%] sm:px-0'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            {architecturePatternsData.map(item => (
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
      <section className='w-full'>
        <AI_Solutions
          badge={TechnologiesData.badge}
          title={TechnologiesData.title}
          description={TechnologiesData.description}
          tabs={TechnologiesData.tabs}
          technologies={TechnologiesData.technologies}
        />
      </section>
      <section>
        <Business
          badgeText='What We Deliver'
          sectionHead='Deliverables Designed for 
Long-Term Success'
          sectionSubHead=''
          sectionDescription='Every engagement concludes with documented systems, operational safeguards, and implementation assets that help your team manage, scale, and maintain AI capabilities with confidence.'
          data={deliverablesData}
        />
      </section>

      <section>
        <Execution_Plan
          badgeText='Production AI Starts with Integration'
          title='Turn AI Capabilities into 
Business Infrastructure'
          description='Deploy AI into products and enterprise systems with the infrastructure, safeguards, 
and monitoring required to scale confidently.'
          buttonText='Talk to Our Integration Team'
          buttonLink='/contact'
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
