"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { LeftSectionHeads, MiddleSectionHeads } from "../../component/SectionHeads";
import { Card, CardShowcase, CardTitle, } from "../../../components";
import { showcaseItems } from "../components/showcaseItems ";
import ImageCard from "../components/ImageCard";
import { whatWeDesignData, whatWeDesignSectionHead } from "./data";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import { aiSolutionsDataJson, notIncludedData } from "../components/data";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import GlowPanel from "../../component/GlowPanel";


const page = () => {
  return <div>
    <section>
      <HeroSection
        badgeText="AI Agents & Automation"
        title="AI Agents that Take Action, Not Just Instructions."
        description="We design and deploy production-ready AI agents that can make decisions, interact with systems, and automate complex workflows with minimal human intervention."
        image="/images/What-we-do/Rectangle 1.png"
        imageAlt="Hero Image"
        video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
        primaryButton={{
          href: "/contact",
          text: "Discuss Your Automation Use Case",
        }}
        secondaryButton={{
          href: "/case-studies",
          text: "Explore Agentic AI",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          ),
        }}
      />
    </section>
    <section className=" overflow-hidden">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Our Approach" />
          </span>
          <MiddleSectionHeads
            SectionHead="Diagnose Before You Deploy"
            SectionDescription="We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap."
          />
        </div>
        <section className="w-full  sm:w-[90%] mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={showcaseItems}
            cardHeight="h-[250px]   max-w-[300px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-muted "
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
            <span className="inline-flex h-12 min-w-12 items-center text-2xl bg-[#1447E633] justify-center rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </span>
            <p>{"We diagnose before we build. Engineering starts only after we've defined where AI will create measurable business impact and long-term value."}</p>
          </div>
        </section>
      </div>
    </section>
    <section className="overflow-hidden py-20 lg:py-20">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={whatWeDesignSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={whatWeDesignSectionHead.title}
            SectionDescription={whatWeDesignSectionHead.description}
          />
        </div>
      </div>

      <div className=" -mt-10 flex justify-center items-center flex-wrap gap-6  ">
        {whatWeDesignData.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </div>
    </section>
    <section>
      <AI_Solutions
        badge={aiSolutionsDataJson.badge}
        title={aiSolutionsDataJson.title}
        description={aiSolutionsDataJson.description}
        tabs={aiSolutionsDataJson.tabs}
        technologies={aiSolutionsDataJson.technologies}
      />
    </section>
    <section>
      <GlowPanel />
      <section className=" max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 sm:py-10 lg:pt-10 lg:pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="flex gap-4 flex-col">
            <span>
              <StrategyBadge text={""} />
            </span>
            <LeftSectionHeads
              SectionHead={"SectionHead"}
              SectionSubHead={""}
              SectionDescription={" SectionDescription "}
            />

            <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6"></div>
          </div>
          <div className="flex gap-4 flex-col  justify-center lg:justify-end ">
            {[{ title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" },
            { title: " fdnvjkgvkdjnkv" }

            ].map((item) => (
              <Card>
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
                  {item.title}
                </CardTitle>
              </Card>

            ))}
          </div>
        </div>
      </section>

    </section>
    <section>
      <Execution_Plan
        badgeText="Start Your ML Initiative"
        title="Build ML Systems that Measurable Outcomes"
        description="Whether you're exploring your first ML use case or scaling existing models, we help you build solutions that create real operational impact."
        buttonText="Talk to Our ML Team"
        buttonLink="/contact"
        onclick={() => undefined}
      />
    </section>
  </div>;
};

export default page;
