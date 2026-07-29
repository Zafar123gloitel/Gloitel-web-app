"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  accordionData2,
  coreFeaturesData,
  mvpheroSection,
  technologyChoicesData,
  weekFourData,
  weekOneData,
  weekThreeData,
  weekTwoData,
} from "../data";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ArchitectureCircle from "../../components/ArchitectureCircle";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import AI_Solutions from "../../components/AI_Solutions";
import Asked_Q from "../../components/Asked_Q";
import Execution_Plan from "../../components/Execution_Plan";

const page = () => {
  const positions = {
    top: "lg:top-2 lg:left-1/2 lg:-translate-x-1/2",
    leftTop: "lg:left-8 xl:left-24 2xl:left-40 lg:top-52",
    rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:top-52",
    leftBottom: "lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52",
    bottom: "lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2",
    rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52",
  };
  return (
    <div>
      <HeroSection {...mvpheroSection} />
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="What Discovery Actually Delivers" />
            </span>
            <MiddleSectionHeads
              SectionHead="The Outputs of Discovery"
              SectionDescription="These outputs provide the clarity needed to align teams, define scope, and make confident product decisions."
            />
          </div>
        </div>

        <section className="flex items-center -mt-10">
          <ArchitectureCircle
            data={coreFeaturesData}
            image="/images/hrm.png"
            positions={positions}
          />
          ;
        </section>
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="Our MVP Build Process" />
            </span>
            <MiddleSectionHeads
              SectionHead="From Idea to Production Ready"
              SectionDescription="From architecture and development to launch and iteration, our structured sprint-based process transforms validated ideas into production-ready products built for real users and real feedback."
            />
          </div>
        </div>

        <section className=" -mt-40 gap-6 md:w-[80%] mx-auto    ">
          <Discover
            badgeText={weekOneData.badgeText}
            title={weekOneData.title}
            description={weekOneData.description}
            buttonText={weekOneData.buttonText}
            buttonLink={weekOneData.buttonLink}
            image={weekOneData.image}
            imageAlt={weekOneData.imageAlt}
          />

          <Assess
            badgeText={weekTwoData.badgeText}
            title={weekTwoData.title}
            description={weekTwoData.description}
            buttonText={weekTwoData.buttonText}
            buttonLink={weekTwoData.buttonLink}
            image={weekTwoData.image}
            imageAlt={weekTwoData.imageAlt}
          />

          <Discover
            badgeText={weekThreeData.badgeText}
            title={weekThreeData.title}
            description={weekThreeData.description}
            buttonText={weekThreeData.buttonText}
            buttonLink={weekThreeData.buttonLink}
            image={weekThreeData.image}
            imageAlt={weekThreeData.imageAlt}
          />

          <Assess
            badgeText={weekFourData.badgeText}
            title={weekFourData.title}
            description={weekFourData.description}
            buttonText={weekFourData.buttonText}
            buttonLink={weekFourData.buttonLink}
            image={weekFourData.image}
            imageAlt={weekFourData.imageAlt}
          />
        </section>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={technologyChoicesData.badge}
          title={technologyChoicesData.title}
          description={technologyChoicesData.description}
          tabs={technologyChoicesData.tabs}
          technologies={technologyChoicesData.technologies}
        />
      </section>
      <section>
        <Asked_Q
          accordionData={accordionData2}
          badgeText={"Everything You Need to Know"}
          sectionHead={"Frequently Asked Questions"}
          sectionSubHead=""
          sectionDescription={
            "Understand how we approach MVP development, manage scope, and help teams move from idea to launch."
          }
        />
      </section>
      <Execution_Plan
        badgeText="Ready to Build?"
        title="Turn Your Idea Into a Working Product"
        description="From architecture and development to deployment, we help you launch quickly and learn from real user feedback."
        buttonText="Start Your MVP"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
