import {
  AlignmentGapsIcon,
  DesignHandoffIcon,
  HeroArrowRightIcon,
  InfoIcon,
  IntegratedDeliveryIcon,
} from 'components/SvgIcon';

const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

// export const uxResearchHeroData = {
//   badgeText: "UX Research & Strategy",
//   title: "Design the Right Thing, then Design It Right",
//   description:
//     "The most expensive design mistake is building a beautiful interface for the wrong user flow. UX research is the work that tells you what's actually worth designing before you spend time and money designing it.",
//   image: "/images/What-we-do/Rectangle 1.png",
//   imageAlt: "UX research and strategy",
//   video:
//     "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
//   primaryButton: {
//     text: "Start a Research Engagement",
//     href: "/contact",
//   },
//   secondaryButton: {
//     text: "View Research Case Studies",
//     href: "/about",
//     icon: (
//       <HeroArrowRightIcon />
//     ),
//   },
// };

// export const researchMethodsSectionHead = {
//   badgeText: "Research Methods We Use",
//   title: "Understanding Reality before Building Solutions",
//   description:
//     "The fastest way to waste time is solving the wrong problem. We use a structured research process to uncover user needs, operational constraints, and business opportunities before product decisions are made.",
// };

// export const researchMethodsData: ArchitectureItem[] = [
//   {
//    id:createId(),
//     position: "top",
//     icon: (
//       <UserInterviewsIcon />
//     ),
//     title: "User Interviews",
//     description:
//       "1:1 conversations with real users. We recruit, moderate, and synthesize insights from 8-12 interviews to surface meaningful patterns.",
//   },
//   {
//    id:createId(),
//     position: "leftTop",
//     icon: (
//       <SurveyResearchIcon />
//     ),
//     title: "Survey Research",
//     description:
//       "Quantitative validation of qualitative insights. Large-sample data that confirms (or challenges) what interviews revealed.",
//   },
//   {
//    id:createId(),
//     position: "rightTop",
//     icon: (
//       <ContextualInquiryIcon />
//     ),
//     title: "Contextual Inquiry",
//     description:
//       "Observe users performing real tasks in their actual environment. The gap between what users say and do often reveals the most valuable insights.",
//   },
//   {
//    id:createId(),
//     position: "leftBottom",
//     icon: (
//       <CompetitiveAnalysisIcon />
//     ),
//     title: "Competitive Analysis",
//     description:
//       "Systematic review of how competitors solve the same problems. Not to copy but to understand established patterns and identify differentiation opportunities.",
//   },
//   {
//    id:createId(),
//     position: "bottom",
//     icon: (
//       <JourneyMappingIcon />
//     ),
//     title: "Journey Mapping",
//     description:
//       "Map the end-to-end user experience - across channels, touchpoints, and time - to identify where value is created and where it's destroyed. Foundation for every product strategy decision.",
//   },
//   {
//    id:createId(),
//     position: "rightBottom",
//     icon: (
//       <UsabilityTestingIcon />
//     ),
//     title: "Usability Testing",
//     description:
//       "Test existing or prototype interfaces with real users. Identify friction points, confusion, and failure modes before production.",
//   },
// ];

// export const deliverablesSectionHead = {
//   badgeText: "Research Deliverables",
//   title: "Outputs of the Research Process",
//   description:
//     "A structured set of deliverables designed to capture insights, communicate findings, and provide clear direction for product and UX teams.",
// };

// export const deliverablesData = [
//   {
//    id:createId(),
//     icon: (
//       <UserResearchReportIcon />
//     ),
//     title: "User research report with findings and recommendations",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchPersonaIcon />
//     ),
//     title: "Persona definitions grounded in research data",
//   },
//   {
//    id:createId(),
//     icon: (
//       <UserJourneyMapIcon />
//     ),
//     title: "User journey maps (current state and desired state)",
//   },
//   {
//    id:createId(),
//     icon: (
//       <JobsToBeDoneIcon />
//     ),
//     title: "Jobs-to-be-done framework",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ExperienceAuditIcon />
//     ),
//     title: "Experience audit of existing product",
//   },
//   {
//    id:createId(),
//     icon: (
//       <OpportunityMapIcon />
//     ),
//     title: "Opportunity map - prioritized areas for improvement",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchDesignBriefIcon />
//     ),
//     title: "Research-backed design brief for the UI/UX phase",
//   },
// ];

// export const assumptionsSectionHead = {
//   badgeText: "When Research is Critical",
//   title: "When Assumptions aren't Enough",
//   description:
//     "Research provides the evidence needed to validate ideas, understand users, and make informed decisions before committing significant time, budget, and resources.",
// };

// export const assumptionsData = [
//   {
//    id:createId(),
//     icon: (
//       <ResearchAssumptionInfoIcon />
//     ),
//     description: "Designing a new product or feature without user feedback",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchAssumptionInfoIcon />
//     ),
//     description: "Redesigning an existing product that isn't performing well",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchAssumptionInfoIcon />
//     ),
//     description: "Entering a new market or user segment",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchAssumptionInfoIcon />
//     ),
//     description: "Building for specialized users and non-English speakers",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResearchAssumptionInfoIcon />
//     ),
//     description: "When teams have conflicting opinions about what users want",
//   },
// ];

// export const uxResearchCTAData = {
//   badgeText: "Insight Before Execution",
//   title: "The Best Design Decisions Start with Research",
//   description:
//     "We help teams identify opportunities, reduce risk, and align around evidence before making into design.",
//   buttonText: "Plan a Research Sprint",
//   buttonLink: "/contact",
// };

// export const uxDesignHeroData = {
//   badgeText: "UI/UX Design",
//   title: "Where great User Experience meets Engineering Reality.",
//   description:
//     "Good UI/UX design is the intersection of three things: what users need, what looks right, and what your engineering team can actually ship. Designs that fail usually optimize for only one of these.",
//   image: "/images/What-we-do/Rectangle 1.png",
//   imageAlt: "UI/UX design",
//   video:
//     "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
//   primaryButton: {
//     text: "Start a Design Project",
//     href: "/contact",
//   },
//   secondaryButton: {
//     text: "See Our Portfolio",
//     href: "/about",
//     icon: (
//       <HeroArrowRightIcon />
//     ),
//   },
// };

// export const designProcessSectionHead = {
//   badgeText: "Our Design Process",
//   title: "Every Great Product starts with the Right Foundation.",
//   description:
//     "Every successful agent starts with a clear process. From workflow analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments.",
// };

// export const discoveryResearchData = {
//   badgeText: "Step 01",
//   title: "Discovery & Research",
//   description:
//     "Before opening Figma, we understand the user, the use case, the technical constraints, and the business objective.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/discovery-research.png",
//   imageAlt: "Discovery and research",
// };

// export const informationArchitectureData = {
//   badgeText: "Step 02",
//   title: "Information Architecture",
//   description:
//     "Define the structure and organization of the interface - navigation, content hierarchy, and user flows - before designing individual screens.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/information-architecture.png",
//   imageAlt: "Information architecture",
// };

// export const wireframingData = {
//   badgeText: "Step 03",
//   title: "Wireframing",
//   description:
//     "Low-fidelity wireframes for every key user flow. Fast to produce, fast to iterate and unambiguous about layout and hierarchy without getting distracted by visual details.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/wireframing.png",
//   imageAlt: "Wireframing",
// };

// export const visualDesignData = {
//   badgeText: "Step 04",
//   title: "Visual Design",
//   description:
//     "Apply visual language - color, typography, iconography, spacing - to wireframes. Design that is consistent with your brand and optimized for the target platform (web, iOS, Android).",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/visual-design.png",
//   imageAlt: "Visual design",
// };

// export const interactivePrototypeData = {
//   badgeText: "Step 05",
//   title: "Interactive Prototype",
//   description:
//     "High-fidelity prototype for user testing, stakeholder review, and developer reference. Clickable, realistic, and testable.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/interactive-prototype.png",
//   imageAlt: "Interactive prototype",
// };

// export const designHandoffData = {
//   badgeText: "Step 06",
//   title: "Design Handoff",
//   description:
//     "Developer-ready Figma files with component specs, design tokens, and interaction documentation. Plus availability during development to answer questions and review implementation.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/design-handoff.png",
//   imageAlt: "Design handoff",
// };

// export const whatWeDesignSectionHead = {
//   badgeText: "What We Design",
//   title: "From First Click to Daily Use",
//   description:
//     "We design the touchpoints that define a product experience—from acquisition and onboarding to everyday interactions and decision-making.",
// };

// export const whatWeDesignData = [
//   {
//    id:createId(),
//     image: "/images/What-we-do/web-applications.png",
//     imageAlt: "Web applications",
//     title: "Web Applications",
//     description:
//       "Complex dashboard interfaces, multi-step workflows, data visualization, admin panels, and customer-facing products.",
//     buttonText: "View More",
//     buttonLink: "/",
//   },
//   {
//    id:createId(),
//     image: "/images/What-we-do/mobile-applications.png",
//     imageAlt: "Mobile applications",
//     title: "Mobile Applications",
//     description:
//       "iOS and Android native experiences, React Native and Flutter - designed to accommodate while minimizing brand consistency.",
//     buttonText: "View More",
//     buttonLink: "/",
//   },
//   {
//    id:createId(),
//     image: "/images/What-we-do/landing-pages-marketing.png",
//     imageAlt: "Landing pages and marketing sites",
//     title: "Landing Pages & Marketing Sites",
//     description:
//       "Conversion-optimized pages with clear hierarchy, compelling visuals, and measurable CTAs.",
//     buttonText: "View More",
//     buttonLink: "/",
//   },
//   {
//    id:createId(),
//     image: "/images/What-we-do/onboarding-flows.png",
//     imageAlt: "Onboarding flows",
//     title: "Onboarding Flows",
//     description:
//       "First-time experiences that turn signups into active users. Motivated, setup wizards, matrix, and progressive feature introduction.",
//     buttonText: "View More",
//     buttonLink: "/",
//   },
//   {
//    id:createId(),
//     image: "/images/What-we-do/data-dashboards.png",
//     imageAlt: "Data dashboards",
//     title: "Data Dashboards",
//     description:
//       "Analytics and reporting interfaces where information hierarchy, chart type selection, and interaction design determine whether data is actually usable.",
//     buttonText: "View More",
//     buttonLink: "/",
//   },
// ];

// export const designStandardsSectionHead = {
//   badgeText: "What We Walk Away With",
//   title: "A Clear AI Roadmap backed by Business Value",
//   description:
//     "Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.",
// };

// export const designStandardsData = [
//   {
//    id:createId(),
//     icon: (
//       <WCAGAccessibilityIcon />
//     ),
//     title: "WCAG 2.1 AA accessibility compliance by default",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ResponsiveDesignIcon />
//     ),
//     title: "Mobile-first responsive design",
//   },
//   {
//    id:createId(),
//     icon: (
//       <DesignTokenSystemIcon />
//     ),
//     title: "Design token systems for consistent theming",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ComponentBasedDesignIcon />
//     ),
//     title: "Component-based design matched to the frontend framework",
//   },
//   {
//    id:createId(),
//     icon: (
//       <DarkModeIcon />
//     ),
//     title: "Dark mode variants where relevant",
//   },
// ];

// export const uxDesignCTAData = {
//   badgeText: "Design Beyond Aesthetics",
//   title: "Create Experiences People Love to Use",
//   description:
//     "From wireframes and prototypes to develop-ready handoff, our design experience thinking through every screen and interaction.",
//   buttonText: "Start Your Design Project",
//   buttonLink: "/contact",
// };

// export const designSystemsHeroData = {
//   badgeText: "Design Systems",
//   title: "Build Once. Use Everywhere. Ship Faster.",
//   description:
//     "Every time your team creates a new button, chooses a color, or picks a font size without a system to reference, you're accumulating design debt. A design system isn't overhead - it's the infrastructure that makes your product faster to build, more consistent for users, and cheaper to maintain.",
//   image: "/images/What-we-do/Rectangle 1.png",
//   imageAlt: "Design systems",
//   video:
//     "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
//   primaryButton: {
//     text: "Build Your Design System",
//     href: "/contact",
//   },
//   secondaryButton: {
//     text: "Audit Your Existing System",
//     href: "/about",
//     icon: (
//       <HeroArrowRightIcon />
//     ),
//   },
// };

// export const designSystemComponentsSectionHead = {
//   badgeText: "What a Design System Includes",
//   title: "Consistency at Scale starts with Systems",
//   description:
//     "A design system creates a shared foundation for designers and engineers - making products faster to build, easier to maintain, and more consistent across every experience.",
// };

// export const designSystemComponentsData: ArchitectureItem[] = [
//   {
//    id:createId(),
//     position: "top",
//     icon: (
//       <DesignTokensIcon />
//     ),
//     title: "Design Tokens",
//     description:
//       "The atomic values that define your visual language - colors, typography, spacing, border radii, shadows, and motion. Stored as variables that propagate from design files into code.",
//   },
//   {
//    id:createId(),
//     position: "leftTop",
//     icon: (
//       <PatternLibraryIcon />
//     ),
//     title: "Pattern Library",
//     description:
//       "Higher-level patterns built from components - forms, navigation patterns, empty states, loading states, error states. Solved problems that never need to be solved again.",
//   },
//   {
//    id:createId(),
//     position: "rightTop",
//     icon: (
//       <FigmaComponentLibraryIcon />
//     ),
//     title: "Component Library (Figma)",
//     description:
//       "Every reusable UI component documented in Figma - with all variants, states, and interaction behaviors. The single source of truth for designers.",
//   },
//   {
//    id:createId(),
//     position: "leftBottom",
//     icon: (
//       <UsageGuidelinesIcon />
//     ),
//     title: "Usage Guidelines",
//     description:
//       "Documentation for when and how to use each component - not just what it looks like. Includes dos/don'ts and accessibility requirements.",
//   },
//   {
//    id:createId(),
//     position: "rightBottom",
//     icon: (
//       <CodeComponentLibraryIcon />
//     ),
//     title: "Code Component Library",
//     description:
//       "Matching React (or React Native, Vue, etc.) component library with TypeScript props, Storybook documentation, and automated visual regression testing. The single source of truth for engineers.",
//   },
// ];

// export const foundationDecisionData = {
//   badgeText: "Choosing the Right Foundation",
//   heading: "The Best Systems start with the Right Decision",
//   description:
//     "Whether you build from scratch or extend an existing library, the right approach depends on your product needs and long-term priorities.",
//   cards: [
//     {
//      id:createId(),
//       icon: (
//         <BuildFromScratchIcon />
//       ),
//       title: "Build from scratch",
//       description:
//         "When your brand is distinctive, your product has unique interaction patterns, or you need complete control over accessibility and performance.",
//     },
//     {
//      id:createId(),
//       icon: (
//         <ExtendExistingLibraryIcon />
//       ),
//       title: "Extend an existing library",
//       description:
//         "(shadcn/ui, Radix UI, Material UI, Ant Design, Mantine) when speed is the priority and your brand can be expressed through tokens without component logic.",
//     },
//   ],
//   bottomText: "We've done both. The recommendation depends on your situation.",
// };

// export const designSystemDeliverablesSectionHead = {
//   badgeText: "Design System Deliverables",
//   title: "More Than Components, A Complete System",
//   description:
//     "We provide the tools, documentation, and frameworks required to keep your design system effective over time.",
// };

// export const designSystemDeliverablesData = [
//   {
//    id:createId(),
//     step: 1,
//     text: "Figma component library with all variants and states",
//   },
//   {
//    id:createId(),
//     step: 2,
//     text: "React / React Native / Flutter component library",
//   },
//   {
//    id:createId(),
//     step: 3,
//     text: "Storybook documentation",
//   },
//   {
//    id:createId(),
//     step: 4,
//     text: "Design token files (CSS variables, Tailwind config, or native tokens)",
//   },
//   {
//    id:createId(),
//     step: 5,
//     text: "Usage guidelines and pattern documentation",
//   },
//   {
//    id:createId(),
//     step: 6,
//     text: "Contribution guide for your team",
//   },
//   {
//    id:createId(),
//     step: 7,
//     text: "Governance process for system updates",
//   },
// ];

// export const maintenanceSectionHead = {
//   badgeText: "Maintenance & Evolution",
//   title: "Maintaining Consistency over Time",
//   description:
//     "We provide the processes and support needed to prevent drift between design and implementation.",
// };

// export const maintenanceData = [
//   {
//    id:createId(),
//     step: 1,
//     icon: (
//       <UserInterviewsIcon />
//     ),
//     title: "Contribution Process",
//     description:
//       "Set up contribution processes so teams can submit new components while maintaining quality standards.",
//   },
//   {
//    id:createId(),
//     step: 2,
//     icon: (
//       <QuarterlyAuditsIcon />
//     ),
//     title: "Quarterly Audits",
//     description:
//       "Run quarterly audits to identify drift between design and implementation.",
//   },
//   {
//    id:createId(),
//     step: 3,
//     icon: (
//       <OnCallSupportIcon />
//     ),
//     title: "On-Call Support",
//     description:
//       "Provide on-call support for design system questions and edge cases.",
//   },
// ];

// export const designSystemsCTAData = {
//   badgeText: "Design Systems That Evolve With You",
//   title: "The Infrastructure behind Better Products",
//   description:
//     "Empower your teams with reusable components, clear guidelines, and the infrastructure needed to ship efficiently.",
//   buttonText: "Design Your System",
//   buttonLink: "/contact",
// };

// export const cxOptimizationHeroData = {
//   badgeText: "CX Optimization",
//   title: "Improve What you have before you Build New Things",
//   description:
//     "Many companies invest heavily in new features while their existing user flows are leaking value. CX optimization finds where users drop off, get confused, or fail to complete key actions - and fixes those before adding anything new.",
//   image: "/images/What-we-do/Rectangle 1.png",
//   imageAlt: "CX optimization",
//   video:
//     "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
//   primaryButton: {
//     text: "Audit Your User Experience",
//     href: "/contact",
//   },
//   secondaryButton: {
//     text: "CX Review",
//     href: "/about",
//     icon: (
//       <HeroArrowRightIcon />
//     ),
//   },
// };

// export const cxCoversSectionHead = {
//   badgeText: "What CX Optimization Covers",
//   title: "Improve Every Step of the Customer Journey",
//   description:
//     "CX optimization reveals where users drop off, get confused, or fail to complete key actions - so you can improve existing experiences before building something new.",
// };

// export const cxCoversData = [
//   {
//    id:createId(),
//     icon: (
//       <FunnelAnalysisIcon />
//     ),
//     title: "Funnel Analysis & Conversion Optimization",
//     description:
//       "Map every step in your key user funnels - signup, activation, purchase, renewal. Identify where users drop off and why. Prioritized fixes with projected impact.",
//   },
//   {
//    id:createId(),
//     icon: (
//       <ExperimentationIcon />
//     ),
//     title: "A/B Testing & Experimentation",
//     description:
//       "Design, implement, and analyze controlled experiments. Test layout changes, copy variations, feature rollouts, and pricing presentation. Statistical rigor, not gut feel.",
//   },
//   {
//    id:createId(),
//     icon: (
//       <HeatmapAnalysisIcon />
//     ),
//     title: "Session Recording & Heatmap Analysis",
//     description:
//       "Analyze real user behavior using session recordings and heatmaps. Find where users click, where they scroll, where they rage-click, and where they abandon.",
//   },
//   {
//    id:createId(),
//     icon: (
//       <AccessibilityAuditIcon />
//     ),
//     title: "Accessibility Audit & Remediation",
//     description:
//       "WCAG 2.1 compliance audit with a prioritized remediation plan. Accessible products reach more users and reduce legal risk.",
//   },
//   {
//    id:createId(),
//     icon: (
//       <PerformanceImpactIcon />
//     ),
//     title: "Performance-UX Impact Assessment",
//     description:
//       "Measure how performance issues (load time, interaction latency) affect user behavior and conversion. Make the business case for performance investment.",
//   },
//   {
//    id:createId(),
//     icon: (
//       <OnboardingOptimizationIcon />
//     ),
//     title: "Onboarding Optimization",
//     description:
//       "Improve the first-use experience - reduce time-to-value, improve activation rates, and increase the percentage of signups who become active users.",
//   },
// ];

// export const optimizationProcessSectionHead = {
//   badgeText: "Our Optimization Process",
//   title: "How we Optimize Customer Experiences",
//   description:
//     "We combine measurement, experimentation, and continuous monitoring to identify opportunities, validate improvements, and deliver meaningful business impact.",
// };

// export const instrumentMeasureData = {
//   badgeText: "Step 01",
//   title: "Instrument & Measure",
//   description:
//     "Establish baseline metrics. If you can't measure it, you can't improve it.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/instrument-measure.png",
//   imageAlt: "Instrument and measure",
// };

// export const identifyOpportunitiesData = {
//   badgeText: "Step 02",
//   title: "Identify Opportunities",
//   description:
//     "Combine quantitative (analytics, funnel data) with qualitative (session recordings, user interviews) to identify the highest-impact improvement opportunities.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/identify-opportunities.png",
//   imageAlt: "Identify opportunities",
// };

// export const hypothesizeData = {
//   badgeText: "Step 03",
//   title: "Hypothesize",
//   description:
//     "For each opportunity, form a specific, testable hypothesis about what change will improve which metric by approximately how much.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/hypothesize.png",
//   imageAlt: "Hypothesize",
// };

// export const designTestData = {
//   badgeText: "Step 04",
//   title: "Design & Test",
//   description:
//     "Design the change, implement the test, collect data with statistical significance.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/design-test.png",
//   imageAlt: "Design and test",
// };

// export const implementMonitorData = {
//   badgeText: "Step 05",
//   title: "Implement & Monitor",
//   description:
//     "Roll out winning variations. Monitor for regressions. Document learnings.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/implement-monitor.png",
//   imageAlt: "Implement and monitor",
// };

// export const cxToolsData = {
//   badge: "Tools We Use",
//   title: "Built with Industry-Leading Platforms",
//   description:
//     "We use trusted, industry-leading platforms to uncover insights, validate decisions, and optimize experiences through data-driven experimentation and continuous improvement.",

//   tabs: ["Analytics", "Session Recording", "A/B Testing", "Accessibility"],

//   technologies: {
//     Analytics: [
//       {
//        id:createId(),
//         name: "Mixpanel",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Mixpanel_v5pw9e.png",
//       },
//       {
//        id:createId(),
//         name: "Amplitude",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Amplitude_nlbsxg.png",
//       },
//       {
//        id:createId(),
//         name: "Google Analytics 4",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Google_Analytics_4_csiihb.png",
//       },
//       {
//        id:createId(),
//         name: "PostHog",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/PostHog_fxlifh.png",
//       },
//     ],

//     "Session Recording": [
//       {
//        id:createId(),
//         name: "Hotjar",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Hotjar_ei3k1j.png",
//       },
//       {
//        id:createId(),
//         name: "FullStory",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/FullStory_e1mekd.png",
//       },
//       {
//        id:createId(),
//         name: "Microsoft Clarity",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Microsoft_Clarity_a8l3wm.png",
//       },
//     ],

//     "A/B Testing": [
//       {
//        id:createId(),
//         name: "Optimizely",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Optimizely_lf2i5p.png",
//       },
//       {
//        id:createId(),
//         name: "VWO",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/VWO_kqz4nd.png",
//       },
//       {
//        id:createId(),
//         name: "LaunchDarkly",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/LaunchDarkly_zquuun.png",
//       },
//       {
//        id:createId(),
//         name: "GrowthBook",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/GrowthBook_kmngex.png",
//       },
//     ],

//     Accessibility: [
//       {
//        id:createId(),
//         name: "Axe",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Axe_x4gssd.png",
//       },
//       {
//        id:createId(),
//         name: "WAVE",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/WAVE_qnwohi.png",
//       },
//       {
//        id:createId(),
//         name: "Lighthouse",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Lighthouse_xcj1md.png",
//       },
//       {
//        id:createId(),
//         name: "Screen Reader testing",
//         logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Screen_Reader_testing_l767ar.png",
//       },
//     ],
//   },
// };

// export const cxOptimizationCTAData = {
//   badgeText: "Better Experiences Drive Better Outcomes",
//   title: "The Best Opportunities are Already in Front of You",
//   description:
//     "Reveal hidden friction, improve critical journeys, and unlock measurable gains from the experiences you already have.",
//   buttonText: "Start a CX Optimization Engagement",
//   buttonLink: "/contact",
// };

export const digitalExperienceHeroData = {
  badgeText: 'Digital Experience Design',
  title: 'Experiences That Work as Good as They Look',
  description:
    "Design that isn't grounded in user research creates beautiful confusion. Engineering that ignores design creates functional ugliness. We operate at the intersection - where strategy, design, and engineering work together from day one.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040160/Gloitel/Parent%20pages/Digital_Experience_Design_fygufd.png',
  imageAlt: 'Digital experience design',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Start a Design Engagement',
    href: '/contact',
  },
  secondaryButton: {
    text: 'View Our Design Work',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const designGapSectionHead = {
  badgeText: 'The Gap We Close',
  title: 'From Design Handoff to Product Delivery',
  description:
    'A collaborative process that keeps design intent, engineering execution, and user experience aligned from start to launch.',
};

export const designGapData = [
  {
    id: createId(),
    step: 1,
    icon: <DesignHandoffIcon />,
    title: 'Design Handoff',
    description:
      'Design decisions are documented and passed to engineering, often creating interpretation gaps and delayed feedback.',
  },
  {
    id: createId(),
    step: 2,
    icon: <AlignmentGapsIcon />,
    title: 'Alignment Gaps',
    description:
      'As implementation progresses, design intent can drift, leading to rework and inconsistent product experiences.',
  },
  {
    id: createId(),
    step: 3,
    icon: <IntegratedDeliveryIcon />,
    title: 'Integrated Delivery',
    description:
      'Design and engineering stay aligned throughout delivery, resulting in faster iteration and stronger outcomes.',
  },
];

export const designGapNote = {
  icon: <InfoIcon className='h-5 w-5 text-blue-400' />,
  text: 'The best digital experiences are built when design and engineering work together from the beginning, not at handoff.',
};

export const digitalPracticeSectionHead = {
  badgeText: 'Our Digital Experience Practice',
  title: 'Designed for Every Stage of the Product Journey',
  description:
    'From early discovery to optimization, we help shape experiences that balance user needs and business goals.',
};

export const digitalPracticeData = [
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040160/Gloitel/Parent%20pages/UX_Research_Strategy_v3gupe.png',
    imageAlt: 'UX research and strategy',
    title: 'UX Research & Strategy',
    description:
      'Before designing anything, understand the people who will use it. Research-backed experience strategy that grounds every design decision in actual user behavior.',
    buttonText: 'Learn More',
    buttonLink: '/ux-research-strategy',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040159/Gloitel/Parent%20pages/UIUX_Design_gw2b9t.png',
    imageAlt: 'UI/UX design',
    title: 'UI/UX Design',
    description:
      'Design interfaces that balance usability, aesthetics, and technical feasibility. Create wireframes, prototypes, and implementation-ready design specifications.',
    buttonText: 'Learn More',
    buttonLink: '/ui-ux-design',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040159/Gloitel/Parent%20pages/Design_Systems_iwbh73.png',
    imageAlt: 'Design systems',
    title: 'Design Systems',
    description:
      'Build reusable component libraries and design systems that improve consistency, scalability, and development speed.',
    buttonText: 'Learn More',
    buttonLink: '/design-systems',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040157/Gloitel/Parent%20pages/CX_Optimization_qgjyiw.png',
    imageAlt: 'CX optimization',
    title: 'CX Optimization',
    description:
      'Improve digital experiences with conversion optimization, testing, and data-backed UX enhancements.',
    buttonText: 'Learn More',
    buttonLink: '/cx-optimization',
  },
];

export const designToolsData = {
  badge: 'Tools We Work In',
  title: "Built with the Industry's Leading Design Stack",
  description:
    'A carefully selected toolkit that supports every stage of the digital experience lifecycle, from discovery to optimization.',

  tabs: ['Design', 'Research', 'Prototyping', 'Design Systems', 'Analytics'],

  technologies: {
    Design: [
      {
        id: createId(),
        name: 'Figma',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050146/Gloitel/icon/Figma_imkjsh.png',
      },
      {
        id: createId(),
        name: 'FigJam',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050169/Gloitel/icon/FigJam_lzeqx9.png',
      },
      {
        id: createId(),
        name: 'Principle',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050167/Gloitel/icon/Principle_utmdfx.png',
      },
      {
        id: createId(),
        name: 'Lottie',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050166/Gloitel/icon/Lottie_sm0rdc.png',
      },
      {
        id: createId(),
        name: 'Framer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050164/Gloitel/icon/Framer_mmseq3.png',
      },
    ],

    Research: [
      {
        id: createId(),
        name: 'Hotjar',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050163/Gloitel/icon/Hotjar_taaewo.png',
      },
      {
        id: createId(),
        name: 'FullStory',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050162/Gloitel/icon/FullStory_sktnc7.png',
      },
      {
        id: createId(),
        name: 'UserTesting',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050160/Gloitel/icon/UserTesting_mmepjg.png',
      },
      {
        id: createId(),
        name: 'Maze',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050159/Gloitel/icon/Maze_n0txti.png',
      },
      {
        id: createId(),
        name: 'Lookback',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050157/Gloitel/icon/Lookback_ssc7h8.png',
      },
    ],

    Prototyping: [
      {
        id: createId(),
        name: 'Figma Prototyping',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050146/Gloitel/icon/Figma_imkjsh.png',
      },
      {
        id: createId(),
        name: 'Framer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050164/Gloitel/icon/Framer_mmseq3.png',
      },
      {
        id: createId(),
        name: 'Webflow',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050156/Gloitel/icon/Webflow_eiztfz.png',
      },
    ],

    'Design Systems': [
      {
        id: createId(),
        name: 'Storybook',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050154/Gloitel/icon/Storybook_kpgob6.png',
      },
      {
        id: createId(),
        name: 'Zeroheight',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050153/Gloitel/icon/Zeroheight_aasmmv.png',
      },
      {
        id: createId(),
        name: 'Supernova',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050152/Gloitel/icon/Supernova_dx0pj8.png',
      },
    ],

    Analytics: [
      {
        id: createId(),
        name: 'Mixpanel',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050150/Gloitel/icon/Mixpanel_omeclz.png',
      },
      {
        id: createId(),
        name: 'Amplitude',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050149/Gloitel/icon/Amplitude_huuwjv.png',
      },
      {
        id: createId(),
        name: 'Google Analytics 4',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050147/Gloitel/icon/Google_Analytics_4_ep9uth.png',
      },
      {
        id: createId(),
        name: 'PostHog',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/PostHog_fxlifh.png',
      },
    ],
  },
};

export const designTeamSectionHead = {
  badgeText: 'Design Disciplines in Our Team',
  title: 'A Team Built for End-to End Experience Design',
  description:
    'Combining diverse design expertise to solve complex challenges and deliver experiences users love to use.',
};

export const designTeamData = [
  {
    id: createId(),
    text: 'UX Designers',
  },
  {
    id: createId(),
    text: 'Visual / UI Designers',
  },
  {
    id: createId(),
    text: 'UX Researchers',
  },
  {
    id: createId(),
    text: 'Interaction Designers',
  },
  {
    id: createId(),
    text: 'Design System Architects',
  },
  {
    id: createId(),
    text: 'Motion Designers',
  },
  {
    id: createId(),
    text: 'Accessibility Specialists',
  },
];

export const digitalExperienceCTAData = {
  badgeText: 'Ready to Improve Your Product Experience?',
  title: 'From User Research to Product Impact',
  description:
    'Work with a multidisciplinary design team to create experiences that are intuitive, scalable, and built for measurable outcomes.',
  buttonText: 'Talk About Your Design Needs',
  buttonLink: '/contact',
};
