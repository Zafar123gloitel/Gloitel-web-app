"use client";

import React from "react";
import GlowPanel from "components/GlowPanel";
import StrategyBadge from "@/components/StrategyBadge";
import { LeftSectionHeads } from "components/SectionHeads";
import PurposeCard from "./PurposeCard";

interface EngineeringItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TheEngineeringProps {
  badgeText: string;
  sectionHead: string;
  sectionSubHead?: string;
  sectionDescription: string;
  data: EngineeringItem[];
}

const The_Engineering = ({
  badgeText,
  sectionHead,
  sectionSubHead = "",
  sectionDescription,
  data,
}: TheEngineeringProps) => {
  return (
    <div>
      <GlowPanel />

      <section className="mx-auto max-w-[90%] px-4 sm:px-6 sm:py-10 lg:px-8 lg:pt-10 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <span className="flex flex-col gap-4">
            <StrategyBadge text={badgeText} />

            <LeftSectionHeads
              SectionHead={sectionHead}
              SectionSubHead={sectionSubHead}
              SectionDescription={sectionDescription}
            />
          </span>

          {/* Right */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <div className="flex flex-col gap-3">
              {data.map((item) => (
                <PurposeCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default The_Engineering;
