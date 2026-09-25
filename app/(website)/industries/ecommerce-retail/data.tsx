import {
  AIAssistedToolsIcon,
  ClinicalWorkflowApplicationsIcon,
  CustomECommercePlatformsIcon,
  FinancialDataAndAnalyticsIcon,
  HeroArrowRightIcon,
  InventoryAndOrderManagementIcon,
  MobileCommerceAppsIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

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
    id: createId(),
    text: 'Custom storefront development beyond what platforms like Shopify handle',
  },
  {
    id: createId(),
    text: 'ERP, warehouse, and 3PL integrations for omnichannel operations',
  },
  {
    id: createId(),
    text: 'AI-powered product recommendations and search personalization',
  },
  {
    id: createId(),
    text: 'Performance at scale - flash sales, peak traffic, seasonal surges',
  },
  {
    id: createId(),
    text: 'Customer retention analytics and loyalty program engineering',
  },
  {
    id: createId(),
    text: 'Multi-vendor marketplace platforms with streamlined vendor management and scalable marketplace operations',
  },
  {
    id: createId(),
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
    id: createId(),
    icon: <CustomECommercePlatformsIcon />,
    title: 'Custom E-Commerce Platforms',
    description:
      'Headless commerce architectures using Shopify, Medusa, or custom backends. High-performance storefronts with Next.js, advanced filtering, lightning-fast search, and conversion-optimized checkout flows.',
  },
  {
    id: createId(),
    icon: <AIAssistedToolsIcon />,
    title: 'AI-Powered Personalization',
    description:
      'Recommendation engines, personalized search ranking, dynamic pricing, and customer segmentation models that increase average order value and repeat purchase rate.',
  },
  {
    id: createId(),
    icon: <ClinicalWorkflowApplicationsIcon />,
    title: 'Marketplace Platforms',
    description:
      'Multi-vendor marketplace development - seller onboarding, product catalog management, commission and payout systems, vendor analytics, and dispute resolution.',
  },
  {
    id: createId(),
    icon: <InventoryAndOrderManagementIcon />,
    title: 'Inventory & Order Management',
    description:
      'Real-time inventory sync across channels, warehouse management integrations, order routing logic, returns management, and fulfillment tracking.',
  },
  {
    id: createId(),
    icon: <MobileCommerceAppsIcon />,
    title: 'Mobile Commerce Apps',
    description:
      'React Native or Flutter shopping apps with push notification campaigns, in-app checkout, loyalty programs, and AR try-on features.',
  },
  {
    id: createId(),
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
        id: createId(),
        name: 'Next.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp',
      },
      {
        id: createId(),
        name: 'Remix',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545493/Gloitel/icon/000000_yiibls.svg',
      },
      {
        id: createId(),
        name: 'Shopify Hydrogen',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545605/Gloitel/icon/shopify_hhrsro.svg',
      },
    ],

    'Commerce Platforms': [
      {
        id: createId(),
        name: 'Shopify Plus',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545605/Gloitel/icon/shopify_hhrsro.svg',
      },
      {
        id: createId(),
        name: 'Medusa.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545683/Gloitel/icon/medusa_etugxv.svg',
      },
      {
        id: createId(),
        name: 'WooCommerce',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545784/Gloitel/icon/woocommerce_pxzppf.svg',
      },
      {
        id: createId(),
        name: 'Custom',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545840/Gloitel/icon/littlelink-custom_d8svfq.svg',
      },
    ],

    Search: [
      {
        id: createId(),
        name: 'Algolia',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789545959/Gloitel/icon/000000_ypvxj4.svg',
      },
      {
        id: createId(),
        name: 'Elasticsearch',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789546041/Gloitel/icon/elasticsearch_hzlqpd.svg',
      },
      {
        id: createId(),
        name: 'Typesense',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789546199/Gloitel/icon/typesense_hvsu4e.svg',
      },
    ],

    Payments: [
      {
        id: createId(),
        name: 'Stripe',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789546371/Gloitel/icon/stripe_rza5we.svg',
      },
      {
        id: createId(),
        name: 'Razorpay',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960594/Gloitel/icon/razorpay_cceonz.png',
      },
      {
        id: createId(),
        name: 'PayPal',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549484/Gloitel/icon/paypal_abowqh.svg',
      },
      {
        id: createId(),
        name: 'Klarna',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549583/Gloitel/icon/klarna_p79cgu.png',
      },
    ],

    'ERP Integration': [
      {
        id: createId(),
        name: 'SAP',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549787/Gloitel/icon/SAP_2011_logo.svg_nv4ztm.webp',
      },
      {
        id: createId(),
        name: 'NetSuite',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549843/Gloitel/icon/images_exnsif.png',
      },
      {
        id: createId(),
        name: 'Odoo',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549890/Gloitel/icon/0e1VRdG0x282As3Icsr9X-20251216-152000_kgdpih.webp',
      },
    ],

    Logistics: [
      {
        id: createId(),
        name: 'Shiprocket',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789549930/Gloitel/icon/images_md4jtz.png',
      },
      {
        id: createId(),
        name: 'FedEx',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789550038/Gloitel/icon/fedex_ch6uai.svg',
      },
      {
        id: createId(),
        name: 'DHL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789550082/Gloitel/icon/dhl_grzib1.svg',
      },
      {
        id: createId(),
        name: 'ShipStation',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789550147/Gloitel/icon/images_bz2vnr.png',
      },
    ],

    AI: [
      {
        id: createId(),
        name: 'Product Recommendation Engines',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png',
      },
      {
        id: createId(),
        name: 'Visual Search',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789550602/Gloitel/icon/visual-search_kaj147.svg',
      },
      {
        id: createId(),
        name: 'Dynamic Pricing',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789550900/Gloitel/icon/istockphoto-1491754746-612x612_co09g9.jpg',
      },
    ],
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
