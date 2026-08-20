import type { HeroCard } from '../../components/HeroSection';

export const resourcesHeroData = {
  badgeText: 'Resources',
  title: 'Resources & Insights That Help Teams Build Better Software',
  description:
    'Engineering knowledge, case studies, research, and practical guides from teams building production-grade AI, mobile, web, cloud, and enterprise systems.',
  image: '/images/What-we-do/Rectangle 1.png',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  imageAlt: 'AI and intelligent systems',
  primaryButton: {
    text: 'Explore Resources',
    href: '/resources',
  },
  secondaryButton: {
    text: 'Subscribe to Updates',
    href: '#subscribe',
  },
};

export const resourceCategoriesData: HeroCard[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: 'top-left',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    title: 'Blogs & Articles',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: 'top-right',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>',
    title: 'Guides & Tutorials',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: 'bottom-left',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/></svg>',
    title: 'Case Studies',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: 'bottom-right',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><path d="m5 5 14 14"/><path d="m19 5-14 14"/></svg>',
    title: 'Whitepapers & eBooks',
  },
];

export const aiStrategySectionHead = {
  badgeText: 'AI Strategy & Consulting',
  title: 'Define Your AI Roadmap Before You Build',
  description:
    'Most AI initiatives fail before they begin - not because of bad technology, but because of misdirected effort. We help you decide "where" AI should be applied before a single line of code is written. Most AI initiatives fail before they begin - not because of bad technology, but because of misdirected effort. We help you decide "where" AI should be applied before a single line of code is written.',
  image: '/images/Resources/ai-roadmap.jpg',
  imageAlt: 'Team planning AI roadmap',
};
export const whoThisIsForSectionHead = {
  badgeText: 'Who This Is For',
  title: 'Built for Teams Ready to move beyond AI Experimentation',
  description:
    'Designed for organizations that want to invest in AI strategically, align initiatives with business outcomes, and prioritize the right opportunities before committing resources.',
};

export const integrationStabilityData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: 'Integration Stability',
    description:
      'AI systems often fail not because the model is but because the surrounding integrations are unreliable. We build stable connections between AI.',
    buttonText: 'View Case Study',
    buttonLink: '#',
  },
];

export const whoThisIsForSectionHead2 = {
  badgeText: 'Who This Is For',
  title: 'Built for Teams Ready to move beyond AI Experimentation',
  description:
    'Designed for organizations that want to invest in AI strategically, align initiatives with business outcomes, and prioritize the right opportunities before committing resources.',
};

export const resourceCaseStudiesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: '/images/Resources/healthcare-client.png',
    imageAlt: 'Healthcare Client',
    title: 'Healthcare Client',
    description:
      'Deployed a private LLM for clinical documentation summarization. 70% reduction in admin time per consultation. Zero PHI data leaves the VPC.',
    buttonText: 'View Case Study',
    buttonLink: '/case-studies/healthcare-client',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: '/images/Resources/financial-services.png',
    imageAlt: 'Financial Services',
    title: 'Financial Services',
    description:
      'Built a RAG-powered compliance assistant over 10,000+ regulatory documents. Query response time under 2 seconds. Cited sources on every answer.',
    buttonText: 'View Case Study',
    buttonLink: '/case-studies/financial-services',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: '/images/Resources/e-commerce.png',
    imageAlt: 'E-Commerce',
    title: 'E-Commerce',
    description: 'LLM-powered product description output. Human review time minutes per batch.',
    buttonText: 'View Case Study',
    buttonLink: '/case-studies/e-commerce',
  },
];

const SearchIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='11' cy='11' r='7' />
    <path d='m20 20-3.5-3.5' />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M5 12h14' />
    <path d='m13 6 6 6-6 6' />
  </svg>
);

export const enterpriseModernizationTagsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Enterprise Modernization',
    href: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icons: <ArrowIcon />,
    icon: <SearchIcon />,
    label: 'AI Modernization',
    href: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Cloud Modernization',
    href: '#',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Digital Transformation',
    href: '#',
  },
];

export const resourcesCTAData = {
  badgeText: 'Start with Strategy, Not Assumptions',
  title: 'Turn AI Ambition into an Execution Plan',
  description:
    'Every successful AI initiative starts with the right decision. We provide the structure, insight, and direction needed to make them.',
  buttonText: 'Start with a Discovery Call',
  buttonLink: '/contact',
};
