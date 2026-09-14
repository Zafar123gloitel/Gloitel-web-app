import {
  BusinessImpactClarityIcon,
  BusinessRoadmapIcon,
  HeroArrowRightIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PilotScopeIcon,
  PrioritizedUseCasesIcon,
  TailwindCSSIcon,
  VercelAWSIcon,
  AvoidedBuildsIcon,
  ReactIcon,
  CodeIcon,
} from 'components/SvgIcon';
import { ArchitectureItem } from 'uiComponents/ArchitectureCircle';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const fullStackHeroData = {
  badgeText: 'Full Stack Engineering',
  title: 'Teams That Own the Full Feature, Not Just a Layer', // ⚠️ mismatch
  description:
    'Full-stack engineering teams reduce the coordination overhead of separate frontend and backend teams. When one engineer or a small pod can take a feature from database to UI, things ship faster and stay integrated.', // ⚠️ mismatch
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/Full_Stack_Engineering_lhx3r2.png',
  imageAlt: 'Full stack engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Build Your Full Stack Team', // ⚠️ mismatch
    href: '/contact',
  },
  secondaryButton: {
    text: 'View Our Work', // ⚠️ mismatch
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};
export const fullStackComplianceSectionHead = {
  badgeText: 'Our Full Stack Approach', // ⚠️ mismatch
  title: 'One Stack. End-to-End Ownership', // ⚠️ mismatch
  description:
    'We use modern, TypeScript-first architectures that reduce context switching, share types across layers, and keep frontend and backend development closely integrated.', // ⚠️ mismatch
};

export const fullStackComplianceData: ArchitectureItem[] = [
  {
    id: createId(),
    position: 'top',
    icon: <ReactIcon size={35} />,
    title: 'Next.js + TypeScript',
    description: 'Type-safe frontend and server-side application development.',
  },
  {
    id: createId(),
    position: 'leftTop',
    icon: <PostgreSQLIcon />,
    title: 'PostgreSQL',
    description: 'Reliable relational data models built for production workloads.',
  },
  {
    id: createId(),
    position: 'rightTop',
    icon: <CodeIcon />,
    title: 'Shared Types & Validation',
    description: 'Database-to-UI type safety and shared validation reduce integration bugs.',
  },
  {
    id: createId(),
    position: 'leftBottom',
    icon: <PrismaIcon />,
    title: 'Prisma',
    description: 'Type-safe database access with schemas shared across the application.',
  },
  {
    id: createId(),
    position: 'rightBottom',
    icon: <VercelAWSIcon />,
    title: 'Vercel / AWS',
    description: 'Production deployment and cloud infrastructure that scales with the product.',
  },
  {
    id: createId(),
    position: 'bottom',
    icon: <TailwindCSSIcon />,
    title: 'Tailwind CSS',
    description: 'Consistent, maintainable UI development without unnecessary styling overhead.',
  },
];
export const fullStackRoadmapSectionHead = {
  badgeText: 'What We Build', // ⚠️ mismatch
  title: 'Complete Products, Not Disconnected Layers', // ⚠️ mismatch
  description:
    'Our full-stack teams own features across data, backend services, interfaces, integrations, and deployment—reducing handoffs and keeping implementation decisions connected.', // ⚠️ mismatch
};

export const fullStackRoadmapData = [
  {
    id: createId(),
    icon: <BusinessImpactClarityIcon />,
    title: 'SaaS Products : End-to-end SaaS products from database to customer interface.',
  },
  {
    id: createId(),
    icon: <PrioritizedUseCasesIcon />,
    title: 'Internal Tools : Admin dashboards and operational tools built around real workflows.',
  },
  {
    id: createId(),
    icon: <PilotScopeIcon />,
    title:
      'API-First Platforms : Backend platforms paired with responsive consumer-facing applications.',
  },
  {
    id: createId(),
    icon: <BusinessRoadmapIcon />,
    title:
      'B2B Enterprise Products : Business applications with complex workflows and data models.',
  },
  {
    id: createId(),
    icon: <AvoidedBuildsIcon />,
    title: 'Consumer Applications : Integrated products spanning web and mobile experiences.',
  },
];

export const WenToSpecializeData = {
  badgeText: 'When to Specialize',
  heading: "Full Stack Isn't Always the Right Answer",
  description:
    'Full-stack teams trade some depth for breadth. When a product requires deep specialization, dedicated frontend or backend engineers can be the better engineering decision.',
  items: [
    {
      id: createId(),
      title: 'Performance-Critical Frontends',
      description:
        'Highly optimized interfaces may require dedicated frontend performance expertise.',
    },
    {
      id: createId(),
      title: 'Complex Real-Time Systems',
      description:
        'High-throughput or low-latency architectures often benefit from specialized backend engineers.',
    },
    {
      id: createId(),
      title: 'Security-Critical Backends',
      description:
        'Sensitive systems can require deeper security and infrastructure specialization.',
    },
    {
      id: createId(),
      title: 'Deep Platform Requirements',
      description:
        'Products with highly specialized native, infrastructure, or domain requirements may need dedicated experts.',
    },
  ],
};
