export const appModernizationHeroData = {
  badgeText: "App Modernization",
  title: "Modernize Your Application Without Rebuilding Everything",
  description:
    "The most dangerous approach to app modernization is the full rewrite. It takes 2-3x longer than estimated, costs more than projected, and still leaves you with many of the same problems - just in a newer language. We take a different approach: incremental modernization that delivers value at every step.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966963/Gloitel/Enterprise%20Modernization/App_Modernization_qy2c0c.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Get a Modernization Assessment",
    href: "/contact",
  },
  secondaryButton: {
    text: "See What's Possible",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const phasedApproachSectionHead = {
  badgeText: "Our Default Approach",
  title: "A Phased Path to Application Modernization",
  description:
    "Every phase is designed to deliver progress while maintaining stability - allowing your applications to evolve without disrupting ongoing operations.",
};

export const phasedApproachData = [
  {
    step: 1,
    title: "Business Continuity",
    description: "The business keeps running throughout the transition.",
    icon: <ShieldIcon size={25} className="text-white" />,
  },
  {
    step: 2,
    title: "Validated Progress",
    description:
      "Each modernized component is tested and validated before the next begins.",
    icon: <ChecklistIcon size={26} className="text-white" />,
  },
  {
    step: 3,
    title: "Incremental Change",
    description:
      "Risk is distributed across many small changes, not one large one.",
    icon: <RefreshCcwIcon size={26} className="text-white" />,
  },
  {
    step: 4,
    title: "Flexible Direction",
    description: "You can pause or pivot at any point without losing progress.",
    icon: <LightbulbGearIcon size={26} className="text-white" />,
  },
];

export const constraintsSectionHead = {
  badgeText: "What We Address",
  title: "Modernization that Targets the Real Application Constraints",
  description:
    "We address the technical limitations that impact performance, maintainability, and delivery speed - improving your application incrementally while keeping business operations running smoothly.",
};

export const applicationConstraintsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CodeIcon size={25} className="text-white" />,
    title: "Code Quality & Technical Debt Reduction",
    description:
      "Systematic reduction of technical debt through refactoring, test coverage, documentation improvements, and code review standards that prevent future debt.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <RefreshCycleIcon size={25} className="text-white" />,
    title: "UI Modernization",
    description:
      "Upgrade aging frontend interfaces to modern architectures with React or Vue, responsive design, accessibility improvements, and performance optimization.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LightbulbGearIcon size={25} className="text-white" />,
    title: "API Layer Modernization",
    description:
      "Introduce a clean API layer between your legacy backend and modern frontends/integrations. REST or GraphQL APIs that let you evolve the frontend independently of the backend.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DatabaseIcon size={25} className="text-white" />,
    title: "Database Modernization",
    description:
      "Migrate from deprecated database versions, add proper indexing, introduce query optimization, implement connection pooling, and design for read/write separation where needed.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <RefreshCcwIcon size={25} className="text-white" />,
    title: "Framework & Runtime Upgrades",
    description:
      "Upgrade application frameworks and language runtimes — handling breaking changes, dependency conflicts, and regression testing so upgrades don't break production.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <RadarIcon size={25} className="text-white" />,
    title: "Performance Optimization",
    description:
      "Profile and fix the actual bottlenecks. Caching layers, query optimization, CDN configuration, lazy loading, and server-side rendering improvements.",
  },
];

export const strategySectionHead = {
  badgeText: "Modernization Process",
  title: "A Strategy for Progress, Not Disruption",
  description:
    "Modernization happens in phases - each step building on the last to strengthen your application, validate outcomes, and keep the business moving forward.",
};

export const auditPhaseData2 = {
  badgeText: "Phase 01",
  title: "Audit",
  subTitle:"(2 weeks)",
  description:
    "Full codebase analysis: tech debt inventory, security vulnerabilities, performance bottlenecks, and dependency risk. Delivered as a prioritized modernization roadmap.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966963/Gloitel/Enterprise%20Modernization/Audit_xy8f87.png",
  imageAlt: "Codebase audit",
};

export const foundationPhaseData = {
  badgeText: "Phase 02",
  title: "Foundation ",
  subTitle:"(4 weeks)",
  description:
    "Establish the foundation: test infrastructure, CI/CD pipeline, monitoring, and the first components of the modern architecture.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966962/Gloitel/Enterprise%20Modernization/Foundation_hg6enw.png",
  imageAlt: "Foundation setup",
};

export const migrationPhaseData = {
  badgeText: "Phase 03",
  title: "Incremental Migration",
  description:
    "Systematic migration of components from legacy to modern architecture, validated at each step.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966961/Gloitel/Enterprise%20Modernization/Incremental_Migration_xoqj03.png",
  imageAlt: "Incremental migration",
};

export const sunsetPhaseData = {
  badgeText: "Phase 04",
  title: "Sunset Legacy",
  description:
    "Cut over to the modernized system, decommission legacy components, and validate end-to-end.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966960/Gloitel/Enterprise%20Modernization/Sunset_Legacy_m2uert.png",
  imageAlt: "Legacy sunset",
};

export const technologiesModernizedData = {
  badge: "Technologies We Modernize From and To",

  title: "Modern Platforms. Familiar Foundations.",

  description:
    "We help organizations transition from aging technologies to modern platforms - preserving what works while enabling future growth.",

  tabs: ["From", "To", "Databases"],

  technologies: {
    From: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PHP 5/7",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143204/Gloitel/icon/php_nkkee6.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "jQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143340/Gloitel/icon/jquery_mcjtdt.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AngularJS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/angularjs_omz8pi.png",
      },
    ],

    To: [],
    Databases: [],
  },
};

import {
  AnalyticsIcon,
  ChecklistIcon,
  CodeIcon,
  DatabaseIcon,
  HeroArrowRightIcon,
  LightbulbGearIcon,
  LinkIcon,
  MonitorIcon,
  RadarIcon,
  RefreshCcwIcon,
  RefreshCycleIcon,
  ShieldIcon,
  WorkflowIcon,
} from "../../../component/SvgIcon";
