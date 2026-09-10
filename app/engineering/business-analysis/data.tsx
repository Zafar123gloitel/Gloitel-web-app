import {
  ArrowRightIcon,
  ChartIcon,
  LinkIcon,
  SearchIcon,
  SparkleStarIcon,
  StructuredDataWorkflowsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const businessAnalysisHeroData = {
  badgeText: 'Business Analysis',
  title: 'Analysis That Prevents the Most Expensive Bugs — The Wrong Requirements',
  description:
    'Every sprint spent building the wrong thing is waste. Good business analysis is the work that defines the right thing clearly enough that engineers can build it without a daily stream of clarifying questions.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/Business_Analysis_tr7vz2.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Add a BA to Your Project',
    href: '/about',
  },
  secondaryButton: {
    text: 'Discuss Your Needs',
    href: '/about',
    icon: <ArrowRightIcon />,
  },
};
export const businessAnalysisProcessSectionHead = {
  badgeText: 'What Our Business Analysts Do',
  title: 'Turning Business Needs Into Buildable Requirements',
  description:
    'Our analysts connect stakeholders, users, and engineering—turning business needs into clear requirements, documented processes, and development-ready decisions.',
};

export const businessAnalysisProcessData = [
  {
    id: createId(),
    icon: <StructuredDataWorkflowsIcon size={30} />,
    title: 'Requirements Elicitation',
    description:
      'Stakeholder interviews and workshops that uncover the real requirements behind business requests.',
  },
  {
    id: createId(),
    icon: <SearchIcon />,
    title: 'User Story Mapping',
    description:
      'Connect user journeys to prioritized backlog items so every sprint delivers meaningful user value.',
  },
  {
    id: createId(),
    icon: <LinkIcon />,
    title: 'IProcess Documentation',
    description: 'Map current and future workflows with BPMN, flowcharts, and decision trees.',
  },
  {
    id: createId(),
    icon: <SparkleStarIcon size={30} />,
    title: 'Functional Specifications',
    description:
      'For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.',
  },
  {
    id: createId(),
    icon: <ChartIcon />,
    title: 'Systems Analysis',
    description:
      'Map integrations, data flows, interfaces, dependencies, and potential system conflicts.',
  },
];
export const businessAnalysisDeliverablesSectionHead = {
  badgeText: 'How We Work',
  title: 'Structured Analysis From Discovery to Delivery',
  description:
    'We use proven analysis and prioritization methods to turn complex business needs into requirements teams can confidently execute.',
};

export const businessAnalysisDeliverablesData = [
  {
    id: createId(),
    step: 1,
    text: 'Agile User Story Mapping : Align journeys, features, and priorities.',
  },
  {
    id: createId(),
    step: 2,
    text: 'BPMN : Map workflows and business processes.',
  },
  {
    id: createId(),
    step: 3,
    text: 'UML Modeling : Define system interactions clearly.',
  },
  {
    id: createId(),
    step: 4,
    text: 'MoSCoW :  Prioritize requirements by importance.',
  },
  {
    id: createId(),
    step: 5,
    text: 'INVEST Stories : Create clear, testable user stories.',
  },
  {
    id: createId(),
    step: 6,
    text: 'Jobs-to-be-Done :  Focus on real user outcomes.',
  },
];

export const businessAnalysisEcosystemData = {
  badge: 'Business Analysis Toolkit',
  title: 'Tools That Keep Everyone on the Same Page',
  description:
    'From requirements and backlog management to process mapping and collaborative workshops, we work in the tools your product and engineering teams already use.',

  // tabs: [],

  technologies: [
    {
      id: createId(),
      name: 'OpenAI GPT-4o',
      logo: '',
    },
    {
      id: createId(),
      name: 'Claude 3.5 Sonnet',
      logo: '',
    },
    {
      id: createId(),
      name: 'Gemini 1.5 Pro',
      logo: '',
    },
    {
      id: createId(),
      name: 'LLaMA 3',
      logo: '',
    },
    {
      id: createId(),
      name: 'Mistral',
      logo: '',
    },
  ],
};
export const businessAnalysisCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
