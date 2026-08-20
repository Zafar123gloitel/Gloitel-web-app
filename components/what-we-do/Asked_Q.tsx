import React from 'react';
import StrategyBadge from '@/components/StrategyBadge';
import { LeftSectionHeads } from '@/components/SectionHeads';
import InfoCard from './InfoCard';
import Accordion from './AccordionAnimation';
import GlowPanel from '@/components/GlowPanel';

interface AccordionItem {
  title: string;
  description: string;
  [key: string]: any;
}

interface AskedQProps {
  badgeText?: string;
  sectionHead?: string;
  sectionSubHead?: string;
  sectionDescription?: string;
  accordionData: AccordionItem[];
  notIncludedData?: any[];
  showGlow?: boolean;
  headingTag?: 'h2' | 'h3';
  subHeadingTag?: 'h3' | 'h4';
}

const Asked_Q: React.FC<AskedQProps> = ({
  badgeText = 'Everything You Need to Know',
  sectionHead = 'Frequently Asked Questions',
  sectionSubHead = '',
  sectionDescription = 'Answers to common questions about the Discovery Sprint, engagement process, timelines, and expected outcomes.',
  accordionData,
  notIncludedData,
  showGlow = true,
  headingTag = 'h2',
  subHeadingTag = 'h3',
}) => {
  if (!accordionData || accordionData.length === 0) {
    return null; // ya koi fallback UI
  }

  return (
    <>
      {showGlow && <GlowPanel />}
      <section className='max-w-8xl mx-auto overflow-hidden px-4 sm:px-6 sm:py-10 lg:px-8 lg:pb-20 xl:px-20'>
        <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16'>
          {/* LEFT */}
          <div className='flex flex-col gap-6.5'>
            <span>
              <StrategyBadge text={badgeText} />
            </span>
            <LeftSectionHeads
              SectionHead={sectionHead}
              SectionSubHead={sectionSubHead}
              SectionDescription={sectionDescription}
              headingTag={headingTag}
              subHeadingTag={subHeadingTag}
            />
            <div className='mt-2 grid gap-4 sm:mt-4 sm:gap-6'></div>
          </div>

          {/* RIGHT */}
          <div className='flex flex-row flex-wrap justify-center gap-4 lg:justify-start'>
            <Accordion data={accordionData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Asked_Q;
