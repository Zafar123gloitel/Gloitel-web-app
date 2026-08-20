'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { LeftSectionHeads } from './SectionHeads';
import { GlowButton } from './Button';
import { Blend, Crosshair, Rocket } from 'lucide-react';
import Image from 'next/image';
import StrategyBadge from '@/components/StrategyBadge';

const stages = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Kickoff',
    stage: 'Stage 1',
    description:
      'Every project begins with a strong foundation. We align with you to understand your goals, vision, and expectations through in-depth discussions and research, ensuring a clear roadmap for success.',
    points: ['Comprehensive Consultation', 'Project Roadmap'],
    icon: <Rocket />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Execution',
    stage: 'Stage 2',
    description:
      'With a well-defined strategy, our expert team efficiently brings ideas to life, leveraging cutting-edge technologies and collaboration to deliver seamless implementation.',
    points: ['Seamless Integration', 'Real Time Collaboration'],
    icon: <Crosshair />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Development & Deliver',
    stage: 'Stage 3',
    description:
      'We follow a structured approach to develop, test, and optimize your IT solution, ensuring quality, security, and performance. Most importantly, we deliver on time—exactly as committed! 🚀 plus post-development support.',
    points: ['Ongoing Support', 'Documentation'],
    ButtonText: 'Book An Appoitnment',
    ButtonTextLink: '/contact',
    icon: <Blend />,
  },
];

const AnimatedCard = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: '-100px' }); // no `once: true`

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    } else {
      // Reset animation when leaving viewport
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      className='w-full'
    >
      {children}
    </motion.div>
  );
};

const HowWeWork = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 sm:px-6 sm:py-10 lg:px-8 lg:pt-10 lg:pb-20'>
      <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16'>
        {/* LEFT */}
        <div className='flex flex-col'>
          {/* <LeftBadge WorkBadge="How We Work" /> */}
          <StrategyBadge text={'How We Work'} />
          <LeftSectionHeads
            SectionHead='From Intelligent Design'
            SectionSubHead='to AI-Powered Launch'
            SectionDescription='We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.'
          />

          <div className='mt-2 grid gap-4 sm:mt-4 sm:gap-6'>
            {stages.map(item => (
              <AnimatedCard key={item.id}>
                <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg backdrop-blur-md sm:p-10'>
                  <div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50'></div>
                  <div className='relative z-10 flex items-center justify-between'>
                    <div className='text-title flex items-center justify-center rounded-lg bg-white/5 px-3 py-3 shadow-[0_0_25px_rgba(59,130,246,0.3)]'>
                      {item.icon}
                    </div>
                    <span className='rounded-xl bg-blue-600/20 px-4 py-2 text-xs text-gray-300 shadow-[0_0_25px_rgba(59,130,246,0.3)] sm:text-sm'>
                      {item.stage}
                    </span>
                  </div>
                  <h3 className='text-title relative z-10 mt-3 text-lg font-semibold sm:mt-4 sm:text-xl'>
                    {item.title}
                  </h3>
                  <div className='relative z-10 my-2 h-px w-full bg-gradient-to-r from-white/10 to-transparent sm:my-3'></div>
                  <p className='text-md sm:text-md relative z-10 leading-relaxed text-gray-400 md:text-base'>
                    {item.description}
                  </p>
                  <div className='relative z-10 mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3'>
                    {item.points.map((point, idx) => (
                      <span
                        key={idx}
                        className='rounded-md bg-white/10 px-3 py-2 text-xs text-gray-300 sm:text-sm'
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  {/* Conditionally render button only for the third card */}
                  {item.ButtonText && item.ButtonTextLink && (
                    <div className='mt-4 flex justify-start'>
                      <GlowButton ButtonText={item.ButtonText} ButtonLink={item.ButtonTextLink} />
                    </div>
                  )}
                  {item.ButtonText && item.ButtonTextLink && (
                    <div className='absolute -right-10 -bottom-10 opacity-70'>
                      <Image
                        src='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926076/Gloitel/utils/star_fzn7cv.svg'
                        alt='design'
                        width={180}
                        height={180}
                        unoptimized
                        loading='lazy'
                      />
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <ImageCard2 HowWeWorkImg='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927938/Gloitel/howwework_gzjhr8.webp' />
      </div>
    </section>
  );
};

export default HowWeWork;
