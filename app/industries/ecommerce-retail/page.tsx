"use client";

import React from "react";
import {
  ecommerceHeroData,
  ecommerceChallengesData,
  ecommerceChallengesSectionHead,
  ecommerceCTAData,
  ecommerceSolutionsData,
  ecommerceSolutionsSectionHead,
  ecommerceTechStackData,
} from "../data";
import HeroSection from "../../../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import dynamic from "next/dynamic";
import { LoadingSection } from "../../component/LoadingSection";

const AI_Solutions = dynamic(() => import("../../uiComponents/AI_Solutions"), {
  loading: () => <LoadingSection minHeight="min-h-[500px]" />,
});

const page = () => {
  return (
    <div>
      <HeroSection {...ecommerceHeroData} />
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-40  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={ecommerceChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={ecommerceChallengesSectionHead.title}
              SectionSubHead=" "
              SectionDescription={ecommerceChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className="-mt-20">
          <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
            <Image
              src={ecommerceChallengesSectionHead.image}
              alt={ecommerceChallengesSectionHead.imageAlt}
              fill
              className="object-cover rounded-2xl h-full w-full  bg-white"
            />
          </div>

          <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
            {ecommerceChallengesData.map((item, index) => (
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
            <StrategyBadge text={ecommerceSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={ecommerceSolutionsSectionHead.title}
            SectionSubHead=""
            SectionDescription={ecommerceSolutionsSectionHead.description}
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-320.25 -mt-5 mx-auto">
          <CardShowcase
            items={ecommerceSolutionsData}
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
          badge={ecommerceTechStackData.badge}
          title={ecommerceTechStackData.title}
          description={ecommerceTechStackData.description}
          tabs={ecommerceTechStackData.tabs}
          technologies={ecommerceTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={ecommerceCTAData.badgeText}
          title={ecommerceCTAData.title}
          description={ecommerceCTAData.description}
          buttonText={ecommerceCTAData.badgeText}
          buttonLink={ecommerceCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
