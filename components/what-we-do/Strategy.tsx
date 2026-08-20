import React from "react";
import { LeftSectionHeads } from "components/SectionHeads";
import Image from "next/image";
import { LeftBadge } from "components/Badge";
import HowWeWork from "components/HowWeWork";
import StrategyBadge from "@/components/StrategyBadge";
import InfoCard from "./InfoCard";

const Strategy = ({
  cardData,
  SectionHead,
  SectionSubHead,
  SectionDescription,
  StrategyBadgeText,
  headingTag = "h2",
  subHeadingTag = "h3",
}) => {
  return (
    <section className=" max-w-8xl mb-10  mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 sm:py-10 lg:pt-10 lg:pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="flex gap-4 flex-col">
          <span>
            <StrategyBadge text={StrategyBadgeText} />
          </span>
          <LeftSectionHeads
            SectionHead={SectionHead}
            SectionSubHead={SectionSubHead}
            SectionDescription={SectionDescription}
            headingTag={headingTag}
            subHeadingTag={subHeadingTag}
          />

          <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6"></div>
        </div>
        <div className="flex gap-4 flex-row flex-wrap justify-center lg:justify-end ">
          {cardData.map((item) => (
            <InfoCard
              key={item.id}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
