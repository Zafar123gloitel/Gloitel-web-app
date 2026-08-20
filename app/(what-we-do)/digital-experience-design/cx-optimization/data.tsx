import { HeroArrowRightIcon, FunnelAnalysisIcon, ExperimentationIcon, HeatmapAnalysisIcon, AccessibilityAuditIcon, PerformanceImpactIcon, OnboardingOptimizationIcon } from "../../../../components/SvgIcon";


export const cxOptimizationHeroData = {
  badgeText: "CX Optimization",
  title: "Improve What you have before you Build New Things",
  description:
    "Many companies invest heavily in new features while their existing user flows are leaking value. CX optimization finds where users drop off, get confused, or fail to complete key actions - and fixes those before adding anything new.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/CX_Optimization_r1mlhh.png",
  imageAlt: "CX optimization",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Audit Your User Experience",
    href: "/contact",
  },
  secondaryButton: {
    text: "CX Review",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const cxCoversSectionHead = {
  badgeText: "What CX Optimization Covers",
  title: "Improve Every Step of the Customer Journey",
  description:
    "CX optimization reveals where users drop off, get confused, or fail to complete key actions - so you can improve existing experiences before building something new.",
};

export const cxCoversData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FunnelAnalysisIcon />,
    title: "Funnel Analysis & Conversion Optimization",
    description:
      "Map every step in your key user funnels - signup, activation, purchase, renewal. Identify where users drop off and why. Prioritized fixes with projected impact.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ExperimentationIcon />,
    title: "A/B Testing & Experimentation",
    description:
      "Design, implement, and analyze controlled experiments. Test layout changes, copy variations, feature rollouts, and pricing presentation. Statistical rigor, not gut feel.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <HeatmapAnalysisIcon />,
    title: "Session Recording & Heatmap Analysis",
    description:
      "Analyze real user behavior using session recordings and heatmaps. Find where users click, where they scroll, where they rage-click, and where they abandon.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AccessibilityAuditIcon />,
    title: "Accessibility Audit & Remediation",
    description:
      "WCAG 2.1 compliance audit with a prioritized remediation plan. Accessible products reach more users and reduce legal risk.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PerformanceImpactIcon />,
    title: "Performance-UX Impact Assessment",
    description:
      "Measure how performance issues (load time, interaction latency) affect user behavior and conversion. Make the business case for performance investment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <OnboardingOptimizationIcon />,
    title: "Onboarding Optimization",
    description:
      "Improve the first-use experience - reduce time-to-value, improve activation rates, and increase the percentage of signups who become active users.",
  },
];

export const optimizationProcessSectionHead = {
  badgeText: "Our Optimization Process",
  title: "How we Optimize Customer Experiences",
  description:
    "We combine measurement, experimentation, and continuous monitoring to identify opportunities, validate improvements, and deliver meaningful business impact.",
};

export const instrumentMeasureData = {
  badgeText: "Step 01",
  title: "Instrument & Measure",
  description:
    "Establish baseline metrics. If you can't measure it, you can't improve it.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/Instrument_Measure_j0em8s.png",
  imageAlt: "Instrument and measure",
};

export const identifyOpportunitiesData = {
  badgeText: "Step 02",
  title: "Identify Opportunities",
  description:
    "Combine quantitative (analytics, funnel data) with qualitative (session recordings, user interviews) to identify the highest-impact improvement opportunities.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/Identify_Opportunities_kpmegd.png",
  imageAlt: "Identify opportunities",
};

export const hypothesizeData = {
  badgeText: "Step 03",
  title: "Hypothesize",
  description:
    "For each opportunity, form a specific, testable hypothesis about what change will improve which metric by approximately how much.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/Hypothesize_wrljav.png",
  imageAlt: "Hypothesize",
};

export const designTestData = {
  badgeText: "Step 04",
  title: "Design & Test",
  description:
    "Design the change, implement the test, collect data with statistical significance.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/Design_Test_mzb6n0.png",
  imageAlt: "Design and test",
};

export const implementMonitorData = {
  badgeText: "Step 05",
  title: "Implement & Monitor",
  description:
    "Roll out winning variations. Monitor for regressions. Document learnings.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/Implement_Monitor_dpvljf.png",
  imageAlt: "Implement and monitor",
};

export const cxToolsData = {
  badge: "Tools We Use",
  title: "Built with Industry-Leading Platforms",
  description:
    "We use trusted, industry-leading platforms to uncover insights, validate decisions, and optimize experiences through data-driven experimentation and continuous improvement.",

  tabs: ["Analytics", "Session Recording", "A/B Testing", "Accessibility"],

  technologies: {
    Analytics: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mixpanel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Mixpanel_v5pw9e.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Amplitude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Amplitude_nlbsxg.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Analytics 4",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Google_Analytics_4_csiihb.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostHog",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/PostHog_fxlifh.png",
      },
    ],
    "Session Recording": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Hotjar",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Hotjar_ei3k1j.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "FullStory",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/FullStory_e1mekd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Microsoft Clarity",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Microsoft_Clarity_a8l3wm.png",
      },
    ],
    "A/B Testing": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Optimizely",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Optimizely_lf2i5p.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "VWO",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/VWO_kqz4nd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LaunchDarkly",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/LaunchDarkly_zquuun.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "GrowthBook",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/GrowthBook_kmngex.png",
      },
    ],
    Accessibility: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Axe",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Axe_x4gssd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "WAVE",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/WAVE_qnwohi.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Lighthouse",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Lighthouse_xcj1md.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Screen Reader testing",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Screen_Reader_testing_l767ar.png",
      },
    ],
  },
};

export const cxOptimizationCTAData = {
  badgeText: "Better Experiences Drive Better Outcomes",
  title: "The Best Opportunities are Already in Front of You",
  description:
    "Reveal hidden friction, improve critical journeys, and unlock measurable gains from the experiences you already have.",
  buttonText: "Start a CX Optimization Engagement",
  buttonLink: "/contact",
};
