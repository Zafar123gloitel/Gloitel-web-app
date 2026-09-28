'use client';
import { ArrowRightIcon } from 'lucide-react';
// components/AutoScrollCarousel.jsx
import Image from 'next/image';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

export function ProjectCard({ feature }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position within the card, 0 to 1
    const px = x / rect.width;
    const py = y / rect.height;

    const maxTilt = 12; // degrees

    const rotateY = (px - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - py) * 2 * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: px * 100, y: py * 100, opacity: 0.15 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setGlare(g => ({ ...g, opacity: 0 }));
  }

  return (
    <div
      className='flex justify-center px-3 sm:px-5 lg:justify-start'
      style={{ perspective: '1200px' }}
    >
      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 150ms ease-out',
        }}
        className='relative h-[610px] w-72 overflow-hidden rounded-4xl border border-white/5 bg-neutral-950 p-3 sm:w-80 md:w-120'
      >
        {/* Glare overlay */}
        <div
          className='pointer-events-none absolute inset-0 z-20 rounded-4xl'
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
            transition: 'opacity 150ms ease-out',
          }}
        />

        <div className='h-full rounded-2xl bg-black' style={{ transform: 'translateZ(20px)' }}>
          {/* Image */}
          <div className='relative h-[330px] w-full overflow-hidden rounded-t-3xl rounded-b-md'>
            <Image
              width={1920}
              height={1080}
              src={feature.image ?? 'dummy.jpg'}
              alt='Project'
              className='h-full rounded-t-2xl object-cover transition duration-500 group-hover:scale-105'
              unoptimized
              loading='lazy'
            />
          </div>

          {/* Overlay */}
          <div className='px-3 py-5'>
            <span className='mb-5 inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-gray-300'>
              {feature.category}
            </span>

            <h2 className='text-lg leading-6 font-medium text-white'>{feature.title}</h2>
            <p className='mt-3 line-clamp-3 text-sm leading-6'>{feature.description}</p>

            <span className='absolute bottom-5 left-3 flex items-center gap-1 pt-2 text-sm font-medium text-[#5b8def]'>
              Read Case Study <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const AutoScroll = ({ features }) => {
  return (
    <div className='relative w-full overflow-hidden'>
      <Marquee
        gradient={true} // adds subtle fade edges
        gradientColor={'0, 0, 0'} // black fade for dark backgrounds
        speed={70} // control scroll speed
        pauseOnHover={true} // stops when hovered
        loop={0} // infinite scroll
      >
        {features.map((feature, i) => (
          <ProjectCard key={i} feature={feature} />
        ))}
      </Marquee>

      {/* Gradient fade edges */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent'></div>
    </div>
  );
};

export default AutoScroll;
