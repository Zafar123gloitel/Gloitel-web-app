"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  heroSectionDataGenerative,
  aiServicesData,
  discoverData,
  assessData,
  executionStepOne,
  executionStepTwo,
  executionStepThree,
  executionStepFour,
  executionStepFive,
  Real_World,
  caseStudies,
  aiSolutionsData,
} from "../../components/data";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import StrategyBadge from "../../../../components/StrategyBadge";
import { BgSquare2 } from "../../../component/BgSquare";
import { CardShowcase } from "../../../../components";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";

import Strategy from "../../components/Strategy";
import GlowPanel from "../../../component/GlowPanel";
import ImageCard from "../../../component/ImageCard";
import { ArrowUpIcon } from "lucide-react";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div className="overflow-hidden mt-10">
      <HeroSection {...heroSectionDataGenerative} />
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col -mt-10 w-full gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="What We Build" />
          </span>
          <MiddleSectionHeads
            SectionHead="AI Systems Built for Real Business Workflows."
            SectionSubHead=""
            SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-[90%] mt-20 mx-auto">
          <CardShowcase
            items={aiServicesData}
            showDivider={true}
            showStepBadge={false}
            cardHeight="h-[411px] max-w-[411px] "
            gridClassName="gap-y-6"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-6 mt-3 text-muted "
          />
        </section>
      </div>

      <div className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col -mt-10 gap-6.5 w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Our Build Process" />
          </span>
          <MiddleSectionHeads
            SectionHead="How we turn AI Concepts 
into Production Systems."
            SectionSubHead=""
            SectionDescription="From initial discovery and model selection to deployment and ongoing monitoring, we follow a structured process that transforms AI concepts into secure, scalable, and production-ready solutions."
          />
        </div>
        <section className="w-full md:w-[80%] xl:w-[90%] mx-auto">
          <Discover
            badgeText={executionStepOne.badgeText}
            title={executionStepOne.title}
            description={executionStepOne.description}
            buttonText={executionStepOne.buttonText}
            buttonLink={executionStepOne.buttonLink}
            image={executionStepOne.image}
            imageAlt={executionStepOne.imageAlt}
          />
          <Assess
            badgeText={executionStepTwo.badgeText}
            title={executionStepTwo.title}
            description={executionStepTwo.description}
            buttonText={executionStepTwo.buttonText}
            buttonLink={executionStepTwo.buttonLink}
            image={executionStepTwo.image}
            imageAlt={executionStepTwo.imageAlt}
          />
          <Discover
            badgeText={executionStepThree.badgeText}
            title={executionStepThree.title}
            description={executionStepThree.description}
            buttonText={executionStepThree.buttonText}
            buttonLink={executionStepThree.buttonLink}
            image={executionStepThree.image}
            imageAlt={executionStepThree.imageAlt}
          />
          <Assess
            badgeText={executionStepFour.badgeText}
            title={executionStepFour.title}
            description={executionStepFour.description}
            buttonText={executionStepFour.buttonText}
            buttonLink={executionStepFour.buttonLink}
            image={executionStepFour.image}
            imageAlt={executionStepFour.imageAlt}
          />
          <Discover
            badgeText={executionStepFive.badgeText}
            title={executionStepFive.title}
            description={executionStepFive.description}
            buttonText={executionStepFive.buttonText}
            buttonLink={executionStepFive.buttonLink}
            image={executionStepFive.image}
            imageAlt={executionStepFive.imageAlt}
          />
        </section>
        <section className="w-full">
          <AI_Solutions
            badge={aiSolutionsData.badge}
            title={aiSolutionsData.title}
            description={aiSolutionsData.description}
            tabs={aiSolutionsData.tabs}
            technologies={aiSolutionsData.technologies}
          />
        </section>
        <GlowPanel />
        <Strategy
          cardData={Real_World}
          SectionHead={"Real-World AI "}
          SectionSubHead={"Constraints"}
          SectionDescription={
            "Moving AI from a proof of concept to production introduces challenges around accuracy, security, latency, cost, and reliability. Addressing these constraints requires deliberate architecture, continuous evaluation, and production-grade engineering."
          }
          StrategyBadgeText={"Production Challenges"}
        />
      </div>
      <div className="flex flex-col items-center mb-10 mt-16 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Case Study Highlights" />
          </span>
          <MiddleSectionHeads
            SectionHead="Real Results from Production AI Deployments."
            SectionSubHead="  "
            SectionDescription="Explore how organizations across healthcare, financial services, and e-commerce are using production-ready AI systems to improve efficiency, reduce costs, and accelerate business outcomes."
          />
        </div>
        <section className="w-[80%] mt-20 mx-auto flex flex-wrap justify-center gap-3">
          {caseStudies.map((card) => (
            <ImageCard
              key={card.id}
              className={"w-[21rem]"}
              padding={"px-4"}
              cardtitle={card.title}
              carddescription={card.description}
              buttintext={card.cta}
              buttonurl={card.href}
              buttonicon={<ArrowUpIcon />}
              image={card.image}
            />
          ))}
        </section>
      </div>
      <Execution_Plan
        badgeText="Production-Ready GenAI starts here"
        title="From Prototype to Production"
        description="Turn promising experiments into reliable systems with the guardrails, observability, 
and engineering needed to scale with confidence."
        buttonText="Build Your GenAI System with Us"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
