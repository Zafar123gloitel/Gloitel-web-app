import { CloseIcon, FinanceIcon, HandshakeIcon, HealthcareIcon, LegalIcon, MediaPublishingIcon, RealEstateIcon, RefreshCcwIcon, UsersIcon, WrenchIcon, ZapIcon } from "components/SvgIcon";

export const ai_agents_designed = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Agentic Workflow Automation",
    icon: <RefreshCcwIcon />,
    description:
      "Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation — automated with full audit trails.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Multi-Agent Systems",
    icon: <UsersIcon />,
    description:
      "Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Tool-Using Agents",
    icon: <WrenchIcon />,
    description:
      "Agents integrated with your real business tools – CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Human-in-the-Loop Workflows",
    icon: <HandshakeIcon />,
    description:
      "Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "AI-Powered Process Automation",
    icon: <ZapIcon />,
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry – with understanding, not just pattern matching.",
  },
];


export const industries = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: "Finance",
    icon: <FinanceIcon />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: "Real Estate",
    icon: <RealEstateIcon />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: "Healthcare",
    icon: <HealthcareIcon />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: "Media & Publishing",
    icon: <MediaPublishingIcon />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: "Legal",
    icon: <LegalIcon />,
  },
];

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
export const Agent_Projects = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20}/>,
    description: "Reducing hallucinations in AI outputs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20}/>,
    description: "Managing costs as AI systems scale.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20}/>,
    description: "Reducing latency across AI workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CloseIcon size={20}/>,
    description: "Protecting sensitive data and enterprise systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon:<CloseIcon size={20}/>,
    description: "Ensuring reliable performance in production.",
  },
];

