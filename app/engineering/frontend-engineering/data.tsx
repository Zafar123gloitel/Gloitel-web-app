export const frontendEngineeringHeroData = {
  badgeText: "Frontend Engineering",
  title: "AI Engineering That Ships and Stays Shipped", // ⚠️ mismatch - AI Engineering ka title hai
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.", // ⚠️ mismatch
  image: "/images/Engineering/frontend-engineering-hero.png",
  imageAlt: "Frontend engineering",
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
export const frontendTechStackData = {
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
export const frontendDeliverablesSectionHead = {
  badgeText: "Design System Deliverables", // ⚠️ mismatch
  title: "More Than Components, A Complete System", // ⚠️ mismatch
  description:
    "We provide the tools, documentation, and frameworks required to keep your design system effective over time.",
};

export const frontendDeliverablesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    text: "Figma component library with all variants and states",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    text: "React / React Native / Flutter component library",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    text: "Storybook documentation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    text: "Design token files (CSS variables, Tailwind config, or native tokens)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 5,
    text: "Usage guidelines and pattern documentation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 6,
    text: "Contribution guide for your team",
  },
];
export const frontendEngineeringDeepDiveData = {
  badgeText: "What AI Integration Actually Involves", // ⚠️ mismatch
  heading: "The Engineering behind Production AI Systems.", // ⚠️ mismatch
  description:
    "Successful AI integration requires more than connecting a model to an application. We build the infrastructure, recovery mechanisms, and monitoring layers that keep AI systems stable, observable, and production-ready.", // ⚠️ mismatch
  cards: [
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
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.7 5.24" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 1 0 7.07 7.07l1.76-1.77" />
        </svg>
      ),
      title: "Integration Stability",
      description:
        "AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.",
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
          <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      ),
      title: "Resilient Processing",
      description:
        "Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.",
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
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-6" />
        </svg>
      ),
      title: "Visibility & Control",
      description:
        "Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.",
    },
  ],
};
export const frontendEngineeringCTAData = {
  badgeText: "Ready to Build?",
  title: "Let's Build Your Next Healthcare Solution!", // ⚠️ mismatch — copy-paste bug repeats yahan bhi
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant production-ready software.",
  buttonText: "Build Your Healthcare Solution", // ⚠️ mismatch
  buttonLink: "/contact",
};
