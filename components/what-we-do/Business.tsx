import React from "react";
import { BgSquare2 } from "components/BgSquare";
import StrategyBadge from "@/components/StrategyBadge";
import { MiddleSectionHeads } from "@/components/SectionHeads";
import BusinessCard from "./BusinessCard";

interface BusinessProps {
  badgeText: string;
  sectionHead: string;
  sectionSubHead: string;
  sectionDescription: string;
  data: {
    id: string;
    icon: React.ReactNode;
    title: string;
  }[];
  headingTag?: "h2" | "h3";
  subHeadingTag?: "h3" | "h4";
}

const Business = ({
  badgeText,
  sectionHead,
  sectionSubHead,
  sectionDescription,
  data,
  headingTag = "h2",
  subHeadingTag = "h3",
}: BusinessProps) => {
  console.log(data, "0000");
  return (
    <div className="  overflow-hidden mb-10">
      <div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center mt-40">
        <BgSquare2 />

        <div className="flex gap-6.5 w-full -mt-44 flex-col text-center sm:w-1/2 lg:w-1/2">
          <span>
            <StrategyBadge text={badgeText} />
          </span>

          <MiddleSectionHeads
            SectionHead={sectionHead}
            SectionSubHead={sectionSubHead}
            SectionDescription={sectionDescription}
            headingTag={headingTag}
            subHeadingTag={subHeadingTag}
          />
        </div>
      </div>

      <div className="mx-auto grid -mt-10 w-full md:w-[85%] grid-cols-1 gap-5 px-10">
        {data.map((item) => (
          <BusinessCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Business;
