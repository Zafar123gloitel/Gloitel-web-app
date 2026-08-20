import {
  AIAssistedToolsIcon,
  ClinicalWorkflowApplicationsIcon,
  CustomECommercePlatformsIcon,
  FinancialDataAndAnalyticsIcon,
  HeroArrowRightIcon,
  InventoryAndOrderManagementIcon,
  MobileCommerceAppsIcon,
} from 'components/SvgIcon';

export const ecommerceHeroData = {
  badgeText: 'E-Commerce & Retail',
  title: 'E-Commerce Technology That Converts, Scales, and Retains',
  description:
    "E-commerce is not just a storefront problem. It's an inventory problem, a logistics problem, a personalization problem, and a trust problem - all at once, all demanding real-time performance. We build for the operational reality of retail, not just the checkout page.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056274/Gloitel/Industries/E-Commerce_Retail_lymoqw.png',
  imageAlt: 'E-commerce and retail technology',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our Retail Team',
    href: '/contact',
  },
  secondaryButton: {
    text: 'E-Commerce Case Studies',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const ecommerceChallengesSectionHead = {
  badgeText: 'Challenges We Solve',
  title: 'Scaling E-Commerce & Retail Comes With Complex Challenges',
  description:
    'As e-commerce and retail businesses scale, managing inventory, fulfillment, customer experiences, and operational efficiency becomes more challenging. Success depends on technology that connects systems, supports growth, and delivers consistent experiences across every channel.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056269/Gloitel/Industries/Challenges_We_Solve_hhqngd.png',
  imageAlt: 'E-commerce and retail challenges',
};

export const ecommerceChallengesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Custom storefront development beyond what platforms like Shopify handle',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'ERP, warehouse, and 3PL integrations for omnichannel operations',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'AI-powered product recommendations and search personalization',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Performance at scale - flash sales, peak traffic, seasonal surges',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Customer retention analytics and loyalty program engineering',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Multi-vendor marketplace platforms with streamlined vendor management and scalable marketplace operations',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Mobile commerce and app-based shopping experiences optimized for engagement and conversions',
  },
];

export const ecommerceSolutionsSectionHead = {
  badgeText: 'Solutions We Build',
  title: 'Building Modern E-Commerce & Retail Requires the Right Technology',
  description:
    'Success in modern commerce depends on more than a storefront. Businesses need scalable platforms, intelligent automation, seamless integrations, and data-driven experiences that support long-term growth.',
};

export const ecommerceSolutionsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CustomECommercePlatformsIcon />,
    title: 'Custom E-Commerce Platforms',
    description:
      'Headless commerce architectures using Shopify, Medusa, or custom backends. High-performance storefronts with Next.js, advanced filtering, lightning-fast search, and conversion-optimized checkout flows.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AIAssistedToolsIcon />,
    title: 'AI-Powered Personalization',
    description:
      'Recommendation engines, personalized search ranking, dynamic pricing, and customer segmentation models that increase average order value and repeat purchase rate.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ClinicalWorkflowApplicationsIcon />,
    title: 'Marketplace Platforms',
    description:
      'Multi-vendor marketplace development - seller onboarding, product catalog management, commission and payout systems, vendor analytics, and dispute resolution.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <InventoryAndOrderManagementIcon />,
    title: 'Inventory & Order Management',
    description:
      'Real-time inventory sync across channels, warehouse management integrations, order routing logic, returns management, and fulfillment tracking.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileCommerceAppsIcon />,
    title: 'Mobile Commerce Apps',
    description:
      'React Native or Flutter shopping apps with push notification campaigns, in-app checkout, loyalty programs, and AR try-on features.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FinancialDataAndAnalyticsIcon />,
    title: 'Retail Analytics Platforms',
    description:
      'Sales dashboards, inventory forecasting, customer lifetime value analysis, cohort analysis, and attribution modelling.',
  },
];

export const ecommerceTechStackData = {
  badge: 'Technology Stack',
  title: 'Scalable Technologies for Modern E-Commerce & Retail',
  description:
    'From storefront frameworks and commerce platforms to payment gateways, logistics integrations, and AI-powered capabilities, we use proven technologies that enable businesses to deliver fast, reliable, and personalized shopping experiences at scale.',

  tabs: [
    'Storefront',
    'Commerce Platforms',
    'Search',
    'Payments',
    'ERP Integration',
    'Logistics',
    'AI',
  ],

  technologies: {
    Storefront: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Next.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Remix',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/remix_xxxxxx.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Shopify Hydrogen',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/shopify-hydrogen_xxxxxx.png',
      },
    ],
    'Commerce Platforms': [],
    Search: [],
    Payments: [],
    'ERP Integration': [],
    Logistics: [],
    AI: [],
  },
};
export const ecommerceCTAData = {
  badgeText: 'Ready to Modernize your E-Commerce & Retail Ecosystem?',
  title: 'Engineering the Next Generation of E-com & Retail Experiences',
  description:
    'Build faster, smarter, and more personalized commerce solutions that meet evolving customer expectations and support long-term business growth.',
  buttonText: 'Build Your Commerce Platform',
  buttonLink: '/contact',
};
