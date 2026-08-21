import {
  HeroArrowRightIcon,
  LinkIcon,
  ResilientProcessingIcon,
  VisibilityControlIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const frontendEngineeringHeroData = {
  badgeText: 'Frontend Engineering',
  title: 'AI Engineering That Ships and Stays Shipped', // ⚠️ mismatch - AI Engineering ka title hai
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.", // ⚠️ mismatch
  image: '/images/Engineering/frontend-engineering-hero.png',
  imageAlt: 'Frontend engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our AI Engineers', // ⚠️ mismatch
    href: '/contact',
  },
  secondaryButton: {
    text: 'View AI Work', // ⚠️ mismatch
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};
export const frontendTechStackData = {
  badge: 'Production AI Engineering Stack', // ⚠️ mismatch
  title: 'Built on a Modern AI Ecosystem', // ⚠️ mismatch
  description:
    'From foundation models to observability tools, every layer is chosen for performance, flexibility, and long-term maintainability.', // ⚠️ mismatch
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
export const frontendDeliverablesSectionHead = {
  badgeText: 'Design System Deliverables', // ⚠️ mismatch
  title: 'More Than Components, A Complete System', // ⚠️ mismatch
  description:
    'We provide the tools, documentation, and frameworks required to keep your design system effective over time.',
};

export const frontendDeliverablesData = [
  {
    id: createId(),
    step: 1,
    text: 'Figma component library with all variants and states',
  },
  {
    id: createId(),
    step: 2,
    text: 'React / React Native / Flutter component library',
  },
  {
    id: createId(),
    step: 3,
    text: 'Storybook documentation',
  },
  {
    id: createId(),
    step: 4,
    text: 'Design token files (CSS variables, Tailwind config, or native tokens)',
  },
  {
    id: createId(),
    step: 5,
    text: 'Usage guidelines and pattern documentation',
  },
  {
    id: createId(),
    step: 6,
    text: 'Contribution guide for your team',
  },
];
export const frontendEngineeringDeepDiveData = {
  badgeText: 'What AI Integration Actually Involves', // ⚠️ mismatch
  heading: 'The Engineering behind Production AI Systems.', // ⚠️ mismatch
  description:
    'Successful AI integration requires more than connecting a model to an application. We build the infrastructure, recovery mechanisms, and monitoring layers that keep AI systems stable, observable, and production-ready.', // ⚠️ mismatch
  cards: [
    {
      id: createId(),
      icon: <LinkIcon size={28} />,
      title: 'Integration Stability',
      description:
        'AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.',
    },
    {
      id: createId(),
      icon: <ResilientProcessingIcon />,
      title: 'Resilient Processing',
      description:
        'Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.',
    },
    {
      id: createId(),
      icon: <VisibilityControlIcon />,
      title: 'Visibility & Control',
      description:
        'Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.',
    },
  ],
};
export const frontendEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!", // ⚠️ mismatch — copy-paste bug repeats yahan bhi
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant production-ready software.",
  buttonText: 'Build Your Healthcare Solution', // ⚠️ mismatch
  buttonLink: '/contact',
};
