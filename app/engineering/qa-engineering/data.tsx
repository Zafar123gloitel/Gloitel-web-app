import {
  QAAIPoweredProcessAutomationIcon,
  QAAgenticWorkflowAutomationIcon,
  QAHumanInTheLoopWorkflowsIcon,
  QAMultiAgentSystemsIcon,
  QAToolUsingAgentsIcon,
} from 'components/SvgIcon';
export const qaHeroData = {
  badgeText: 'QA Engineering',
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

export const aiAgentsSectionHead = {
  badgeText: 'What We Build',
  title: 'AI Agents Designed for Real Business Workflows',
  description:
    'We design and deploy AI agents that automate workflows, coordinate tools, make decisions, and execute complex tasks across business operations.',
};

export const aiAgentsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAAgenticWorkflowAutomationIcon />,
    title: 'Agentic Workflow Automation',
    description:
      'Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation — automated with full audit trails.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAMultiAgentSystemsIcon />,
    title: 'Multi-Agent Systems',
    description:
      'Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAToolUsingAgentsIcon />,
    title: 'Tool-Using Agents',
    description:
      "Agents integrated with your real business tools – CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAHumanInTheLoopWorkflowsIcon />,
    title: 'Human-in-the-Loop Workflows',
    description:
      'Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAAIPoweredProcessAutomationIcon />,
    title: 'AI-Powered Process Automation',
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry – with understanding, not just pattern matching.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <QAAIPoweredProcessAutomationIcon />,
    title: 'AI-Powered Process Automation',
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry – with understanding, not just pattern matching.",
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
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'OpenAI GPT-4o',
        logo: '',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Claude 3.5 Sonnet',
        logo: '',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Gemini 1.5 Pro',
        logo: '',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'LLaMA 3',
        logo: '',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
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

export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
