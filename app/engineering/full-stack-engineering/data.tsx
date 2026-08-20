import {
  AvoidedBuildsIcon,
  BusinessImpactClarityIcon,
  BusinessRoadmapIcon,
  ConnectedSystemsIcon,
  EngineeringHIPAAIcon,
  EngineeringIEC62304Icon,
  FullStackGDPRIcon,
  FullStackSOC2TypeIIIcon,
  HeroArrowRightIcon,
  PilotScopeIcon,
  PrioritizedUseCasesIcon,
  WCAGComplianceIcon,
} from "components/SvgIcon";
import { ArchitectureItem } from "uiComponents/ArchitectureCircle";

export const fullStackHeroData = {
  badgeText: "Full Stack Engineering",
  title: "AI Engineering That Ships and Stays Shipped", // ⚠️ mismatch
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.", // ⚠️ mismatch
  image: "/images/Engineering/full-stack-hero.png",
  imageAlt: "Full stack engineering",
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
export const fullStackComplianceSectionHead = {
  badgeText: "Compliance & Standards We Work To", // ⚠️ mismatch
  title: "Built on Healthcare Standards from Day One", // ⚠️ mismatch
  description:
    "Every solution is designed with security, privacy, accessibility, and regulatory compliance at its core - ensuring healthcare systems remain reliable, trusted, and audit-ready.", // ⚠️ mismatch
};

export const fullStackComplianceData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: <EngineeringHIPAAIcon />,
    title: "HIPAA", // ⚠️ mismatch
    description:
      "Privacy, Security Rule, and Breach Notification compliance for healthcare data protection.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: <FullStackGDPRIcon />,
    title: "GDPR",
    description:
      "Data privacy compliance for healthcare organizations serving patients across the European Union.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: <ConnectedSystemsIcon />,
    title: "HL7 FHIR",
    description:
      "R4 and R5 API integrations enabling secure and standardized healthcare data exchange.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: <WCAGComplianceIcon />,
    title: "WCAG 2.1 AA",
    description:
      "Accessibility standards that ensure patient-facing experiences are inclusive and usable.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: <EngineeringIEC62304Icon />,
    title: "IEC 62304",
    description:
      "Medical device software lifecycle processes for safe and compliant product development.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "bottom",
    icon: <FullStackSOC2TypeIIIcon />,
    title: "SOC 2 Type II",
    description:
      "Security, availability, and confidentiality controls for enterprise-grade healthcare platforms.",
  },
];
export const fullStackRoadmapSectionHead = {
  badgeText: "What You Walk Away With", // ⚠️ mismatch
  title: "A Clear AI Roadmap backed by Business Value", // ⚠️ mismatch
  description:
    "Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.", // ⚠️ mismatch
};

export const fullStackRoadmapData = [
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
];
