import React from "react";
import TechScroll from "./TechScroll";
import { GlowButton } from "./Button";
import { CenterBadge } from "./Badge";
import { BgSquare2 } from "./BgSquare";
import { MiddleSectionHeads } from "./SectionHeads";

const LaunchYourSite = () => {
  return (
    <section className="relative isolate sm:px-6 lg:px-8 py-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <CenterBadge LaunchYourSiteBadge="Launch Your Site" />

          {/* Headings */}
          <MiddleSectionHeads
            SectionHead="The Trusted Rise Partner"
            SectionSubHead="For Startups And Agencies"
            SectionDescription="We leverage industry-leading platforms and tools to deliver cutting-edge AI, cloud, and data-driven solutions."
          />

          <GlowButton ButtonText="View About Gloitel" Buttonlink="/about" />
        </div>

        {/* AutoScroll */}
        <div className="overflow-x-auto scrollbar-hide mt-12 w-full">
          <TechScroll />
        </div>
      </div>
    </section>
  );
};

export default LaunchYourSite;
