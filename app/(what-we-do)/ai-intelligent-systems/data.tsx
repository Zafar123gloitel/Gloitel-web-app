export const aiIntelligentSystemsHeroData = {
  badgeText: "AI & Intelligent Systems",
  title: "AI That Moves the Business, Not Just the Demo",
  description:
    "Most AI initiatives stall between experimentation and execution. We position ourselves at that gap - diagnosing where AI will create measurable value before committing to build.",
  image: "/images/What-we-do/ai-intelligent-systems-hero.png",
  imageAlt: "AI and intelligent systems",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start with a Discovery Call",
    href: "/contact",
  },
  secondaryButton: {
    text: "View AI Case Studies",
    href: "/about",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
  },
};

export const aiGapSectionHead = {
  badgeText: "The Real Gap in AI Adoption",
  title: "Why Most AI Initiatives never Reach Business Impact",
  description:
    "The challenge isn't access to AI. It's identifying where it creates measurable value before investing in development.",
};

export const aiGapData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 9.5 4.5 6 4l-.5 3.5L2 9l2 3-2 3 3.5 1.5L6 20l3.5-.5L12 22l2.5-2.5L18 20l.5-3.5L22 15l-2-3 2-3-3.5-1.5L18 4l-3.5.5L12 2Z" />
      </svg>
    ),
    title: "AI Pilots",
    description:
      "Organizations easily see rich short on AI pilots. Most teams have experience but with AI don't struggle to turn those efforts into meaningful business outcomes.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Misdirected Effort",
    description:
      "Most are often built on assumptions, applied to top-impact workflows, or launched without clear prioritization and business alignment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </svg>
    ),
    title: "Business Impact",
    description:
      "We diagnose before we build. Identifying where AI creates measurable value and moves the business forward before engineering begins.",
  },
];

export const aiPracticeAreasSectionHead = {
  badgeText: "Our AI Practice Areas",
  title: "From Strategy to Production-Ready AI Systems",
  description:
    "Whether you're defining an AI roadmap, deploying intelligent agents, or building custom machine learning models, we help transform opportunities into measurable business outcomes.",
};

export const aiPracticeAreasData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-strategy-consulting.png",
    imageAlt: "AI strategy and consulting",
    title: "AI Strategy & Consulting",
    description:
      "Assess data maturity, identify high-impact use cases, and build a roadmap tied to business outcomes. Discover before development begins.",
    buttonText: "Learn More",
    buttonLink: "/ai-strategy-consulting",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/generative-ai-llms.png",
    imageAlt: "Generative AI and LLMs",
    title: "Generative AI & LLMs",
    description:
      "Build LLM-powered applications for production - chatbots, content generation, and custom language models built for accuracy, cost control, and reliability.",
    buttonText: "Learn More",
    buttonLink: "/generative-ai-llms",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-agents-automation.png",
    imageAlt: "AI agents and automation",
    title: "AI Agents & Automation",
    description:
      "Deploy intelligent agents that automate multi-step workflows, integrate with existing systems, improve efficiency, and reduce manual operational overhead.",
    buttonText: "Learn More",
    buttonLink: "/ai-agents-automation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ml-predictive-analytics.png",
    imageAlt: "ML and predictive analytics",
    title: "ML & Predictive Analytics",
    description:
      "Develop forecasting, anomaly detection, recommendation, and classification models. Turn business data into actionable insights.",
    buttonText: "Learn More",
    buttonLink: "/ml-predictive-analytics",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-integration.png",
    imageAlt: "AI integration",
    title: "AI Integration",
    description:
      "Connect AI capabilities into your products with reliable infrastructure and monitoring. Ensure scalable deployment and long-term reliability.",
    buttonText: "Learn More",
    buttonLink: "/ai-integration",
  },
];
export const aiEngagementSectionHead = {
  badgeText: "Our Engagement Model",
  title: "From Discovery to Production-Ready AI",
  description:
    "A structured approach that validates opportunities, proves value, and scales successful AI initiatives with confidence.",
};

export const discoverySprintData = {
  badgeText: "Stage 01",
  title: "Discovery Sprint (3-4 weeks)",
  description:
    "A structured diagnosis of your AI potential. We map your workflows, assess feasibility, rank use cases by impact, and deliver a decision-ready roadmap. Fixed scope. Fixed fee.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/discovery-sprint.png",
  imageAlt: "Discovery sprint",
};

export const aiPilotData = {
  badgeText: "Stage 02",
  title: "AI Pilot",
  description:
    "Validate the highest-priority use case identified in Discovery. Prove ROI before full commitment. Scope defined from Stage I output.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/ai-pilot.png",
  imageAlt: "AI pilot",
};

export const productionScaleData = {
  badgeText: "Stage 03",
  title: "Production & Scale",
  description:
    "Build, deploy, and scale the validated solution. Ongoing engineering support and model monitoring included.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/production-scale.png",
  imageAlt: "Production and scale",
};

export const aiClarityData = {
  badgeText: "What We Don't Do",
  title: "Built on Clarity, Not Empty Promises",
  description:
    "Our approach focused on practical execution over measurable outcomes, and prioritizing this and disagree to succeed beyond the pilot stage.",
  items: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't start with a solution & look for problems to justify it",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "No open-ended strategy without clear deliverables",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't build demos that can't reach production",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't disappear after delivery",
    },
  ],
};

export const aiTechStackLandingData = {
  badge: "Technologies We Work With",
  title: "Modern Tools. Practical Decisions.",
  description:
    "Every technology is selected to reduce complexity, speed up development, and keep your MVP easy to scale.",

  tabs: ["LLM Providers", "Frameworks", "Vector Databases", "ML Platforms", "Deployment"],

  technologies: {
    "LLM Providers": [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "OpenAI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Anthropic Claude", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Google Gemini", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Meta LLaMA", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Mistral", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png" },
    ],
    Frameworks: [],
    "Vector Databases": [],
    "ML Platforms": [],
    Deployment: [],
  },
};

export const aiIntelligentSystemsCTAData = {
  badgeText: "Start with Clarity",
  title: "Turn AI Strategy into Product Results",
  description:
    "A 30-minute conversation to assess fit and map the priorities that align with your goals.",
  buttonText: "Schedule a Discovery Call",
  buttonLink: "/contact",
};