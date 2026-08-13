import { ChatbotIcon, ClipboardIcon, CloseIcon, DatabaseIcon, FineTuningIcon, PrivateLLMIcon, RightArrowIcon, WorkflowAutomationIcon } from "../../../component/SvgIcon";

export const heroSectionDataGenerative = {
  badgeText: "Generative AI & LLMs",

  title: "Building AI Prototypes is Easy.Building Production Systems is not.",

  description:
    "Building an LLM prototype takes days. Building one that's accurate, secure, cost-controlled, and production-stable takes a team that's shipped it before.",

  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616338/Gloitel/what%20we%20do/heroimage_jryx9d.png",

  imageAlt: "Generative AI & LLMs",

  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",

  primaryButton: {
    text: "Talk to Our GenAI Team",
    href: "/contact",
  },

  secondaryButton: {
    text: "See What We've Built",
    href: "/about",
    icon:  <RightArrowIcon size={20} /> ,
  },
};

export const aiServicesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ChatbotIcon/>,
    title: "Custom AI Chatbots & Assistants",
    description:
      "Intelligent conversational interfaces trained on your domain knowledge. Customer support bots, internal knowledge assistants, sales copilots – built with guardrails, citation support, and fallback logic.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ClipboardIcon/>,
    title: "Document Intelligence & Processing",
    description:
      "Automate document-heavy workflows with LLMs. Contract analysis, invoice extraction, report summarization, regulatory document parsing – structured outputs from unstructured inputs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DatabaseIcon/>,
    title: "RAG (Retrieval-Augmented Generation) Systems",
    description:
      "Connect LLMs to your proprietary data with vector search pipelines. Accurate, source-cited responses drawn from your internal knowledge base, documentation, or enterprise data.",
  },
   {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <WorkflowAutomationIcon/>,
    title: "LLM-Powered Workflow Automation",
    description:
      "Replace rule-based automation with AI that understands context. Intelligent triage, email drafting, content generation, and multi-step reasoning tasks embedded in your existing workflows.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FineTuningIcon/>,
    title: "Fine-Tuning & Model Customization",
    description:
      "Custom fine-tuned models for domain-specific tasks where general-purpose LLMs underperform. Smaller, faster, cheaper – specialized for your exact use case.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PrivateLLMIcon/>,
    title: "Private LLM Deployment",
    description:
      "Deploy LLMs in secure, private environments with complete control over infrastructure and data. On-premises and VPC-hosted deployments built for healthcare, finance, and enterprise organizations with strict compliance and data residency requirements.",
  },
];

export const executionStepOne = {
  badgeText: "Step 01",
  title: "Use Case Definition",
  description:
    "We scope the exact workflow to be augmented, define input/output formats, and establish success metrics before writing code.",
  buttonText: "View more",
  buttonLink: "/use-case-definition",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498264/Gloitel/what-we-do/use-case-definition_izirji.png",
  imageAlt: "Use Case Definition",
};

export const executionStepTwo = {
  badgeText: "Step 02",
  title: "Model Selection",
  description:
    "We evaluate and recommend the right model (GPT-4o, Claude, Gemini, LLaMA, Mistral) based on accuracy requirements, latency, cost, and data sensitivity.",
  buttonText: "View more",
  buttonLink: "/model-selection",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/model-selection_kwalzf.png",
  imageAlt: "Model Selection",
};

export const executionStepThree = {
  badgeText: "Step 03",
  title: "Prototype & Evaluation",
  description:
    "Rapid prototype with human evaluation loops. We measure accuracy, hallucination rate, latency, and cost before green-lighting production build.",
  buttonText: "View more",
  buttonLink: "/prototype-evaluation",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498266/Gloitel/what-we-do/prototype-evaluation_kenj6r.png",
  imageAlt: "Prototype & Evaluation",
};

export const executionStepFour = {
  badgeText: "Step 04",
  title: "Production Engineering",
  description:
    "Full-stack build with authentication, logging, monitoring, rate limiting, fallback handling, and CI/CD pipelines.",
  buttonText: "View more",
  buttonLink: "/production-deployment",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/Production-ngineering_pra50l.png",
  imageAlt: "Production Deployment",
};

export const executionStepFive = {
  badgeText: "Step 05",
  title: "Deployment & Monitoring",
  description:
    "Cloud-native deployment with model performance monitoring, cost dashboards, and drift detection.",
  buttonText: "View more",
  buttonLink: "/deployment-monitoring",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/deployment-monitoring_ex4dem.png",
  imageAlt: "Deployment & Monitoring",
};


export const aiSolutionsData = {
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
        name: "Cohere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png",
      },
    ],

    "Open Source": [
      {
        name: "Meta LLaMA 3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png",
      },
      {
        name: "Mistral",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png",
      },
      {
        name: "Phi-3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960584/Gloitel/icon/phi-3_v9nclj.png",
      },
      {
        name: "Qwen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qwen_oyj4re.png",
      },
    ],
    "RAG Frameworks": [
      {
        name: "LangChain",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png",
      },
      {
        name: "LlamaIndex",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
      {
        name: "Haystack",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png",
      },
    ],
    "Vector Stores": [
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        name: "Qdrant",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png",
      },
      {
        name: "pgvector",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png",
      },
      {
        name: "Chroma",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],
    Orchestration: [
      {
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
    ],
    Deployment: [
      {
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
      {
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960617/Gloitel/icon/AWS_Bedrock_segrwb.png",
      },
      {
        name: "Azure OpenAI Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
      {
        name: "Google Vertex AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png",
      },
    ],
  },
};

export const Real_World = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20} />,
    description: "Reducing hallucinations in AI outputs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20} />,
    description: "Managing costs as AI systems scale.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20} />,
    description: "Reducing latency across AI workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20} />,
    description: "Protecting sensitive data and enterprise systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20} />,
    description: "Ensuring reliable performance in production.",
  },
];

export const caseStudies = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Healthcare Client",
    slug: "healthcare-client",
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/healthcare-client_tmogav.png",
    description:"Developed a private LLM for clinical documentation summarization, reducing physician admin time per consultation. Zero PHI data leaves the VPC.",
    cta: "View Case Study",
    href: "/case-studies/healthcare-client",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Financial Services",
    slug: "financial-services",
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png",
    description:
      "Built a RAG-powered compliance assistant over 1000+ regulatory documents. Query response time under 2 seconds. Cited sources on every answer.",
    cta: "View Case Study",
    href: "/case-studies/financial-services",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "E-Commerce",
    slug: "e-commerce",
    image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/e-commerce_gojozw.png",
    description:
      "LLM-powered product description generator that reduced content creation time by over 90% while maintaining brand consistency.",
    cta: "View Case Study",
    href: "/case-studies/e-commerce",
  },
];