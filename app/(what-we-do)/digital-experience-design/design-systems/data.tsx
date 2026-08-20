import {
  BuildFromScratchIcon,
  CodeComponentLibraryIcon,
  DesignTokensIcon,
  ExtendExistingLibraryIcon,
  FigmaComponentLibraryIcon,
  HeroArrowRightIcon,
  OnCallSupportIcon,
  PatternLibraryIcon,
  QuarterlyAuditsIcon,
  UsageGuidelinesIcon,
  UserInterviewsIcon,
} from "components/SvgIcon";

import { ArchitectureItem } from "uiComponents/ArchitectureCircle";

export const designSystemsHeroData = {
  badgeText: "Design Systems",
  title: "Build Once. Use Everywhere. Ship Faster.",
  description:
    "Every time your team creates a new button, chooses a color, or picks a font size without a system to reference, you're accumulating design debt. A design system isn't overhead - it's the infrastructure that makes your product faster to build, more consistent for users, and cheaper to maintain.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033713/Gloitel/Digital%20Experience%20Design/Design_Systems_fttrfz.png",
  imageAlt: "Design systems",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Build Your Design System",
    href: "/contact",
  },
  secondaryButton: {
    text: "Audit Your Existing System",
    href: "/about",
    icon: (
      <HeroArrowRightIcon />
    ),
  },
};

export const designSystemComponentsSectionHead = {
  badgeText: "What a Design System Includes",
  title: "Consistency at Scale starts with Systems",
  description:
    "A design system creates a shared foundation for designers and engineers - making products faster to build, easier to maintain, and more consistent across every experience.",
};

export const designSystemComponentsData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: (
      <DesignTokensIcon />
    ),
    title: "Design Tokens",
    description:
      "The atomic values that define your visual language - colors, typography, spacing, border radii, shadows, and motion. Stored as variables that propagate from design files into code.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: (
      <PatternLibraryIcon />
    ),
    title: "Pattern Library",
    description:
      "Higher-level patterns built from components - forms, navigation patterns, empty states, loading states, error states. Solved problems that never need to be solved again.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: (
      <FigmaComponentLibraryIcon />
    ),
    title: "Component Library (Figma)",
    description:
      "Every reusable UI component documented in Figma - with all variants, states, and interaction behaviors. The single source of truth for designers.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: (
      <UsageGuidelinesIcon />
    ),
    title: "Usage Guidelines",
    description:
      "Documentation for when and how to use each component - not just what it looks like. Includes dos/don'ts and accessibility requirements.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: (
      <CodeComponentLibraryIcon />
    ),
    title: "Code Component Library",
    description:
      "Matching React (or React Native, Vue, etc.) component library with TypeScript props, Storybook documentation, and automated visual regression testing. The single source of truth for engineers.",
  },
];

export const foundationDecisionData = {
  badgeText: "Choosing the Right Foundation",
  heading: "The Best Systems start with the Right Decision",
  description:
    "Whether you build from scratch or extend an existing library, the right approach depends on your product needs and long-term priorities.",
  cards: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <BuildFromScratchIcon />
      ),
      title: "Build from scratch",
      description:
        "When your brand is distinctive, your product has unique interaction patterns, or you need complete control over accessibility and performance.",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <ExtendExistingLibraryIcon />
      ),
      title: "Extend an existing library",
      description:
        "(shadcn/ui, Radix UI, Material UI, Ant Design, Mantine) when speed is the priority and your brand can be expressed through tokens without component logic.",
    },
  ],
  bottomText: "We've done both. The recommendation depends on your situation.",
};

export const designSystemDeliverablesSectionHead = {
  badgeText: "Design System Deliverables",
  title: "More Than Components, A Complete System",
  description:
    "We provide the tools, documentation, and frameworks required to keep your design system effective over time.",
};

export const designSystemDeliverablesData = [
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 1, text: "Figma component library with all variants and states" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 2, text: "React / React Native / Flutter component library" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 3, text: "Storybook documentation" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 4, text: "Design token files (CSS variables, Tailwind config, or native tokens)" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 5, text: "Usage guidelines and pattern documentation" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 6, text: "Contribution guide for your team" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), step: 7, text: "Governance process for system updates" },
];

export const maintenanceSectionHead = {
  badgeText: "Maintenance & Evolution",
  title: "Maintaining Consistency over Time",
  description:
    "We provide the processes and support needed to prevent drift between design and implementation.",
};

export const maintenanceData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: (
      <UserInterviewsIcon />
    ),
    title: "Contribution Process",
    description:
      "Set up contribution processes so teams can submit new components while maintaining quality standards.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: (
      <QuarterlyAuditsIcon />
    ),
    title: "Quarterly Audits",
    description:
      "Run quarterly audits to identify drift between design and implementation.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: (
      <OnCallSupportIcon />
    ),
    title: "On-Call Support",
    description:
      "Provide on-call support for design system questions and edge cases.",
  },
];

export const designSystemsCTAData = {
  badgeText: "Design Systems That Evolve With You",
  title: "The Infrastructure behind Better Products",
  description:
    "Empower your teams with reusable components, clear guidelines, and the infrastructure needed to ship efficiently.",
  buttonText: "Design Your System",
  buttonLink: "/contact",
};
