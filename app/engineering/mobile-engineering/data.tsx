import {
  AvoidedBuildsIcon,
  BusinessImpactClarityIcon,
  BusinessRoadmapIcon,
  HeroArrowRightIcon,
  IntegrationAutomationIcon,
  MobileAIProcessAutomationIcon,
  MobileDiscoveryIcon,
  MobileDocumentProcessingIcon,
  PilotScopeIcon,
  PrioritizedUseCasesIcon,
  StructuredDataWorkflowsIcon,
} from "../../component/SvgIcon";
import { ArchitectureCard } from "../../uiComponents/EngineeringArchitecture";

export const mobileEngineeringHeroData = {
  badgeText: "Mobile Engineering",
  title: "AI Engineering That Ships and Stays Shipped", // ⚠️ mismatch
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.", // ⚠️ mismatch
  image: "/images/Engineering/mobile-engineering-hero.png",
  imageAlt: "Mobile engineering",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Talk to Our AI Engineers", // ⚠️ mismatch
    href: "/contact",
  },
  secondaryButton: {
    text: "View AI Work", // ⚠️ mismatch
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const architectureData: ArchitectureCard[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: <MobileDiscoveryIcon />,
    title: "User Interviews",
    description:
      "1:1 conversations with real users. We recruit, moderate, and synthesize insights from 8–12 interviews to surface meaningful patterns.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: <MobileDiscoveryIcon />,
    title: "Stakeholder Workshops",
    description:
      "Collaborative workshops to align business goals, user needs, and technical feasibility before development begins.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: <MobileDiscoveryIcon />,
    title: "Journey Mapping",
    description:
      "Visualize end-to-end user experiences to uncover pain points, opportunities, and high-impact improvements.",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: <MobileDiscoveryIcon />,
    title: "Prototype Validation",
    description:
      "Test interactive prototypes with users, validate assumptions, and refine experiences before implementation.",
  },
];
export const mobileAgentsSectionHead = {
  badgeText: "What We Build", // ⚠️ mismatch
  title: "AI Agents Designed for Real Business Workflows", // ⚠️ mismatch
  description:
    "We design and deploy AI agents that automate workflows, coordinate tools, make decisions, and execute complex tasks across business operations.", // ⚠️ mismatch
  image: "/images/Engineering/mobile-phone-mockup.png",
  imageAlt: "Mobile app on phone",
};

export const mobileProcessSectionHead = {
  badgeText: "Process Categories We Automate", // ⚠️ mismatch
  title: "The Right Automation for Every Process", // ⚠️ mismatch
  description:
    "We assess how work moves through your organization and design automation strategies that improve efficiency, reduce errors, and adapt to operational complexity.", // ⚠️ mismatch
};

export const mobileProcessData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <StructuredDataWorkflowsIcon />,
    title: "Structured Data Workflows",
    description:
      "Repeatable, rule-based processes with structured inputs. Data entry automation, report generation, data validation, system synchronization, and scheduled jobs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileDocumentProcessingIcon />,
    title: "Document Processing",
    description:
      "Extract structured data from documents, classify them, route them, and trigger downstream actions. Handles PDFs, emails, scanned documents, and forms.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <IntegrationAutomationIcon />,
    title: "Integration Automation",
    description:
      "Connect systems that don't talk to each other. Event-driven integrations that keep data in sync across CRM, ERP, HRIS, and custom applications without manual export/import.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileAIProcessAutomationIcon />,
    title: "AI-Powered Process Automation",
    description:
      "For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileAIProcessAutomationIcon />,
    title: "AI-Powered Process Automation", // ⚠️ duplicate of item 4
    description:
      "For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileAIProcessAutomationIcon />,
    title: "AI-Powered Process Automation", // ⚠️ duplicate again
    description:
      "For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.",
  },
];
export const mobileRoadmapSectionHead = {
  badgeText: "What You Walk Away With", // ⚠️ mismatch
  title: "A Clear AI Roadmap backed by Business Value", // ⚠️ mismatch
  description:
    "Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.", // ⚠️ mismatch
};

export const mobileRoadmapData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <BusinessImpactClarityIcon />,
    title: "Clarity on where AI will create measurable business impact",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PrioritizedUseCasesIcon />,
    title: "A prioritised use case stack ranked by value and feasibility",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PilotScopeIcon />,
    title: "Defined pilot scope with expected outcomes and success metrics",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <BusinessRoadmapIcon />,
    title: "A structured roadmap aligned to business priorities",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AvoidedBuildsIcon />,
    title: "A clear view of what *not* to build — equally valuable",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AvoidedBuildsIcon />,
    title: "A clear view of what *not* to build — equally valuable", // ⚠️ duplicate of item 5
  },
];

export const mobileEngineeringCTAData = {
  badgeText: "Ready to Build?",
  title: "Let's Build Your Next Healthcare Solution!", // ⚠️ mismatch — same copy-paste bug as before
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant production-ready software.",
  buttonText: "Build Your Healthcare Solution", // ⚠️ mismatch
  buttonLink: "/contact",
};
