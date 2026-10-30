import {
  AccessibilityAuditIcon,
  ArrowRightIcon,
  BusinessImpactIcon,
  CTOFounderIcon,
  CheckTargetIcon,
  CloseIcon,
  InfoIcon,
  LayersIcon,
  ScalableArchitectureIcon,
  UsersIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const productEngineeringHeroData = {
  badgeText: 'Product Engineering',
  title: 'From Idea to Production, Without Cutting Corners',
  description:
    'Building a product is easy. Building one that works at scale, survives real users, and can be maintained and extended by a team - that takes engineering discipline that most shops skip in the rush to ship.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040164/Gloitel/Parent%20pages/Product_Engineering_udc6rv.png',
  imageAlt: 'Product engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Start Building with Us',
    href: '/contact',
  },
  secondaryButton: {
    text: 'See Our Product Work',
    href: '/about',
    icon: <ArrowRightIcon size={16} className='h-4 w-4' />,
  },
};

export const productStruggleData = {
  badgeText: 'The Problem with Most Product Builds',
  heading: 'Why Promising Products Struggle to Scale',
  description:
    'Many products fail not because of the idea, but because critical decisions are made without validation, scalability, or long-term maintainability in mind.',
  items: [
    {
      id: createId(),
      icon: <CloseIcon size={20} className='' />,
      description: 'Built before the core value proposition is validated',
    },
    {
      id: createId(),
      icon: <CloseIcon size={20} className='' />,
      description: 'Architecture built for speed, not scale',
    },
    {
      id: createId(),
      icon: <CloseIcon size={20} className='' />,
      description: 'Scope that expands without a corresponding plan for scale',
    },
    {
      id: createId(),
      icon: <CloseIcon size={20} className='' />,
      description: 'Teams that ship fast but struggle to maintain and scale',
    },
  ],
};

export const productStruggleNote = {
  icon: <InfoIcon size={20} className='h-5 w-5 text-blue-400' />,
  text: "We've been through enough product builds to know where the shortcuts cause the most damage - and where speed is genuinely fine.",
};

export const productPracticeSectionHead = {
  badgeText: 'Our Product Engineering Practice',
  title: 'Engineering Support Across Every Stage of Product Growth',
  description:
    'From validating ideas and launching MVPs to scaling platforms and expanding engineering capacity, we help teams build products that are designed to last.',
};

export const productPracticeData = [
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040163/Gloitel/Parent%20pages/Discovery_Validation_gkixpq.png',
    imageAlt: 'Discovery and validation',
    title: 'Discovery & Validation',
    description:
      'Validate the right problem before investing in development. Define scope, uncover insights, and reduce risk early.',
    buttonText: 'Learn More',
    buttonLink: '/discovery-validation',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040162/Gloitel/Parent%20pages/MVP_Development_vjohrg.png',
    imageAlt: 'MVP development',
    title: 'MVP Development',
    description:
      'Build a production-ready MVP focused on proving value. Fast to launch, easy to maintain.',
    buttonText: 'Learn More',
    buttonLink: '/mvp-development',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040161/Gloitel/Parent%20pages/Platform_Scaling_qclafh.png',
    imageAlt: 'Platform scaling',
    title: 'Platform Scaling',
    description:
      'Scale architecture, infrastructure, and performance as adoption grows. Built for long-term sustainability.',
    buttonText: 'Learn More',
    buttonLink: '/platform-scaling',
  },
  {
    id: createId(),
    image:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040160/Gloitel/Parent%20pages/Fractional_Engineering_Teams_phigqs.png',
    imageAlt: 'Fractional engineering teams',
    title: 'Fractional Engineering Teams',
    description:
      'Add senior engineering expertise directly into your workflow. Flexible support without expanding headcount.',
    buttonText: 'Learn More',
    buttonLink: '/fractional-engineering-teams',
  },
];

export const productionGradeSectionHead = {
  badgeText: 'What We Mean by Production-Grade',
  title: 'Built to Perform Beyond Launch',
  description:
    'Production-grade products are designed to be reliable, secure, maintainable, and ready to scale as your business grows.',
};

export const productionGradeData = [
  {
    id: createId(),
    icon: <CheckTargetIcon size={39} className='' />,
    title: 'Catch regressions early with automated testing across critical workflows',
  },
  {
    id: createId(),
    icon: <BusinessImpactIcon size={39} className='' />,
    title: 'Monitor performance and issues with logging, metrics, and alerts',
  },
  {
    id: createId(),
    icon: <AccessibilityAuditIcon size={39} className='' />,
    title: 'Protect users and systems through secure development practices',
  },
  {
    id: createId(),
    icon: <CTOFounderIcon size={35} className='' />,
    title: 'Build clean, understandable code that teams can extend confidently',
  },
  {
    id: createId(),
    icon: <ScalableArchitectureIcon />,
    title: 'Design architectures that support growth without major rewrites',
  },
];

export const productTechStackData = {
  badge: 'Technologies We Work With',
  title: 'The Technology Stack behind Every Product',
  description:
    'A carefully selected ecosystem of frameworks, platforms, and tools that support reliable product development at scale.',

  tabs: ['Frontend', 'Backend', 'Databases', 'Cloud', 'DevOps', 'Testing'],

  technologies: {
    Frontend: [
      {
        id: createId(),
        name: 'React',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960596/Gloitel/icon/react-native_urnuf4.png',
      },
      {
        id: createId(),
        name: 'Next.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp',
      },
      {
        id: createId(),
        name: 'React Native',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp',
      },
      {
        id: createId(),
        name: 'Flutter',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960672/Gloitel/icon/flutter_lplnyz.png',
      },
      {
        id: createId(),
        name: 'Vue.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039287/Gloitel/icon/Vue_geiip7.png',
      },
      {
        id: createId(),
        name: 'TypeScript',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960523/Gloitel/icon/typescript_qce4ug.png',
      },
    ],

    Backend: [
      {
        id: createId(),
        name: 'Node.js',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960581/Gloitel/icon/nodejs_tpmxcf.png',
      },
      {
        id: createId(),
        name: 'Python',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png',
      },
      {
        id: createId(),
        name: 'Go',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039286/Gloitel/icon/Go_nqicwd.png',
      },
      {
        id: createId(),
        name: 'NestJS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039285/Gloitel/icon/NestJS_xaqzkv.png',
      },
      {
        id: createId(),
        name: 'FastAPI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png',
      },
      {
        id: createId(),
        name: 'Django',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039284/Gloitel/icon/Django_ezsw8r.png',
      },
    ],

    Databases: [
      {
        id: createId(),
        name: 'PostgreSQL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png',
      },
      {
        id: createId(),
        name: 'MongoDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039284/Gloitel/icon/MongoDB_y5bh5v.png',
      },
      {
        id: createId(),
        name: 'Redis',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png',
      },
      {
        id: createId(),
        name: 'Firebase',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960671/Gloitel/icon/firebase_cf9k34.png',
      },
      {
        id: createId(),
        name: 'DynamoDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039283/Gloitel/icon/DynamoDB_q5kcjb.png',
      },
    ],

    Cloud: [
      {
        id: createId(),
        name: 'AWS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Google Cloud',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        id: createId(),
        name: 'Azure',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
      {
        id: createId(),
        name: 'Vercel',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960611/Gloitel/icon/vercel_ecvrkl.png',
      },
      {
        id: createId(),
        name: 'Supabase',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960605/Gloitel/icon/supabase-auth_wags6y.png',
      },
    ],

    DevOps: [
      {
        id: createId(),
        name: 'Docker',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png',
      },
      {
        id: createId(),
        name: 'Kubernetes',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png',
      },
      {
        id: createId(),
        name: 'GitHub Actions',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039282/Gloitel/icon/GitHub_Actions_k5gpzk.png',
      },
      {
        id: createId(),
        name: 'Terraform',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png',
      },
      {
        id: createId(),
        name: 'CI/CD pipelines',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/pipelines_breci6.png',
      },
    ],

    Testing: [
      {
        id: createId(),
        name: 'Jest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Jest_pnlmv9.png',
      },
      {
        id: createId(),
        name: 'Cypress',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Cypress_ofw9sp.png',
      },
      {
        id: createId(),
        name: 'Playwright',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Pytest_zp00vb.png',
      },
      {
        id: createId(),
        name: 'Pytest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Pytest_zp00vb.png',
      },
      {
        id: createId(),
        name: 'Vitest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039280/Gloitel/icon/Vitest_j3tuc8.png',
      },
    ],
  },
};

export const productAudienceSectionHead = {
  badgeText: 'Who We Work With',
  title: 'Built for Product Teams, Backed by Engineers',
  description:
    "Whether you're validating an idea, scaling infrastructure, or expanding engineering capacity, we provide the expertise needed at every stage of growth.",
};

export const productAudienceData = [
  {
    id: createId(),
    step: 1,
    icon: <UsersIcon size={36} className='' />,
    title: 'First Product',
    description: 'Validate product ideas early before investing heavily in development.',
  },
  {
    id: createId(),
    step: 2,
    icon: <LayersIcon size={36} className='' />,
    title: 'Growth Stage',
    description: 'Strengthen systems and infrastructure as product adoption increases.',
  },
  {
    id: createId(),
    step: 3,
    icon: <CheckTargetIcon size={36} className='' />,
    title: 'Enterprise Teams',
    description: 'Launch new digital initiatives alongside internal teams.',
  },
  {
    id: createId(),
    step: 4,
    icon: <CTOFounderIcon />,
    title: 'CTOs & Founders',
    description:
      'Access senior technical expertise without expanding internal headcount requirements.',
  },
];

export const productEngineeringCTAData = {
  badgeText: 'Ready to Build Your Product?',
  title: 'Turn Product Ideas into Production-Ready Software',
  description:
    'Partner with an engineering team focused on creating scalable, market-ready, growth-ready digital products.',
  buttonText: 'Talk About Your Product',
  buttonLink: '/contact',
};
