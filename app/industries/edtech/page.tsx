"use client";

import React from "react";
import {
  edtechHeroData,
  edtechChallengesSectionHead,
  edtechCTAData,
  edtechSolutionsSectionHead,
  edtechTechStackData,
  edtechChallengesData,
  edtechSolutionsData,
} from "./data";
import HeroSection from "../../../components/HeroSection";
import { BgSquare2 } from "components/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "components/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";
import AI_Solutions from "uiComponents/AI_Solutions";
import Execution_Plan from "uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...edtechHeroData} />
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-40  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={edtechChallengesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={edtechChallengesSectionHead.title}
              SectionSubHead=" "
              SectionDescription={edtechChallengesSectionHead.description}
            />
          </div>
        </div>
        <div className="-mt-20">
          <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
            <Image
              src={edtechChallengesSectionHead.image}
              alt={edtechChallengesSectionHead.imageAlt}
              fill
              className="object-cover rounded-2xl h-full w-full  bg-white"
              loading="lazy"
            />
          </div>

          <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
            {edtechChallengesData.map((item, index) => (
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
            <StrategyBadge text={edtechSolutionsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={edtechSolutionsSectionHead.title}
            SectionSubHead=""
            SectionDescription={edtechSolutionsSectionHead.description}
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-[90%] -mt-5 mx-auto">
          <CardShowcase
            items={edtechSolutionsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight="h-[411px] max-w-[411px] "
            gridClassName="gap-y-6"
            titleClassName=""
            descriptionClassName=""
          />
        </section>
      </div>
      <section>
        <AI_Solutions
          badge={edtechTechStackData.badge}
          title={edtechTechStackData.title}
          description={edtechTechStackData.description}
          tabs={edtechTechStackData.tabs}
          technologies={edtechTechStackData.technologies}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText={edtechCTAData.badgeText}
          title={edtechCTAData.title}
          description={edtechCTAData.description}
          buttonText={edtechCTAData.badgeText}
          buttonLink={edtechCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
