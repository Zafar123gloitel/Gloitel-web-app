import {
  AIPoweredProcessAutomationIcon,
  AgenticWorkflowAutomationIcon,
  HeroArrowRightIcon,
  HumanInTheLoopWorkflowsIcon,
  MultiAgentSystemsIcon,
  ToolUsingAgentsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const backendEngineeringHeroData = {
  badgeText: 'Backend Engineering',
  title: 'Backend Systems Built for Reliability, Not Just Functionality', // ⚠️ mismatch
  description:
    'A backend that works at 100 users often breaks at 10,000. We design backend systems that handle the real load, fail gracefully, and can be understood and maintained by more than one person.', // ⚠️ mismatch
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/Backend_Engineering_sbgbhz.png',
  imageAlt: 'Backend engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our Backend Team', // ⚠️ mismatch
    href: '/contact',
  },
  secondaryButton: {
    text: 'Architecture Review', // ⚠️ mismatch
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};
export const backendTechStackData = {
  badge: 'Technologies We Build With',

  title: 'Modern Technologies for Scalable Solutions',

  description:
    'A robust and modern tech stack to build secure, high-performance, and future-ready applications.',

  tabs: [
    'Languages',
    'Frameworks',
    'Databases',
    'Message Queues',
    'Search',
    'Authentication',
    'APIs',
  ],

  technologies: {
    Languages: [
      {
        id: createId(),
        name: 'Node.js (TypeScript)',
        logo: '',
      },
      {
        id: createId(),
        name: 'Python',
        logo: '',
      },
      {
        id: createId(),
        name: 'Go',
        logo: '',
      },
      {
        id: createId(),
        name: 'Java (Spring Boot)',
        logo: '',
      },
    ],

    Frameworks: [
      {
        id: createId(),
        name: 'NestJS',
        logo: '',
      },
      {
        id: createId(),
        name: 'FastAPI',
        logo: '',
      },
      {
        id: createId(),
        name: 'Django',
        logo: '',
      },
      {
        id: createId(),
        name: 'Express',
        logo: '',
      },
      {
        id: createId(),
        name: 'Gin',
        logo: '',
      },
      {
        id: createId(),
        name: 'Fiber',
        logo: '',
      },
    ],

    Databases: [
      {
        id: createId(),
        name: 'PostgreSQL',
        logo: '',
      },
      {
        id: createId(),
        name: 'MongoDB',
        logo: '',
      },
      {
        id: createId(),
        name: 'Redis',
        logo: '',
      },
      {
        id: createId(),
        name: 'MySQL',
        logo: '',
      },
      {
        id: createId(),
        name: 'DynamoDB',
        logo: '',
      },
      {
        id: createId(),
        name: 'Cassandra',
        logo: '',
      },
    ],

    'Message Queues': [
      {
        id: createId(),
        name: 'Kafka',
        logo: '',
      },
      {
        id: createId(),
        name: 'RabbitMQ',
        logo: '',
      },
      {
        id: createId(),
        name: 'AWS SQS',
        logo: '',
      },
      {
        id: createId(),
        name: 'Google Pub/Sub',
        logo: '',
      },
      {
        id: createId(),
        name: 'Bull',
        logo: '',
      },
    ],

    Search: [
      {
        id: createId(),
        name: 'Elasticsearch',
        logo: '',
      },
      {
        id: createId(),
        name: 'Typesense',
        logo: '',
      },
      {
        id: createId(),
        name: 'Algolia',
        logo: '',
      },
    ],

    Authentication: [
      {
        id: createId(),
        name: 'JWT',
        logo: '',
      },
      {
        id: createId(),
        name: 'OAuth 2.0 / OIDC',
        logo: '',
      },
      {
        id: createId(),
        name: 'Clerk',
        logo: '',
      },
      {
        id: createId(),
        name: 'Auth0',
        logo: '',
      },
      {
        id: createId(),
        name: 'Keycloak',
        logo: '',
      },
    ],

    APIs: [
      {
        id: createId(),
        name: 'REST',
        logo: '',
      },
      {
        id: createId(),
        name: 'GraphQL (Apollo, Strawberry)',
        logo: '',
      },
      {
        id: createId(),
        name: 'gRPC',
        logo: '',
      },
      {
        id: createId(),
        name: 'WebSocket',
        logo: '',
      },
    ],
  },
};

export const backendAgentsSectionHead = {
  badgeText: 'What We Build', // ⚠️ mismatch
  title: 'Backend Systems Designed for Real-World Scale', // ⚠️ mismatch
  description:
    'From APIs and asynchronous workflows to distributed services and data pipelines, we build backend systems designed to remain reliable as products, traffic, and complexity grow.', // ⚠️ mismatch
};

export const backendAgentsData = [
  {
    id: createId(),
    icon: <AgenticWorkflowAutomationIcon size={35} />,
    title: 'RESTful & GraphQL APIs',
    description:
      'Versioned, documented (OpenAPI), and tested. Rate limited, authenticated, and monitored from day one.',
  },
  {
    id: createId(),
    icon: <MultiAgentSystemsIcon size={35} />,
    title: 'Event-Driven Architecture',
    description:
      'Kafka or SQS-based pipelines for high-throughput, decoupled systems. Idempotent consumers, dead letter queues, and replay capability.',
  },
  {
    id: createId(),
    icon: <ToolUsingAgentsIcon size={35} />,
    title: 'Data Pipelines',
    description:
      'ETL/ELT pipelines for analytics, data warehousing, and real-time processing. Airflow, dbt, and Spark for complex transformation needs.',
  },
  {
    id: createId(),
    icon: <HumanInTheLoopWorkflowsIcon size={35} />,
    title: 'Microservices',
    description:
      'Service decomposition, API gateway design, service mesh, and the inter-service communication patterns that keep distributed systems maintainable.',
  },
  {
    id: createId(),
    icon: <AIPoweredProcessAutomationIcon size={35} />,
    title: 'Background Jobs & Scheduling',
    description:
      'Worker queues, cron-based jobs, retry logic, and idempotency patterns for reliable async processing.',
  },
];
export const backendEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Build a Backend That Won't Become Your Next Bottleneck", // ⚠️ mismatch — same copy-paste bug again
  description:
    "Whether you're launching a new platform, replacing a fragile backend, or preparing an existing system for growth, we'll help you build infrastructure that stays reliable as demand increases.",
  buttonText: 'Build Your Backend', // ⚠️ mismatch
  buttonLink: '/contact',
};
