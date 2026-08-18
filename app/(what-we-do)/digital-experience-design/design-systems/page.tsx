"use client";

import React from "react";
import Not_Every_Problem from "../../../component/Not_Every_Problem";
import {
  designSystemComponentsData,
  designSystemComponentsSectionHead,
  designSystemDeliverablesData,
  designSystemDeliverablesSectionHead,
  designSystemsCTAData,
  designSystemsHeroData,
  foundationDecisionData,
  maintenanceData,
  maintenanceSectionHead,
} from "./data";

import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ProblemCard from "../../../../components/ProblemCard";
import { CardShowcase } from "../../../../components";
import Execution_Plan from "../../../uiComponents/Execution_Plan";
import HeroSection from "../../components/HeroSection";
import ArchitectureCircle from "../../../uiComponents/ArchitectureCircle";

const page = () => {
  const positions = {
    top: "lg:top-0 lg:left-1/2 -translate-x-1/2",
    leftTop: "lg:left-0 xl:left-10 2xl:left-60 lg:top-40",
    rightTop: "lg:right-0 xl:right-10 2xl:right-60 lg:top-40",
    leftBottom: "lg:left-0 xl:left-10 2xl:left-60 lg:bottom-40",
    bottom: "lg:-bottom-5 lg:left-1/2 -translate-x-1/2",
    rightBottom: "lg:right-0 xl:right-10 2xl:right-60 lg:bottom-40",
  };
  return (
    <div>
      <HeroSection {...designSystemsHeroData} />
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge
                text={designSystemComponentsSectionHead.badgeText}
              />
            </span>
            <MiddleSectionHeads
              SectionHead={designSystemComponentsSectionHead.title}
              SectionDescription={designSystemComponentsSectionHead.description}
            />
          </div>
        </div>

        <section className="flex items-center -mt-10 ">
          <ArchitectureCircle
            data={designSystemComponentsData}
            image="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/What_a_Design_System_Includes_oghj6c.png"
            positions={positions}
          />
          ;
        </section>
      </section>
      <section>
        <Not_Every_Problem {...foundationDecisionData} />
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge
                text={designSystemDeliverablesSectionHead.badgeText}
              />
            </span>
            <MiddleSectionHeads
              SectionHead={designSystemDeliverablesSectionHead.title}
              SectionDescription={
                designSystemDeliverablesSectionHead.description
              }
            />
          </div>
        </div>

        <section className="grid grid-cols-1 -mt-20 gap-6 px-10  w-full  md:w-[80%] sm:mx-auto">
          {designSystemDeliverablesData.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.text}
              step
              number={index + 1}
              isLast={index === designSystemDeliverablesData.length - 1}
            />
          ))}
        </section>
      </section>
      <section>
        <section className=" overflow-hidden">
          <div className="flex flex-col items-center  mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
            <BgSquare2 />
            <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
              {/* Badge */}
              <span>
                <StrategyBadge text={maintenanceSectionHead.badgeText} />
              </span>
              <MiddleSectionHeads
                SectionHead={maintenanceSectionHead.title}
                SectionDescription={maintenanceSectionHead.description}
              />
            </div>
          </div>
          <section className="w-full  sm:w-[90%] -mt-20 mx-auto">
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={maintenanceData}
              cardHeight="h-[330px]  max-w-[330px] "
              gridClassName="gap-y-28"
              titleClassName="text-[28px] leading-8 "
              descriptionClassName="text-[16px] leading-5 mt-3 text-description "
            />
          </section>
        </section>
        <Execution_Plan
          badgeText={designSystemsCTAData.badgeText}
          title={designSystemsCTAData.title}
          description={designSystemsCTAData.description}
          buttonText={designSystemsCTAData.buttonText}
          buttonLink={designSystemsCTAData.buttonLink}
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
