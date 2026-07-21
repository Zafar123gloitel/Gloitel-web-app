"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import {
  ai_agents_designed,
  aiSolutionsData,
  executionStepFive,
  executionStepFour,
  executionStepOne,
  executionStepThree,
  executionStepTwo,
  heroSectionData,
  Real_World,
} from "../components/data";
import { ArrowRight, Download } from "lucide-react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";
import IconCard from "../components/IconCard";
import { Wallet, House, HeartPulse, Newspaper, Scale } from "lucide-react";
import AI_Solutions from "../components/AI_Solutions";
import Discover from "../components/Discover";
import Assess from "../components/Assess";
import GlowPanel from "../../component/GlowPanel";
import Strategy from "../components/Strategy";
import Execution_Plan from "../components/Execution_Plan";

const page = () => {
  const problems = [
    {
      title:
        "Browse the web, query databases, call APIs, and write/execute code",
    },
    {
      title:
        "Break a complex goal into sub-tasks and orchestrate them in sequence",
    },
    {
      title:
        "YDecide when to ask a human for input and when to proceed autonomously",
    },
    {
      title:
        "Maintain long-term memory across sessions and learn from feedback",
    },
  ];
  const industries = [
    {
      id: 1,
      name: "Finance",
      icon: Wallet,
    },
    {
      id: 2,
      name: "Real Estate",
      icon: House,
    },
    {
      id: 3,
      name: "Healthcare",
      icon: HeartPulse,
    },
    {
      id: 4,
      name: "Media & Publishing",
      icon: Newspaper,
    },
    {
      id: 5,
      name: "Legal",
      icon: Scale,
    },
  ];
  return (
    <div>
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
            icon: <ArrowRight className="w-4 h-4" />,
          }}
        />
      </section>

      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full mb-52 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="How AI Agents Work" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents that Think "
              SectionSubHead=" through Tasks and Execute them"
              SectionDescription="Unlike traditional AI assistants, agents can interact with systems, break 
down complex objectives, and take actions across multiple steps to 
achieve outcomes."
            />
          </div>
        </div>
        <div className="relative h-[400px] mb-10 overflow-hidden w-[80%]  mx-auto">
          <Image
            src="/images/What-we-do/Rectangle 1.png"
            alt="Problem"
            fill
            className="object-cover rounded-2xl h-full w-full  bg-white"
          />
        </div>

        <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
          {problems.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What We Build" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Systems Built for"
              SectionSubHead=" Real Business Workflows."
              SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
            />
          </div>
          <section className="w-[80%] mt-20 mx-auto ">
            <CardShowcase
              items={ai_agents_designed}
              showDivider={true}
              showStepBadge={false}
              cardHeight="max-h-[350px] max-w-[350px]"
            />
          </section>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full mb-52 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="How AI Agents Work" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents that Think "
              SectionSubHead=" through Tasks and Execute them"
              SectionDescription="Unlike traditional AI assistants, agents can interact with systems, break 
              down complex objectives, and take actions across multiple steps to 
              achieve outcomes."
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {industries.map((item) => (
            <IconCard
              key={item.id}
              name={item.name}
              // logo={item.logo}
              icontype={true}
              Icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section>
        <AI_Solutions
          badge={aiSolutionsData.badge}
          title={aiSolutionsData.title}
          description={aiSolutionsData.description}
          tabs={aiSolutionsData.tabs}
          technologies={aiSolutionsData.technologies}
        />
      </section>
      <section className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="What We Build" />
          </span>
          <MiddleSectionHeads
            SectionHead="AI Systems Built for"
            SectionSubHead=" Real Business Workflows."
            SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
          />
        </div>
        <section className="w-[80%]  mx-auto">
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
      </section>
      <section>
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
      </section>
      <section>
        <Execution_Plan
          badgeText="Production-Ready GenAI starts here"
          title="From Prototype to Production"
          description="Turn promising experiments into reliable systems with the guardrails, observability, 
and engineering needed to scale with confidence."
          buttonText="Build Your GenAI System with Us"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
