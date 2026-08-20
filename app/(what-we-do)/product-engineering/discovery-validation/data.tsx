import {
  SearchIcon,
  PhoneIcon,
  LayersIcon,
  BarChartIcon,
  CheckTargetIcon,
  TargetIcon,
  ArrowRightIcon,
  AnomalyDetectionIcon,
  CheckIcon,
  ChecklistIcon,
  DiamondStackIcon,
  PredictiveForecastingIcon,
  ShieldCheckIcon,
} from 'components/SvgIcon';

export const heroSectionData = {
  badgeText: 'Discovery & Validation',
  title: 'Validate the Problem Before You Build the Solution',
  description:
    'The most expensive mistake in product development is building the wrong thing with confidence. Discovery exists to reduce that risk - not eliminate all uncertainty, but ensure the assumptions your product is built on are tested before you commit months of engineering effort to them.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712288/Gloitel/Product%20Engineering/Discovery_Validation_rj2az2.png',
  imageAlt: 'Discovery and validation workshop',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Book a Discovery Sprint',
    href: '/contact',
  },
  secondaryButton: {
    text: 'View Sample Discovery Output',
    href: '/about',
    icon: <ArrowRightIcon size={16} className='h-4 w-4' />,
  },
};

export const whoThisIsForData = [
  {
    title: 'You have a promising product idea but no clear evidence on where to start.',
  },
  {
    title: 'Leadership needs a structured business case before approving investment.',
  },
  {
    title: 'Your team is exploring multiple opportunities and needs clear prioritization.',
  },
  {
    title: 'You want to move from experimentation to execution without wasting time.',
  },
];

export const discoverPhaseData = {
  badgeText: 'Week 01',
  title: 'Understand',
  description:
    'Stakeholder interviews, user research sessions, competitor analysis, and mapping of the current-state problem. We go wide before going narrow.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712287/Gloitel/Product%20Engineering/Understand_zpxod8.png',
  imageAlt: 'Discovery workshop',
};

export const assessPhaseData = {
  badgeText: 'Week 2',
  title: 'Define',
  description:
    'Synthesize research into user journeys, define the job-to-be-done, identify the riskiest assumptions, and map the solution space.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712286/Gloitel/Product%20Engineering/Define_gscsta.png',
  imageAlt: 'Define workshop',
};

export const prioritizePhaseData = {
  badgeText: 'Week 3',
  title: 'Validate',
  description:
    'Prototype the core interaction (not the full product — the critical decision point). Put it in front of real users. Measure signal, not opinion.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712286/Gloitel/Product%20Engineering/Validate_kuiapd.png',
  imageAlt: 'Validation workshop',
};

export const enablePhaseData = {
  badgeText: 'Week 4',
  title: 'Decide',
  description:
    'Synthesize findings into a build recommendation. Define the MVP scope, success metrics, and technical approach.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712286/Gloitel/Product%20Engineering/Decide_mjkpkr.png',
  imageAlt: 'Decision workshop',
};

export const outcomesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchIcon size={25} className='' />,
    title: 'User research report (interviews, journey maps, pain point analysis)',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <TargetIcon size={25} className='' />,
    title: 'Validated problem statement and solution hypothesis',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ChecklistIcon size={25} className='' />,
    title: 'MVP scope definition with prioritized feature list (MoSCoW)',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PhoneIcon size={25} className='' />,
    title: 'Clickable prototype for the core user flow',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DiamondStackIcon size={25} className='' />,
    title: 'Technical architecture recommendation',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <PredictiveForecastingIcon size={25} className='' />,
    title: 'Build effort estimate and team requirements',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ShieldCheckIcon size={25} className='' />,
    title: 'Go/no-go recommendation with reasoning',
  },
];

export const strategyCards = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnomalyDetectionIcon />,
    description: "You have an idea but haven't talked to enough real users",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnomalyDetectionIcon />,
    description: 'Your team disagrees on what to build',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnomalyDetectionIcon />,
    description: "You're planning to rebuild or pivot an existing product",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnomalyDetectionIcon />,
    description: 'You need to justify investment before committing a team',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnomalyDetectionIcon />,
    description: "You've been building but aren't seeing the outcomes expected",
  },
];

export const noteveryproduct = [
  {
    step: 1,
    title: 'Validated Research',
    description: 'Research findings have already been validated.',
    icon: <CheckIcon size={25} className='' />,
  },
  {
    step: 2,
    title: 'Clear Requirements',
    description: 'Requirements and objectives are already defined.',
    icon: <CheckIcon size={25} className='' />,
  },
  {
    step: 3,
    title: 'Defined Scope',
    description: 'The feature scope is already established.',
    icon: <CheckIcon size={25} className='' />,
  },
];
