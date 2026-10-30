'use client';

import HeroSection from '@/components/HeroSection';
import {
  aiStrategySectionHead,
  BlogeForSectionHead2,
  resourceCaseStudiesData,
  resourcesCTAData,
  resourcesHeroData,
  whoThisIsForSectionHead2,
} from './data';

import GlowPanel from 'components/GlowPanel';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '@/components/StrategyBadge';

import { MiddleSectionHeads } from 'components/SectionHeads';

import ImageCard from 'components/ImageCard';
import { Card, CardDescription, CardIcon, CardTitle } from '@/components';
import Execution_Plan from 'uiComponents/Execution_Plan';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/SvgIcon';
import Link from 'next/link';
import { ProjectCard } from '@/components/AutoScroll';
import PageLoader from '@/components/PageLoader';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { useRef } from 'react';
import { TestimonialButton } from '@/components/atoms/button/Button';

const ResourcesPage = () => {
  const { caseStudies: filteredCaseStudies, loading, error, refetch } = useCaseStudies();
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const scrollCaseStudies = (direction: 'left' | 'right') => {
    if (!caseStudiesRef.current) return;

    const container = caseStudiesRef.current;

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const gap = 20; // gap-5 = 20px

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
    <div>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <HeroSection
          badgeText={resourcesHeroData.badgeText}
          image={resourcesHeroData.image}
          video={resourcesHeroData.video}
          imageAlt={resourcesHeroData.imageAlt}
          title={resourcesHeroData.title}
          description={resourcesHeroData.description}
          primaryButton={resourcesHeroData.primaryButton}
          secondaryButton={resourcesHeroData.secondaryButton}
        />
      </div>
      <section className='font-dmSans relative isolate -mt-20 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <GlowPanel />
        <section className='mx-auto grid w-[80%] grid-cols-2'>
          {aiStrategySectionHead.map((item, index) => (
            <Card key={index} className='h-[380px] w-[659px] flex-row'>
              <div className='grid h-full grid-cols-2'>
                <div className='flex flex-col gap-4'>
                  <CardIcon>{item.icons}</CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <Link
                    href={item.href ?? '#'}
                    className='mt-5 flex items-center gap-2 text-sm font-medium text-white'
                  >
                    {item.text}
                    {<ArrowRightIcon />}
                  </Link>
                </div>
                <div className='relative aspect-[4/3] h-full w-[306px] items-center overflow-hidden rounded-[1.4rem]'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={200}
                    width={100}
                    className='h-full w-full object-cover'
                    unoptimized
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
                </div>
              </div>
            </Card>
          ))}
        </section>
      </section>

      <div className='relative z-10 mx-auto mt-20 mb-10 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={BlogeForSectionHead2.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={BlogeForSectionHead2.title}
            SectionSubHead='  '
            SectionDescription={BlogeForSectionHead2.description}
          />
        </div>
        <section className='mx-auto mt-20 grid w-[80%] grid-cols-3 gap-3 p-5'>
          {resourceCaseStudiesData.map(card => (
            <ImageCard
              key={card.id}
              cradClass={''}
              className={'w-full'}
              buttintext={'Read Article'}
              cardtitle={card.title}
              carddescription={card.description}
              buttonurl={card.href}
              buttonicon={<ArrowRightIcon />}
              image={card.image}
            />
          ))}
        </section>
      </div>

      <div className='relative z-10 mx-auto mt-20 mb-10 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={whoThisIsForSectionHead2.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={whoThisIsForSectionHead2.title}
            SectionSubHead='  '
            SectionDescription={whoThisIsForSectionHead2.description}
          />
        </div>
        <div className='relative w-full max-w-full min-w-0'>
          {error && (
            <p role='alert'>
              {error}{' '}
              <button type='button' onClick={() => void refetch()}>
                Try again
              </button>
            </p>
          )}

          {loading && <PageLoader className='mb-6 min-h-64' />}

          {!loading && filteredCaseStudies.length > 0 ? (
            <>
              {/* Navigation Buttons */}
              <div className='min-w-0'>
                <div className='mb-6 flex justify-end gap-4'>
                  <TestimonialButton
                    className='h-12 min-w-12 border border-white/30 bg-white/10 text-white'
                    ariaLabel='Previous case studies'
                    onClick={() => scrollCaseStudies('left')}
                  />
                  <TestimonialButton
                    className='h-12 min-w-12 border border-white/30 bg-white/10 text-white'
                    direction='right'
                    ariaLabel='Next case studies'
                    onClick={() => scrollCaseStudies('right')}
                  />
                </div>
              </div>

              {/* Cards Container */}
              <div
                ref={caseStudiesRef}
                className='custom-scrollbar flex h-[70vh] w-full max-w-full min-w-0 gap-5 overflow-x-auto'
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {filteredCaseStudies.map(item => (
                  <div key={item.id} className='shrink-0'>
                    <ProjectCard feature={item} />
                  </div>
                ))}
              </div>
            </>
          ) : !loading && !error ? (
            <div className='col-span-full rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-gray-400'>
              No case studies found for this search.
            </div>
          ) : null}
        </div>
      </div>

      <Execution_Plan
        badgeText={resourcesCTAData.badgeText}
        title={resourcesCTAData.title}
        description={resourcesCTAData.description}
        buttonText={resourcesCTAData.buttonText}
        secondaryButton={resourcesCTAData.secondaryButton}
        buttonLink='/contact'
        onclick={() => ({})}
      />
    </div>
  );
};

export default ResourcesPage;
