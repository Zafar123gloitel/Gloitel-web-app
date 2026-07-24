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
              <StrategyBadge text="What AI Integration Actually Involves" />
            </span>
            <LeftSectionHeads
              SectionHead="The Engineering behind Production AI Systems."
              SectionSubHead=""
              SectionDescription="Successful AI integration requires more than connecting a model to an application. We build the infrastructure, recovery mechanisms, and monitoring layers that keep AI systems stable, observable, and production-ready."
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
