import {
  AIMonitoringIcon,
  CloseIcon,
  CostOptimizationIcon,
  CustomModelsIcon,
  HL7FHIRIcon,
  HeroArrowRightIcon,
  LLMFeaturesIcon,
  MLPipelinesIcon,
  PromptOpsIcon,
  RAGSystemsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const aiEngineeringHeroData = {
  badgeText: 'AI Engineering',
  title: 'AI Engineering That Ships and Stays Shipped',
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.",
  image: '/images/Engineering/ai-engineering-hero.png',
  imageAlt: 'AI engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our AI Engineers',
    href: '/contact',
  },
  secondaryButton: {
    text: 'View AI Work',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};
export const aiSystemsSectionHead = {
  badgeText: 'What Our AI Engineers Build',
  title: 'AI Systems in Production',
  description:
    'From intelligent retrieval and agent workflows to monitoring and optimization, we engineer AI systems that perform reliably in real-world production environments.',
};

export const aiSystemsData = [
  {
    id: createId(),
    step: 1,
    icon: <RAGSystemsIcon />,
    title: 'RAG Systems',
    description: 'Vector search and document intelligence pipelines.',
  },
  {
    id: createId(),
    step: 2,
    icon: <LLMFeaturesIcon />,
    title: 'LLM Features',
    description: 'AI capabilities embedded into existing products.',
  },
  {
    id: createId(),
    step: 3,
    icon: <HL7FHIRIcon />,
    title: 'Agent Systems',
    description: 'Coordinated agents with tools, memory, and workflows.',
  },
  {
    id: createId(),
    step: 4,
    icon: <CustomModelsIcon />,
    title: 'Custom Models',
    description: 'Domain-specific models optimized for specialized tasks.',
  },
  {
    id: createId(),
    step: 5,
    icon: <MLPipelinesIcon />,
    title: 'ML Pipelines',
    description: 'Training, evaluation, deployment, and model operations.',
  },
  {
    id: createId(),
    step: 6,
    icon: <AIMonitoringIcon />,
    title: 'AI Monitoring',
    description: 'Monitoring performance, costs, and production behavior.',
  },
  {
    id: createId(),
    step: 7,
    icon: <PromptOpsIcon />,
    title: 'Prompt Ops',
    description: 'Versioning, testing, and optimization of prompts.',
  },
  {
    id: createId(),
    step: 8,
    icon: <CostOptimizationIcon />,
    title: 'Cost Optimization',
    description: 'Caching, routing, and inference cost reduction.',
  },
];

export const aiEcosystemData = {
  badge: 'Production AI Engineering Stack',
  title: 'Built on a Modern AI Ecosystem',
  description:
    'From foundation models to observability tools, every layer is chosen for performance, flexibility, and long-term maintainability.',

  tabs: [
    'LLMs',
    'RAG/Orchestration',
    'Vector DBs',
    'ML',
    'MLOps',
    'Serving',
    'Observability',
    'Cloud AI',
  ],

  technologies: {
    LLMs: [
      {
        id: createId(),
        name: 'OpenAI GPT-4o',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        id: createId(),
        name: 'Claude 3.5 Sonnet',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png',
      },
      {
        id: createId(),
        name: 'Gemini 1.5 Pro',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png',
      },
      {
        id: createId(),
        name: 'LLaMA 3',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png',
      },
      {
        id: createId(),
        name: 'Mistral',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png',
      },
    ],
    'RAG/Orchestration': [],
    'Vector DBs': [],
    ML: [],
    MLOps: [],
    Serving: [],
    Observability: [],
    'Cloud AI': [],
  },
};
export const aiEngineeringNotData = {
  badgeText: 'What This Is Not',
  heading: 'Strategy before Solutions',
  description:
    'Every recommendation is grounded in business impact and feasibility. We do not start with technology, products, or predetermined solutions.',
  items: [
    {
      id: createId(),
      icon: <CloseIcon size={27} />,
      description: 'Not a vendor-led engagement where we pre-sell a solution',
    },
    {
      id: createId(),
      icon: <CloseIcon size={27} />,
      description: 'Not a free strategy workshop with vague outputs',
    },
    {
      id: createId(),
      icon: <CloseIcon size={27} />,
      description: 'Not an open-ended consulting retainer',
    },
    {
      id: createId(),
      icon: <CloseIcon size={27} />,
      description: 'Not an open-ended consulting retainer',
    },
    {
      id: createId(),
      icon: <CloseIcon size={27} />,
      description: 'Not a build-first approach without a validated roadmap',
    },
  ],
};
export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next AI Solution!",
  description:
    "Whether you're launching an AI-powered feature, integrating with LLM systems, or building production AI infrastructure, we can help you move from concept to compliant production-ready systems.",
  buttonText: 'Build Your AI Solution',
  buttonLink: '/contact',
};
