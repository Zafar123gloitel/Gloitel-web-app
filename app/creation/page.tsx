'use client';

import { useState } from 'react';
import { IntroHead } from 'uiComponents/Heading';
import { GlowButton } from '@/components/Button';
import Image from 'next/image';
import { FAQPage } from '@/components/Faq';
import JoinUsNow from '@/components/JoinUsNow';
import Link from 'next/link';
import GlowPanel from '@/components/GlowPanel';

const createId = (): string =>
  globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

type Stage = {
  id: string;
  name: string;
  date: number;
  tag: string;
  image: string;
};

const stages: Stage[] = [
  {
    id: createId(),
    name: 'CGMMSSY',
    date: 2018,
    tag: 'Web & App Development',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867021/Gloitel/portfolio/cgmmssy_oww8hb.svg',
  },
  {
    id: createId(),
    name: 'PATH IAS ACADEMY',
    date: 2024,
    tag: 'Business',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867010/Gloitel/portfolio/pathias_usuts5.webp',
  },
  {
    id: createId(),
    name: 'HRM TECHNOLOGY',
    date: 2024,
    tag: 'Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867011/Gloitel/portfolio/hrm_wwb6ki.svg',
  },
  {
    id: createId(),
    name: 'Experteeth',
    date: 2023,
    tag: 'Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867007/Gloitel/portfolio/experteeth_zk1kdv.webp',
  },
  {
    id: createId(),
    name: 'Godhaar',
    date: 2025,
    tag: 'Website & Mobile App',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927323/Gloitel/portfolio/godhaar_vljbzt.jpg',
  },
  {
    id: createId(),
    name: 'Fitbattle',
    date: 2025,
    tag: 'Mobile App & Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866980/Gloitel/portfolio/fitbattle_esztbn.webp',
  },
  {
    id: createId(),
    name: 'VIADYAM (HMS)',
    date: 2024,
    tag: 'HMS',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866990/Gloitel/portfolio/vidyam_vemacx.webp',
  },
  {
    id: createId(),
    name: 'STAFFEASE (CRM)',
    date: 2024,
    tag: 'CRM',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866991/Gloitel/portfolio/staffease_d4vmhj.webp',
  },
];

const CreationPage = () => {
  const [_activeCard, _setActiveCard] = useState<string | null>(null);

  return (
    <>
      <section className='relative isolate h-full w-full overflow-hidden py-16 sm:px-6 lg:px-8 lg:py-30'>
        {/* Background Video */}
        <video
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          className='absolute top-0 left-0 z-0 h-full w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
        />

        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center pt-15 sm:pt-20 md:pt-20 lg:pt-20'>
          {/* Intro */}
          <div className='flex w-full flex-col text-center'>
            <IntroHead
              HomeHeroBadge='Explore'
              HomeSubHeroBadge='Our Homegrown Products'
              main='Check Out Some'
              sub='Extra-Ordinary Work.'
              description='From startups to established brands, we create tailored solutions that drive success and make a real impact.'
            />
          </div>

          {/* Buttons */}
          <div className='mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row'>
            <GlowButton onClick={() => {}} buttonText='Build your Project' buttonLink='/contact' />
          </div>

          {/* Grid */}
          <div className='mt-12 grid w-2/3 grid-cols-1 gap-4 sm:w-full sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:w-6xl lg:px-10'>
            {stages.map((item: Stage) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className='group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-gray-950/90 to-black/80 p-2 shadow-lg sm:rounded-3xl sm:p-3'
              >
                <span className='cursor-hover block'>
                  {/* Image */}
                  <Image
                    width={1920}
                    height={1080}
                    src={item.image}
                    alt={item.name}
                    className='h-60 w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 sm:h-72 sm:rounded-2xl md:h-80 lg:h-96'
                    loading='lazy'
                  />

                  {/* Bottom overlay */}
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

                  {/* Reveal tag */}
                  <div className='absolute top-0 right-0 m-2 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:m-4'>
                    <div className='text-title rounded-md bg-[radial-gradient(circle_at_center,_rgba(0,0,80,0.9),_rgba(0,0,0,1))] px-2 py-1 text-xs font-medium shadow-lg sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm'>
                      {item.tag}
                    </div>
                  </div>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <GlowPanel />
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default CreationPage;
