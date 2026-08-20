'use client';

import Image from 'next/image';
import styles from './PortfolioCard.module.css';
import { useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { HorizontalDivider, VerticalDivider } from './SectionDivider';

const PortfolioCard = ({ i, color, scrollProgress }) => {
  const portfolio = [
    {
      title: 'CGMMSSY',
      year: '2018',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926541/Gloitel/cgmmsy/one_ygajrf.svg',
      link: '/portfolio/1',
      tag: ['Website', 'CRM'],
    },
    {
      title: 'PATH IAS ACADEMY',
      year: '2024',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926539/Gloitel/pathias/one_btremr.webp',
      link: '/portfolio/2',
      tag: ['Website', 'UI/UX Design'],
    },
    {
      title: 'HRM TECHNOLOGY',
      year: '2024',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926537/Gloitel/hrm/one_r0srni.webp',
      link: '/portfolio/3',
      tag: ['Dental Care', 'Landing Page'],
    },
  ];
  // Card scale linked to parent scroll

  const translateY = useTransform(scrollProgress, [i * 0.2, i * 0.2 + 0.3], [50, 0]);
  // Image zoom
  const imageScale = useTransform(scrollProgress, [0, 1], [1.5, 1]);

  return (
    <div>
      {portfolio?.map((item, i) => (
        <div key={i} className={styles.cardContainer}>
          <motion.div
            style={{
              y: translateY,
            }}
            className='top-[25%] mt-10 w-full px-4 sm:mt-12 sm:px-8 md:px-16'
          >
            <div className='relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/40 bg-gradient-to-r from-gray-950/90 to-black/80 p-2 shadow-xl backdrop-blur sm:p-3'>
              <div className='relative w-full overflow-hidden rounded-2xl pt-[46.25%]'>
                <Link href={item?.link}>
                  {/* IMAGE ZOOM WRAPPER */}
                  <motion.div className='absolute inset-0 w-full' style={{ scale: imageScale }}>
                    <Image
                      width={1920}
                      height={1080}
                      src={item?.image}
                      alt='image'
                      className='h-full w-full rounded-2xl object-cover'
                      unoptimized
                      loading='lazy'
                    />
                  </motion.div>

                  {/* BOTTOM HEADING OVERLAY */}
                  <div
                    style={{ scale: imageScale }}
                    className='m-2 flex w-[99%] items-center justify-between rounded-xl bg-black px-5 backdrop-blur-lg'
                  >
                    <div className='flex items-center gap-4 rounded-xl border border-neutral-500/20 bg-gray-800/20 px-4 py-2 text-sm backdrop-blur-2xl sm:text-base'>
                      <h2 className='text-title text-lg tracking-wide'>{item?.title}</h2>

                      <span className='text-md font-normal text-gray-400'>{item?.year}</span>
                    </div>
                    <VerticalDivider />
                    <div className='shadow-inner-glow h-10 w-[40%] overflow-hidden rounded-xl bg-black/40 p-1'>
                      <div className='progress-fill'></div>
                    </div>
                    <VerticalDivider />
                    <div className='my-4 flex flex-wrap gap-3'>
                      {item?.tag?.map((t, i) => (
                        <span
                          key={i}
                          className='rounded-xl border border-neutral-500/20 bg-gray-800/20 px-4 py-2 text-sm backdrop-blur-2xl sm:text-base'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
