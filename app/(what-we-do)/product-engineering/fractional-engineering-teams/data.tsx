import {
  ArrowRightIcon,
  UsersIcon,
  FileIcon,
  LayersIcon,
  DiamondStackIcon,
  CheckTargetIcon,
  WorkflowAutomationIcon,
  BarChartIcon,
  RefreshCcwIcon,
  MonitorIcon,
  PredictiveForecastingIcon,
  RocketIcon,
  UserCheckIcon,
  AnalyticsIcon,
  ChatbotIcon,
  BadgeCheckIcon,
  LinkIcon,
  DocumentCodeIcon,
  CheckIcon,
} from 'components/SvgIcon';

export const fractionalTeamHeroData = {
  badgeText: 'Fractional Engineering Teams',
  title: 'Senior Engineering Capacity, without the Hiring Timeline',
  description:
    'Building an in-house engineering team takes 3-6 months minimum, costs more than most early-stage companies can sustain, and carries significant risk if your direction changes. A fractional team gives you senior engineering capacity today, structured around your current stage.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712281/Gloitel/Product%20Engineering/Fractional_Engineering_Teams_ydvpia.png',
  imageAlt: 'Discovery and validation workshop',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: { text: 'Explore Engagement Options', href: '/contact' },
  secondaryButton: {
    text: 'Talk to Our Team',
    href: '/about',
    icon: <ArrowRightIcon size={16} className='h-4 w-4' />,
  },
};

export const showcaseItems2 = [
  {
    step: 1,
    title: 'Embed',
    description: "Join your team's workflows and communication channels from day one.",
    icon: <UsersIcon size={25} className='' />,
  },
  {
    step: 2,
    title: 'Build',
    description: 'Ship features and contribute directly to your codebase from day one.',
    icon: <MonitorIcon size={25} className='' />,
  },
  {
    step: 3,
    title: 'Collaborate',
    description:
      'Work within your existing tools, processes, and sprint workflows without disruption.',
    icon: <RefreshCcwIcon size={25} className='' />,
  },
  {
    step: 4,
    title: 'Scale',
    description:
      'Adjust team capacity as priorities evolve without the delays of traditional hiring.',
    icon: <PredictiveForecastingIcon size={25} className='' />,
  },
];

export const podsData = [
  {
    icon: <RocketIcon size={25} className='' />,
    badgeText: 'STARTER',
    teamSize: '2-3 ENGINEERS',
    title: 'Starter Pod',
    description: 'Best for: Early-stage products, post-MVP iteration, maintenance + new features',
    composition: ['1 Full-Stack Engineer', '1 Backend or Mobile Engineer', '1 Part-Time QA'],
  },
  {
    icon: <PredictiveForecastingIcon size={25} className='' />,
    badgeText: 'GROWTH',
    teamSize: '4-6 ENGINEERS',
    title: 'Growth Pod',
    description: 'Best for: Active product development with multiple parallel workstreams',
    composition: ['1 Tech Lead', '2-3 Engineers', '1 QA', '1 Part-Time DevOps'],
  },
  {
    icon: <DiamondStackIcon size={25} className='' />,
    badgeText: 'SCALE',
    teamSize: '7-10 ENGINEERS',
    title: 'Scale Pod',
    description: 'Best for: High-velocity product teams building complex systems',
    composition: [
      '1 Engineering Manager',
      '2 Tech Leads',
      '4-5 Engineers',
      '1 QA Lead',
      '1 DevOps',
    ],
  },
];

export const integrationPrinciplesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <UserCheckIcon size={25} className='' />,
    title: 'Fast onboarding with immediate access to your tools, workflows, and codebase',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnalyticsIcon size={25} className='' />,
    title: 'Structured sprint execution aligned with your existing delivery process',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ChatbotIcon size={25} className='' />,
    title: 'Direct collaboration through shared tools and transparent communication',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <BarChartIcon size={25} className='' />,
    title: 'Continuous reporting with complete visibility into progress and performance',
  },
];

export const teamSectionHead = {
  badgeText: 'Why Teams Choose Us',
  title: 'The Team Behind the Outcomes',
  description:
    'Experienced engineers who take ownership, communicate directly, and stay accountable from planning through delivery.',
};

export const teamValuesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <BadgeCheckIcon size={25} className='' />,
    title: 'Senior engineers by default',
    description:
      'Senior engineers by default, with no bait-and-switch with juniors after the contract is signed, ensuring consistent expertise, stronger technical decision-making, and reliable execution throughout the entire engagement.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LinkIcon size={25} className='' />,
    title: 'Continuity',
    description:
      'Same people on your project, not a rotating cast, allowing deeper product knowledge, stronger collaboration, faster onboarding, and long-term ownership of technical decisions while maintaining consistency across every stage of development.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DocumentCodeIcon size={25} className='' />,
    title: 'Code ownership',
    description:
      "Engineers who care about the quality of what they're building and take responsibility for maintaining high engineering standards, clean architecture, and sustainable long-term product growth.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ChatbotIcon size={25} className='' />,
    title: 'Direct communication',
    description:
      'No account management layer between you and the engineers doing the work, enabling faster feedback cycles, clearer communication, quicker decisions, better alignment on priorities, and more effective day-to-day collaboration.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <BarChartIcon size={25} className='' />,
    title: 'Transparent velocity',
    description:
      'You see everything in your tools, not filtered through a project manager, providing complete visibility into progress, sprint performance, delivery timelines, engineering output, and the overall pace of product development at every stage.',
  },
];

export const scaleReadinessSectionHead = {
  badgeText: 'When a Fractional Team Makes Sense',
  title: 'Built for Products that Need to Scale',
  description:
    'Access the engineering capacity, expertise, and flexibility needed to support growth without the delays of traditional hiring.',
};

export const scaleReadinessIndicators = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckIcon size={25} className='' />,
    description: "Hiring is slow, but delivery can't wait.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckIcon size={25} className='' />,
    description: 'Clear roadmap, limited execution capacity.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckIcon size={25} className='' />,
    description: 'Need expertise beyond in-house capabilities.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckIcon size={25} className='' />,
    description: 'Managing growth between funding rounds.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckIcon size={25} className='' />,
    description: 'Validating direction before hiring.',
  },
];
