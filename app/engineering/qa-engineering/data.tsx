import {
  AISystemTesting,
  APITesting,
  ArrowRightIcon,
  ManualTesting,
  PerformanceTesting,
  ShieldCheckIcon,
  TestAutomation,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const qaHeroData = {
  badgeText: 'QA Engineering',
  title: 'Quality Built In, Not Bolted On',
  description:
    "QA that happens at the end of a sprint finds bugs when they're expensive to fix. QA that's embedded in the development process prevents them. We do the latter — working with engineers from requirement definition through deployment.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/QA_Engineering_tb1o38.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our QA Team',
    href: '',
  },
  secondaryButton: {
    text: 'Quality Assessment',
    href: '',
    icon: <ArrowRightIcon />,
  },
};

export const aiAgentsSectionHead = {
  badgeText: 'What We Test',
  title: 'Quality Engineering Across Every Layer of Your Product',
  description:
    'From exploratory testing to automated regression and production-scale performance validation, we build quality into the development lifecycle—not just the release checklist',
};

export const aiAgentsData = [
  {
    id: createId(),
    icon: <ManualTesting size={25} />,
    title: 'Manual Testing',
    description:
      'Exploratory, regression, accessibility, and usability testing that finds issues beyond the written specification.',
  },
  {
    id: createId(),
    icon: <TestAutomation size={25} />,
    title: 'Test Automation',
    description:
      'Maintainable automated suites for frontend, backend, and mobile using Cypress, Playwright, Jest, Pytest, Appium, and Detox.',
  },
  {
    id: createId(),
    icon: <PerformanceTesting size={25} />,
    title: 'Performance Testing',
    description:
      'Load and stress testing with measurable response-time and capacity thresholds before production traffic arrives.',
  },
  {
    id: createId(),
    icon: <ShieldCheckIcon size={30} />,
    title: 'Security Testing',
    description:
      'OWASP testing, dependency auditing, SAST, vulnerability scanning, and penetration-test coordination integrated into delivery.',
  },
  {
    id: createId(),
    icon: <APITesting size={25} />,
    title: 'API Testing',
    description:
      'Automated REST and GraphQL validation using Postman/Newman, Pact contract testing, and schema verification.',
  },
  {
    id: createId(),
    icon: <AISystemTesting size={25} />,
    title: 'AI System Testing',
    description:
      'LLM evaluation for accuracy, hallucinations, prompt regressions, output quality, and performance benchmarks.',
  },
];

export const aiEcosystemData = {
  badge: 'QA Engineering Stack',
  title: 'Technologies We Test With',
  description:
    'Our QA stack covers browser experiences, APIs, mobile applications, performance, and security—giving teams consistent quality signals throughout development.',

  tabs: ['Frontend', 'Backend', 'Mobile', 'Performance', 'Security'],

  technologies: {
    Frontend: [
      {
        id: createId(),
        name: 'Cypress',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Cypress_ofw9sp.png',
      },
      {
        id: createId(),
        name: 'Playwright',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Playwright_zzr0s2.png',
      },
      {
        id: createId(),
        name: 'React Testing Library',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789040251/Gloitel/icon/octopus-128x128_e2xaai.png',
      },
      {
        id: createId(),
        name: 'Storybook Interaction Tests',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787050154/Gloitel/icon/Storybook_kpgob6.png',
      },
    ],
    Backend: [
      {
        id: createId(),
        name: 'Jest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039281/Gloitel/icon/Jest_pnlmv9.png',
      },
      {
        id: createId(),
        name: 'Pytest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789121196/Gloitel/icon/pytest_pwex1y.svg',
      },
      {
        id: createId(),
        name: 'Supertest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789121302/Gloitel/icon/Reach_zt01ms.svg',
      },
      {
        id: createId(),
        name: 'Newman',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789121530/Gloitel/icon/Postman_fxkwxo.svg',
      },
    ],
    Mobile: [
      {
        id: createId(),
        name: 'Appium',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789121741/Gloitel/icon/Titanium-SDK_m9w8up.svg',
      },
      {
        id: createId(),
        name: 'Detox',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122293/Gloitel/icon/logo_ruhpbf.png',
      },
      {
        id: createId(),
        name: 'XCTest',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122449/Gloitel/icon/user_interface_testing_c4xa9e.png',
      },
      {
        id: createId(),
        name: 'Espresso',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122561/Gloitel/icon/espresso_l3lwnj.png',
      },
    ],
    Performance: [
      {
        id: createId(),
        name: 'k6',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122681/Gloitel/icon/K6-load-testing-tool-logo-icon-min_d1dls3.png',
      },
      {
        id: createId(),
        name: 'Locust',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122759/Gloitel/icon/2641063_whxppn.png',
      },
      {
        id: createId(),
        name: 'JMeter',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789122925/Gloitel/icon/Apache-JMeter_ohfrde.png',
      },
      {
        id: createId(),
        name: 'Artillery',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789123029/Gloitel/icon/12608521_jjjgh4.png',
      },
    ],
    Security: [
      {
        id: createId(),
        name: 'OWASP ZAP',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789123333/Gloitel/icon/OWASP_ZAP_logo.svg_jqmgk7.webp',
      },
      {
        id: createId(),
        name: 'Snyk',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789123498/Gloitel/icon/snyk-argj9w9zgahaf04t4nlky_iylz6g.webp',
      },
      {
        id: createId(),
        name: 'SonarQube',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789123528/Gloitel/icon/SonarQube_dni4gi.svg',
      },
      {
        id: createId(),
        name: 'Semgrep',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789123573/Gloitel/icon/29760937_stqgdo.png',
      },
    ],
  },
};

export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
