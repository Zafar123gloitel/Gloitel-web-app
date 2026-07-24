import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import { LeftSectionHeads } from "../../component/SectionHeads";
import { accordionData, notIncludedData } from "./data";
import InfoCard from "./InfoCard";
import Accordion from "./AccordionAnimation";
import GlowPanel from "../../component/GlowPanel";

const Asked_Q = () => {
  return (
    <>
      <GlowPanel />
      <section className=" max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 sm:py-10  lg:pb-20  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="flex gap-6.5 flex-col">
            <span>
              <StrategyBadge text="Everything You Need to Know" />
            </span>
            <LeftSectionHeads
              SectionHead="Frequently Asked Questions"
              SectionSubHead=""
              SectionDescription="Answers to common questions about the Discovery Sprint,engagement process, timelines, and expected outcomes."
            />

            <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6"></div>
          </div>
          <div className="flex gap-4 flex-row flex-wrap justify-center lg:justify-start ">
            <Accordion data={accordionData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Asked_Q;
