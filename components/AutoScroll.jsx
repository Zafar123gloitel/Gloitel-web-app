// components/AutoScrollCarousel.jsx
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const features = [
  {
    title: 'PATH IAS ACADEMY',
    subTitle: 'Empowering Aspirants, Achieving Success',
    feature1: '30% Increase in Sales',
    feature2: '40% Student Enroll',
    img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/ias_rtnewu.jpg',
  },
  {
    title: 'CGMMSSY',
    subTitle: 'A mobile medical unit with doctors treating patients',
    feature1: 'Checkups 80% +',
    feature2: '50% trust increase',
    img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/cgmmsy_wndztr.jpg',
  },
  {
    title: 'EXPERTEETH',
    subTitle: 'Increase Your smile with Experteeth',
    feature1: '60% Increased Traffic',
    feature2: '35% Growth in Sales',
    img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854147/Gloitel/expeerteeth_fqbfyp.png',
  },
  {
    title: 'HRM TECHNOLOGY',
    subTitle: 'Driving Growth with Advanced Cloud & IT Solutions!',
    feature1: '20% Market Share',
    feature2: '45% Enhanced Visibility',
    img: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/hrm_huocfz.jpg',
  },
];

const AutoScroll = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <Marquee
        gradient={true} // adds subtle fade edges
        gradientColor={[0, 0, 0]} // black fade for dark backgrounds
        speed={70} // control scroll speed
        pauseOnHover={true} // stops when hovered
        loop={0} // infinite scroll
      >
        {features.map((feature, i) => (
          <div key={i} className='flex justify-center bg-black px-3 sm:px-5 lg:justify-start'>
            {/* Card */}
            <div className='relative h-[470px] w-72 overflow-hidden rounded-4xl border border-white/5 bg-neutral-950 p-3 sm:w-80 md:w-120'>
              <div className='h-full rounded-2xl bg-black'>
                {/* Image */}
                <div className='relative h-[330px] w-full overflow-hidden rounded-t-3xl rounded-b-md'>
                  <Image
                    width={1920}
                    height={1080}
                    src={feature.img ?? 'dummy.jpg'}
                    alt='Project'
                    className='h-full w-full object-cover'
                    unoptimized
                    loading='lazy'
                  />

                  {/* Fade overlay (only bottom 10%) */}
                  <div className='pointer-events-none absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black to-transparent'></div>
                </div>

                {/* Overlay */}
                <div className='bg absolute inset-x-0 bottom-0 m-5 rounded-xl bg-neutral-950 p-4'>
                  {/* Title */}
                  <h3 className='sm:text-md text-title mb-2 text-base font-medium uppercase md:text-lg'>
                    {feature.title}
                  </h3>
                  <hr className='mb-2 border-white/10' />

                  {/* Subtitle */}
                  <p className='text-xs text-gray-400 sm:text-sm md:text-base'>
                    {feature.subTitle}
                  </p>

                  {/* Stats */}
                  <div className='mt-3 flex flex-wrap gap-2'>
                    <span className='rounded-md border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 sm:text-sm'>
                      {feature.feature1}
                    </span>
                    <span className='rounded-md border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 sm:text-sm'>
                      {feature.feature2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Gradient fade edges */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent'></div>
    </div>
  );
};

export default AutoScroll;
