"use client";

import React from "react";
import {
  healthcareChallengesData,
  healthcareChallengesSectionHead,
  healthcareCTAData,
  healthcareHeroData,
  healthcareSolutionsData,
  healthcareSolutionsSectionHead,
  healthcareTechStackData,
} from "../data";
import HeroSection from "../../../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";

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
      <HeroSection {...healthcareHeroData} />
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-40  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={healthcareChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={healthcareChallengesSectionHead.title}
              SectionSubHead=" "
              SectionDescription={healthcareChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className="-mt-20">
          <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
            <Image
              src={healthcareChallengesSectionHead.image}
              alt={healthcareChallengesSectionHead.imageAlt}
              fill
              className="object-cover rounded-2xl h-full w-full  bg-white"
            />
          </div>

          <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
            {healthcareChallengesData.map((item, index) => (
              <ProblemCard key={index} title={item.text} />
            ))}
          </section>
        </div>
      </section>
      <div className="flex flex-col mt-24 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col -mt-10 w-full gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={healthcareSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={healthcareSolutionsSectionHead.title}
            SectionSubHead=""
            SectionDescription={healthcareSolutionsSectionHead.description}
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-320.25 -mt-5 mx-auto">
          <CardShowcase
            items={healthcareSolutionsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight="h-[411px] max-w-[411px] "
            gridClassName="gap-y-6"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-6 mt-3 text-muted "
          />
        </section>
      </div>
      <section>
        <AI_Solutions
          badge={healthcareTechStackData.badge}
          title={healthcareTechStackData.title}
          description={healthcareTechStackData.description}
          tabs={healthcareTechStackData.tabs}
          technologies={healthcareTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={healthcareCTAData.badgeText}
          title={healthcareCTAData.title}
          description={healthcareCTAData.description}
          buttonText={healthcareCTAData.badgeText}
          buttonLink={healthcareCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
