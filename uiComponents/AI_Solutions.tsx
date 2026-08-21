'use client';

import { useState } from 'react';
import StrategyBadge from '@/components/StrategyBadge';
import IconCard from '@/components/card-showcase/IconCard';

interface Technology {
  name: string;
  logo: string;
}

interface AI_SolutionsProps {
  badge: string;
  title: string;
  description: string;
  tabs: string[];
  icontype?: boolean;
  technologies: Record<string, Technology[]>;
}

const AI_Solutions = ({
  badge,
  title,
  description,
  tabs,
  technologies,
  icontype: _icontype = false,
}: AI_SolutionsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];
  const hasMoreThanFiveTabs = tabs.length > 5;

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className='bg-surface-1 py-24'>
      <div className='max-w-8xl mx-auto px-6'>
        {/* Heading */}
        <div className='text-center'>
          <StrategyBadge text={badge} />

          <h2 className='text-title mt-8 text-5xl font-medium'>{title}</h2>

          <p className='text-description mx-auto mt-6 max-w-3xl text-lg leading-8'>{description}</p>
        </div>

        {/* Tabs */}
        <div className='mt-14 flex justify-center'>
          <div
            className={`flex [scrollbar-width:none] gap-4 pb-4 [&::-webkit-scrollbar]:hidden ${
              hasMoreThanFiveTabs
                ? 'mx-auto w-[90%] max-w-6xl overflow-x-auto'
                : 'mx-auto w-[90%] max-w-6xl overflow-x-auto lg:w-auto lg:max-w-none lg:justify-center lg:overflow-visible'
            }`}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type='button'
                onClick={() => handleTabClick(index)}
                className={`shrink-0 rounded-lg border px-5 py-2.5 text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTabIndex === index
                    ? 'text-title border-blue-500 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,.35)]'
                    : 'text-description border-white/15 bg-transparent hover:border-blue-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className='bg-surface-2 px-auto mt-14 hidden overflow-hidden rounded-3xl border-white/10 py-12 lg:block'>
          <div
            className='flex p-5 transition-transform duration-1000 ease-out sm:p-0'
            style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
          >
            {tabs.map(tab => (
              <div key={tab} className='min-w-full shrink-0'>
                <div className='flex flex-wrap items-center justify-center gap-5'>
                  {technologies[tab]?.map((item, index) => (
                    <IconCard key={index} name={item.name} icontype={false} logo={item.logo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mobile screen */}
        <div className='bg-surface-2 mt-14 rounded-3xl border-white/10 p-4 lg:hidden'>
          <div
            key={activeTab}
            className='animate-fadeIn grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3'
          >
            {technologies[activeTab]?.map((item, index) => (
              <IconCard key={index} name={item.name} icontype={false} logo={item.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Solutions;
