import React from "react";
import HeroSection from "../components/HeroSection";
import { aiServicesData, heroSectionData } from "../components/data";
import { ArrowRight, Download } from "lucide-react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import ProblemCard from "../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../components";

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
          <section className="w-[80%] mt-20 mx-auto">
            <CardShowcase
              items={aiServicesData}
              showDivider={false}
              showStepBadge={false}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

export default page;
