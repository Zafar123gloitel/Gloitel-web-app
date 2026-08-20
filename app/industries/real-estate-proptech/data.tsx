import {
  AIAssistedToolsIcon,
  DealPipelineAndCRMIcon,
  DocumentAutomationIcon,
  FinancialDataAndAnalyticsIcon,
  HeroArrowRightIcon,
  PropertyListingAndMarketplacePlatformsIcon,
  PropertyManagementSoftwareIcon,
} from "components/SvgIcon";

export const realEstateProptechData = {
  badgeText: "Real Estate & PropTech",
  title: "Digital Tools for Property Teams and Modern Buyers",
  description:
    "We design property platforms, portals, and automation flows that simplify listing discovery, lead handling, and operations.",
  image: "/images/herosectionimage.png",
  imageAlt: "Real estate and proptech solutions",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start a Conversation",
    href: "/contact",
  },
  secondaryButton: {
    text: "Learn More",
    href: "/about",
  },
};

export const realEstateHeroData = {
  badgeText: "Real Estate & PropTech",
  title: "PropTech That Moves Deals Faster and Properties Better",
  description:
    "Real estate runs on information, relationships, and speed. The firms winning today are those with better data, faster processes, and technology that makes agents more productive - not just ones with a website.",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056273/Gloitel/Industries/Real_Estate_PropTech_tmgwck.png",
  imageAlt: "Real estate and PropTech technology",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Talk to Our PropTech Team",
    href: "/contact",
  },
  secondaryButton: {
    text: "Real Estate Case Studies",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const realEstateChallengesSectionHead = {
  badgeText: "Challenges We Solve",
  title: "Scaling Real Estate & PropTech Comes With Complex Challenges",
  description:
    "Managing property data, transactions, tenant operations, and compliance becomes increasingly complex as real estate businesses grow. The right technology helps streamline operations and improve visibility across the ecosystem.",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056267/Gloitel/Industries/Challenges_We_Solve_rEAL_eSTATE_ad3xra.png",
  imageAlt: "Real estate and PropTech challenges",
};

export const realEstateChallengesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Property listing aggregation and MLS/portal integrations for seamless property data management",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "AI-powered property valuation and pricing analytics for faster decision-making",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Deal management and CRM for real estate teams, agents, and brokerage operations",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Tenant and property management platforms for streamlined daily operations",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Document workflow automation (contracts, KYC, compliance) with reduced manual effort",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Mortgage and loan processing applications with automated approval workflows",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Virtual tours and 3D property visualization for enhanced buyer experiences",
  },
];

export const realEstateSolutionsSectionHead = {
  badgeText: "Solutions We Build",
  title: "Real Estate & PropTech needs Technology Built for Scale",
  description:
    "From property marketplaces and valuation platforms to management systems and transaction workflows, modern real estate businesses need technology that improves efficiency, accelerates operations, and supports growth.",
};

export const realEstateSolutionsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PropertyListingAndMarketplacePlatformsIcon />,
    title: "Property Listing & Marketplace Platforms",
    description:
      "Custom real estate portals with advanced property search, map-based browsing, lead capture, and agent management. Integrations with MLS, 99acres, Housing, Magicbricks, and Zillow.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AIAssistedToolsIcon />,
    title: "AI-Powered Valuation Tools",
    description:
      "Automated valuation models (AVM) using market data, comparable sales, and property features. Delivered as APIs for integration into agent and buyer tools.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PropertyManagementSoftwareIcon />,
    title: "Property Management Software",
    description:
      "End-to-end property management - tenant onboarding, rent collection, maintenance requests, lease renewals, and landlord reporting dashboards.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DealPipelineAndCRMIcon />,
    title: "Deal Pipeline & CRM",
    description:
      "Custom CRM for real estate teams - lead capture from multiple sources, deal stage management, task automation, document management, and pipeline analytics.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DocumentAutomationIcon />,
    title: "Document Automation",
    description:
      "AI-powered extraction of data from property documents, automated contract generation, digital signature integration, and compliance checklist automation.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FinancialDataAndAnalyticsIcon />,
    title: "Real Estate Analytics",
    description:
      "Market intelligence dashboards, investment analysis tools, rental yield calculators, and neighbourhood analytics platforms.",
  },
];

export const realEstateCTAData = {
  badgeText: "Let's Talk PropTech",
  title: "Transform the Way Real Estate and PropTech Operates",
  description:
    "From property discovery and deal management to valuation intelligence and portfolio analytics, we build technology solutions that help real estate businesses operate more efficiently and scale faster.",
  buttonText: "Build Your PropTech Solution",
  buttonLink: "/contact",
};
