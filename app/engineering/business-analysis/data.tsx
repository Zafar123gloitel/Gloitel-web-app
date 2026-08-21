import {
  DocumentProcessingIcon,
  IntegrationAutomationIcon,
  SparkleStarIcon,
  StructuredDataWorkflowsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const businessAnalysisHeroData = {
  badgeText: 'Business Analysis',
  title: 'AI Engineering That Ships and Stays Shipped',
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong – that's engineering. We've done the latter.",
  image: '/images/Engineering/backend-engineering-hero.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our AI Engineers',
    href: '',
  },
  secondaryButton: {
    text: 'View AI Work',
    href: '',
    icon: '',
  },
};
export const businessAnalysisProcessSectionHead = {
  badgeText: 'Process Categories We Automate',
  title: 'The Right Automation for Every Process',
  description:
    'We assess how work moves through your organization and design automation strategies that improve efficiency, reduce errors, and adapt to operational complexity.',
};

export const businessAnalysisProcessData = [
  {
    id: createId(),
    icon: <StructuredDataWorkflowsIcon />,
    title: 'Structured Data Workflows',
    description:
      'Repeatable, rule-based processes with structured inputs. Data entry automation, report generation, data validation, system synchronization, and scheduled jobs.',
  },
  {
    id: createId(),
    icon: <DocumentProcessingIcon />,
    title: 'Document Processing',
    description:
      'Extract structured data from documents, classify them, route them, and trigger downstream actions. Handles PDFs, emails, scanned documents, and forms.',
  },
  {
    id: createId(),
    icon: <IntegrationAutomationIcon />,
    title: 'Integration Automation',
    description:
      "Connect systems that don't talk to each other. Event-driven integrations that keep data in sync across CRM, ERP, HRIS, and custom applications without manual export/import.",
  },
  {
    id: createId(),
    icon: <SparkleStarIcon />,
    title: 'AI-Powered Process Automation',
    description:
      'For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.',
  },
  {
    id: createId(),
    icon: <SparkleStarIcon />,
    title: 'AI-Powered Process Automation',
    description:
      'For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.',
  },
  {
    id: createId(),
    icon: <SparkleStarIcon />,
    title: 'AI-Powered Process Automation',
    description:
      'For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.',
  },
];
export const businessAnalysisDeliverablesSectionHead = {
  badgeText: 'Design System Deliverables',
  title: 'More Than Components, A Complete System',
  description:
    'We provide the tools, documentation, and frameworks required to keep your design system effective over time.',
};

export const businessAnalysisDeliverablesData = [
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

export const businessAnalysisEcosystemData = {
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
    'RAG/Orchestration': [],
    'Vector DBs': [],
    ML: [],
    MLOps: [],
    Serving: [],
    Observability: [],
    'Cloud AI': [],
  },
};
export const businessAnalysisCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
