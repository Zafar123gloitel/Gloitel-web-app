export const backendEngineeringHeroData = {
  badgeText: "Backend Engineering",
  title: "AI Engineering That Ships and Stays Shipped", // ⚠️ mismatch
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.", // ⚠️ mismatch
  image: "/images/Engineering/backend-engineering-hero.png",
  imageAlt: "Backend engineering",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Talk to Our AI Engineers", // ⚠️ mismatch
    href: "/contact",
  },
  secondaryButton: {
    text: "View AI Work", // ⚠️ mismatch
    href: "/about",
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
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
  },
};
export const backendTechStackData = {
  badge: "Production AI Engineering Stack", // ⚠️ mismatch
  title: "Built on a Modern AI Ecosystem", // ⚠️ mismatch
  description:
    "From foundation models to observability tools, every layer is chosen for performance, flexibility, and long-term maintainability.", // ⚠️ mismatch
  tabs: [
    "LLMs",
    "RAG/Orchestration",
    "Vector DBs",
    "ML",
    "MLOps",
    "Serving",
    "Observability",
    "Cloud AI",
  ],
  technologies: {
    LLMs: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "OpenAI GPT-4o",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Claude 3.5 Sonnet",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Gemini 1.5 Pro",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LLaMA 3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mistral",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png",
      },
    ],
    "RAG/Orchestration": [],
    "Vector DBs": [],
    ML: [],
    MLOps: [],
    Serving: [],
    Observability: [],
    "Cloud AI": [],
  },
};
export const backendAgentsSectionHead = {
  badgeText: "What We Build", // ⚠️ mismatch
  title: "AI Agents Designed for Real Business Workflows", // ⚠️ mismatch
  description:
    "We design and deploy AI agents that automate workflows, coordinate tools, make decisions, and execute complex tasks across business operations.", // ⚠️ mismatch
};

export const backendAgentsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    title: "Agentic Workflow Automation",
    description:
      "Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation - automated with full audit trails.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Multi-Agent Systems",
    description:
      "Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Tool-Using Agents",
    description:
      "Agents integrated with your real business tools - CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.4 14.5 16 10 4 20l1.5 1.5L20.4 14.5z" />
        <path d="M4 10 14.5 20.4" />
      </svg>
    ),
    title: "Human-in-the-Loop Workflows",
    description:
      "Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
    title: "AI-Powered Process Automation",
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry - with understanding, not just pattern matching.",
  },
];
export const backendEngineeringCTAData = {
  badgeText: "Ready to Build?",
  title: "Let's Build Your Next Healthcare Solution!", // ⚠️ mismatch — same copy-paste bug again
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant production-ready software.",
  buttonText: "Build Your Healthcare Solution", // ⚠️ mismatch
  buttonLink: "/contact",
};
