import React from "react";
import GlowPanel from "../../component/GlowPanel";
import StrategyBadge from "../../../components/StrategyBadge";
import { LeftSectionHeads } from "../../component/SectionHeads";
import PurposeCard from "./PurposeCard";
import { engineeringData } from "./data";

const The_Engineering = () => {
  return (
    <div>
      <GlowPanel />
      <section className=" max-w-[90%]  mx-auto px-4 sm:px-6 lg:px-8 sm:py-10 lg:pt-10  lg:pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="flex gap-4 flex-col">
            <span>
              <StrategyBadge text="Everything You Need to Know" />
            </span>
            <LeftSectionHeads
              SectionHead="Frequently Asked "
              SectionSubHead="Questions"
              SectionDescription="Answers to common questions about the Discovery Sprint, engagement process, timelines, and expected outcomes."
            />
          </div>
          <div className="flex gap-4 flex-row flex-wrap justify-center lg:justify-start ">
            <div className="flex flex-col gap-3">
              {engineeringData.map((item) => (
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
