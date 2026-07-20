"use client";

import React, { useState } from "react";
import StrategyBadge from "../../../components/StrategyBadge";

const tabs = [
  "LLM APIs",
  "Open Source",
  "RAG Frameworks",
  "Vector Stores",
  "Orchestration",
  "Deployment",
];

const technologies = {
  "LLM APIs": [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
    {
      name: "Google Gemini",
      logo: "/images/technology/gemini.png",
    },
    {
      name: "Cohere",
      logo: "/images/technology/cohere.png",
    },
  ],

  "Open Source": [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
    {
      name: "Google Gemini",
      logo: "/images/technology/gemini.png",
    },
    {
      name: "Cohere",
      logo: "/images/technology/cohere.png",
    },
  ],
  "RAG Frameworks": [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
    {
      name: "Google Gemini",
      logo: "/images/technology/gemini.png",
    },
    {
      name: "Cohere",
      logo: "/images/technology/cohere.png",
    },
    {
      name: "Cohere",
      logo: "/images/technology/cohere.png",
    },
  ],
  "Vector Stores": [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
    {
      name: "Google Gemini",
      logo: "/images/technology/gemini.png",
    },
    {
      name: "Cohere",
      logo: "/images/technology/cohere.png",
    },
  ],
  Orchestration: [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
    {
      name: "Google Gemini",
      logo: "/images/technology/gemini.png",
    },
  ],
  Deployment: [
    {
      name: "OpenAI",
      logo: "/images/technology/openai.png",
    },
    {
      name: "Anthropic Claude",
      logo: "/images/technology/claude.png",
    },
  ],
};

const AI_Solutions = () => {
  const [activeTab, setActiveTab] = useState("LLM APIs");

  return (
    <section className="bg-[#151515] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <StrategyBadge text="Technologies & Stack" />

          <h2 className="mt-8 text-5xl font-medium text-white">
            The Technologies Behind Our AI Solutions.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/45">
            We combine leading AI models, frameworks, vector databases, and
            deployment platforms to build secure, scalable, and production-ready
            AI systems.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,.35)]"
                  : "border-white/15 bg-transparent text-white/80 hover:border-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#0B0B0B] p-12">
          <div className="flex flex-wrap justify-center duration-700  gap-8">
            {technologies[activeTab]?.map((item) => (
              <div
                key={item.name}
                className={[
                  "group relative overflow-hidden rounded-[10px] border border-white/10",
                  "bg-[#0B1128]",
                  "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
                  "hover:border-blue-500/80",

                  // Top Glow
                  "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
                  "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",

                  // Background Glow
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px]",
                  "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
                  "after:opacity-80",
                  "w-full max-w-[200px] md:max-w-[200px]",
                ].join(" ")}
              >
                <div className="relative z-10 flex flex-col items-center p-8">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-700 group-hover:scale-110">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-full w-full object-contain "
                    />
                  </div>

                  <h3 className="mt-8 text-center text-nowrap text-lg text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Solutions;
