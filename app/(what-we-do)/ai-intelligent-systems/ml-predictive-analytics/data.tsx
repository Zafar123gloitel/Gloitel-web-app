import {
  AnomalyDetectionIcon,
  ChatbotIcon,
  CheckTargetIcon,
  NotBuildIcon,
  PredictiveForecastingIcon,
  SettingsAlternativeIcon,
  SettingsIcon,
  TargetIcon,
} from 'components/SvgIcon';

const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const outcomesData2 = [
  {
    id: createId(),
    icon: <PredictiveForecastingIcon size={30} />,
    title: 'Predictive Forecasting',
    description:
      'Forecast demand, revenue, inventory, and resource utilization with models that support smarter planning decisions. Built for sales forecasting, capacity planning, energy demand prediction, and financial projections.',
  },
  {
    id: createId(),
    icon: <AnomalyDetectionIcon size={30} />,
    title: 'Anomaly Detection',
    description:
      'Detect fraud, defects, equipment failures, and unusual system behavior before they cause business impact. Real-time monitoring helps identify risks early and improve operational reliability.',
  },
  {
    id: createId(),
    icon: <TargetIcon size={35} />,
    title: 'Recommendation Systems',
    description:
      'Deliver personalized recommendations that increase engagement, conversion, and retention. Ideal for product suggestions, content personalization, search ranking, and next-best-action experiences.',
  },
  {
    id: createId(),
    icon: <CheckTargetIcon size={35} />,
    title: 'Classification & Scoring',
    description:
      'Assign categories, risk scores, and priority rankings using explainable machine learning models. Commonly used for lead scoring, churn prediction, customer segmentation, and credit risk assessment.',
  },
  {
    id: createId(),
    icon: <ChatbotIcon size={35} />,
    title: 'Natural Language Processing',
    description:
      'Extract meaningful insights from unstructured text through sentiment analysis, entity extraction, and intent classification. Applied to customer feedback, support tickets, reviews, and compliance documents.',
  },
  {
    id: createId(),
    icon: <NotBuildIcon size={35} />,
    title: 'Computer Vision',
    description:
      'Analyze images and video using object detection, classification, and visual inspection systems. Used for quality control, retail analytics, medical imaging, and security monitoring.',
  },
];

export const dataAssessmentStep = {
  badgeText: 'Step 01',
  title: 'Data Assessment',
  description:
    "Evaluate data quality, quantity, and labeling before scoping. We won't commit to a model if the data can't support it.",
  buttonText: 'View more',
  buttonLink: '/data-assessment',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Data_Assessment_vo5nai.png',
  imageAlt: 'Data Assessment',
};

export const baselineBenchmarkingStep = {
  badgeText: 'Step 02',
  title: 'Baseline & Benchmarking',
  description:
    'Build a simple baseline model first. Establish the performance floor and use metrics appropriate to business value, not just statistical accuracy.',
  buttonText: 'View more',
  buttonLink: '/baseline-benchmarking',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/Baseline_Benchmarking_exvcsf.png',
  imageAlt: 'Baseline & Benchmarking',
};

export const featureEngineeringStep = {
  badgeText: 'Step 03',
  title: 'Feature Engineering',
  description:
    'The most impactful phase. Domain-specific feature creation that makes the difference between a model that works and one that is useful.',
  buttonText: 'View more',
  buttonLink: '/feature-engineering',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613038/Gloitel/what%20we%20do/Feature_Engineering22_pwxgwh.png',
  imageAlt: 'Feature Engineering',
};

export const modelDevelopmentSelectionStep = {
  badgeText: 'Step 04',
  title: 'Model Development & Selection',
  description:
    'Train, evaluate, and compare multiple model architectures. Select based on accuracy, interpretability, latency, and operational requirements.',
  buttonText: 'View more',
  buttonLink: '/model-development-selection',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/Model_Development_titb0f.png',
  imageAlt: 'Model Development & Selection',
};

export const validationTestingStep = {
  badgeText: 'Step 05',
  title: 'Validation & Testing',
  description:
    'Rigorous hold-out testing, cross-validation, and business metric validation. A model that is accurate by ML metrics but wrong by business metrics is a failure.',
  buttonText: 'View more',
  buttonLink: '/validation-testing',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/Validation_Testing_hr2bom.png',
  imageAlt: 'Validation & Testing',
};

export const deploymentMonitoringStep = {
  badgeText: 'Step 06',
  title: 'Deployment & Monitoring',
  description:
    'REST API deployment with version control, AI testing infrastructure, and data drift monitoring. Models that degrade silently in production are as common as they are preventable.',
  buttonText: 'View more',
  buttonLink: '/deployment-monitoring',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/Deployment_Monitoring_ghcy7a.png',
  imageAlt: 'Deployment & Monitoring',
};

export const aiSolutionsDataJson = {
  badge: 'Technologies & Stack',
  title: 'The Technologies Behind Our AI Solutions.',
  description:
    'We combine leading AI models, frameworks, vector databases, and deployment platforms to build secure, scalable, and production-ready AI systems.',
  tabs: [
    'LLM APIs',
    'Open Source',
    'RAG Frameworks',
    'Vector Stores',
    'Orchestration',
    'Deployment',
  ],
  technologies: {
    'LLM APIs': [
      {
        id: createId(),
        name: 'OpenAI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        id: createId(),
        name: 'Anthropic Claude',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png',
      },
      {
        id: createId(),
        name: 'Google Gemini',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png',
      },
      {
        id: createId(),
        name: 'Cohere',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png',
      },
    ],
    'Open Source': [
      {
        id: createId(),
        name: 'Meta LLaMA 3',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png',
      },
      {
        id: createId(),
        name: 'Mistral',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png',
      },
      {
        id: createId(),
        name: 'Phi-3',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960584/Gloitel/icon/phi-3_v9nclj.png',
      },
      {
        id: createId(),
        name: 'Qwen',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qwen_oyj4re.png',
      },
    ],
    'RAG Frameworks': [
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
        name: 'Haystack',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png',
      },
    ],
    'Vector Stores': [
      {
        id: createId(),
        name: 'Pinecone',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png',
      },
      {
        id: createId(),
        name: 'Weaviate',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png',
      },
      {
        id: createId(),
        name: 'Qdrant',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png',
      },
      {
        id: createId(),
        name: 'pgvector',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png',
      },
      {
        id: createId(),
        name: 'Chroma',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png',
      },
    ],
    Orchestration: [
      {
        id: createId(),
        name: 'LangGraph',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png',
      },
      {
        id: createId(),
        name: 'AutoGen',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png',
      },
      {
        id: createId(),
        name: 'CrewAI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png',
      },
    ],
    Deployment: [
      {
        id: createId(),
        name: 'FastAPI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png',
      },
      {
        id: createId(),
        name: 'Modal',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png',
      },
      {
        id: createId(),
        name: 'AWS Bedrock',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960617/Gloitel/icon/AWS_Bedrock_segrwb.png',
      },
      {
        id: createId(),
        name: 'Azure OpenAI Service',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
      {
        id: createId(),
        name: 'Google Vertex AI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png',
      },
    ],
  },
};

export const notEveryProblemData = {
  badgeText: "When ML Isn't the Right Answer",
  heading: 'Not Every Problem Needs AI',
  description:
    'Business rules, statistical models, and workflow automation can often deliver better outcomes with less complexity than machine learning.',

  cards: [
    {
      id: createId(),
      icon: <SettingsIcon size={30} />,
      title: 'Machine Learning',
      description:
        'Best suited for complex prediction problems, pattern recognition, and decision-making scenarios where data-driven intelligence creates measurable business value.',
    },
    {
      id: createId(),
      icon: <SettingsAlternativeIcon size={30} />,
      title: 'Simpler Alternatives',
      description:
        'When business rules are clear and outcomes are predictable, simpler solutions often deliver faster implementation, lower costs, and easier maintenance.',
    },
  ],

  bottomText:
    "We've implemented both approaches. The recommendation depends on your business goals, data maturity, and operational requirements.",
};
