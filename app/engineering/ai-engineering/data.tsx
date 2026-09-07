import {
  AIMonitoringIcon,
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
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done the latter.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/AI_Engineering_vgdww8.png',
  imageAlt: 'AI engineering',
  video:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/AI_Engineering_vgdww8.png',
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

    'RAG/Orchestration': [
      {
        id: createId(),
        name: 'LangChain',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png',
      },
      {
        id: createId(),
        name: 'LlamaIndex',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png',
      },
      {
        id: createId(),
        name: 'LangGraph',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png',
      },
      {
        id: createId(),
        name: 'Haystack',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788761341/Gloitel/icon/haystack-logo-colored_Edited_e1aeoh.png',
      },
    ],

    'Vector DBs': [
      {
        id: createId(),
        name: 'Pinecone',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png',
      },
      {
        id: createId(),
        name: 'Weaviate',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788761810/weaviate-logo-square-dark_mswunx.png',
      },
      {
        id: createId(),
        name: 'Qdrant',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png',
      },
      {
        id: createId(),
        name: 'pgvector',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png',
      },
      {
        id: createId(),
        name: 'Chroma',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png',
      },
    ],

    ML: [
      {
        id: createId(),
        name: 'PyTorch',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/TorchServe_ili0ug.png',
      },
      {
        id: createId(),
        name: 'TensorFlow',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960606/Gloitel/icon/TensorFlow_Serving_htauuz.png',
      },
      {
        id: createId(),
        name: 'Scikit-learn',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788762349/Gloitel/icon/Scikit_learn_logo_small.svg_voig1c.webp',
      },
      {
        id: createId(),
        name: 'HuggingFace Transformers',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788762452/Gloitel/icon/hf-logo_sjhbwg.png',
      },
    ],

    MLOps: [
      {
        id: createId(),
        name: 'MLflow',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788762598/Gloitel/icon/mlflow-automation_hgo69x.png',
      },
      {
        id: createId(),
        name: 'Weights & Biases',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/Weights_Biases_irxdxa.png',
      },
      {
        id: createId(),
        name: 'DVC',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788764355/Gloitel/icon/DVC_nypvsg.png',
      },
      {
        id: createId(),
        name: 'Evidently AI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788764423/Gloitel/icon/Evidently_AI_rqpdfj.png',
      },
    ],

    Serving: [
      {
        id: createId(),
        name: 'FastAPI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png',
      },
      {
        id: createId(),
        name: 'TorchServe',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788764733/Gloitel/icon/TorchServe_lv22pj.png',
      },
      {
        id: createId(),
        name: 'BentoML',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788764805/Gloitel/icon/BentoML_ovtewu.png',
      },
      {
        id: createId(),
        name: 'Modal',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png',
      },
      {
        id: createId(),
        name: 'Ray Serve',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787036467/Gloitel/icon/Ray_Serve_gkh5n2.png',
      },
    ],

    Observability: [
      {
        id: createId(),
        name: 'LangSmith',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png',
      },
      {
        id: createId(),
        name: 'Helicone',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788766193/Gloitel/icon/Helicone_rpea8l.png',
      },
      {
        id: createId(),
        name: 'Arize Phoenix',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788766284/Gloitel/icon/Arize_Phoenix_egd3t4.png',
      },
      {
        id: createId(),
        name: 'OpenTelemetry',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788766314/Gloitel/icon/OpenTelemetry_wiblxb.png',
      },
    ],

    'Cloud AI': [
      {
        id: createId(),
        name: 'AWS Bedrock',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Google Vertex AI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        id: createId(),
        name: 'Azure OpenAI Service',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
    ],
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
      title: 'Hallucinations',
      description:
        'Ground AI responses with RAG, fact-checking chains, structured output enforcement, and confidence thresholding.',
    },
    {
      id: createId(),
      title: 'Latency',
      description:
        'Reduce response times with streaming, parallel tool calls, caching, and asynchronous processing.',
    },
    {
      id: createId(),
      title: 'Cost Control',
      description:
        'Control spend through token tracking, request caching, intelligent model routing, and per-feature cost dashboards.',
    },
    {
      id: createId(),
      title: 'Security',
      description:
        'Protect AI systems with prompt-injection defenses, PII detection and scrubbing, output filtering, and data-residency controls.',
    },
    {
      id: createId(),
      title: 'Observability',
      description:
        "Every production AI system gets traces, spans, metrics, and monitoring so you know what's happening — and when performance degrades.",
    },
  ],
};
export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: 'Build Production AI That Lasts',
  description:
    "Whether you're adding AI to an existing product or building a new AI-native platform, we'll help you move from prototype to a system your users and engineering team can depend on.",
  buttonText: 'Build AI Systems with Us',
  buttonLink: '/contact',
};
