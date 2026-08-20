import {
  AIPilotsIcon,
  BusinessImpactIcon,
  CloseIcon,
  HeroArrowRightIcon,
  MisdirectedEffortIcon,
} from "components/SvgIcon";

export const aiIntelligentSystemsHeroData = {
  badgeText: "AI & Intelligent Systems",
  title: "AI That Moves the Business, Not Just the Demo",
  description:
    "Most AI initiatives stall between experimentation and execution. We position ourselves at that gap - diagnosing where AI will create measurable value before committing to build.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040168/Gloitel/Parent%20pages/ML_Predictive_Analytics_txf2cy.png",
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
    icon: <HeroArrowRightIcon />,
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
      <AIPilotsIcon />
    ),
    title: "AI Pilots",
    description:
      "Organizations easily see rich short on AI pilots. Most teams have experience but with AI don't struggle to turn those efforts into meaningful business outcomes.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: (
      <MisdirectedEffortIcon />
    ),
    title: "Misdirected Effort",
    description:
      "Most are often built on assumptions, applied to top-impact workflows, or launched without clear prioritization and business alignment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: (
      <BusinessImpactIcon />
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
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787051703/Gloitel/Parent%20pages/AI_Strategy_Consulting_h8zint.png",
    imageAlt: "AI strategy and consulting",
    title: "AI Strategy & Consulting",
    description:
      "Assess data maturity, identify high-impact use cases, and build a roadmap tied to business outcomes. Discover before development begins.",
    buttonText: "Learn More",
    buttonLink: "/ai-strategy-consulting",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787051702/Gloitel/Parent%20pages/Generative_AI_LLMs_d7xdiq.png",
    imageAlt: "Generative AI and LLMs",
    title: "Generative AI & LLMs",
    description:
      "Build LLM-powered applications for production - chatbots, content generation, and custom language models built for accuracy, cost control, and reliability.",
    buttonText: "Learn More",
    buttonLink: "/generative-ai-llms",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787051701/Gloitel/Parent%20pages/AI_Agents_Automation_j5j53f.png",
    imageAlt: "AI agents and automation",
    title: "AI Agents & Automation",
    description:
      "Deploy intelligent agents that automate multi-step workflows, integrate with existing systems, improve efficiency, and reduce manual operational overhead.",
    buttonText: "Learn More",
    buttonLink: "/ai-agents-automation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040168/Gloitel/Parent%20pages/ML_Predictive_Analytics_txf2cy.png",
    imageAlt: "ML and predictive analytics",
    title: "ML & Predictive Analytics",
    description:
      "Develop forecasting, anomaly detection, recommendation, and classification models. Turn business data into actionable insights.",
    buttonText: "Learn More",
    buttonLink: "/ml-predictive-analytics",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040167/Gloitel/Parent%20pages/AI_Integration_lgok00.png",
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
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040167/Gloitel/Parent%20pages/Discovery_Sprint_a3cgki.png",
  imageAlt: "Discovery sprint",
};

export const aiPilotData = {
  badgeText: "Stage 02",
  title: "AI Pilot",
  description:
    "Validate the highest-priority use case identified in Discovery. Prove ROI before full commitment. Scope defined from Stage I output.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040166/Gloitel/Parent%20pages/AI_Pilot_n9iuoh.png",
  imageAlt: "AI pilot",
};

export const productionScaleData = {
  badgeText: "Stage 03",
  title: "Production & Scale",
  description:
    "Build, deploy, and scale the validated solution. Ongoing engineering support and model monitoring included.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040165/Gloitel/Parent%20pages/Production_Scale_r6mjmn.png",
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
        <CloseIcon />
      ),
      description: "We don't start with a solution & look for problems to justify it",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <CloseIcon />
      ),
      description: "No open-ended strategy without clear deliverables",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <CloseIcon />
      ),
      description: "We don't build demos that can't reach production",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <CloseIcon />
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

    Frameworks: [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "LangChain", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "LlamaIndex", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "CrewAI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "AutoGen", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Haystack", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png" },
    ],

    "Vector Databases": [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Pinecone", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Weaviate", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Qdrant", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "pgvector", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Chroma", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png" },
    ],

    "ML Platforms": [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "AWS SageMaker", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/AWS_SageMaker_g6bbaz.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Google Vertex AI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Azure ML", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/Azure_ML_qvsmch.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "MLflow", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/MLflow_qjnoph.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Weights & Biases", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/Weights_Biases_irxdxa.png" },
    ],

    Deployment: [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Docker", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Kubernetes", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "FastAPI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Ray Serve", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/Ray_Serve_gkh5n2.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Modal", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png" },
    ],
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
