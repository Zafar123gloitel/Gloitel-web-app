"use client";

import React, { useState } from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import IconCard from "./IconCard";

interface Technology {
  name: string;
  logo: string;
}

interface AI_SolutionsProps {
  badge: string;
  title: string;
  description: string;
  tabs: string[];
  technologies: Record<string, Technology[]>;
}

const AI_Solutions = ({
  badge,
  title,
  description,
  tabs,
  technologies,
}: AI_SolutionsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-[#151515] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <StrategyBadge text={badge} />

          <h2 className="mt-8 text-5xl font-medium text-white">{title}</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/45">
            {description}
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,.35)]"
                  : "border-white/15 bg-transparent text-white/80 hover:border-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#0B0B0B] p-12">
          <div className="flex flex-wrap justify-center mx-auto gap-8">
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
