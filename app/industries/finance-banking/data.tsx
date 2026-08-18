import {
  AIAssistedToolsIcon,
  BaselIIIIVIcon,
  ComplianceAndRegTechIcon,
  ExploreServicesIcon,
  FinancialDataAndAnalyticsIcon,
  FinancialSOC2TypeIIIcon,
  FintechProductDevelopmentIcon,
  GDPRAndCCPAIcon,
  HeroArrowRightIcon,
  OpenBankingIntegrationsIcon,
  PCIDSSIcon,
  PaymentProcessingIntegrationIcon,
  RBIRegulationsIcon,
  SECFINRAIcon,
} from "../../component/SvgIcon";

import type { ArchitectureItem } from "../../uiComponents/ArchitectureCircle";

export const financeBankingData = {
  badgeText: "Finance & Banking",
  title: "Secure, Compliant, and Fast Digital Experiences for Finance",
  description:
    "From customer onboarding to internal automation, we build banking and finance solutions that balance trust, compliance, and speed.",
  image: "/images/herosectionimage.png",
  imageAlt: "Finance and banking solutions",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Discuss Your Project",
    href: "/contact",
  },
  secondaryButton: {
    text: "Explore Services",
    href: "/about",
    icon: <ExploreServicesIcon />,
  },
};

export const financeHeroData = {
  badgeText: "Finance & Banking",
  title: "Financial Software Built for the Regulatory Reality",
  description:
    "Financial applications carry regulatory risk, fiduciary responsibility, and zero tolerance for data breaches. We've built for fintech clients long enough to know what compliance-first engineering actually looks like in practice - not just in documentation.",
  image: "/images/herosectionimage.png",
  imageAlt: "Finance and banking technology",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Talk to Our Fintech Team",
    href: "/contact",
  },
  secondaryButton: {
    text: "Finance Case Studies",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const financeChallengesSectionHead = {
  badgeText: "Challenges We Solve in Financial Services",
  title: "The Challenges Behind Modern Financial Systems",
  description:
    "Building financial software requires balancing compliance, security, performance, and user experience - without compromising trust or scalability.",
  image: "/images/Industries/finance-challenges.png",
  imageAlt: "Financial services challenges",
};

export const financeChallengesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "PCI DSS and SOC 2 compliant payment and data systems with enterprise-grade security and audit controls",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Core banking system modernization for improved performance, scalability, and operational efficiency",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Open banking API integration (Account Aggregation, Payments) across secure and regulated financial ecosystems",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Fraud detection and risk management systems powered by real-time monitoring and analytics",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "RegTech and compliance automation for streamlined reporting and regulatory workflows",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Wealth management and robo-advisory platforms designed for modern investor experiences",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Lending and underwriting workflow automation that accelerates approvals and decision-making",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: "Financial reporting and analytics for actionable insights and business visibility",
  },
];

export const financeSolutionsSectionHead = {
  badgeText: "Solutions We Build",
  title: "Technology Solutions for Modern Financial Services",
  description:
    "We design and develop fintech solutions that improve financial experiences, streamline workflows, and support secure operations.",
};

export const financeSolutionsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FintechProductDevelopmentIcon />,
    title: "Fintech Product Development",
    description:
      "Mobile wallets, lending platforms, neobank products, insurance tech applications, and investment platforms. Built on modern, auditable, and secure stacks.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PaymentProcessingIntegrationIcon />,
    title: "Payment Processing Integration",
    description:
      "Stripe, Razorpay, Braintree, and custom payment gateway integrations. Tokenization, webhook handling, reconciliation, and dispute management built in.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <OpenBankingIntegrationsIcon />,
    title: "Open Banking Integrations",
    description:
      "Account aggregation, payment initiation, and financial data platforms using open banking APIs (Plaid, Finbox, Setu, Account Aggregators in India).",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AIAssistedToolsIcon />,
    title: "AI-Powered Financial Tools",
    description:
      "Credit scoring models, fraud detection systems, document extraction for KYC/KYB, AI-assisted deal analysis, and automated report generation.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ComplianceAndRegTechIcon />,
    title: "Compliance & RegTech",
    description:
      "AML transaction monitoring, KYC/KYB workflow automation, regulatory reporting automation, and audit trail systems that satisfy examiner requirements.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FinancialDataAndAnalyticsIcon />,
    title: "Financial Data & Analytics",
    description:
      "Real-time dashboards, portfolio analytics, risk reporting, and data pipelines that connect multiple financial data sources into a unified analytical view.",
  },
];

export const financeComplianceSectionHead = {
  badgeText: "Compliance & Standards We Work To",
  title: "Built for the Regulatory Reality of Financial Services",
  description:
    "Financial software operates in one of the most heavily regulated environments. From payment security and privacy requirements to banking regulations and reporting standards, we build systems designed to support compliance, governance, and long-term operational trust.",
};

export const financeComplianceData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: <PCIDSSIcon />,
    title: "PCI DSS",
    description:
      "Level I compliant architectures for secure payment processing and cardholder data protection.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: <BaselIIIIVIcon />,
    title: "Basel III / IV",
    description:
      "Capital reporting and risk management considerations for banking environments.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: <FinancialSOC2TypeIIIcon />,
    title: "SOC 2 Type II",
    description:
      "Security and availability controls for enterprise-grade financial platforms and services.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: <SECFINRAIcon />,
    title: "SEC / FINRA",
    description:
      "Reporting and governance requirements for regulated financial services organizations.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: <GDPRAndCCPAIcon />,
    title: "GDPR & CCPA",
    description:
      "Privacy engineering practices that support global data protection requirements.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "bottom",
    icon: <RBIRegulationsIcon />,
    title: "RBI Regulations",
    description:
      "Compliance considerations for India-based financial institutions and fintech products.",
  },
];

export const financeCTAData = {
  badgeText: "Ready to Launch?",
  title: "From Financial Complexity to Production Reality",
  description:
    "We help fintech companies, banks, and financial institutions build secure, scalable, and compliant systems designed for real-world operations.",
  buttonText: "Build Your Fintech Product",
  buttonLink: "/contact",
};
