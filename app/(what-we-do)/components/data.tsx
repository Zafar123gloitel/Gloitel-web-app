import {
  ChevronRight,
  Download,
  FileText,
  Workflow,
  Timer,
  SearchCode,
  GitBranch,
  BookOpen,
  BarChart3,
  History,
  Bell,
} from "lucide-react";
import { RefreshCcw, Users, Wrench, Handshake, Zap } from "lucide-react";
import {
  ChartNoAxesCombined,
  Link2,
  Server,
  Puzzle,
  Network,
} from "lucide-react";














export const ApproachStepOne = {
  badgeText: "Step 01",
  title: "Process Mapping",
  description:
    "Document the exact workflow the agent will replace or augment. Every input source, decision point, tool call, and output format.",
  buttonText: "View more",
  buttonLink: "/use-case-definition",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Process_Mapping_miouuy.png",
  imageAlt: "Process Mapping",
};

export const ApproachStepTwo = {
  badgeText: "Step 02",
  title: "Tool Architecture",
  description:
    "Design the tool set the agent will have access to. Minimal permissions, auditable actions, rollback capability.",
  buttonText: "View more",
  buttonLink: "/model-selection",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Tool_Architecture_jc9cmw.png",
  imageAlt: "Tool Architecture",
};

export const ApproachStepThree = {
  badgeText: "Step 03",
  title: "Failure Mode Analysis",
  description:
    "Map every point where the agent could go wrong. Design guardrails, fallback paths, and human escalation triggers before build.",
  buttonText: "View more",
  buttonLink: "/prototype-evaluation",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Failure_Mode_Analysis_acblok.png",
  imageAlt: "Failure Mode Analysis",
};

export const ApproachStepFour = {
  badgeText: "Step 04",
  title: "Pilot with Supervision",
  description:
    "Run the agent in shadow mode alongside the current process. Compare outputs, measure accuracy, identify edge cases.",
  buttonText: "View more",
  buttonLink: "/production-deployment",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Pilot_with_Supervision_hd3xxx.png",
  imageAlt: "Pilot with Supervision",
};

export const ApproachStepFive = {
  badgeText: "Step 05",
  title: "Gradual Autonomy",
  description:
    "Increase agent autonomy progressively as confidence builds. Not a binary switch from human to automated.",
  buttonText: "View more",
  buttonLink: "/continuous-optimization",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/Gradual_Autonomy_ncejte.png",
  imageAlt: "Continuous Optimization",
};

export const dataAssessmentStep = {
  badgeText: "Step 01",
  title: "Data Assessment",
  description:
    "Evaluate data quality, quantity, and labeling before scoping. We won't commit to a model if the data can't support it.",
  buttonText: "View more",
  buttonLink: "/data-assessment",
  image: "/images/What-we-do/data-assessment.png",
  imageAlt: "Data Assessment",
};

export const baselineBenchmarkingStep = {
  badgeText: "Step 02",
  title: "Baseline & Benchmarking",
  description:
    "Build a simple baseline model first. Establish the performance floor and use metrics appropriate to business value, not just statistical accuracy.",
  buttonText: "View more",
  buttonLink: "/baseline-benchmarking",
  image: "/images/What-we-do/baseline-benchmarking.png",
  imageAlt: "Baseline & Benchmarking",
};

export const featureEngineeringStep = {
  badgeText: "Step 03",
  title: "Feature Engineering",
  description:
    "The most impactful phase. Domain-specific feature creation that makes the difference between a model that works and one that is useful.",
  buttonText: "View more",
  buttonLink: "/feature-engineering",
  image: "/images/What-we-do/feature-engineering.png",
  imageAlt: "Feature Engineering",
};

export const modelDevelopmentSelectionStep = {
  badgeText: "Step 04",
  title: "Model Development & Selection",
  description:
    "Train, evaluate, and compare multiple model architectures. Select based on accuracy, interpretability, latency, and operational requirements.",
  buttonText: "View more",
  buttonLink: "/model-development-selection",
  image: "/images/What-we-do/model-development-selection.png",
  imageAlt: "Model Development & Selection",
};

export const validationTestingStep = {
  badgeText: "Step 05",
  title: "Validation & Testing",
  description:
    "Rigorous hold-out testing, cross-validation, and business metric validation. A model that is accurate by ML metrics but wrong by business metrics is a failure.",
  buttonText: "View more",
  buttonLink: "/validation-testing",
  image: "/images/What-we-do/validation-testing.png",
  imageAlt: "Validation & Testing",
};

export const deploymentMonitoringStep = {
  badgeText: "Step 06",
  title: "Deployment & Monitoring",
  description:
    "REST API deployment with version control, AI testing infrastructure, and data drift monitoring. Models that degrade silently in production are as common as they are preventable.",
  buttonText: "View more",
  buttonLink: "/deployment-monitoring",
  image: "/images/What-we-do/deployment-monitoring.png",
  imageAlt: "Deployment & Monitoring",
};



export const Agent_Projects = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing hallucinations in AI outputs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Managing costs as AI systems scale.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing latency across AI workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Protecting sensitive data and enterprise systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Ensuring reliable performance in production.",
  },
];





export const TechnologiesData = {
  badge: "Technologies & Stack",

  title: "Built on Industry-Leading Technologies",

  description:
    "From AI APIs and model serving infrastructure to monitoring, messaging, and data platforms, we use proven technologies trusted by organizations building AI at scale.",

  tabs: [
    "AI APIs",
    "Serving",
    "Messaging",
    "Monitoring",
    "Infrastructure",
    "Data",
  ],

  technologies: {
    "AI APIs": [
      {
        name: "OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        name: "Anthropic Claude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        name: "Google Gemini",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      },
      {
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960626/Gloitel/icon/awsBedrock_lhcxbo.png",
      },
      {
        name: "Cohere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png",
      },
      {
        name: "Replicate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960599/Gloitel/icon/Replicate_lljrha.png",
      },
    ],

    Serving: [
      {
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        name: "TorchServe",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/TorchServe_ili0ug.png",
      },
      {
        name: "TensorFlow Serving",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960606/Gloitel/icon/TensorFlow_Serving_htauuz.png",
      },
      {
        name: "BentoML",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960632/Gloitel/icon/BentoML_ut5xaw.png",
      },
      {
        name: "Triton",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/Triton_v28arn.png",
      },
    ],

    Messaging: [
      {
        name: "Kafka",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png",
      },
      {
        name: "RabbitMQ",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png",
      },
      {
        name: "AWS SQS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png",
      },
      {
        name: "Google Pub/Sub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png",
      },
    ],

    Monitoring: [
      {
        name: "LangSmith",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png",
      },
      {
        name: "Helicone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Helicone_nqk9cv.png",
      },
      {
        name: "Arize",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960615/Gloitel/icon/Arize_AI_n3ha33.png",
      },
      {
        name: "Datadog",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960660/Gloitel/icon/Datadog_apthol.png",
      },
      {
        name: "Grafana",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png",
      },
    ],

    Infrastructure: [
      {
        name: "Docker",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png",
      },
      {
        name: "Kubernetes",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png",
      },
      {
        name: "Terraform",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png",
      },
      {
        name: "AWS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png",
      },
      {
        name: "GCP",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png",
      },
      {
        name: "Azure",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
    ],

    Data: [
      {
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png",
      },
      {
        name: "Redis",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png",
      },
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        name: "S3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png",
      },
      {
        name: "BigQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960635/Gloitel/icon/BigQuery_dgjvnk.png",
      },
    ],
  },
};

export const aiAgentTechnologyData = {
  badge: "Technologies & Stack",

  title: "The Technology Stack Powering Production AI Agents",

  description:
    "Building successful AI systems requires more than a single model. We bring together the frameworks, infrastructure, and operational tooling needed to support AI in production.",

  tabs: [
    "Frameworks",
    "Tool Integration",
    "Memory",
    "Observability",
    "Deployment",
  ],

  technologies: {
    Frameworks: [
      {
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
      {
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        name: "Semantic Kernel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960602/Gloitel/icon/semanticKernel_ypmoe4.png",
      },
      {
        name: "LlamaIndex Workflows",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
    ],

    "Tool Integration": [
      {
        name: "REST APIs",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960600/Gloitel/icon/RESTAPIs_aldign.png",
      },
      {
        name: "MCP",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960575/Gloitel/icon/MCP_q296fc.png",
      },
      {
        name: "Function Calling",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960677/Gloitel/icon/FunctionCalling_ybe6uu.png",
      },
    ],

    Memory: [
      {
        name: "Redis",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png",
      },
      {
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png",
      },
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "In-context Memory Management",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],

    Observability: [
      {
        name: "LangSmith",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png",
      },
      {
        name: "Arize AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960615/Gloitel/icon/Arize_AI_n3ha33.png",
      },
      {
        name: "Helicone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Helicone_nqk9cv.png",
      },
      {
        name: "Custom Logging Pipelines",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960666/Gloitel/icon/Custom_logging_pipelines_p1gbgn.png",
      },
    ],

    Deployment: [
      {
        name: "Docker",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png",
      },
      {
        name: "Kubernetes",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png",
      },
      {
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        name: "AWS Lambda",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960619/Gloitel/icon/AWS_Lambda_cmuj6h.png",
      },
      {
        name: "Cloud Run",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960648/Gloitel/icon/Cloud_Run_ada7sy.png",
      },
    ],
  },
};

export const aiSolutionsDataJson = {
  badge: "Technologies & Stack",
  title: "The Technologies Behind Our AI Solutions.",
  description:
    "We combine leading AI models, frameworks, vector databases, and deployment platforms to build secure, scalable, and production-ready AI systems.",
  tabs: [
    "LLM APIs",
    "Open Source",
    "RAG Frameworks",
    "Vector Stores",
    "Orchestration",
    "Deployment",
  ],
  technologies: {
    "LLM APIs": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Anthropic Claude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Gemini",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cohere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png",
      },
    ],
    "Open Source": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Meta LLaMA 3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mistral",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Phi-3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960584/Gloitel/icon/phi-3_v9nclj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Qwen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qwen_oyj4re.png",
      },
    ],
    "RAG Frameworks": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LangChain",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LlamaIndex",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Haystack",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png",
      },
    ],
    "Vector Stores": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Qdrant",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "pgvector",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Chroma",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],
    Orchestration: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
    ],
    Deployment: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960617/Gloitel/icon/AWS_Bedrock_segrwb.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure OpenAI Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Vertex AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png",
      },
    ],
  },
};

export const outcomesData2 = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M6.64453 7.59375V33.2231C6.64453 34.7336 7.24458 36.1822 8.31268 37.2503C9.38077 38.3184 10.8294 38.9185 12.3399 38.9185H37.9692"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3398 28.4768L20.8829 19.9337L27.5276 26.5783L37.9691 16.1367"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Predictive Forecasting",
    description:
      "Forecast demand, revenue, inventory, and resource utilization with models that support smarter planning decisions. Built for sales forecasting, capacity planning, energy demand prediction, and financial projections.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.7662 22.7815C41.7662 33.2668 33.2668 41.7662 22.7815 41.7662C12.2963 41.7662 3.79688 33.2668 3.79688 22.7815C3.79688 12.2963 12.2963 3.79688 22.7815 3.79688C33.2668 3.79688 41.7662 12.2963 41.7662 22.7815ZM22.7815 37.9693C26.8096 37.9693 30.6726 36.3691 33.5209 33.5209C36.3691 30.6726 37.9693 26.8096 37.9693 22.7815C37.9693 18.7535 36.3691 14.8904 33.5209 12.0422C30.6726 9.19394 26.8096 7.59381 22.7815 7.59381C18.7535 7.59381 14.8904 9.19394 12.0422 12.0422C9.19394 14.8904 7.59381 18.7535 7.59381 22.7815C7.59381 26.8096 9.19394 30.6726 12.0422 33.5209C14.8904 36.3691 18.7535 37.9693 22.7815 37.9693Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7813 26.5783C22.2778 26.5783 21.7949 26.3783 21.4389 26.0223C21.0828 25.6663 20.8828 25.1834 20.8828 24.6799V15.1875C20.8828 14.684 21.0828 14.2011 21.4389 13.8451C21.7949 13.4891 22.2778 13.2891 22.7813 13.2891C23.2848 13.2891 23.7677 13.4891 24.1237 13.8451C24.4797 14.2011 24.6797 14.684 24.6797 15.1875V24.6799C24.6797 25.1834 24.4797 25.6663 24.1237 26.0223C23.7677 26.3783 23.2848 26.5783 22.7813 26.5783Z"
          fill="white"
        />
        <path
          d="M20.8828 30.375C20.8828 29.8715 21.0828 29.3886 21.4389 29.0326C21.7949 28.6766 22.2778 28.4766 22.7813 28.4766C23.2848 28.4766 23.7677 28.6766 24.1237 29.0326C24.4797 29.3886 24.6797 29.8715 24.6797 30.375C24.6797 30.8785 24.4797 31.3614 24.1237 31.7174C23.7677 32.0735 23.2848 32.2735 22.7813 32.2735C22.2778 32.2735 21.7949 32.0735 21.4389 31.7174C21.0828 31.3614 20.8828 30.8785 20.8828 30.375Z"
          fill="white"
        />
      </svg>
    ),
    title: "Anomaly Detection",
    description:
      "Detect fraud, defects, equipment failures, and unusual system behavior before they cause business impact. Real-time monitoring helps identify risks early and improve operational reliability.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M22.78 2.53141C20.9616 2.53768 19.1523 2.78885 17.401 3.27814L18.3755 5.63224C22.1606 4.63003 26.1706 4.90329 29.7847 6.40974C33.3989 7.91619 36.4158 10.5718 38.3685 13.9657C40.3213 17.3596 41.101 21.3024 40.587 25.1841C40.0731 29.0658 38.2941 32.6698 35.5254 35.4385C32.7567 38.2073 29.1526 39.9862 25.2709 40.5002C21.3893 41.0142 17.4464 40.2344 14.0525 38.2817C10.6587 36.3289 8.00303 33.312 6.49658 29.6979C4.99013 26.0837 4.71687 22.0738 5.71908 18.2887L3.36498 17.3015C2.21617 21.3882 2.38074 25.7327 3.83544 29.7208C5.29014 33.7089 7.96139 37.139 11.4717 39.5264C14.9819 41.9137 19.1537 43.1375 23.3974 43.0247C27.641 42.912 31.7419 41.4685 35.1205 38.8982C38.4991 36.3279 40.9845 32.7609 42.2255 28.7011C43.4664 24.6414 43.4001 20.2943 42.036 16.2743C40.6719 12.2543 38.0789 8.76469 34.6235 6.2986C31.1681 3.83251 27.0251 2.51469 22.78 2.53141Z"
          fill="white"
        />
        <path
          d="M9.42962 19.8699C8.79793 22.7563 9.11762 25.7696 10.3409 28.4592C11.5642 31.1488 13.6253 33.3701 16.216 34.7909C18.8067 36.2117 21.7877 36.7557 24.7132 36.3414C27.6387 35.9271 30.3515 34.5769 32.4459 32.4926C34.5402 30.4084 35.9035 27.7021 36.332 24.7786C36.7604 21.8551 36.2308 18.8715 34.8226 16.274C33.4143 13.6765 31.203 11.6047 28.5193 10.3684C25.8356 9.13215 22.8239 8.7979 19.9345 9.41565L20.7192 11.3901C23.1775 10.9298 25.7186 11.2698 27.9695 12.3601C30.2203 13.4504 32.0624 15.2336 33.2251 17.4479C34.3879 19.6622 34.8101 22.191 34.4299 24.6629C34.0496 27.1349 32.8869 29.4198 31.1124 31.1823C29.3379 32.9447 27.0451 34.0919 24.5706 34.4553C22.0961 34.8187 19.5703 34.3793 17.364 33.2015C15.1576 32.0237 13.387 30.1695 12.312 27.9113C11.2371 25.6531 10.9144 23.1097 11.3914 20.6546L9.42962 19.8699Z"
          fill="white"
        />
        <path
          d="M22.7818 27.9565C21.5132 27.9377 20.2958 27.4525 19.3621 26.5935C18.4283 25.7344 17.8435 24.5617 17.7193 23.299L15.6562 22.4383V22.78C15.6563 24.2076 16.0807 25.6029 16.8754 26.7888C17.6701 27.9746 18.7994 28.8976 20.1197 29.4403C21.44 29.9831 22.8919 30.1212 24.2909 29.8371C25.6899 29.553 26.9729 28.8596 27.9769 27.8448C28.981 26.8301 29.6608 25.5398 29.93 24.1379C30.1993 22.7359 30.0458 21.2856 29.4891 19.9711C28.9323 18.6566 27.9975 17.5372 26.8033 16.7551C25.609 15.973 24.2093 15.5635 22.7818 15.5785H22.4781L23.3261 17.7175C24.591 17.9093 25.7394 18.565 26.5475 19.557C27.3555 20.549 27.7655 21.8062 27.6976 23.0838C27.6297 24.3615 27.0888 25.5681 26.1801 26.4688C25.2714 27.3696 24.06 27.8999 22.7818 27.9565Z"
          fill="white"
        />
        <path
          d="M10.3772 16.8823C10.494 17.0015 10.6532 17.0697 10.8201 17.0721H15.4397L22.2362 23.8686C22.4746 24.1086 22.7985 24.2441 23.1367 24.2453C23.4749 24.2465 23.7998 24.1133 24.0398 23.8749C24.2798 23.6366 24.4153 23.3127 24.4165 22.9745C24.4177 22.6363 24.2844 22.3114 24.0461 22.0714L17.123 15.1863V10.7692C17.1207 10.6023 17.0524 10.4431 16.9332 10.3262L9.85825 3.25127C9.7698 3.16455 9.65784 3.10569 9.53625 3.082C9.41467 3.0583 9.2888 3.07081 9.17426 3.11798C9.05972 3.16514 8.96154 3.24489 8.89189 3.34732C8.82224 3.44976 8.78419 3.57039 8.78245 3.69425V8.75682H3.79581C3.67195 8.75856 3.55132 8.79662 3.44889 8.86627C3.34645 8.93591 3.2667 9.0341 3.21954 9.14864C3.17238 9.26318 3.15987 9.38904 3.18356 9.51063C3.20725 9.63221 3.26611 9.74417 3.35283 9.83262L10.3772 16.8823Z"
          fill="white"
        />
      </svg>
    ),
    title: "Recommendation Systems",
    description:
      "Deliver personalized recommendations that increase engagement, conversion, and retention. Ideal for product suggestions, content personalization, search ranking, and next-best-action experiences.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M41.7651 15.1889C41.7651 14.1447 40.9108 13.2904 39.8666 13.2904H26.5774C25.5332 13.2904 24.6789 14.1447 24.6789 15.1889C24.6789 16.2331 25.5332 17.0874 26.5774 17.0874H39.8666C40.9108 17.0874 41.7651 16.2331 41.7651 15.1889ZM24.6789 30.3766C24.6789 31.4208 25.5332 32.2751 26.5774 32.2751H39.8666C40.9108 32.2751 41.7651 31.4208 41.7651 30.3766C41.7651 29.3325 40.9108 28.4782 39.8666 28.4782H26.5774C25.5332 28.4782 24.6789 29.3325 24.6789 30.3766ZM19.8758 8.79106C20.6162 9.53147 20.6162 10.7275 19.8758 11.4679L11.8453 19.5364C11.1049 20.2768 9.90884 20.2768 9.14945 19.5364L5.1247 15.4927C4.76973 15.1377 4.57031 14.6562 4.57031 14.1542C4.57031 13.9057 4.61927 13.6595 4.71439 13.4299C4.80952 13.2002 4.94894 12.9916 5.1247 12.8158C5.30047 12.64 5.50913 12.5006 5.73878 12.4055C5.96842 12.3104 6.21456 12.2614 6.46312 12.2614C6.96513 12.2614 7.44657 12.4608 7.80154 12.8158L10.4974 15.5116L17.2179 8.79106C17.9394 8.06965 19.1544 8.06965 19.8758 8.79106ZM19.8948 23.9978C20.6352 24.7382 20.6352 25.9342 19.8948 26.6746L11.8643 34.7431C11.1239 35.4835 9.92782 35.4835 9.16844 34.7431L5.1247 30.6804C4.94894 30.5046 4.80952 30.296 4.71439 30.0663C4.61927 29.8367 4.57031 29.5905 4.57031 29.342C4.57031 29.0934 4.61927 28.8473 4.71439 28.6176C4.80952 28.388 4.94894 28.1793 5.1247 28.0035C5.30047 27.8278 5.50913 27.6884 5.73878 27.5932C5.96842 27.4981 6.21456 27.4492 6.46312 27.4492C6.71169 27.4492 6.95782 27.4981 7.18747 27.5932C7.41712 27.6884 7.62578 27.8278 7.80154 28.0035L10.4974 30.6994L17.2179 23.9788C17.9394 23.2574 19.1544 23.2574 19.8948 23.9978Z"
          fill="white"
        />
      </svg>
    ),
    title: "Classification & Scoring",
    description:
      "Assign categories, risk scores, and priority rankings using explainable machine learning models. Commonly used for lead scoring, churn prediction, customer segmentation, and credit risk assessment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M20.646 22.7816C20.646 23.348 20.8711 23.8912 21.2716 24.2918C21.6721 24.6923 22.2154 24.9173 22.7818 24.9173C23.3483 24.9173 23.8915 24.6923 24.292 24.2918C24.6926 23.8912 24.9176 23.348 24.9176 22.7816C24.9176 22.2151 24.6926 21.6719 24.292 21.2713C23.8915 20.8708 23.3483 20.6458 22.7818 20.6458C22.2154 20.6458 21.6721 20.8708 21.2716 21.2713C20.8711 21.6719 20.646 22.2151 20.646 22.7816ZM29.5451 22.7816C29.5451 23.348 29.7701 23.8912 30.1707 24.2918C30.5712 24.6923 31.1144 24.9173 31.6809 24.9173C32.2473 24.9173 32.7906 24.6923 33.1911 24.2918C33.5916 23.8912 33.8167 23.348 33.8167 22.7816C33.8167 22.2151 33.5916 21.6719 33.1911 21.2713C32.7906 20.8708 32.2473 20.6458 31.6809 20.6458C31.1144 20.6458 30.5712 20.8708 30.1707 21.2713C29.7701 21.6719 29.5451 22.2151 29.5451 22.7816ZM11.747 22.7816C11.747 23.348 11.972 23.8912 12.3725 24.2918C12.7731 24.6923 13.3163 24.9173 13.8827 24.9173C14.4492 24.9173 14.9924 24.6923 15.393 24.2918C15.7935 23.8912 16.0185 23.348 16.0185 22.7816C16.0185 22.2151 15.7935 21.6719 15.393 21.2713C14.9924 20.8708 14.4492 20.6458 13.8827 20.6458C13.3163 20.6458 12.7731 20.8708 12.3725 21.2713C11.972 21.6719 11.747 22.2151 11.747 22.7816ZM41.1673 15.0572C40.1617 12.6678 38.72 10.5231 36.8824 8.68099C35.0575 6.84959 32.8913 5.39383 30.5062 4.39609C28.059 3.36825 25.4604 2.84766 22.7818 2.84766H22.6928C19.9964 2.861 17.3845 3.39495 14.9284 4.44504C12.5637 5.453 10.4178 6.91136 8.61005 8.73884C6.79019 10.5765 5.36189 12.7123 4.3741 15.0928C3.35071 17.5578 2.83456 20.1786 2.84791 22.875C2.86301 25.9651 3.59406 29.0096 4.98368 31.7696V38.5329C4.98368 39.0757 5.19933 39.5964 5.58317 39.9802C5.96702 40.364 6.48763 40.5797 7.03047 40.5797H13.7982C16.5582 41.9693 19.6028 42.7004 22.6928 42.7155H22.7863C25.4515 42.7155 28.0367 42.1993 30.4706 41.1893C32.8436 40.2035 35.0018 38.7647 36.8245 36.9533C38.6622 35.1335 40.1083 33.0066 41.1183 30.635C42.1684 28.1788 42.7024 25.567 42.7157 22.8706C42.7291 20.1608 42.204 17.5311 41.1673 15.0572ZM34.444 34.5461C31.3249 37.6341 27.1868 39.3338 22.7818 39.3338H22.7062C20.0231 39.3205 17.3578 38.653 15.004 37.3983L14.6303 37.198H8.36533V30.9331L8.1651 30.5593C6.91033 28.2055 6.2429 25.5403 6.22955 22.8572C6.21175 18.421 7.90703 14.2563 11.0172 11.1193C14.123 7.98242 18.2744 6.2471 22.7106 6.2293H22.7863C25.011 6.2293 27.169 6.6609 29.2025 7.51521C31.187 8.34728 32.9668 9.5442 34.4974 11.0748C36.0236 12.601 37.225 14.3853 38.0571 16.3698C38.9203 18.4255 39.3519 20.6057 39.343 22.8572C39.3163 27.2889 37.5765 31.4403 34.444 34.5461Z"
          fill="white"
        />
      </svg>
    ),
    title: "Natural Language Processing",
    description:
      "Extract meaningful insights from unstructured text through sentiment analysis, entity extraction, and intent classification. Applied to customer feedback, support tickets, reviews, and compliance documents.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M5.69531 24.6799C12.5298 9.49213 33.0332 9.49213 39.8677 24.6799"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6018 31.8401C21.2928 32.1263 22.0334 32.2736 22.7813 32.2736C24.2919 32.2736 25.7405 31.6736 26.8086 30.6055C27.8767 29.5374 28.4767 28.0887 28.4767 26.5782C28.4767 25.0677 27.8767 23.6191 26.8086 22.551C25.7405 21.4829 24.2919 20.8828 22.7813 20.8828C22.0334 20.8828 21.2928 21.0301 20.6018 21.3163C19.9108 21.6026 19.2829 22.0221 18.7541 22.551C18.2252 23.0798 17.8057 23.7077 17.5195 24.3987C17.2333 25.0897 17.0859 25.8303 17.0859 26.5782C17.0859 27.3261 17.2333 28.0668 17.5195 28.7577C17.8057 29.4487 18.2252 30.0766 18.7541 30.6055C19.2829 31.1343 19.9108 31.5539 20.6018 31.8401Z"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Computer Vision",
    description:
      "Analyze images and video using object detection, classification, and visual inspection systems. Used for quality control, retail analytics, medical imaging, and security monitoring.",
  },
];


export const engineeringData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.7 5.24" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 1 0 7.07 7.07l1.76-1.77" />
      </svg>
    ),
    title: "Integration Stability",
    description:
      "AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    title: "Resilient Processing",
    description:
      "Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Visibility & Control",
    description:
      "Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.",
  },
];

export const engineeringServicesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.7 5.24" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 1 0 7.07 7.07l1.76-1.77" />
      </svg>
    ),
    title: "Third-Party AI API Integration",
    description:
      "Connect your product to OpenAI, Anthropic, Google AI, AWS Bedrock, Azure OpenAI, and other AI providers. Prompt engineering, response parsing, error handling, cost controls, and caching layers included.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 16.5A4.5 4.5 0 0 0 16 7.6 6 6 0 1 0 5 9" />
        <path d="M12 12v9" />
        <path d="M8.5 15.5h7" />
        <rect x="8" y="12" width="8" height="6" rx="1.5" />
      </svg>
    ),
    title: "Model Serving Infrastructure",
    description:
      "Deploy custom-trained models as low-latency REST APIs. Docker-containerized, auto-scaling, version-managed serving infrastructure with health checks and rollback capability.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="5" height="8" />
        <rect x="16" y="3" width="5" height="5" />
        <rect x="16" y="16" width="5" height="5" />
        <path d="M8 12h4" />
        <path d="M12 5h4" />
        <path d="M12 19h4" />
        <path d="M12 5v14" />
      </svg>
    ),
    title: "Data Pipeline Engineering for AI",
    description:
      "Build the pipelines that feed your AI systems—ingestion, transformation, vector embedding, indexing, and retrieval. Clean data in = useful AI out.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "AI Monitoring & Observability",
    description:
      "Instrument your AI systems for performance tracking: latency, cost, accuracy drift, error rates, and token usage. Alert pipelines so you know before users do when something degrades.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 3.5 6 6l2 2-2 2 2 2-2 2 2 2 2-2 2 2 2-2 2 2 2-2-2-2 2-2-2-2 2-2-2-2-2 2-2-2-2 2Z" />
      </svg>
    ),
    title: "Legacy System AI Augmentation",
    description:
      "Add AI capabilities to existing systems without a full rebuild. Plugin architecture, API bridges, and event-driven integrations that layer intelligence onto what you already have.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 6h8" />
        <path d="M7.5 7.5 10.5 10.5" />
        <path d="M16.5 7.5 13.5 10.5" />
        <path d="M10.5 13.5 7.5 16.5" />
        <path d="M13.5 13.5 16.5 16.5" />
      </svg>
    ),
    title: "Enterprise AI Platform Setup",
    description:
      "Stand up internal AI platforms—model registries, experimentation infrastructure, prompt management systems, and access control—for teams building AI at scale.",
  },
];

export const architecturePatternsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <Timer className="h-7 w-7" />,
    title: "Synchronous API Pattern",
    description:
      "User-facing features where AI generates a response in real time. Optimized for latency with streaming support and graceful fallback.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <Network className="h-7 w-7" />,
    title: "Async Pipeline Pattern",
    description:
      "Background AI processing—document ingestion, batch enrichment, async summarization. Queue-based with retry logic and dead letter handling.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchCode className="h-7 w-7" />,
    title: "Retrieval-Augmented Pattern",
    description:
      "RAG systems where AI responses are grounded in retrieved documents. Vector search + LLM inference + citation extraction, built as a unified service.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <GitBranch className="h-7 w-7" />,
    title: "Event-Driven Pattern",
    description:
      "AI triggered by business events—a new contract uploaded, a support ticket created, a transaction flagged. Integrated with your event bus (Kafka, SQS, Pub/Sub).",
  },
];

export const deliverablesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6" />
        <path d="M9 12h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    title: "Documented API contracts for every AI integration",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h5v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M18 3h-5v18h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
    title: "Runbooks for common failure scenarios",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 15l3-3 3 2 4-6" />
        <path d="M6 10h.01" />
        <path d="M10 8h.01" />
        <path d="M14 11h.01" />
        <path d="M18 6h.01" />
      </svg>
    ),
    title: "Cost dashboards with per-feature AI spend breakdown",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8v5l3 2" />
        <circle cx="12" cy="13" r="8" />
        <path d="M9 2h6" />
      </svg>
    ),
    title: "Model version control and rollback procedures",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    ),
    title: "Monitoring alerts configured and tested before handoff",
  },
];

export const notEveryProblemData = {
  badgeText: "When ML Isn't the Right Answer",
  heading: "Not Every Problem Needs AI",
  description:
    "Business rules, statistical models, and workflow automation can often deliver better outcomes with less complexity than machine learning.",
  cards: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
        </svg>
      ),
      title: "Machine Learning",
      description:
        "Best suited for complex prediction problems, pattern recognition, and decision-making scenarios where data-driven intelligence creates measurable business value.",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Simpler Alternatives",
      description:
        "When business rules are clear and outcomes are predictable, simpler solutions often deliver faster implementation, lower costs, and easier maintenance.",
    },
  ],
  bottomText:
    "We've implemented both approaches. The recommendation depends on your business goals, data maturity, and operational requirements.",
};
