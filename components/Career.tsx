'use client';

import { useRef } from 'react';
import Assess from '@/components/what-we-do/Assess';
import PurposeCard from '@/components/what-we-do/PurposeCard';
import { CardShowcase } from '@/components';
import HeroSection from '@/components/HeroSection';
import StrategyBadge from '@/components/StrategyBadge';
import { BgSquare2 } from '@/components/BgSquare';
import GlowPanel from '@/components/GlowPanel';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import TestimonialCard from '@/components/TestimonialCard';
import ArchitectureCircle from '@/uiComponents/ArchitectureCircle';
import {
  AiAgentsIndustriesdata,
  AiExecutionServicesdata,
  aiInfrastructureData,
  aiInfrastructureSectionHead,
  aiRoadmapData,
  CareerFinalCtadata,
  diagnoseBeforeDeployData,
  heroData,
} from '@/app/(website)/career/data';
import Execution_Plan from '@/uiComponents/Execution_Plan';
import { TestimonialButton } from '@/components/atoms/button/Button';

export const CareerHero = () => {
  return (
    <section>
      <HeroSection {...heroData} />
    </section>
  );
};

export const AiRoadmapSection = () => {
  return (
    <section id='ai-roadmap'>
      <GlowPanel />
      <Assess
        badgeText={aiRoadmapData.badgeText}
        title={aiRoadmapData.title}
        description={aiRoadmapData.description}
        image={aiRoadmapData.image}
        imageAlt={aiRoadmapData.imageAlt}
      />

      <div className='mx-auto max-w-[1400px]'>
        <CardShowcase
          items={aiRoadmapData.features}
          showDivider={false}
          showStepBadge={false}
          gridClassName={''}
          cardClassName={''}
          cardHeight={'h-[263px] mx-auto w-[302px]'}
          titleClassName=''
          columns={{ base: 1, lg: 2, xl: 4 }}
          descriptionClassName=''
          iconClassName={''}
        />
      </div>
    </section>
  );
};

export type PublicJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

export const AiExecutionServices = ({ jobs }: { jobs: PublicJob[] }) => {
  const EngineeringIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='31' height='36' viewBox='0 0 31 36' fill='none'>
      <g clipPath='url(#clip0_2437_50274)'>
        <path
          d='M6.64286 9C6.64286 11.3869 7.57602 13.6761 9.23705 15.364C10.8981 17.0518 13.1509 18 15.5 18C17.8491 18 20.1019 17.0518 21.7629 15.364C23.424 13.6761 24.3571 11.3869 24.3571 9C24.3571 6.61305 23.424 4.32387 21.7629 2.63604C20.1019 0.948212 17.8491 0 15.5 0C13.1509 0 10.8981 0.948212 9.23705 2.63604C7.57602 4.32387 6.64286 6.61305 6.64286 9ZM13.1819 23.0766L14.469 25.2563L12.1647 33.968L9.67366 23.6391C9.53527 23.0695 8.99554 22.6969 8.43504 22.8445C3.59129 24.075 0 28.5328 0 33.8414C0 35.0367 0.954911 36 2.12433 36H28.8757C30.052 36 31 35.0297 31 33.8414C31 28.5328 27.4087 24.075 22.565 22.8445C22.0045 22.7039 21.4647 23.0766 21.3263 23.6391L18.8353 33.968L16.531 25.2563L17.8181 23.0766C18.2609 22.3242 17.7281 21.375 16.8701 21.375H14.1368C13.2788 21.375 12.746 22.3313 13.1888 23.0766H13.1819Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2437_50274'>
          <rect width='31' height='36' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <section>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={AiExecutionServicesdata.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={AiExecutionServicesdata.title}
            SectionSubHead=''
            SectionDescription={AiExecutionServicesdata.description}
          />
        </div>
      </div>

      <div className='mx-auto -mt-10 sm:w-[80%]'>
        <div className='grid grid-cols-1 gap-4 p-5'>
          {jobs.length === 0 && (
            <p className='py-12 text-center text-white/70'>No open positions right now.</p>
          )}
          {jobs.map(job => (
            <div key={job.id} className='flex flex-col gap-4'>
              <PurposeCard
                icon={EngineeringIcon}
                title={job.title}
                description={job.description}
                list={[job.department, job.type.replace('-', ' '), job.location]}
                buttonText='Apply Now'
                buttonLink='/career/apply-now'
                viewText='View Details'
                viewLink={`/career/${job.id}`}
              />
            </div>
          ))}
        </div>
        <div className='mx-auto mt-5 text-center'>
          {' '}
          <a
            href={'/career'}
            className='group hover:text-title inline-flex items-center gap-2 text-[11px] text-white transition-colors duration-300'
          >
            <span className='text-xl'>{'View all open positions'}</span>

            <svg
              width='25'
              height='25'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='transition-transform duration-300 group-hover:translate-x-1'
            >
              <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />

              <path
                d='M13 6L19 12L13 18'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export const DiagnoseBeforeDeploy = () => {
  return (
    <section>
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={diagnoseBeforeDeployData.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={diagnoseBeforeDeployData.title}
              SectionDescription={diagnoseBeforeDeployData.description}
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[80%]'>
            <CardShowcase
              showStepBadge={false}
              showDivider={false}
              items={diagnoseBeforeDeployData.steps}
              cardHeight='h-[300px]   max-w-[300px] '
              gridClassName='gap-y-28'
              columns={{ base: 1, lg: 2, xl: 4 }}
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
    </section>
  );
};

export const AiAgentsIndustries = () => {
  const testimonialsRef = useRef(null);

  const scrollTestimonials = direction => {
    if (!testimonialsRef.current) return;

    const container = testimonialsRef.current;

    // First card ko find karo
    const firstCard = container.firstElementChild;

    if (!firstCard) return;

    // Card width + gap
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;

    const scrollAmount = cardWidth + gap;

    container.scrollTo({
      left:
        direction === 'right'
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id='industries-we-serve'>
      <section className='my-20 w-full'>
        {/* Section Heading */}
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />

          <div className='-mt-10 mb-52 flex w-full flex-col items-center justify-center gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={AiAgentsIndustriesdata.badgeText} />
            </span>

            <MiddleSectionHeads
              SectionHead={AiAgentsIndustriesdata.title}
              SectionSubHead=''
              SectionDescription={AiAgentsIndustriesdata.description}
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className='relative z-10 -mt-20'>
          {/* Navigation Buttons */}
          <div className='mb-8 flex justify-end gap-4 px-5 sm:px-10 lg:px-20'>
            {/* LEFT BUTTON */}

            <TestimonialButton
              className='h-12 min-w-12'
              ariaLabel='Previous testimonials'
              onClick={() => scrollTestimonials('left')}
            />

            <TestimonialButton
              className='h-12 min-w-12'
              direction='right'
              ariaLabel='Next testimonials'
              onClick={() => scrollTestimonials('right')}
            />
          </div>

          {/* Cards Container */}
          <div
            ref={testimonialsRef}
            className='custom-scrollbar mx-auto flex w-[90%] gap-5 overflow-x-auto'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {AiAgentsIndustriesdata.testimonials.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className='shrink-0'>
                <TestimonialCard
                  name={testimonial.name}
                  avatar={testimonial.image}
                  designation={testimonial.designation}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export const ProductionReadyAi = () => {
  const positions = {
    top: 'lg:top-2 lg:left-1/2 lg:-translate-x-1/2',
    leftTop: 'lg:left-8 xl:left-24 2xl:left-40 lg:top-52',
    rightTop: 'lg:right-8 xl:right-24 2xl:right-40 lg:top-52',
    leftBottom: 'lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52',
    bottom: 'lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2',
    rightBottom: 'lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52',
  };

  return (
    <section>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={aiInfrastructureSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={aiInfrastructureSectionHead.title}
            SectionDescription={aiInfrastructureSectionHead.description}
          />
        </div>
      </div>
      <section className='mb-10 flex items-center'>
        <ArchitectureCircle
          data={aiInfrastructureData}
          image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869131/Gloitel/Career/Cae1_r6f6us.png'
          positions={positions}
        />
      </section>
    </section>
  );
};

export const CareerFinalCta = () => {
  return (
    <section>
      <Execution_Plan
        badgeText={CareerFinalCtadata.badgeText}
        title={CareerFinalCtadata.title}
        description={CareerFinalCtadata.description}
        buttonText={CareerFinalCtadata.buttonText}
        buttonLink={CareerFinalCtadata.buttonLink}
        secondaryButton={CareerFinalCtadata.secondaryButton}
      />
    </section>
  );
};
