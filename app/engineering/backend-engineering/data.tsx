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
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/node_z9ziqo.webp',
      },
      {
        id: createId(),
        name: 'Python',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png',
      },
      {
        id: createId(),
        name: 'Go',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039286/Gloitel/icon/Go_nqicwd.png',
      },
      {
        id: createId(),
        name: 'Java (Spring Boot)',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/java_c2a3tr.png',
      },
    ],

    Frameworks: [
      {
        id: createId(),
        name: 'NestJS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039285/Gloitel/icon/NestJS_xaqzkv.png',
      },
      {
        id: createId(),
        name: 'FastAPI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png',
      },
      {
        id: createId(),
        name: 'Django',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039284/Gloitel/icon/Django_ezsw8r.png',
      },
      {
        id: createId(),
        name: 'Express',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789042540/Gloitel/icon/images_qc95ww.png',
      },
      {
        id: createId(),
        name: 'Gin',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789043429/Gloitel/icon/gin-logo-png_seeklogo-446934_qfyiig.png',
      },
      {
        id: createId(),
        name: 'Fiber',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789043812/Gloitel/icon/62ea745ef161d413e7e5acd4_fiber-intext-min_brq7ma.png',
      },
    ],

    Databases: [
      {
        id: createId(),
        name: 'PostgreSQL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png',
      },
      {
        id: createId(),
        name: 'MongoDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039284/Gloitel/icon/MongoDB_y5bh5v.png',
      },
      {
        id: createId(),
        name: 'Redis',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png',
      },
      {
        id: createId(),
        name: 'MySQL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144985/Gloitel/icon/mysql_ioyrw1.png',
      },
      {
        id: createId(),
        name: 'DynamoDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039283/Gloitel/icon/DynamoDB_q5kcjb.png',
      },
      {
        id: createId(),
        name: 'Cassandra',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789044216/Gloitel/icon/Apache-cassandra-icon_opbnif.png',
      },
    ],

    'Message Queues': [
      {
        id: createId(),
        name: 'Kafka',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png',
      },
      {
        id: createId(),
        name: 'RabbitMQ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png',
      },
      {
        id: createId(),
        name: 'AWS SQS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png',
      },
      {
        id: createId(),
        name: 'Google Pub/Sub',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png',
      },
      {
        id: createId(),
        name: 'Bull',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789044526/Gloitel/icon/images_yfehmr.jpg',
      },
    ],

    Search: [
      {
        id: createId(),
        name: 'Elasticsearch',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789044696/Gloitel/icon/images_hiutsq.png',
      },
      {
        id: createId(),
        name: 'Typesense',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789044807/Gloitel/icon/typesense-icon-nh5fn3oxftvecskfbhbi_zwjhpq.webp',
      },
      {
        id: createId(),
        name: 'Algolia',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789045035/Gloitel/icon/Algolia_ipsy0v.webp',
      },
    ],

    Authentication: [
      {
        id: createId(),
        name: 'JWT',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789103011/Gloitel/icon/jwt-icon-aqjx58uyj3lrxtborzgyg_kawfog.webp',
      },
      {
        id: createId(),
        name: 'OAuth 2.0 / OIDC',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789103314/Gloitel/icon/Oauth_logo.svg_koobyp.webp',
      },
      {
        id: createId(),
        name: 'Clerk',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960643/Gloitel/icon/clerk_fapefn.png',
      },
      {
        id: createId(),
        name: 'Auth0',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784961896/Gloitel/icon/Auth0_shuxwm.png',
      },
      {
        id: createId(),
        name: 'Keycloak',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789103591/Gloitel/icon/Keycloak_Logo_pcu69n.png',
      },
    ],

    APIs: [
      {
        id: createId(),
        name: 'REST',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960600/Gloitel/icon/RESTAPIs_aldign.png',
      },
      {
        id: createId(),
        name: 'GraphQL (Apollo, Strawberry)',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/graph_v7lrwc.webp',
      },
      {
        id: createId(),
        name: 'gRPC',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230211/Gloitel/icon/grpc_hlwe7c.png',
      },
      {
        id: createId(),
        name: 'WebSocket',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789105084/Gloitel/icon/130129149_wgt483.png',
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
