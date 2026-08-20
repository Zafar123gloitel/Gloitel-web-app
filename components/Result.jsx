import Link from "next/link";
import React from "react";
import AutoScroll from "./AutoScroll";
import { CenterBadge } from "./Badge";
import { BgSquare1, BgSquare2 } from "./BgSquare";
import { GlowButton } from "./Button";
import { MiddleSectionHeads } from "./SectionHeads";
import GlowPanel from "./GlowPanel";
import StrategyBadge from "@/components/StrategyBadge";

const Result = () => {
  return (
    <section className="relative isolate pt-10 sm:px-6 lg:px-8 py-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 items-center text-center">
          {/* Badge */}
          {/* <CenterBadge ResultsBadge="Results" /> */}
            <StrategyBadge text={"Results"}/>
          <MiddleSectionHeads
            SectionHead="Powering Your Success"
            SectionSubHead="With Intelligent Solutions!"
            SectionDescription="We focus on AI-driven innovation at every step. Our goal: measurable results that accelerate your growth."
          />
          <GlowButton buttonText="Book a 15-min call" buttonLink="/contact" />
        </div>

        {/* AutoScroll */}
        <div className="mt-12 w-full">
          <AutoScroll />
        </div>
      </div>
      <GlowPanel />
    </section>
  );
};

export default Result;
