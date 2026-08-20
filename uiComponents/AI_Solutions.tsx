"use client";

import React, { useState } from "react";
import StrategyBadge from "@/components/StrategyBadge";
import IconCard from "@/components/card-showcase/IconCard";

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
  icontype = false
}: AI_SolutionsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];
  const hasMoreThanFiveTabs = tabs.length > 5;

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="bg-surface-1 py-24">
      <div className="mx-auto max-w-8xl px-6">
        {/* Heading */}
        <div className="text-center">
          <StrategyBadge text={badge} />

          <h2 className="mt-8 text-5xl font-medium text-title">{title}</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-description">
            {description}
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <div
            className={`flex gap-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${hasMoreThanFiveTabs
                ? "mx-auto w-[90%] max-w-6xl overflow-x-auto"
                : "mx-auto w-[90%] max-w-6xl overflow-x-auto lg:w-auto lg:max-w-none lg:justify-center lg:overflow-visible"
              }`}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabClick(index)}
                className={`shrink-0 whitespace-nowrap rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 ${activeTabIndex === index
                    ? "border-blue-500 bg-blue-600 text-title shadow-[0_0_20px_rgba(37,99,235,.35)]"
                    : "border-white/15 bg-transparent text-description hover:border-blue-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14  hidden overflow-hidden rounded-3xl border-white/10 bg-surface-2 py-12  px-auto lg:block">
          <div
            className="flex transition-transform duration-1000 ease-out p-5 sm:p-0 "
            style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
          >
            {tabs.map((tab) => (
              <div key={tab} className="min-w-full shrink-0 ">
                <div className="flex gap-5  flex-wrap  items-center justify-center ">
                  {technologies[tab]?.map((item, index) => (
                    <IconCard
                      key={index}
                      name={item.name}
                      icontype={false}
                      logo={item.logo}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mobile screen */}
        <div className="mt-14 rounded-3xl border-white/10 bg-surface-2 p-4 lg:hidden">
          <div
            key={activeTab}
            className="grid animate-fadeIn grid-cols-2 justify-items-center gap-4 sm:grid-cols-3"
          >
            {technologies[activeTab]?.map((item, index) => (
              <IconCard
                key={index}
                name={item.name}
                icontype={false}
                logo={item.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Solutions;
