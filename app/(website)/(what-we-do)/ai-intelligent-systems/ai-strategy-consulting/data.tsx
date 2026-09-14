import {
  BarChartIcon,
  CalendarIcon,
  CheckTargetIcon,
  ClipboardIcon,
  CloseIcon,
  DiamondStackIcon,
  DownloadIcon,
  FileIcon,
  LayersIcon,
  LightbulbGearIcon,
  NotBuildIcon,
  RocketIcon,
  SearchIcon,
  TargetIcon,
  UsersIcon,
} from 'components/SvgIcon';

const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const heroSectionData = {
  badgeText: 'AI Strategy & Consulting',

  title: 'Define Your AI Roadmap Before You Build',

  description:
    'Most AI initiatives fail before they begin — not because of bad technology, but because of misdirected effort. We help you decide *where* AI should be applied before a single line of code is written.',

  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787143140/Gloitel/what%20we%20do/AI_Strategy_Consulting_sldvp7.png',

  imageAlt: 'AI strategy meeting',

  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',

  primaryButton: {
    text: 'Book a Strategy Session',
    href: '/contact',
  },

  secondaryButton: {
    text: 'Download a Sample Roadmap',
    href: '/about',
    icon: <DownloadIcon size={20} />,
  },
};

export const problems = [
  {
    title: 'You have AI ideas but no clear basis for deciding where to invest first',
  },
  {
    title: 'Leadership needs a structured business case before approving investment',
  },
  {
    title: "You have active AI pilots that aren't tied to measurable business outcomes",
  },
  {
    title:
      "You want to move from experimentation to execution but don't know the right entry point",
  },
];

export const showcaseItems = [
  {
    step: 1,
    title: 'Discover',
    description: 'Map workflows and identify value leakage.',
    icon: <SearchIcon />,
  },
  {
    step: 2,
    title: 'Assess',
    description: 'Evaluate readiness and implementation constraints.',
    icon: <ClipboardIcon />,
  },
  {
    step: 3,
    title: 'Rank',
    description: 'Prioritize use cases by value, feasibility, and ROI.',
    icon: <BarChartIcon />,
  },
  {
    step: 4,
    title: 'Enable',
    description: 'Define pilot scope and execution roadmap.',
    icon: <RocketIcon />,
  },
];

export const discoverData = {
  badgeText: 'Phase 01',
  title: 'Discover',
  description: 'Map workflows, decision points, and value creation/loss across the business.',
  cardTitle: 'Current-state workflow map and value leakage analysis',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616469/Gloitel/what%20we%20do/discover_jl55nm.png',
  imageAlt: 'AI strategy meeting',
};

export const RankData = {
  badgeText: 'Phase 03',
  title: 'Rank',
  description: 'Prioritize use cases by value at stake, feasibility, and speed to ROI.',
  cardTitle: 'Prioritized use case stack with impact vs. effort matrix',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616476/Gloitel/what%20we%20do/rank_n77ycw.png',
  imageAlt: 'AI strategy meeting',
};

export const assessData = {
  badgeText: 'Phase 02',
  title: 'Assess',
  description: 'Evaluate data maturity, system readiness, and implementation constraints.',
  cardTitle: 'Feasibility assessment across shortlisted use cases',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616466/Gloitel/what%20we%20do/assess_vtl1k6.png',
  imageAlt: 'AI assessment',
};
export const enableData = {
  badgeText: 'Phase 04',
  title: 'Enable',
  description:
    'Scope the highest-priority use case into a pilot-ready brief with a clear investment case.',
  cardTitle: 'Defined pilot scope, success metrics, and execution roadmap',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616468/Gloitel/what%20we%20do/enable_zaof8f.png',
  imageAlt: 'AI assessment',
};
export const outcomesData = [
  {
    id: createId(),
    icon: <TargetIcon />,
    title: 'Clarity on where AI will create measurable business impact',
  },
  {
    id: createId(),
    icon: <DiamondStackIcon />,
    title: 'A prioritised use case stack ranked by value and feasibility',
  },
  {
    id: createId(),
    icon: <CheckTargetIcon />,
    title: 'Defined pilot scope with expected outcomes and success metrics',
  },
  {
    id: createId(),
    icon: <LightbulbGearIcon />,
    title: 'A structured roadmap aligned to business priorities',
  },
  {
    id: createId(),
    icon: <NotBuildIcon />,
    title: 'A clear view of what *not* to build — equally valuable',
  },
];

export const notIncludedData = [
  {
    id: createId(),
    icon: <CloseIcon />,
    description: 'Not a vendor-led engagement where we pre-sell a solution',
  },
  {
    id: createId(),
    icon: <CloseIcon />,
    description: 'Not a free strategy workshop with vague outputs',
  },
  {
    id: createId(),
    icon: <CloseIcon />,
    description: 'Not an open-ended consulting retainer',
  },
  {
    id: createId(),
    icon: <CloseIcon />,
    description: 'Not a build-first approach without a validated roadmap',
  },
];
export const EngagementData = [
  {
    step: 1,
    title: 'Duration',
    description: 'Focused 3–4 week engagement',
    icon: <CalendarIcon />,
  },
  {
    step: 2,
    title: 'Format',
    description: 'Fixed scope, fixed fee model',
    icon: <LayersIcon />,
  },
  {
    step: 3,
    title: 'Involvement',
    description: 'Business & leadership alignment',
    icon: <UsersIcon />,
  },
  {
    step: 4,
    title: 'Output',
    description: 'Decision-ready AI roadmap',
    icon: <FileIcon />,
  },
];

export const accordionData = [
  {
    title: "What if we don't know where to start?",
    description:
      "That's exactly the situation this engagement is built for. We guide the entire discovery process — you don't need to arrive with defined use cases.",
  },
  {
    title: 'How quickly will we see results?',
    description:
      'The Discovery Sprint delivers actionable output in 3–4 weeks. Pilot programs following Discovery typically show results within 6–10 weeks.',
  },
  {
    title: 'What happens after the Discovery Sprint?',
    description:
      'If Discovery identifies a viable pilot, we scope and run the AI Pilot Program. Production build and scale only follows after the pilot demonstrates ROI.',
  },
  {
    title: 'Does leadership need to be involved?',
    description:
      'Yes – directly. This engagement is run with business stakeholders, not delegated to IT teams. If leadership cannot participate, this is likely not the right fit.',
  },
];
