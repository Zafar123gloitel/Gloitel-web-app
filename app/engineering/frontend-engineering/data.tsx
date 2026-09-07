import { HeroArrowRightIcon, NextIcon, ReactIcon, VisibilityControlIcon } from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const frontendEngineeringHeroData = {
  badgeText: 'Frontend Engineering',
  title: 'Frontend That Performs, Looks Great, and Holds Up Under Development', // ⚠️ mismatch - AI Engineering ka title hai
  description:
    "Good frontend engineering is not just about making things look right. It's about page speed that Google measures and users feel, accessibility that doesn't require a retrofit, type safety that prevents runtime errors, and component architectures that don't become spaghetti at 10,000 lines of code.", // ⚠️ mismatch
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/Frontend_Engineering_rlpdrj.png',
  imageAlt: 'Frontend engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our Frontend Team', // ⚠️ mismatch
    href: '/contact',
  },
  secondaryButton: {
    text: 'See Frontend Work', // ⚠️ mismatch
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};
export const frontendTechStackData = {
  badge: 'Technologies We Build With',
  title: 'Modern Tools for Meaningful Products',
  description:
    'FA modern frontend technology stack featuring trusted frameworks, languages, styling tools, state management, testing, component systems, and build tools used to create scalable, high-performance digital products.',
  tabs: ['Frameworks', 'Language', 'Styling', 'State', 'Testing', 'Component Systems', 'Build'],
  technologies: {
    Frameworks: [
      {
        id: createId(),
        name: 'React',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp',
      },
      {
        id: createId(),
        name: 'Next.js (App Router)',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp',
      },
      {
        id: createId(),
        name: 'Vue 3',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039287/Gloitel/icon/Vue_geiip7.png',
      },
      {
        id: createId(),
        name: 'Nuxt',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788773525/Gloitel/icon/Nuxt_ggun9s.png',
      },
      {
        id: createId(),
        name: 'Remix',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788773559/Gloitel/icon/Radix_UI_r3bzwr.png',
      },
      {
        id: createId(),
        name: 'Astro',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788775231/Gloitel/icon/images_qyqemw.jpg',
      },
    ],
    Language: [
      {
        id: createId(),
        name: 'TypeScript',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788773776/Gloitel/icon/TypeScript_dbrcbm.png',
      },
    ],
    Styling: [
      {
        id: createId(),
        name: 'Tailwind CSS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788773903/Gloitel/icon/Tailwind_CSS_kljal3.png',
      },
      {
        id: createId(),
        name: 'CSS Modules',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788774036/Gloitel/icon/CSS_Modules_py4jlj.png',
      },

      {
        id: createId(),
        name: 'Styled Components',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788774199/Gloitel/icon/Styled_Components_ijaipf.png',
      },
      {
        id: createId(),
        name: 'Vanilla Extract',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788774674/Gloitel/icon/Vanilla_Extract_sco4eo.png',
      },
    ],
    State: [
      {
        id: createId(),
        name: 'Zustand',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788775567/Gloitel/icon/images_btb1ve.jpg',
      },
      {
        id: createId(),
        name: 'Redux Toolkit',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788775616/Gloitel/icon/redux-logo-11609374482s00xntsq98_h8wbgp.png',
      },
      {
        id: createId(),
        name: 'Jotai',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788775718/Gloitel/icon/jotai-1669122435-logotic-brand_nyc48i.svg',
      },
      {
        id: createId(),
        name: 'TanStack Query',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788776396/Gloitel/icon/celtic-trinity-knot-triangular-symmetric-irish-sign-symbol-of-eternal-life-illustration-on-black-background-vector_slnwho.jpg',
      },
    ],
    Testing: [
      {
        id: createId(),
        name: 'Vitest',
        logo: '',
      },
      {
        id: createId(),
        name: 'Jest',
        logo: '',
      },
      {
        id: createId(),
        name: 'React Testing Library',
        logo: '',
      },
      {
        id: createId(),
        name: 'Cypress',
        logo: '',
      },
      {
        id: createId(),
        name: 'Playwright',
        logo: '',
      },
    ],
    'Component Systems': [
      {
        id: createId(),
        name: 'Radix UI',
        logo: '',
      },
      {
        id: createId(),
        name: 'shadcn/ui',
        logo: '',
      },

      {
        id: createId(),
        name: 'Headless UI',
        logo: '',
      },
      {
        id: createId(),
        name: 'Storybook',
        logo: '',
      },
    ],
    Build: [
      {
        id: createId(),
        name: 'Vite',
        logo: '',
      },
      {
        id: createId(),
        name: 'Turbopack',
        logo: '',
      },
      {
        id: createId(),
        name: 'esbuild',
        logo: '',
      },
    ],
  },
};
export const frontendDeliverablesSectionHead = {
  badgeText: 'Engineering Standards', // ⚠️ mismatch
  title: 'Frontend Engineering Standards We Work To', // ⚠️ mismatch
  description:
    "Good frontend quality shouldn't depend on a final audit. We define the standards before development begins and enforce them throughout implementation.",
};

export const frontendDeliverablesData = [
  {
    id: createId(),
    step: 1,
    text: 'Figma component library with all variants and states',
  },
  {
    id: createId(),
    step: 2,
    text: 'React / React Native / Flutter component library',
  },
  {
    id: createId(),
    step: 3,
    text: 'Storybook documentation',
  },
  {
    id: createId(),
    step: 4,
    text: 'Design token files (CSS variables, Tailwind config, or native tokens)',
  },
  {
    id: createId(),
    step: 5,
    text: 'Usage guidelines and pattern documentation',
  },
  {
    id: createId(),
    step: 6,
    text: 'Contribution guide for your team',
  },
];
export const frontendEngineeringDeepDiveData = {
  badgeText: 'Specializations', // ⚠️ mismatch
  heading: 'The Engineering Behind Production Frontends', // ⚠️ mismatch
  description:
    'Modern frontend engineering extends beyond individual screens and components. We specialize in the architecture, rendering strategies, cross-platform systems, and performance work required to keep products maintainable as they grow.', // ⚠️ mismatch
  cards: [
    {
      id: createId(),
      icon: <ReactIcon size={28} />,
      title: 'React Native & Cross-Platform',
      description:
        'Web engineers who also build mobile, ensuring consistent component logic and shared business logic across platforms.',
    },
    {
      id: createId(),
      icon: <NextIcon />,
      title: 'Next.js & Server Components',
      description:
        'Full understanding of SSR, SSG, ISR, and the App Router mental model. We use Server Components where they belong and Client Components where they must.',
    },
    {
      id: createId(),
      icon: <VisibilityControlIcon />,
      title: 'Performance Engineering',
      description:
        'Core Web Vitals optimization, image optimization, lazy loading strategies, critical CSS, and bundle splitting for performance-critical products.',
    },
  ],
};
export const frontendEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: 'Build a Frontend Your Users—and Engineers—Will Love', // ⚠️ mismatch — copy-paste bug repeats yahan bhi
  description:
    "Whether you're launching a new product, modernizing an existing frontend, or improving performance and accessibility, we'll build a frontend that's fast for users and maintainable for your engineering team.",
  buttonText: 'Build Your Frontend with Us', // ⚠️ mismatch
  buttonLink: '/contact',
};
