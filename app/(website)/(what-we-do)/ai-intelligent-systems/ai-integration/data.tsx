import {
  BellIcon,
  BookIcon,
  ChartIcon,
  CircuitIcon,
  CloudIcon,
  CodeSearchIcon,
  DocumentIcon,
  LinkIcon,
  PredictiveForecastingIcon,
  PuzzleIcon,
  RefreshCcwIcon,
  TimerIcon,
  WorkflowIcon,
  WorkflowIcon1,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const engineeringSectionData = {
  badgeText: 'What AI Integration Actually Involves',

  sectionHead: 'The Engineering behind Production AI Systems.',

  sectionSubHead: '',

  sectionDescription:
    'Successful AI integration requires more than connecting a model to an application. We build the infrastructure, recovery mechanisms, and monitoring layers that keep AI systems stable, observable, and production-ready.',
};

export const engineeringData = [
  {
    id: createId(),
    icon: <LinkIcon size={30} />,
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.',
  },

  {
    id: createId(),
    icon: <RefreshCcwIcon size={30} />,
    title: 'Resilient Processing',
    description:
      'Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.',
  },

  {
    id: createId(),
    icon: <PredictiveForecastingIcon size={30} />,
    title: 'Visibility & Control',
    description:
      'Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.',
  },
];
export const engineeringServicesData = [
  {
    id: createId(),
    icon: <LinkIcon />,
    title: 'Third-Party AI API Integration',
    description:
      'Connect your product to OpenAI, Anthropic, Google AI, AWS Bedrock, Azure OpenAI, and other AI providers. Prompt engineering, response parsing, error handling, cost controls, and caching layers included.',
  },

  {
    id: createId(),
    icon: <CloudIcon />,
    title: 'Model Serving Infrastructure',
    description:
      'Deploy custom-trained models as low-latency REST APIs. Docker-containerized, auto-scaling, version-managed serving infrastructure with health checks and rollback capability.',
  },

  {
    id: createId(),
    icon: <WorkflowIcon />,
    title: 'Data Pipeline Engineering for AI',
    description:
      'Build the pipelines that feed your AI systems—ingestion, transformation, vector embedding, indexing, and retrieval. Clean data in = useful AI out.',
  },

  {
    id: createId(),
    icon: <PredictiveForecastingIcon />,
    title: 'AI Monitoring & Observability',
    description:
      'Instrument your AI systems for performance tracking: latency, cost, accuracy drift, error rates, and token usage. Alert pipelines so you know before users do when something degrades.',
  },

  {
    id: createId(),
    icon: <PuzzleIcon size={30} />,
    title: 'Legacy System AI Augmentation',
    description:
      'Add AI capabilities to existing systems without a full rebuild. Plugin architecture, API bridges, and event-driven integrations that layer intelligence onto what you already have.',
  },

  {
    id: createId(),
    icon: <WorkflowIcon1 />,
    title: 'Enterprise AI Platform Setup',
    description:
      'Stand up internal AI platforms—model registries, experimentation infrastructure, prompt management systems, and access control—for teams building AI at scale.',
  },
];

export const architecturePatternsData = [
  {
    id: createId(),
    icon: <TimerIcon />,
    title: 'Synchronous API Pattern',
    description:
      'User-facing features where AI generates a response in real time. Optimized for latency with streaming support and graceful fallback.',
  },
  {
    id: createId(),
    icon: <WorkflowIcon1 />,
    title: 'Async Pipeline Pattern',
    description:
      'Background AI processing—document ingestion, batch enrichment, async summarization. Queue-based with retry logic and dead letter handling.',
  },
  {
    id: createId(),
    icon: <CodeSearchIcon />,
    title: 'Retrieval-Augmented Pattern',
    description:
      'RAG systems where AI responses are grounded in retrieved documents. Vector search + LLM inference + citation extraction, built as a unified service.',
  },
  {
    id: createId(),
    icon: <CircuitIcon />,
    title: 'Event-Driven Pattern',
    description:
      'AI triggered by business events—a new contract uploaded, a support ticket created, a transaction flagged. Integrated with your event bus (Kafka, SQS, Pub/Sub).',
  },
];

export const TechnologiesData = {
  badge: 'Technologies & Stack',

  title: 'Built on Industry-Leading Technologies',

  description:
    'From AI APIs and model serving infrastructure to monitoring, messaging, and data platforms, we use proven technologies trusted by organizations building AI at scale.',

  tabs: ['AI APIs', 'Serving', 'Messaging', 'Monitoring', 'Infrastructure', 'Data'],

  technologies: {
    'AI APIs': [
      {
        name: 'OpenAI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        name: 'Anthropic Claude',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png',
      },
      {
        name: 'Google Gemini',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png',
      },
      {
        name: 'AWS Bedrock',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960626/Gloitel/icon/awsBedrock_lhcxbo.png',
      },
      {
        name: 'Cohere',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png',
      },
      {
        name: 'Replicate',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960599/Gloitel/icon/Replicate_lljrha.png',
      },
    ],

    Serving: [
      {
        name: 'FastAPI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        name: 'TorchServe',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/TorchServe_ili0ug.png',
      },
      {
        name: 'TensorFlow Serving',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960606/Gloitel/icon/TensorFlow_Serving_htauuz.png',
      },
      {
        name: 'BentoML',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960632/Gloitel/icon/BentoML_ut5xaw.png',
      },
      {
        name: 'Triton',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/Triton_v28arn.png',
      },
    ],

    Messaging: [
      {
        name: 'Kafka',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png',
      },
      {
        name: 'RabbitMQ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png',
      },
      {
        name: 'AWS SQS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png',
      },
      {
        name: 'Google Pub/Sub',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png',
      },
    ],

    Monitoring: [
      {
        name: 'LangSmith',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png',
      },
      {
        name: 'Helicone',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Helicone_nqk9cv.png',
      },
      {
        name: 'Arize',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960615/Gloitel/icon/Arize_AI_n3ha33.png',
      },
      {
        name: 'Datadog',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960660/Gloitel/icon/Datadog_apthol.png',
      },
      {
        name: 'Grafana',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png',
      },
    ],

    Infrastructure: [
      {
        name: 'Docker',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png',
      },
      {
        name: 'Kubernetes',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png',
      },
      {
        name: 'Terraform',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png',
      },
      {
        name: 'AWS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png',
      },
      {
        name: 'GCP',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        name: 'Azure',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
    ],

    Data: [
      {
        name: 'PostgreSQL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png',
      },
      {
        name: 'Redis',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png',
      },
      {
        name: 'Pinecone',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png',
      },
      {
        name: 'Weaviate',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png',
      },
      {
        name: 'S3',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png',
      },
      {
        name: 'BigQuery',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960635/Gloitel/icon/BigQuery_dgjvnk.png',
      },
    ],
  },
};

export const deliverablesData = [
  {
    id: createId(),
    icon: <DocumentIcon />,
    title: 'Documented API contracts for every AI integration',
  },

  {
    id: createId(),
    icon: <BookIcon />,
    title: 'Runbooks for common failure scenarios',
  },

  {
    id: createId(),
    icon: <ChartIcon />,
    title: 'Cost dashboards with per-feature AI spend breakdown',
  },

  {
    id: createId(),
    icon: <TimerIcon />,
    title: 'Model version control and rollback procedures',
  },

  {
    id: createId(),
    icon: <BellIcon />,
    title: 'Monitoring alerts configured and tested before handoff',
  },
];
