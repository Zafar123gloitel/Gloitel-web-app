"use client";

import React from "react";
import {
  realEstateChallengesSectionHead,
  realEstateCTAData,
  realEstateSolutionsSectionHead,
  realEstateHeroData,
  realEstateChallengesData,
  realEstateSolutionsData,
} from "../data";
import HeroSection from "../../../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";
import Execution_Plan from "../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...realEstateHeroData} />
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-40  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={realEstateChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={realEstateChallengesSectionHead.title}
              SectionSubHead=" "
              SectionDescription={realEstateChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className="-mt-20">
          <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
            <Image
              src={realEstateChallengesSectionHead.image}
              alt={realEstateChallengesSectionHead.imageAlt}
              fill
              className="object-cover rounded-2xl h-full w-full  bg-white"
              loading="lazy"
            />
          </div>

          <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
            {realEstateChallengesData.map((item, index) => (
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
            <StrategyBadge text={realEstateSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={realEstateSolutionsSectionHead.title}
            SectionSubHead=""
            SectionDescription={realEstateSolutionsSectionHead.description}
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-[90%] -mt-5 mx-auto">
          <CardShowcase
            items={realEstateSolutionsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight="h-[411px] max-w-[411px] "
            gridClassName="gap-y-6"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-6 mt-3 text-description "
          />
        </section>
      </div>
      <section>
        <Execution_Plan
          badgeText={realEstateCTAData.badgeText}
          title={realEstateCTAData.title}
          description={realEstateCTAData.description}
          buttonText={realEstateCTAData.badgeText}
          buttonLink={realEstateCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
