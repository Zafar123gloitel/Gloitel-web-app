import { ArrowRightIcon, DocumentIcon, OfficeBagIcon } from '@/components/SvgIcon';
type Stage = {
  id: string;
  name: string;
  date: number;
  tag: string;
  image: string;
};
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const resourcesHeroData = {
  badgeText: 'Resources & Insights',
  title: 'Engineering Insights for Building Better Software.',
  description:
    'Explore practical articles and real-world case studies covering AI, product engineering, software architecture, cloud, DevOps, web, mobile, and enterprise modernization. Learn from proven approaches, technical decisions, and lessons from teams building and scaling real products.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Resources_Insights_lkefdm.png',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  imageAlt: 'AI and intelligent systems',
  primaryButton: {
    text: 'Explore Articles ',
    href: '/resources/blog',
  },
  secondaryButton: {
    text: 'Explore Case Studies',
    href: '/content',
    icon: <ArrowRightIcon />,
  },
};

export const aiStrategySectionHead = [
  {
    title: 'Blogs & Articles',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    icons: <DocumentIcon />,
    description:
      'Engineering insights, architecture decisions, AI implementation patterns, and practical lessons from production teams.',
    text: 'Explore Articles ',
    href: '/resources/blog',
  },
  {
    title: 'Case Studies',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    icons: <OfficeBagIcon size={30} />,
    description:
      'Real client challenges, implementation strategies, measurable outcomes, and engineering learnings.',
    text: 'Explore Case Study',
    href: '/content',
  },
];
export const BlogeForSectionHead2 = {
  badgeText: 'Latest Insights',
  title: 'Ideas, Insights & Lessons From Building Real Software.',
  description:
    'Explore practical perspectives on AI, product engineering, software architecture, web, mobile, cloud, DevOps, UX, and enterprise modernization.',
};

export const resourceCaseStudiesData = [
  {
    id: createId(),
    category: 'AI & Integration',
    readTime: '8 Min Read',
    title: 'Key considerations for introducing AI solutions from prototyping to production',
    description:
      'Scaling machine learning workflows beyond experimental notebooks requires solid infrastructure, observability, and disciplined engineering.',
    author: 'Amit Chandra',
    date: 'May 12, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Product_Engineering_kt38p0.png',
    href: '/resources/blog/ai-intelligent-systems',
  },
  {
    id: createId(),
    category: 'Cloud',
    readTime: '11 Min Read',
    title: 'Cloud Architecture Best Practices for High Availability & Highly Scalable Applications',
    description:
      'Architecture patterns for resilient, well-tested, and cost-efficient cloud platforms.',
    author: 'Rohit Verma',
    date: 'May 03, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/UX_Product_Design_krve40.png',
    href: '/resources/blog/cloud',
  },
  {
    id: createId(),
    category: 'Engineering',
    readTime: '6 Min Read',
    title: 'Clean Code Isn’t Enough: Writing Large-Scale Systems That Are Easy to Change',
    description:
      'How to craft maintainable architecture that adapts cleanly as product requirements evolve.',
    author: 'Smrity Jaiswal',
    date: 'Mar 24, 2026',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Software_Architecture_wemmgh.png',
    href: '/resources/blog/engineering',
  },
];
export const whoThisIsForSectionHead2 = {
  badgeText: 'Case Studies',
  title: 'Real Challenges. Thoughtful Solutions. Measurable Outcomes.',
  description:
    'Explore how we help organizations solve complex product and engineering challenges across AI, web, mobile, cloud, modernization, and enterprise systems.',
};

export const stages: Stage[] = [
  {
    id: createId(),
    name: 'CGMMSSY',
    date: 2018,
    tag: 'Web & App Development',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867021/Gloitel/portfolio/cgmmssy_oww8hb.svg',
  },
  {
    id: createId(),
    name: 'PATH IAS ACADEMY',
    date: 2024,
    tag: 'Business',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867010/Gloitel/portfolio/pathias_usuts5.webp',
  },
  {
    id: createId(),
    name: 'HRM TECHNOLOGY',
    date: 2024,
    tag: 'Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867011/Gloitel/portfolio/hrm_wwb6ki.svg',
  },
  {
    id: createId(),
    name: 'Experteeth',
    date: 2023,
    tag: 'Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867007/Gloitel/portfolio/experteeth_zk1kdv.webp',
  },
  {
    id: createId(),
    name: 'Godhaar',
    date: 2025,
    tag: 'Website & Mobile App',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927323/Gloitel/portfolio/godhaar_vljbzt.jpg',
  },
  {
    id: createId(),
    name: 'Fitbattle',
    date: 2025,
    tag: 'Mobile App & Website',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866980/Gloitel/portfolio/fitbattle_esztbn.webp',
  },
  {
    id: createId(),
    name: 'VIADYAM (HMS)',
    date: 2024,
    tag: 'HMS',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866990/Gloitel/portfolio/vidyam_vemacx.webp',
  },
  {
    id: createId(),
    name: 'STAFFEASE (CRM)',
    date: 2024,
    tag: 'CRM',
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866991/Gloitel/portfolio/staffease_d4vmhj.webp',
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
    id: createId(),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Enterprise Modernization',
    href: '#',
  },
  {
    id: createId(),
    icons: <ArrowIcon />,
    icon: <SearchIcon />,
    label: 'AI Modernization',
    href: '#',
  },
  {
    id: createId(),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Cloud Modernization',
    href: '#',
  },
  {
    id: createId(),
    icon: <SearchIcon />,
    icons: <ArrowIcon />,
    label: 'Digital Transformation',
    href: '#',
  },
];

export const resourcesCTAData = {
  badgeText: 'Stay Ahead. Keep Building.',
  title: 'Better Insights. Better Decisions. Better Software.',
  description:
    'Get practical engineering articles, real-world case studies, and proven lessons to help your team build, scale, and modernize with confidence.',
  buttonText: 'Explore Articles ',
  buttonLink: '/resources/blog',
  secondaryButton: {
    text: 'Explore Case Studies',
    link: '/contact',
  },
};
