import {
  ComponentBasedDesignIcon,
  DarkModeIcon,
  DesignTokenSystemIcon,
  HeroArrowRightIcon,
  ResponsiveDesignIcon,
  WCAGAccessibilityIcon,
} from 'components/SvgIcon';

export const uxDesignHeroData = {
  badgeText: 'UI/UX Design',
  title: 'Where great User Experience meets Engineering Reality.',
  description:
    'Good UI/UX design is the intersection of three things: what users need, what looks right, and what your engineering team can actually ship. Designs that fail usually optimize for only one of these.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033715/Gloitel/Digital%20Experience%20Design/UIUX_Design_uptvhe.png',
  imageAlt: 'UI/UX design',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Start a Design Project',
    href: '/contact',
  },
  secondaryButton: {
    text: 'See Our Portfolio',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const designProcessSectionHead = {
  badgeText: 'Our Design Process',
  title: 'Every Great Product starts with the Right Foundation.',
  description:
    'Every successful agent starts with a clear process. From workflow analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments.',
};

export const discoveryResearchData = {
  badgeText: 'Step 01',
  title: 'Discovery & Research',
  description:
    'Before opening Figma, we understand the user, the use case, the technical constraints, and the business objective.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Discovery_Research_pmmyoq.png',
  imageAlt: 'Discovery and research',
};

export const informationArchitectureData = {
  badgeText: 'Step 02',
  title: 'Information Architecture',
  description:
    'Define the structure and organization of the interface - navigation, content hierarchy, and user flows - before designing individual screens.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Information_Architecture22_esdu1o.png',
  imageAlt: 'Information architecture',
};

export const wireframingData = {
  badgeText: 'Step 03',
  title: 'Wireframing',
  description:
    'Low-fidelity wireframes for every key user flow. Fast to produce, fast to iterate and unambiguous about layout and hierarchy without getting distracted by visual details.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Wireframing_yacqqs.png',
  imageAlt: 'Wireframing',
};

export const visualDesignData = {
  badgeText: 'Step 04',
  title: 'Visual Design',
  description:
    'Apply visual language - color, typography, iconography, spacing - to wireframes. Design that is consistent with your brand and optimized for the target platform (web, iOS, Android).',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Visual_Design_wvs0ee.png',
  imageAlt: 'Visual design',
};

export const interactivePrototypeData = {
  badgeText: 'Step 05',
  title: 'Interactive Prototype',
  description:
    'High-fidelity prototype for user testing, stakeholder review, and developer reference. Clickable, realistic, and testable.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Visual_Design_wvs0ee.png',
  imageAlt: 'Interactive prototype',
};

export const designHandoffData = {
  badgeText: 'Step 06',
  title: 'Design Handoff',
  description:
    'Developer-ready Figma files with component specs, design tokens, and interaction documentation. Plus availability during development to answer questions and review implementation.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Visual_Design_wvs0ee.png',
  imageAlt: 'Design handoff',
};

export const whatWeDesignSectionHead = {
  badgeText: 'What We Design',
  title: 'From First Click to Daily Use',
  description:
    'We design the touchpoints that define a product experience—from acquisition and onboarding to everyday interactions and decision-making.',
};

export const whatWeDesignData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Visual_Design_wvs0ee.png',
    imageAlt: 'Web applications',
    title: 'Web Applications',
    description:
      'Complex dashboard interfaces, multi-step workflows, data visualization, admin panels, and customer-facing products.',
    buttonText: 'View More',
    buttonLink: '/',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033713/Gloitel/Digital%20Experience%20Design/Mobile_Applications_oawhqm.png',
    imageAlt: 'Mobile applications',
    title: 'Mobile Applications',
    description:
      'iOS and Android native experiences, React Native and Flutter - designed to accommodate while minimizing brand consistency.',
    buttonText: 'View More',
    buttonLink: '/',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033714/Gloitel/Digital%20Experience%20Design/Landing_Pages_Marketing_Sites_xne7l7.png',
    imageAlt: 'Landing pages and marketing sites',
    title: 'Landing Pages & Marketing Sites',
    description:
      'Conversion-optimized pages with clear hierarchy, compelling visuals, and measurable CTAs.',
    buttonText: 'View More',
    buttonLink: '/',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033713/Gloitel/Digital%20Experience%20Design/Onboarding_Flows_uxqycs.png',
    imageAlt: 'Onboarding flows',
    title: 'Onboarding Flows',
    description:
      'First-time experiences that turn signups into active users. Motivated, setup wizards, matrix, and progressive feature introduction.',
    buttonText: 'View More',
    buttonLink: '/',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033713/Gloitel/Digital%20Experience%20Design/Data_Dashboards_ilx9us.png',
    imageAlt: 'Data dashboards',
    title: 'Data Dashboards',
    description:
      'Analytics and reporting interfaces where information hierarchy, chart type selection, and interaction design determine whether data is actually usable.',
    buttonText: 'View More',
    buttonLink: '/',
  },
];

export const designStandardsSectionHead = {
  badgeText: 'What We Walk Away With',
  title: 'A Clear AI Roadmap backed by Business Value',
  description:
    'Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.',
};

export const designStandardsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <WCAGAccessibilityIcon />,
    title: 'WCAG 2.1 AA accessibility compliance by default',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ResponsiveDesignIcon />,
    title: 'Mobile-first responsive design',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DesignTokenSystemIcon />,
    title: 'Design token systems for consistent theming',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ComponentBasedDesignIcon />,
    title: 'Component-based design matched to the frontend framework',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DarkModeIcon />,
    title: 'Dark mode variants where relevant',
  },
];

export const uxDesignCTAData = {
  badgeText: 'Design Beyond Aesthetics',
  title: 'Create Experiences People Love to Use',
  description:
    'From wireframes and prototypes to develop-ready handoff, our design experience thinking through every screen and interaction.',
  buttonText: 'Start Your Design Project',
  buttonLink: '/contact',
};
