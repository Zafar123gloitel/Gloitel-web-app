import React from 'react';
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '@/components/StrategyBadge';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import BusinessCard from './BusinessCard';

interface BusinessProps {
  badgeText: string;
  sectionHead: string;
  sectionSubHead: string;
  sectionDescription: string;
  data: {
    id: string;
    icon: React.ReactNode;
    title: string;
  }[];
  headingTag?: 'h2' | 'h3';
  subHeadingTag?: 'h3' | 'h4';
}

const Business = ({
  badgeText,
  sectionHead,
  sectionSubHead,
  sectionDescription,
  data,
  headingTag = 'h2',
  subHeadingTag = 'h3',
}: BusinessProps) => {
  return (
    <div className='mb-10 overflow-hidden'>
      <div className='relative z-10 mx-auto mt-40 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />

        <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          <span>
            <StrategyBadge text={badgeText} />
          </span>

          <MiddleSectionHeads
            SectionHead={sectionHead}
            SectionSubHead={sectionSubHead}
            SectionDescription={sectionDescription}
            headingTag={headingTag}
            subHeadingTag={subHeadingTag}
          />
        </div>
      </div>

      <div className='mx-auto -mt-10 grid w-full grid-cols-1 gap-5 px-10 md:w-[85%]'>
        {data.map(item => (
          <BusinessCard key={item.id} icon={item.icon} title={item.title} className='' />
        ))}
      </div>
    </div>
  );
};

export default Business;
