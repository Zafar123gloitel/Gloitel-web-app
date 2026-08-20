import React from "react";
import { BgSquare2 } from "components/BgSquare";
import StrategyBadge from "@/components/StrategyBadge";
import { MiddleSectionHeads } from "components/SectionHeads";
import { CardShowcase } from "@/components";
import { EngagementData } from "@/app/(what-we-do)/ai-intelligent-systems/ai-strategy-consulting/data";

interface TimeLineProps {
  headingTag?: "h2" | "h3";
  subHeadingTag?: "h3" | "h4";
}

const TimeLine = ({
  headingTag = "h2",
  subHeadingTag = "h3",
}: TimeLineProps) => {
  return (
    <section className="overflow-hidden mt-20 md:mt-0 ">
      <div className="flex flex-col my-14 lg:my-40 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col -mt-10  gap-6.5 w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Engagement Details" />
          </span>
          <MiddleSectionHeads
            SectionHead="Clear Scope. Defined Timeline. Predictable Outcomes."
            SectionDescription="A focused engagement designed to deliver strategic clarity through a structured process, fixed scope, and clearly defined deliverables."
            headingTag={headingTag}
            subHeadingTag={subHeadingTag}
          />
        </div>
        <section className="w-full mt-10 sm:w-[90%] mx-auto ">
          <CardShowcase
            showStepBadge={false}
            showDivider={false}
            items={EngagementData}
            cardHeight="h-[210px]   max-w-[300px] "
            gridClassName="gap-y-6"
            titleClassName=""
            descriptionClassName=""
          />
        </section>
      </div>
    </section>
  );
};

export default TimeLine;
