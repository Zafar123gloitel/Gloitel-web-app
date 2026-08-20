'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { BgSquare2 } from '@/components/BgSquare';
import StrategyBadge from '@/components/StrategyBadge';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import { Card, CardDescription, CardIcon, CardTitle } from '@/components';

export type CardPosition = 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';

export interface ArchitectureCard {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  position: CardPosition;
}

interface EngineeringArchitectureProps {
  image: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;

  cardWidth?: string;

  positions: Record<CardPosition, string>;

  data: ArchitectureCard[];
  titledata: {
    badgeText: string;
    title: string;
    description: string;
  };
}

export default function EngineeringArchitecture({
  image,
  imageAlt = 'Architecture',
  imageWidth = 'w-[260px]',
  imageHeight = 'h-[520px]',
  cardWidth = 'w-[290px]',
  positions,
  data,
  titledata,
}: EngineeringArchitectureProps) {
  function CardItem({
    item,
    side,
    cardWidth,
  }: {
    item: ArchitectureCard;
    side: 'left' | 'right';
    cardWidth: string;
  }) {
    return (
      <div className={`relative ${cardWidth}`}>
        <div className='relative'>
          {side === 'left' ? (
            <>
              {/* Blue Dot (Card ke paas) */}
              <div className='absolute top-1/2 left-full ml-14 h-6 w-6 -translate-y-1/2 rounded-full border border-blue-500 bg-blue-900/30' />

              {/* Dashed Line (Image ki taraf) */}
              <div className='absolute top-1/2 left-[calc(100%+5rem)] h-px w-40 border-t border-dashed border-white/20' />
            </>
          ) : (
            <>
              {/* Blue Dot (Card ke paas) */}
              <div className='absolute top-1/2 right-full -z-10 mr-3 h-6 w-6 -translate-y-1/2 rounded-full border border-blue-500 bg-blue-900/30' />

              {/* Dashed Line (Image ki taraf) */}
              <div className='absolute top-1/2 right-[calc(100%+2.25rem)] h-px w-40 border-t border-dashed border-white/20' />
            </>
          )}
          <Card className='h-[350px] w-[350px]'>
            <CardIcon className='text-blue-500'>{item.icon}</CardIcon>
            <CardTitle className='mt-4 text-4xl leading-[1.25]'>{item.title}</CardTitle>
            <CardDescription className='text-description mt-5 leading-6'>
              {item.description}
            </CardDescription>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <section className='w-full overflow-hidden'>
      <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-70 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text={titledata.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={titledata.title}
            SectionDescription={titledata.description}
          />
        </div>
      </div>
      <section className='mx-auto -mt-40 hidden max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-20 py-24 lg:grid'>
        <div className='relative'>
          {data
            .filter(item => item.position.includes('left'))
            .map(item => (
              <div key={item.id} className={`absolute ${positions[item.position]}`}>
                <CardItem item={item} side='left' cardWidth={cardWidth} />
              </div>
            ))}
        </div>
        {/* Phone */}
        <div className='relative z-10 flex justify-center'>
          <div className={`relative ${imageWidth} ${imageHeight}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className='object-contain'
              unoptimized
              loading='lazy'
            />
          </div>
        </div>

        <div className='relative'>
          {data
            .filter(item => item.position.includes('right'))
            .map(item => (
              <div key={item.id} className={`absolute ${positions[item.position]}`}>
                <CardItem item={item} side='right' cardWidth={cardWidth} />
              </div>
            ))}
        </div>
      </section>
      {/* ---------------- Mobile & Tablet ---------------- */}
      <div className='-mt-40 flex w-full flex-col items-center gap-10 p-10 lg:hidden'>
        {/* Phone Image */}
        <div className={`relative ${imageWidth} ${imageHeight}`}>
          <Image src={image} alt={imageAlt} fill className='object-contain' loading='lazy' />
        </div>

        {/* Cards */}
        <div className='grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2'>
          {data.map(item => (
            <Card key={item.id} className='min-h-[320px] w-full'>
              <CardIcon className='text-blue-500'>{item.icon}</CardIcon>

              <CardTitle className='text-title mt-4 text-3xl'>{item.title}</CardTitle>

              <CardDescription className='mt-5 leading-6'>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
