'use client';

import HeroSection from '../../components/HeroSection';
import {
  aiStrategySectionHead,
  BlogeForSectionHead2,
  resourceCaseStudiesData,
  resourcesCTAData,
  resourcesHeroData,
} from './data';

import GlowPanel from 'components/GlowPanel';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../components/StrategyBadge';

import { MiddleSectionHeads } from 'components/SectionHeads';

import ImageCard from 'components/ImageCard';
import { Card, CardDescription, CardIcon, CardTitle } from '../../components';
import Execution_Plan from 'uiComponents/Execution_Plan';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/SvgIcon';
import Link from 'next/link';

const page = () => {
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
              className={'w-full sm:w-[21rem]'}

              cardtitle={card.title}
              carddescription={card.description}
              buttonurl={card.href}
              buttonicon={<ArrowRightIcon />}
              image={card.image}
            />
          ))}
        </section>
      </div>

      {/* <div className='relative z-10 mx-auto mt-20 mb-10 flex min-h-[60vh] flex-col items-center justify-center'>
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

        <div className='mt-12 grid w-2/3 grid-cols-1 gap-4 sm:w-full sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:px-10 xl:w-[90%]'>
          {stages.map(item => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className='group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-gray-950/90 to-black/80 p-2 shadow-lg sm:rounded-3xl sm:p-3'
            >
              <span className='cursor-hover block'>
     
                <Image
                  width={1920}
                  height={1080}
                  src={item.image}
                  alt={item.name}
                  className='h-60 w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 sm:h-72 sm:rounded-2xl md:h-80 lg:h-96'
                  loading='lazy'
                />

       
                <div className='absolute inset-x-0 bottom-0 m-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-950 to-black p-2 sm:m-5 sm:rounded-xl sm:p-4'>
                  <div>
                    <h3 className='sm:text-md text-title mb-0.5 text-sm font-semibold sm:mb-1'>
                      {item.name}
                    </h3>
                  </div>
                  <p className='rounded-md bg-gradient-to-r from-blue-950/60 to-black/80 px-2 py-0.5 text-xs text-gray-300 sm:px-3 sm:py-1 sm:text-sm'>
                    {item.date}
                  </p>
                </div>

            
                <div className='absolute top-0 right-0 m-2 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:m-4'>
                  <div className='text-title rounded-md bg-[radial-gradient(circle_at_center,_rgba(0,0,80,0.9),_rgba(0,0,0,1))] px-2 py-1 text-xs font-medium shadow-lg sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm'>
                    {item.tag}
                  </div>
                </div>
              </span>
            </Link>
          ))}
        </div>
      </div> */}

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

export default page;
