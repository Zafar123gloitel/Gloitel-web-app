import React from 'react';
import { BgSquare2 } from './BgSquare';
import StrategyBadge from '@/components/StrategyBadge';
import { MiddleSectionHeads } from './SectionHeads';
import PurposeCard from '@/components/what-we-do/PurposeCard';
import { BrainCircuit, CircleAlert, Settings } from 'lucide-react';

interface NotEveryProblemProps {
  badgeText: string;
  heading: string;
  description: string;
  cards: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  bottomText: string;
}

const Not_Every_Problem = ({
  badgeText,
  heading,
  description,
  cards,
  bottomText,
}: NotEveryProblemProps) => {
  return (
    <div className='my-10'>
      <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-[10rem] flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text={badgeText} />
          </span>
          <MiddleSectionHeads SectionHead={heading} SectionDescription={description} />
        </div>
      </div>

      <div className='mx-auto -mt-20 flex max-w-[80%] flex-col items-center gap-4 lg:-mt-10 lg:flex-row'>
        {cards.map((item, index) => (
          <React.Fragment key={item.id}>
            <PurposeCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              className=''
            />

            {index !== cards.length - 1 && (
              <div
                className={[
                  'text-title inline-flex h-16 min-w-16 items-center justify-center rounded-full',
                  'border border-white bg-[#1447E633] text-2xl',
                ].join(' ')}
              >
                vs
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        className='mx-auto mt-10 flex max-w-[75%] items-center gap-3 rounded-2xl border border-transparent p-3'
        style={{
          background: `
      linear-gradient(#080B18, #080B18) padding-box,
      linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
    `,
        }}
      >
        <span className='inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#1447E633] text-2xl'>
          <CircleAlert className='h-5 w-5 text-blue-400' />
        </span>
        <p className='text-title'>{bottomText}</p>
      </div>
    </div>
  );
};

export default Not_Every_Problem;
