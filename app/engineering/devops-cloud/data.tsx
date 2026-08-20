import {
  ConnectedSystemsIcon,
  CustomModelsIcon,
  DevOpsAIMonitoringIcon,
  DevOpsCostOptimizationIcon,
  DevOpsLLMFeaturesIcon,
  DevOpsPromptOpsIcon,
  DevOpsRAGSystemsIcon,
  MLPipelinesIcon,
} from "components/SvgIcon";
export const devOpsCloudHeroData = {
  badgeText: "DevOps & Cloud Engineering",
  title: "AI Engineering That Ships and Stays Shipped",
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong – that's engineering.",
  image: "/images/Engineering/backend-engineering-hero.png",
  imageAlt: "",
  video: "",
  primaryButton: {
    text: "Talk to Our AI Engineers",
    href: "",
  },
  secondaryButton: {
    text: "View AI Work",
    href: "",
    icon: "",
  },
};
export const aiSystemsSectionHead = {
  badgeText: "What Our AI Engineers Build",
  title: "AI Systems in Production",
  description:
    "From intelligent retrieval and agent workflows to monitoring and optimization, we engineer AI systems that perform reliably in real-world production environments.",
};

export const aiSystemsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: <DevOpsRAGSystemsIcon />,
    title: "RAG Systems",
    description: "Vector search and document intelligence pipelines.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: <DevOpsLLMFeaturesIcon />,
    title: "LLM Features",
    description: "AI capabilities embedded into existing products.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: <ConnectedSystemsIcon />,
    title: "Agent Systems",
    description: "Coordinated agents with tools, memory, and workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    icon: <CustomModelsIcon />,
    title: "Custom Models",
    description: "Domain-specific models optimized for specialized tasks.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 5,
    icon: <MLPipelinesIcon />,
    title: "ML Pipelines",
    description: "Training, evaluation, deployment, and model operations.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 6,
    icon: <DevOpsAIMonitoringIcon />,
    title: "AI Monitoring",
    description: "Monitoring performance, costs, and production behavior.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 7,
    icon: <DevOpsPromptOpsIcon />,
    title: "Prompt Ops",
    description: "Versioning, testing, and optimization of prompts.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 8,
    icon: <DevOpsCostOptimizationIcon />,
    title: "Cost Optimization",
    description: "Caching, routing, and inference cost reduction.",
  },
];

export const aiEcosystemData = {
  badge: "Production AI Engineering Stack",
  title: "Built on a Modern AI Ecosystem",
  description:
    "From foundation models to observability tools, every layer is chosen for performance, flexibility, and long-term maintainability.",

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
        logo: "",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Claude 3.5 Sonnet",
        logo: "",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Gemini 1.5 Pro",
        logo: "",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LLaMA 3",
        logo: "",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mistral",
        logo: "",
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

export const devOpsCloudCTAData = {
  badgeText: "Ready to Build?",
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: "Build Your Healthcare Solution",
  buttonLink: "/contact",
};
