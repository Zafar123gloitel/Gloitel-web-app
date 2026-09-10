import {
  ArrowRightIcon,
  ConnectedSystemsIcon,
  CustomModelsIcon,
  DevOpsAIMonitoringIcon,
  DevOpsCostOptimizationIcon,
  DevOpsLLMFeaturesIcon,
  DevOpsPromptOpsIcon,
  MLPipelinesIcon,
  RocketIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const devOpsCloudHeroData = {
  badgeText: 'DevOps & Cloud Engineering',
  title: 'The Infrastructure That Makes Everything Else Possible',
  description:
    "Good DevOps engineering is invisible when it's working — deployments that take minutes, staging environments that mirror production, alerts that fire before users notice something is wrong, and infrastructure that can be recreated from a git repo. That's what we build.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/DevOps_Cloud_Engineering_fg6twm.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our DevOps Team',
    href: '/about',
  },
  secondaryButton: {
    text: 'Infrastructure Review',
    href: '/about',
    icon: <ArrowRightIcon />,
  },
};
export const aiSystemsSectionHead = {
  badgeText: 'What We Test',
  title: 'Quality Engineering Across Every Layer of Your Product',
  description:
    'From exploratory testing to automated regression and production-scale performance validation, we build quality into the development lifecycle—not just the release checklist',
};

export const aiSystemsData = [
  {
    id: createId(),
    step: 1,
    icon: <RocketIcon />,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, preview, approval, and production deployment pipelines.',
  },
  {
    id: createId(),
    step: 2,
    icon: <DevOpsLLMFeaturesIcon />,
    title: 'Container Orchestration',
    description:
      'Docker and Kubernetes infrastructure with Helm, autoscaling, and cluster management.',
  },
  {
    id: createId(),
    step: 3,
    icon: <ConnectedSystemsIcon />,
    title: 'Agent Systems',
    description: 'Coordinated agents with tools, memory, and workflows.',
  },
  {
    id: createId(),
    step: 4,
    icon: <CustomModelsIcon />,
    title: 'Infrastructure as Code',
    description: 'Reproducible, version-controlled infrastructure with Terraform and Pulumi.',
  },
  {
    id: createId(),
    step: 5,
    icon: <MLPipelinesIcon />,
    title: 'Cloud Architecture',
    description: 'Secure AWS, GCP, and Azure architectures built for scale and reliability.',
  },
  {
    id: createId(),
    step: 6,
    icon: <DevOpsAIMonitoringIcon />,
    title: 'Monitoring & Observability',
    description:
      'Dashboards, alerts, metrics, logs, and distributed tracing for production systems.',
  },
  {
    id: createId(),
    step: 7,
    icon: <DevOpsPromptOpsIcon />,
    title: 'Cost Optimization',
    description:
      'Right-sizing, capacity planning, and cloud waste reduction without sacrificing reliability.',
  },
  {
    id: createId(),
    step: 8,
    icon: <DevOpsCostOptimizationIcon />,
    title: 'Security Hardening',
    description: 'IAM, secrets management, compliance controls, and CI/CD security scanning.',
  },
];

export const aiEcosystemData = {
  badge: 'DevOps & Cloud Technology Stack',
  title: 'Technologies We Build With',
  description:
    'From delivery automation to infrastructure, observability, and security, we choose proven tools that keep production environments maintainable and repeatable.',

  tabs: ['CI/CD', 'Containers', 'Infrastructure as Code', 'Cloud', 'Monitoring', 'Secrets'],

  technologies: {
    'CI/CD': [
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
    Containers: [
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
    'Infrastructure as Code': [
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
    Cloud: [
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
    Monitoring: [
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
    Secrets: [
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

export const devOpsCloudCTAData = {
  badgeText: 'Ready to Improve Your Infrastructure?',
  title: 'Make Your Infrastructure Easier to Ship and Operate',
  description:
    "Whether you're fixing a fragile deployment process, moving to Kubernetes, improving observability, or rebuilding your cloud foundation, we'll help you create infrastructure your team can operate with confidence.",
  buttonText: 'Review Your Infrastructure',
  buttonLink: '/contact',
};
