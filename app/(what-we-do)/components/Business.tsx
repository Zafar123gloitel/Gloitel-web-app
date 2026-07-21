import React from "react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import BusinessCard from "./BusinessCard";


interface BusinessProps {
  badgeText: string;
  sectionHead: string;
  sectionSubHead: string;
  sectionDescription: string;
  data: {
    id: number;
    icon: React.ReactNode;
    title: string;
  }[];
}

const Business = ({
  badgeText,
  sectionHead,
  sectionSubHead,
  sectionDescription,
  data,
}: BusinessProps) => {
  return (
    <div>
      <div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center">
        <BgSquare2 />

        <div className="flex w-full -mt-[10rem] flex-col text-center sm:w-1/2 lg:w-1/2">
          <span>
            <StrategyBadge text={badgeText} />
          </span>

          <MiddleSectionHeads
            SectionHead={sectionHead}
            SectionSubHead={sectionSubHead}
            SectionDescription={sectionDescription}
          />
        </div>
      </div>

      <div className="mx-auto grid -mt-10 w-[85%] grid-cols-1 gap-5">
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
