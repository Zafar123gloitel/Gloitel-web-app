import React from "react";
import { LeftSectionHeads } from "../../component/SectionHeads";
import Image from "next/image";
import { LeftBadge } from "../../component/Badge";
import HowWeWork from "../../component/HowWeWork";
import StrategyBadge from "../../../components/StrategyBadge";
import InfoCard from "./InfoCard";
import { notIncludedData } from "./data";

const Strategy = () => {
  return (
    <section className=" max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 sm:py-10 lg:pt-10 lg:pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="flex gap-4 flex-col">
          <span>
            <StrategyBadge text="What You Walk Away With" />
          </span>
          <LeftSectionHeads
            SectionHead="From Intelligent Design"
            SectionSubHead="to AI-Powered Launch"
            SectionDescription="We make it easy to bring your ideas to life, guiding you from concept to a fully launched product."
          />

          <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6"></div>
        </div>
        <div className="flex gap-4 flex-row flex-wrap justify-center lg:justify-start ">
          {notIncludedData.map((item) => (
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
