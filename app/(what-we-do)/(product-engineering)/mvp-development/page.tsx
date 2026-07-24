import React from "react";
import HeroSection from "../../components/HeroSection";
import { heroSectionData, mvpheroSection } from "../data";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ArchitectureCircle from "../../components/ArchitectureCircle";

const page = () => {
  return (
    <div>
      <HeroSection {...mvpheroSection} />
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="What Discovery Actually Delivers" />
            </span>
            <MiddleSectionHeads
              SectionHead="The Outputs of Discovery"
              SectionDescription="These outputs provide the clarity needed to align teams, define scope, and make confident product decisions."
            />
          </div>
        </div>

        <section className="flex items-center -mt-10">
          <ArchitectureCircle />
        </section>
      </section>
    </div>
  );
};

export default page;
