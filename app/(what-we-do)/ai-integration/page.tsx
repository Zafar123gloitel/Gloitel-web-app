"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import HeroSection from "../components/HeroSection";
import The_Engineering from "../components/The_Engineering";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { CardShowcase } from "../../../components";
import {
  ai_agents_designed,
  aiSolutionsData,
  architecturePatternsData,
  deliverablesData,
  engineeringServicesData,
  outcomesData2,
} from "../components/data";
import PurposeCard from "../components/PurposeCard";
import GlowPanel from "../../component/GlowPanel";
import AI_Solutions from "../components/AI_Solutions";
import Business from "../components/Business";
import Execution_Plan from "../components/Execution_Plan";

const page = () => {
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
        <The_Engineering />
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
              items={engineeringServicesData}
              showDivider={true}
              showStepBadge={false}
              cardHeight="max-h-[350px] max-w-[350px]"
            />
          </section>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-[10rem] sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What You Walk Away With" />
            </span>
            <MiddleSectionHeads
              SectionHead="A Clear AI Roadmap backed by "
              SectionSubHead=" Business Value"
              SectionDescription="Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes."
            />
          </div>
        </div>

        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-2 gap-4 ">
            {architecturePatternsData.map((item) => (
              <PurposeCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className=""
              />
            ))}
          </div>
        </div>
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
      <section>
        <Business
          badgeText="What We Deliver"
          sectionHead="Deliverables Designed for "
          sectionSubHead="Long-Term Success"
          sectionDescription="Every engagement concludes with documented systems, operational safeguards, and implementation assets that help your team manage, scale, and maintain AI capabilities with confidence."
          data={deliverablesData}
        />
      </section>

      <section>
        <Execution_Plan
          badgeText="AI Development Services"
          title="Define Your AI Roadmap Before You Build"
          description="Most AI initiatives fail before they begin because of misdirected effort. We help you identify where AI should be applied first so every decision is grounded in business value."
          buttonText="Book a Strategy Session"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
