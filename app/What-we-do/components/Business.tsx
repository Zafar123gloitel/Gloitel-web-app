import React from "react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { outcomesData } from "../components/data";
import BusinessCard from "./BusinessCard";
import GlowPanel from "../../component/GlowPanel";

const Business = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="What You Walk Away With" />
          </span>
          <MiddleSectionHeads
            SectionHead="A Clear AI Roadmap backed by "
            SectionSubHead=" Business Value"
            SectionDescription="Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes."
          />
        </div>
      </div>

      {outcomesData.map((item) => (
        <BusinessCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          className=""
        />
      ))}
      <GlowPanel />
    </div>
  );
};

export default Business;
