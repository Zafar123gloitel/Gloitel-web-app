import {
  CompetitiveAnalysisIcon,
  ContextualInquiryIcon,
  ExperienceAuditIcon,
  HeroArrowRightIcon,
  JobsToBeDoneIcon,
  JourneyMappingIcon,
  OpportunityMapIcon,
  ResearchAssumptionInfoIcon,
  ResearchDesignBriefIcon,
  ResearchPersonaIcon,
  SurveyResearchIcon,
  UsabilityTestingIcon,
  UserInterviewsIcon,
  UserJourneyMapIcon,
  UserResearchReportIcon,
} from "../../../component/SvgIcon";

import { ArchitectureItem } from "../../../uiComponents/ArchitectureCircle";

export const uxResearchHeroData = {
  badgeText: "UX Research & Strategy",
  title: "Design the Right Thing, then Design It Right",
  description:
    "The most expensive design mistake is building a beautiful interface for the wrong user flow. UX research is the work that tells you what's actually worth designing before you spend time and money designing it.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033715/Gloitel/Digital%20Experience%20Design/UX_Research_Strategy_maoak0.png",
  imageAlt: "UX research and strategy",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start a Research Engagement",
    href: "/contact",
  },
  secondaryButton: {
    text: "View Research Case Studies",
    href: "/about",
    icon: (
      <HeroArrowRightIcon />
    ),
  },
};

export const researchMethodsSectionHead = {
  badgeText: "Research Methods We Use",
  title: "Understanding Reality before Building Solutions",
  description:
    "The fastest way to waste time is solving the wrong problem. We use a structured research process to uncover user needs, operational constraints, and business opportunities before product decisions are made.",
};

export const researchMethodsData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: (
      <UserInterviewsIcon />
    ),
    title: "User Interviews",
    description:
      "1:1 conversations with real users. We recruit, moderate, and synthesize insights from 8-12 interviews to surface meaningful patterns.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: (
      <SurveyResearchIcon />
    ),
    title: "Survey Research",
    description:
      "Quantitative validation of qualitative insights. Large-sample data that confirms (or challenges) what interviews revealed.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: (
      <ContextualInquiryIcon />
    ),
    title: "Contextual Inquiry",
    description:
      "Observe users performing real tasks in their actual environment. The gap between what users say and do often reveals the most valuable insights.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: (
      <CompetitiveAnalysisIcon />
    ),
    title: "Competitive Analysis",
    description:
      "Systematic review of how competitors solve the same problems. Not to copy but to understand established patterns and identify differentiation opportunities.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "bottom",
    icon: (
      <JourneyMappingIcon />
    ),
    title: "Journey Mapping",
    description:
      "Map the end-to-end user experience - across channels, touchpoints, and time - to identify where value is created and where it's destroyed. Foundation for every product strategy decision.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: (
      <UsabilityTestingIcon />
    ),
    title: "Usability Testing",
    description:
      "Test existing or prototype interfaces with real users. Identify friction points, confusion, and failure modes before production.",
  },
];

export const deliverablesSectionHead = {
  badgeText: "Research Deliverables",
  title: "Outputs of the Research Process",
  description:
    "A structured set of deliverables designed to capture insights, communicate findings, and provide clear direction for product and UX teams.",
};

export const deliverablesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <UserResearchReportIcon />
    ),
    title: "User research report with findings and recommendations",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchPersonaIcon />
    ),
    title: "Persona definitions grounded in research data",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <UserJourneyMapIcon />
    ),
    title: "User journey maps (current state and desired state)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <JobsToBeDoneIcon />
    ),
    title: "Jobs-to-be-done framework",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ExperienceAuditIcon />
    ),
    title: "Experience audit of existing product",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <OpportunityMapIcon />
    ),
    title: "Opportunity map - prioritized areas for improvement",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchDesignBriefIcon />
    ),
    title: "Research-backed design brief for the UI/UX phase",
  },
];

export const assumptionsSectionHead = {
  badgeText: "When Research is Critical",
  title: "When Assumptions aren't Enough",
  description:
    "Research provides the evidence needed to validate ideas, understand users, and make informed decisions before committing significant time, budget, and resources.",
};

export const assumptionsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchAssumptionInfoIcon />
    ),
    description: "Designing a new product or feature without user feedback",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchAssumptionInfoIcon />
    ),
    description: "Redesigning an existing product that isn't performing well",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchAssumptionInfoIcon />
    ),
    description: "Entering a new market or user segment",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchAssumptionInfoIcon />
    ),
    description: "Building for specialized users and non-English speakers",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <ResearchAssumptionInfoIcon />
    ),
    description: "When teams have conflicting opinions about what users want",
  },
];

export const uxResearchCTAData = {
  badgeText: "Insight Before Execution",
  title: "The Best Design Decisions Start with Research",
  description:
    "We help teams identify opportunities, reduce risk, and align around evidence before making into design.",
  buttonText: "Plan a Research Sprint",
  buttonLink: "/contact",
};
