"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { LeftSectionHeads, MiddleSectionHeads } from "../../component/SectionHeads";
import { Card, CardShowcase, CardTitle, } from "../../../components";
import ImageCard from "../components/ImageCard";
import { designGapData, designGapNote, designGapSectionHead, designTeamData, designTeamSectionHead, designToolsData, digitalExperienceCTAData, digitalExperienceHeroData, digitalPracticeData, digitalPracticeSectionHead, whatWeDesignData, whatWeDesignSectionHead } from "./data";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import GlowPanel from "../../component/GlowPanel";


const page = () => {
  return <div>
    <section>
      <HeroSection
        badgeText={digitalExperienceHeroData.badgeText}
        title={digitalExperienceHeroData.title}
        description={digitalExperienceHeroData.description}
        image={digitalExperienceHeroData.image}
        imageAlt={digitalExperienceHeroData.imageAlt}
        video={digitalExperienceHeroData.video}
        primaryButton={digitalExperienceHeroData.primaryButton}
        secondaryButton={digitalExperienceHeroData.secondaryButton}
      />
    </section>
    <section className=" overflow-hidden">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={designGapSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={designGapSectionHead.title}
            SectionDescription={designGapSectionHead.description}
          />
        </div>
        <section className="w-full  sm:w-[90%] mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={designGapData}
            cardHeight="h-[290px]   max-w-[300px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-description "
          />
          <div
            className="max-w-[75%] mx-auto mt-4 rounded-2xl flex items-center gap-3 border border-transparent p-3"
            style={{
              background: `
                  linear-gradient(#080B18, #080B18) padding-box,
                  linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
                `,
            }}
          >
            <span className="inline-flex h-12 min-w-12 items-center text-2xl text-title bg-[#1447E633] justify-center rounded-full ">
             {designGapNote.icon}
            </span>
            <p className="text-title">{designGapNote.text}</p>
          </div>
        </section>
      </div>
    </section>
    <section className="overflow-hidden py-20 lg:py-20">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={digitalPracticeSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={digitalPracticeSectionHead.title}
            SectionDescription={digitalPracticeSectionHead.description}
          />
        </div>
      </div>

      <div className=" -mt-10 flex justify-center items-center flex-wrap gap-6  ">
        {digitalPracticeData.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </div>
    </section>
    <section>
      <AI_Solutions
        badge={designToolsData.badge}
        title={designToolsData.title}
        description={designToolsData.description}
        tabs={designToolsData.tabs}
        technologies={designToolsData.technologies}
      />
    </section>
    <section>
      <GlowPanel />
      <section className=" max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 sm:py-10 lg:pt-10 lg:pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="flex gap-4 flex-col">
            <span>
              <StrategyBadge text={designTeamSectionHead.badgeText} />
            </span>
            <LeftSectionHeads
              SectionHead={designTeamSectionHead.title}
              SectionSubHead={""}
              SectionDescription={designTeamSectionHead.description}
            />

            <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6"></div>
          </div>
          <div className="flex gap-4 flex-col  justify-center lg:justify-end ">
            {designTeamData.map((item) => (
              <Card key={item.id} className=" border border-white/10 rounded-2xl flex gap-4 items-center">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
                  {item.text}
                </CardTitle>
              </Card>

            ))}
          </div>
        </div>
      </section>

    </section>
    <section>
      <Execution_Plan
        badgeText={digitalExperienceCTAData.badgeText}
        title={digitalExperienceCTAData.title}
        description={digitalExperienceCTAData.description}
        buttonText={digitalExperienceCTAData.buttonText}
        buttonLink={digitalExperienceCTAData.buttonLink}
        onclick={() => undefined}
      />
    </section>
  </div>;
};

export default page;
