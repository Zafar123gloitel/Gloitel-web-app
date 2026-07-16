import React from "react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { CardShowcase } from "../../../components";
import { showcaseItems } from "./showcaseItems ";
import GlowPanel from "../../component/GlowPanel";

const TimeLine = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Our Approach" />
          </span>
          <MiddleSectionHeads
            SectionHead="Diagnose Before You Deploy"
            SectionDescription="We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap."
          />
        </div>
      </div>
      <section className="w-[80%] mx-auto">
        <CardShowcase
          showStepBadge={false}
          showDivider={false}
          items={showcaseItems}
        />
      </section>
      <GlowPanel />
    </section>
  );
};

export default TimeLine;
