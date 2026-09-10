import {
  ArrowRightIcon,
  QAAIPoweredProcessAutomationIcon,
  QAAgenticWorkflowAutomationIcon,
  QAHumanInTheLoopWorkflowsIcon,
  QAMultiAgentSystemsIcon,
  QAToolUsingAgentsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const qaHeroData = {
  badgeText: 'QA Engineering',
  title: 'Quality Built In, Not Bolted On',
  description:
    "QA that happens at the end of a sprint finds bugs when they're expensive to fix. QA that's embedded in the development process prevents them. We do the latter — working with engineers from requirement definition through deployment.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/QA_Engineering_tb1o38.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our QA Team',
    href: '',
  },
  secondaryButton: {
    text: 'Quality Assessment',
    href: '',
    icon: <ArrowRightIcon />,
  },
};

export const aiAgentsSectionHead = {
  badgeText: 'What We Test',
  title: 'Quality Engineering Across Every Layer of Your Product',
  description:
    'From exploratory testing to automated regression and production-scale performance validation, we build quality into the development lifecycle—not just the release checklist',
};

export const aiAgentsData = [
  {
    id: createId(),
    icon: <QAAgenticWorkflowAutomationIcon size={30} />,
    title: 'Manual Testing',
    description:
      'Exploratory, regression, accessibility, and usability testing that finds issues beyond the written specification.',
  },
  {
    id: createId(),
    icon: <QAMultiAgentSystemsIcon size={30} />,
    title: 'Test Automation',
    description:
      'Maintainable automated suites for frontend, backend, and mobile using Cypress, Playwright, Jest, Pytest, Appium, and Detox.',
  },
  {
    id: createId(),
    icon: <QAToolUsingAgentsIcon size={30} />,
    title: 'Performance Testing',
    description:
      'Load and stress testing with measurable response-time and capacity thresholds before production traffic arrives.',
  },
  {
    id: createId(),
    icon: <QAHumanInTheLoopWorkflowsIcon size={30} />,
    title: 'Security Testing',
    description:
      'OWASP testing, dependency auditing, SAST, vulnerability scanning, and penetration-test coordination integrated into delivery.',
  },
  {
    id: createId(),
    icon: <QAAIPoweredProcessAutomationIcon size={25} />,
    title: 'API Testing',
    description:
      'Automated REST and GraphQL validation using Postman/Newman, Pact contract testing, and schema verification.',
  },
  {
    id: createId(),
    icon: <QAAIPoweredProcessAutomationIcon size={25} />,
    title: 'AI System Testing',
    description:
      'LLM evaluation for accuracy, hallucinations, prompt regressions, output quality, and performance benchmarks.',
  },
];

export const aiEcosystemData = {
  badge: 'QA Engineering Stack',
  title: 'Technologies We Test With',
  description:
    'Our QA stack covers browser experiences, APIs, mobile applications, performance, and security—giving teams consistent quality signals throughout development.',

  tabs: ['Frontend', 'Backend', 'Mobile', 'Performance', 'Security'],

  technologies: {
    Frontend: [
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
    Backend: [
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
    Mobile: [
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
    Performance: [
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
    Security: [
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
  },
};

export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
