export const aiIntelligentSystemsHeroData = {
  badgeText: "AI & Intelligent Systems",
  title: "AI That Moves the Business, Not Just the Demo",
  description:
    "Most AI initiatives stall between experimentation and execution. We position ourselves at that gap - diagnosing where AI will create measurable value before committing to build.",
  image: "/images/What-we-do/ai-intelligent-systems-hero.png",
  imageAlt: "AI and intelligent systems",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start with a Discovery Call",
    href: "/contact",
  },
  secondaryButton: {
    text: "View AI Case Studies",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const aiGapSectionHead = {
  badgeText: "The Real Gap in AI Adoption",
  title: "Why Most AI Initiatives never Reach Business Impact",
  description:
    "The challenge isn't access to AI. It's identifying where it creates measurable value before investing in development.",
};

export const aiGapData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <g clipPath="url(#clip0_1929_10289)">
          <path d="M17.5793 1.95325C16.1763 1.95809 14.7802 2.15189 13.4289 2.52943L14.1809 4.34586C17.1015 3.57255 20.1955 3.7834 22.9842 4.94579C25.773 6.10817 28.1008 8.15728 29.6076 10.776C31.1143 13.3947 31.7159 16.437 31.3194 19.4322C30.9228 22.4273 29.5501 25.2082 27.4138 27.3446C25.2774 29.4809 22.4965 30.8536 19.5014 31.2502C16.5063 31.6467 13.4639 31.0451 10.8452 29.5383C8.2265 28.0316 6.1774 25.7037 5.01501 22.915C3.85263 20.1263 3.64178 17.0323 4.41509 14.1116L2.59865 13.3499C1.71222 16.5033 1.83921 19.8555 2.96166 22.9327C4.08412 26.01 6.14527 28.6567 8.85381 30.4987C11.5624 32.3408 14.7813 33.2851 18.0557 33.1981C21.3302 33.1111 24.4945 31.9973 27.1014 30.0141C29.7083 28.0308 31.6261 25.2784 32.5836 22.1459C33.5411 19.0134 33.49 15.6592 32.4374 12.5574C31.3848 9.45551 29.3841 6.76288 26.7179 4.86003C24.0517 2.95718 20.8549 1.94035 17.5793 1.95325Z" fill="white" />
          <path d="M7.27534 15.3311C6.78792 17.5582 7.0346 19.8834 7.97849 21.9587C8.92237 24.034 10.5127 25.7479 12.5117 26.8442C14.5107 27.9405 16.8109 28.3602 19.0682 28.0406C21.3256 27.7209 23.4188 26.6791 25.0348 25.0709C26.6508 23.4626 27.7027 21.3745 28.0333 19.1187C28.3639 16.8629 27.9553 14.5608 26.8687 12.5565C25.782 10.5522 24.0758 8.95361 22.005 7.99971C19.9343 7.04581 17.6104 6.7879 15.3809 7.26456L15.9864 8.78802C17.8833 8.43288 19.844 8.69522 21.5808 9.53651C23.3176 10.3778 24.7389 11.7537 25.6361 13.4623C26.5333 15.1709 26.8591 17.1221 26.5657 19.0294C26.2723 20.9368 25.3751 22.6999 24.0059 24.0598C22.6367 25.4197 20.8675 26.3049 18.9582 26.5853C17.0489 26.8657 15.0999 26.5266 13.3975 25.6178C11.6951 24.709 10.3289 23.2784 9.49943 21.5359C8.66998 19.7934 8.421 17.831 8.78904 15.9366L7.27534 15.3311Z" fill="white" />
          <path d="M17.5802 21.5708C16.6013 21.5563 15.6619 21.1819 14.9414 20.519C14.221 19.8562 13.7697 18.9513 13.6739 17.977L12.082 17.3129V17.5766C12.0821 18.6781 12.4095 19.7547 13.0227 20.6697C13.6359 21.5847 14.5073 22.2969 15.526 22.7157C16.5448 23.1345 17.6651 23.241 18.7446 23.0218C19.824 22.8026 20.814 22.2676 21.5887 21.4846C22.3635 20.7016 22.888 19.706 23.0958 18.6243C23.3035 17.5425 23.1851 16.4235 22.7555 15.4092C22.3259 14.3949 21.6046 13.5312 20.6831 12.9277C19.7616 12.3242 18.6816 12.0082 17.5802 12.0198H17.3458L18.0001 13.6703C18.9762 13.8183 19.8622 14.3242 20.4857 15.0897C21.1093 15.8551 21.4256 16.8251 21.3732 17.811C21.3208 18.7968 20.9034 19.7279 20.2023 20.4229C19.5011 21.1179 18.5664 21.5271 17.5802 21.5708Z" fill="white" />
          <path d="M8.00885 13.0285C8.09901 13.1205 8.22186 13.1731 8.35066 13.1749H11.9152L17.1594 18.4192C17.3433 18.6044 17.5932 18.7089 17.8542 18.7098C18.1152 18.7107 18.3658 18.6079 18.551 18.4241C18.7362 18.2402 18.8407 17.9902 18.8417 17.7293C18.8426 17.4683 18.7398 17.2176 18.5559 17.0324L13.214 11.7198V8.31159C13.2122 8.1828 13.1595 8.05994 13.0675 7.96979L7.60846 2.51072C7.54021 2.44381 7.45382 2.39839 7.36 2.38011C7.26619 2.36183 7.16907 2.37148 7.08069 2.40787C6.99231 2.44426 6.91655 2.5058 6.86281 2.58484C6.80907 2.66388 6.77971 2.75695 6.77836 2.85252V6.75883H2.93065C2.83508 6.76018 2.742 6.78954 2.66296 6.84328C2.58392 6.89702 2.52239 6.97278 2.486 7.06116C2.44961 7.14954 2.43995 7.24666 2.45823 7.34047C2.47652 7.43429 2.52193 7.52068 2.58885 7.58892L8.00885 13.0285Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1929_10289">
            <rect width="35.1568" height="35.1568" rx="4.88289" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "AI Pilots",
    description:
      "Organizations easily see rich short on AI pilots. Most teams have experience but with AI don't struggle to turn those efforts into meaningful business outcomes.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M32.227 17.5784C32.227 25.6688 25.6688 32.227 17.5784 32.227C9.48789 32.227 2.92969 25.6688 2.92969 17.5784C2.92969 9.48789 9.48789 2.92969 17.5784 2.92969C25.6688 2.92969 32.227 9.48789 32.227 17.5784ZM17.5784 29.2973C20.6864 29.2973 23.6672 28.0626 25.8649 25.8649C28.0626 23.6672 29.2973 20.6864 29.2973 17.5784C29.2973 14.4703 28.0626 11.4895 25.8649 9.29182C23.6672 7.09409 20.6864 5.85942 17.5784 5.85942C14.4703 5.85942 11.4895 7.09409 9.29182 9.29182C7.09409 11.4895 5.85942 14.4703 5.85942 17.5784C5.85942 20.6864 7.09409 23.6672 9.29182 25.8649C11.4895 28.0626 14.4703 29.2973 17.5784 29.2973Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M17.5781 20.508C17.1896 20.508 16.817 20.3536 16.5423 20.0789C16.2676 19.8042 16.1133 19.4316 16.1133 19.0431V11.7188C16.1133 11.3303 16.2676 10.9577 16.5423 10.683C16.817 10.4082 17.1896 10.2539 17.5781 10.2539C17.9667 10.2539 18.3392 10.4082 18.614 10.683C18.8887 10.9577 19.043 11.3303 19.043 11.7188V19.0431C19.043 19.4316 18.8887 19.8042 18.614 20.0789C18.3392 20.3536 17.9667 20.508 17.5781 20.508Z" fill="white" />
        <path d="M16.1133 23.4375C16.1133 23.049 16.2676 22.6764 16.5423 22.4017C16.817 22.127 17.1896 21.9727 17.5781 21.9727C17.9667 21.9727 18.3392 22.127 18.614 22.4017C18.8887 22.6764 19.043 23.049 19.043 23.4375C19.043 23.826 18.8887 24.1986 18.614 24.4733C18.3392 24.7481 17.9667 24.9024 17.5781 24.9024C17.1896 24.9024 16.817 24.7481 16.5423 24.4733C16.2676 24.1986 16.1133 23.826 16.1133 23.4375Z" fill="white" />
      </svg>
    ),
    title: "Misdirected Effort",
    description:
      "Most are often built on assumptions, applied to top-impact workflows, or launched without clear prioritization and business alignment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M5.12891 5.85938V25.6351C5.12891 26.8006 5.59191 27.9184 6.41605 28.7425C7.2402 29.5667 8.35799 30.0297 9.52351 30.0297H29.2992" stroke="white" strokewidth="2.1973" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.52344 21.9748L16.1153 15.3829L21.2424 20.5099L29.2991 12.4531" stroke="white" strokewidth="2.1973" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    title: "Business Impact",
    description:
      "We diagnose before we build. Identifying where AI creates measurable value and moves the business forward before engineering begins.",
  },
];

export const aiPracticeAreasSectionHead = {
  badgeText: "Our AI Practice Areas",
  title: "From Strategy to Production-Ready AI Systems",
  description:
    "Whether you're defining an AI roadmap, deploying intelligent agents, or building custom machine learning models, we help transform opportunities into measurable business outcomes.",
};

export const aiPracticeAreasData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-strategy-consulting.png",
    imageAlt: "AI strategy and consulting",
    title: "AI Strategy & Consulting",
    description:
      "Assess data maturity, identify high-impact use cases, and build a roadmap tied to business outcomes. Discover before development begins.",
    buttonText: "Learn More",
    buttonLink: "/ai-strategy-consulting",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/generative-ai-llms.png",
    imageAlt: "Generative AI and LLMs",
    title: "Generative AI & LLMs",
    description:
      "Build LLM-powered applications for production - chatbots, content generation, and custom language models built for accuracy, cost control, and reliability.",
    buttonText: "Learn More",
    buttonLink: "/generative-ai-llms",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-agents-automation.png",
    imageAlt: "AI agents and automation",
    title: "AI Agents & Automation",
    description:
      "Deploy intelligent agents that automate multi-step workflows, integrate with existing systems, improve efficiency, and reduce manual operational overhead.",
    buttonText: "Learn More",
    buttonLink: "/ai-agents-automation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ml-predictive-analytics.png",
    imageAlt: "ML and predictive analytics",
    title: "ML & Predictive Analytics",
    description:
      "Develop forecasting, anomaly detection, recommendation, and classification models. Turn business data into actionable insights.",
    buttonText: "Learn More",
    buttonLink: "/ml-predictive-analytics",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/ai-integration.png",
    imageAlt: "AI integration",
    title: "AI Integration",
    description:
      "Connect AI capabilities into your products with reliable infrastructure and monitoring. Ensure scalable deployment and long-term reliability.",
    buttonText: "Learn More",
    buttonLink: "/ai-integration",
  },
];
export const aiEngagementSectionHead = {
  badgeText: "Our Engagement Model",
  title: "From Discovery to Production-Ready AI",
  description:
    "A structured approach that validates opportunities, proves value, and scales successful AI initiatives with confidence.",
};

export const discoverySprintData = {
  badgeText: "Stage 01",
  title: "Discovery Sprint (3-4 weeks)",
  description:
    "A structured diagnosis of your AI potential. We map your workflows, assess feasibility, rank use cases by impact, and deliver a decision-ready roadmap. Fixed scope. Fixed fee.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/discovery-sprint.png",
  imageAlt: "Discovery sprint",
};

export const aiPilotData = {
  badgeText: "Stage 02",
  title: "AI Pilot",
  description:
    "Validate the highest-priority use case identified in Discovery. Prove ROI before full commitment. Scope defined from Stage I output.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/ai-pilot.png",
  imageAlt: "AI pilot",
};

export const productionScaleData = {
  badgeText: "Stage 03",
  title: "Production & Scale",
  description:
    "Build, deploy, and scale the validated solution. Ongoing engineering support and model monitoring included.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/production-scale.png",
  imageAlt: "Production and scale",
};

export const aiClarityData = {
  badgeText: "What We Don't Do",
  title: "Built on Clarity, Not Empty Promises",
  description:
    "Our approach focused on practical execution over measurable outcomes, and prioritizing this and disagree to succeed beyond the pilot stage.",
  items: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't start with a solution & look for problems to justify it",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "No open-ended strategy without clear deliverables",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't build demos that can't reach production",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027" stroke="white" strokeWidth="2.92973" strokeLinecap="round" />
        </svg>
      ),
      description: "We don't disappear after delivery",
    },
  ],
};

export const aiTechStackLandingData = {
  badge: "Technologies We Work With",
  title: "Modern Tools. Practical Decisions.",
  description:
    "Every technology is selected to reduce complexity, speed up development, and keep your MVP easy to scale.",

  tabs: ["LLM Providers", "Frameworks", "Vector Databases", "ML Platforms", "Deployment"],

  technologies: {
    "LLM Providers": [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "OpenAI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Anthropic Claude", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Google Gemini", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Meta LLaMA", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Mistral", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png" },
    ],
    Frameworks: [],
    "Vector Databases": [],
    "ML Platforms": [],
    Deployment: [],
  },
};

export const aiIntelligentSystemsCTAData = {
  badgeText: "Start with Clarity",
  title: "Turn AI Strategy into Product Results",
  description:
    "A 30-minute conversation to assess fit and map the priorities that align with your goals.",
  buttonText: "Schedule a Discovery Call",
  buttonLink: "/contact",
};
import { HeroArrowRightIcon } from "../../component/SvgIcon";
