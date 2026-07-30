import { ArrowRight } from "lucide-react";
import { ArchitectureItem } from "../../uiComponents/ArchitectureCircle";

export const heroSectionData = {
  badgeText: "Discovery & Validation",
  title: "Validate the Problem Before You Build the Solution",
  description:
    "The most expensive mistake in product development is building the wrong thing with confidence. Discovery exists to reduce that risk - not eliminate all uncertainty, but ensure the assumptions your product is built on are tested before you commit months of engineering effort to them.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Book a Discovery Sprint",
    href: "/contact",
  },
  secondaryButton: {
    text: "View Sample Discovery Output",
    href: "/about",
    icon: <ArrowRight className="w-4 h-4" />,
  },
};
export const mvpheroSection = {
  badgeText: "MVP Development",
  title: "Ship Something Real. Fast. That You Won't Regret.",
  description:
    "An MVP is not a rough prototype thrown together to 'move fast.' It's the smallest complete product that lets you test your most important assumption with real users in production. Done right, it takes weeks and gives you genuine signal. Done wrong, it takes months and teaches you nothing.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Build Your MVP with Us",
    href: "/contact",
  },
  secondaryButton: {
    text: "See Our MVP Portfolio",
    href: "/about",
    icon: <ArrowRight className="w-4 h-4" />,
  },
};

export const platformHeroSection = {
  badgeText: "Platform Scaling",
  title: "Your MVP Got You Here. You Need Something Different to Go Further.",
  description:
    "Architectures built for speed in the early days show their limits when scale arrives. Slow queries, deployment bottlenecks, on-call nightmares, and features that take 3x longer than they should - these are engineering debt coming due. We help you pay it down without stopping the product.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Talk About Scaling Challenges",
    href: "/contact",
  },
  secondaryButton: {
    text: "Technical Review",
    href: "/about",
    icon: <ArrowRight className="w-4 h-4" />,
  },
};

export const whoThisIsForData = [
  {
    title:
      "You have a promising product idea but no clear evidence on where to start.",
  },
  {
    title:
      "Leadership needs a structured business case before approving investment.",
  },
  {
    title:
      "Your team is exploring multiple opportunities and needs clear prioritization.",
  },
  {
    title:
      "You want to move from experimentation to execution without wasting time.",
  },
];

export const discoverPhaseData = {
  badgeText: "Week 01",
  title: "Understand",
  description:
    "Stakeholder interviews, user research sessions, competitor analysis, and mapping of the current-state problem. We go wide before going narrow.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/discover.png",
  imageAlt: "Discovery workshop",
};

export const assessPhaseData = {
  badgeText: "Week 2",
  title: "Define",
  description:
    "Synthesize research into user journeys, define the job-to-be-done, identify the riskiest assumptions, and map the solution space.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/assess.png",
  imageAlt: "Define workshop",
};

export const prioritizePhaseData = {
  badgeText: "Week 3",
  title: "Validate",
  description:
    "Prototype the core interaction (not the full product — the critical decision point). Put it in front of real users. Measure signal, not opinion.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/rank.png",
  imageAlt: "Validation workshop",
};

export const enablePhaseData = {
  badgeText: "Week 4",
  title: "Decide",
  description:
    "Synthesize findings into a build recommendation. Define the MVP scope, success metrics, and technical approach.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/enable.png",
  imageAlt: "Decision workshop",
};
export const weekOneData = {
  badgeText: "Week 1",
  title: "Setup & Architecture",
  description:
    "Repository setup, infrastructure provisioning, team onboarding, architectural decisions documented. No surprises mid-build.",
  buttonText: "View more",
  buttonLink: "#",
  image: "/images/What-we-do/discover.png",
  imageAlt: "Setup & Architecture",
};
export const weekTwoData = {
  badgeText: "Week 2",
  title: "Core Build",
  description:
    "Agile sprints with weekly demos. You see working software every week—not a big reveal at the end.",
  buttonText: "View more",
  buttonLink: "#",
  image: "/images/What-we-do/assess.png",
  imageAlt: "Core Build",
};

export const weekThreeData = {
  badgeText: "Week 3",
  title: "Hardening & Launch Prep",
  description:
    "QA pass, performance testing, security review, deployment configuration, and launch checklist.",
  buttonText: "View more",
  buttonLink: "#",
  image: "/images/What-we-do/rank.png",
  imageAlt: "Hardening & Launch Prep",
};
export const weekFourData = {
  badgeText: "Week 4",
  title: "Measure & Iterate",
  description:
    "Support your first real users. Instrument the product to capture the metrics that answer your core hypothesis.",
  buttonText: "View more",
  buttonLink: "#",
  image: "/images/What-we-do/enable.png",
  imageAlt: "Measure & Iterate",
};

export const outcomesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
    title:
      "User research report (interviews, journey maps, pain point analysis)",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 1-7.07 2.93" />
        <path d="M8 8h4V4" />
        <path d="M12 8a4 4 0 1 1-4 4" />
      </svg>
    ),
    title: "Validated problem statement and solution hypothesis",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8 12 2 2 4-4" />
      </svg>
    ),
    title: "MVP scope definition with prioritized feature list (MoSCoW)",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    title: "Clickable prototype for the core user flow",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 4 7l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    ),
    title: "Technical architecture recommendation",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </svg>
    ),
    title: "Build effort estimate and team requirements",
  },

  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Go/no-go recommendation with reasoning",
  },
];

export const strategyCards = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "You have an idea but haven't talked to enough real users",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "Your team disagrees on what to build",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "You're planning to rebuild or pivot an existing product",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "You need to justify investment before committing a team",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "You've been building but aren't seeing the outcomes expected",
  },
];

export const faqData = [
  {
    title: "What if we do not know exactly where to start?",
    description:
      "That is exactly why this engagement exists. We guide the discovery process, clarify the opportunity, and help you decide what to pursue first.",
  },
  {
    title: "How quickly can we get clarity?",
    description:
      "Most teams get a validated structure, prioritized opportunities, and decision-ready recommendations within a focused sprint.",
  },
  {
    title: "What happens after discovery?",
    description:
      "If the opportunity proves viable, we move into pilot scoping and delivery planning with measurable outcomes and owners.",
  },
  {
    title: "Does leadership need to be involved?",
    description:
      "Yes. Product discovery works best when business, product, and leadership stakeholders are actively involved in the validation cycle.",
  },
];

export const noteveryproduct = [
  {
    step: 1,
    title: "Validated Research",
    description: "Research findings have already been validated.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Clear Requirements",
    description: "Requirements and objectives are already defined.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Defined Scope",
    description: "The feature scope is already established.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const coreFeaturesData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    title: "Authentication & User Management",
    description:
      "Proper authentication with secure user access, role-based permissions, and account management capabilities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 20V18C16 16.34 14.66 15 13 15H7C5.34 15 4 16.34 4 18V20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="8" r="3" stroke="white" strokeWidth="2" />
        <path
          d="M20 8C20 9.66 18.66 11 17 11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    title: "CI/CD Pipeline",
    description:
      "Automated build, testing, deployment, and release workflows for reliable production delivery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12a8 8 0 0113.66-5.66L20 8M20 12a8 8 0 01-13.66 5.66L4 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 4V8H16M4 20V16H8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    title: "Core Feature Set",
    description:
      "The essential workflow that validates the product value proposition with real users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M12 4L20 8L12 12L4 8L12 4Z" stroke="white" strokeWidth="2" />
        <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" />
        <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    title: "Basic Security",
    description:
      "Authentication, encryption, validation, and essential security best practices for production systems.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3L19 6V12C19 17 15.5 20 12 21C8.5 20 5 17 5 12V6L12 3Z"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "bottom",
    title: "Logging & Monitoring",
    description:
      "Track system health, logs, metrics, and application performance in real time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 18V6M4 18H20M8 15L12 11L15 13L20 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    title: "Error Handling",
    description:
      "Graceful exception handling, retry strategies, and meaningful user-facing error responses.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3L19 6V12C19 17 15.5 20 12 21C8.5 20 5 17 5 12V6L12 3Z"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M12 8V13" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="16.5" r="1" fill="white" />
      </svg>
    ),
  },
];

export const technologyChoicesData = {
  badge: "Technology Choices for MVPs",

  title: "Modern Tools. Practical Decisions.",

  description:
    "Every technology is selected to reduce complexity, speed up development, and keep your MVP easy to scale.",

  tabs: [
    "Full-Stack Web",
    "Mobile",
    "Backend APIs",
    "Auth",
    "Database",
    "Payments",
    "File Storage",
    "Deployment",
  ],

  technologies: {
    "Full-Stack Web": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Next.js",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Vercel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960611/Gloitel/icon/vercel_ecvrkl.png",
      },
    ],

    Mobile: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "React Native",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Flutter",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960672/Gloitel/icon/flutter_lplnyz.png",
      },
    ],

    "Backend APIs": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Node.js / NestJS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960581/Gloitel/icon/nodejs_tpmxcf.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Python / FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png",
      },
    ],

    Auth: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Clerk",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960643/Gloitel/icon/clerk_fapefn.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Auth0",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784961896/Gloitel/icon/Auth0_shuxwm.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Supabase Auth",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
    ],

    Database: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostgreSQL (default)",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Firebase",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960671/Gloitel/icon/firebase_cf9k34.png",
      },
    ],

    Payments: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Stripe",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960603/Gloitel/icon/stripe_cmfiwd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Razorpay",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960594/Gloitel/icon/razorpay_cceonz.png",
      },
    ],

    "File Storage": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS S3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloudinary",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960649/Gloitel/icon/cloudinary_y3xnvs.png",
      },
    ],

    Deployment: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Vercel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960611/Gloitel/icon/vercel_ecvrkl.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Railway",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960593/Gloitel/icon/railway_wsfpls.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Render",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/render_twuslb.png",
      },
    ],
  },
};

export const accordionData2 = [
  {
    title: "How fast can you actually build an MVP?",
    description:
      "Depends on scope. A single-workflow web app with auth and one integration: 4-5 weeks. A cross-platform mobile app with a backend: 6-8 weeks. We scope accurately before we commit.",
  },
  {
    title: "Can we add features mid-build?",
    description:
      "Yes, but it extends the timeline. We use a change request process so additions are explicit decisions, not scope creep.",
  },
  {
    title: "Who owns the code?",
    description:
      "You do. 100%. We transfer all repositories, credentials, and infrastructure on handoff.",
  },
  {
    title: "What if we want to continue building after the MVP?",
    description:
      "Most clients do. We offer ongoing sprint-based development or a fractional team model depending on your needs.",
  },
];

export const scalingIndicators = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "Page load times increasing as your dataset grows",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "Database queries struggling as users grow from 10K to 100K",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "Deployments requiring a weekend and a prayer",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "New features taking 3× longer due to code complexity",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "On-call rotations nobody wants to own",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 27"
        fill="none"
      >
        <circle cx="13.5" cy="13.5" r="12" stroke="white" strokeWidth="1.5" />
        <path
          d="M13.5 8V14.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="18.5" r="1.1" fill="white" />
      </svg>
    ),
    description: "Engineering velocity slowing despite team growth",
  },
];

export const scalingSolutions = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <circle cx="23" cy="23" r="18" stroke="white" strokeWidth="2.8477" />
        <path
          d="M23 23L30 15"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
        />
        <circle cx="23" cy="23" r="2" fill="white" />
      </svg>
    ),
    title: "Performance Optimization",
    description:
      "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <ellipse
          cx="23"
          cy="11"
          rx="14"
          ry="5"
          stroke="white"
          strokeWidth="2.8477"
        />
        <path
          d="M9 11V35C9 37.7614 15.268 40 23 40C30.732 40 37 37.7614 37 35V11"
          stroke="white"
          strokeWidth="2.8477"
        />
        <path
          d="M9 23C9 25.7614 15.268 28 23 28C30.732 28 37 25.7614 37 23"
          stroke="white"
          strokeWidth="2.8477"
        />
      </svg>
    ),
    title: "Database Architecture & Migration",
    description:
      "Schema redesign, read replica setup, connection pooling, sharding strategy for high-throughput systems, and safe zero-downtime migration execution.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M14 32H32C36 32 39 29 39 25C39 21.5 36.5 18.7 33.2 18.1C32.4 12.4 27.5 8 21.5 8C15.5 8 10.5 12.6 10 18.4C6.5 19 4 22 4 25.5C4 29.6 7.4 32 11 32Z"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Infrastructure Redesign",
    description:
      "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing, and infrastructure-as-code so your environment is reproducible.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <circle cx="23" cy="10" r="4" stroke="white" strokeWidth="2.5" />
        <circle cx="10" cy="34" r="4" stroke="white" strokeWidth="2.5" />
        <circle cx="36" cy="34" r="4" stroke="white" strokeWidth="2.5" />
        <path
          d="M23 14V23M23 23L13 30.5M23 23L33 30.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "API Gateway & Microservices",
    description:
      "When a monolith has outgrown itself, we plan and execute the decomposition — starting with the highest-value, most isolated services, not a full rewrite.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M23 6L40 15L23 24L6 15L23 6Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 23L23 32L40 23"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 31L23 40L40 31"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Caching Layer Design",
    description:
      "Redis/Memcached strategy across application, database, and CDN layers. Proper cache invalidation patterns that don't cause the bugs that give caching its bad reputation.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 46 46"
        fill="none"
      >
        <path
          d="M17 14L7 23L17 32"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29 14L39 23L29 32"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 9L20 37"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Engineering Process Improvement",
    description:
      "Technical debt inventory, CI/CD pipeline optimization, test coverage improvement, code review standards, and documentation practices that scale with your team.",
  },
];

export const auditPhaseData = {
  badgeText: "Step 01",
  title: "Technical Audit (1-2 weeks)",
  description:
    "Instrument, profile, and document the current system. Identify the top 10 issues ranked by impact and effort. No guessing.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/audit.png",
  imageAlt: "Technical audit",
};

export const roadmapPhaseData = {
  badgeText: "Step 02",
  title: "Prioritized Roadmap",
  description:
    "A phased plan that addresses the highest-impact issues first, with each phase delivering measurable improvement that can be shipped and validated independently.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/roadmap.png",
  imageAlt: "Prioritized roadmap",
};

export const executionPhaseData = {
  badgeText: "Step 03",
  title: "Execution",
  description:
    "Work alongside your existing team. We don't take over — we accelerate and upskill. Changes made in branches, reviewed, and deployed with your existing process.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/execution.png",
  imageAlt: "Execution phase",
};

export const handoffPhaseData = {
  badgeText: "Step 04",
  title: "Handoff & Documentation",
  description:
    "Architecture documentation, runbooks, and knowledge transfer so your team can own what we've built.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/handoff.png",
  imageAlt: "Handoff and documentation",
};

export const principlesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <rect x="7" y="13" width="3" height="5" />
        <rect x="12" y="9" width="3" height="9" />
        <rect x="17" y="6" width="3" height="12" />
      </svg>
    ),
    title:
      "Fix the measurement problem first - you can't optimize what you can't observe",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="M12 3v3" />
      </svg>
    ),
    title: "Address the bottleneck, not the symptom",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 20h4v-4" />
        <path d="M7 16h4v-4" />
        <path d="M11 12h4V8" />
        <path d="M15 8h4v-4" />
        <path d="m17 6 3-2" />
      </svg>
    ),
    title:
      "Migrate incrementally — big-bang rewrites have a terrible success rate",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
    title:
      "Write the test before the fix - regression prevention, not just performance improvement",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </svg>
    ),
    title: "Document decisions, not just code",
  },
];

export const fractionalTeamHeroData = {
  badgeText: "Fractional Engineering Teams",
  title: "Senior Engineering Capacity, without the Hiring Timeline",
  description:
    "Building an in-house engineering team takes 3-6 months minimum, costs more than most early-stage companies can sustain, and carries significant risk if your direction changes. A fractional team gives you senior engineering capacity today, structured around your current stage.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Explore Engagement Options",
    href: "/contact",
  },
  secondaryButton: {
    text: "Talk to Our Team",
    href: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
  },
};

export const showcaseItems2 = [
  {
    step: 1,
    title: "Embed",
    description:
      "Join your team's workflows and communication channels from day one.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 26 26"
        fill="none"
      >
        <circle cx="9.5" cy="7" r="3.5" stroke="white" strokeWidth="1.8" />
        <path
          d="M3 21C3 17.5 5.9 15 9.5 15C13.1 15 16 17.5 16 21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 8.5C18.1 8.5 19 9.4 19 10.5C19 11.6 18.1 12.5 17 12.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 15.5C20.5 16 22.5 18 22.5 21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Build",
    description:
      "Ship features and contribute directly to your codebase from day one.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M2.03516 8.09375V27.0606H10.5923V8.09375H2.03516ZM8.25283 25.4771C8.10344 25.4771 7.95741 25.4328 7.83319 25.3498C7.70898 25.2668 7.61217 25.1489 7.555 25.0109C7.49783 24.8728 7.48287 24.721 7.51202 24.5745C7.54116 24.4279 7.6131 24.2934 7.71873 24.1877C7.82437 24.0821 7.95895 24.0101 8.10547 23.981C8.25199 23.9519 8.40386 23.9668 8.54188 24.024C8.67989 24.0812 8.79786 24.178 8.88085 24.3022C8.96385 24.4264 9.00815 24.5724 9.00815 24.7218C9.00815 24.9221 8.92857 25.1143 8.78692 25.2559C8.64527 25.3976 8.45315 25.4771 8.25283 25.4771ZM9.48881 12.4883H3.12763V11.3897H9.48812V12.4883H9.48881ZM9.48881 10.291H3.12763V9.1924H9.48812V10.291H9.48881ZM19.9946 23.2352H25.0141V25.9619H27.8802V27.0606H17.1299V25.9619H19.996V23.2352H19.9946ZM11.8921 8.09375V22.1366H33.1201V8.09375H11.8914H11.8921ZM32.0214 21.0379H12.9901V9.1924H32.0214V21.0379Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Collaborate",
    description:
      "Work within your existing tools, processes, and sprint workflows without disruption.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M30.0297 11.7189C27.9906 7.06205 22.9646 4.39453 17.5461 4.39453C10.692 4.39453 5.05812 9.59774 4.39453 16.2599"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.1541 12.3067H29.9696C30.0736 12.3069 30.1766 12.2866 30.2728 12.2469C30.3689 12.2073 30.4563 12.149 30.5299 12.0756C30.6035 12.0021 30.6619 11.9148 30.7018 11.8188C30.7416 11.7227 30.7621 11.6197 30.7621 11.5157V5.71484M5.12695 23.4397C7.16605 28.0965 12.192 30.7641 17.6105 30.7641C24.4647 30.7641 30.0985 25.5609 30.7621 18.8986"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0025 22.8516H5.18702C5.08302 22.8514 4.98 22.8717 4.88386 22.9114C4.78772 22.951 4.70034 23.0093 4.62674 23.0827C4.55313 23.1562 4.49473 23.2435 4.45488 23.3395C4.41504 23.4356 4.39453 23.5386 4.39453 23.6426V29.4435"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Scale",
    description:
      "Adjust team capacity as priorities evolve without the delays of traditional hiring.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M5.12695 5.85938V25.6351C5.12695 26.8006 5.58995 27.9184 6.4141 28.7425C7.23825 29.5667 8.35603 30.0297 9.52155 30.0297H29.2972"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.52148 21.9748L16.1134 15.3829L21.2404 20.5099L29.2972 12.4531"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const podsData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    badgeText: "STARTER",
    teamSize: "2-3 ENGINEERS",
    title: "Starter Pod",
    description:
      "Best for: Early-stage products, post-MVP iteration, maintenance + new features",
    composition: [
      "1 Full-Stack Engineer",
      "1 Backend or Mobile Engineer",
      "1 Part-Time QA",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    badgeText: "GROWTH",
    teamSize: "4-6 ENGINEERS",
    title: "Growth Pod",
    description:
      "Best for: Active product development with multiple parallel workstreams",
    composition: ["1 Tech Lead", "2-3 Engineers", "1 QA", "1 Part-Time DevOps"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    badgeText: "SCALE",
    teamSize: "7-10 ENGINEERS",
    title: "Scale Pod",
    description:
      "Best for: High-velocity product teams building complex systems",
    composition: [
      "1 Engineering Manager",
      "2 Tech Leads",
      "4-5 Engineers",
      "1 QA Lead",
      "1 DevOps",
    ],
  },
];

export const integrationSectionHead = {
  badgeText: "How We Integrate with Your Team",
  title: "Working as One Team, Not an External Vendor",
  description:
    "From onboarding to reporting, our engineers integrate directly into your workflow to ensure fast collaboration, clear communication, and consistent delivery.",
};

export const integrationPrinciplesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M19.6553 23.4139C13.9302 23.4139 7.53711 28.0704 7.53711 33.7923M19.6553 18.2311C21.027 18.2343 22.3689 17.8307 23.5111 17.0712C24.6534 16.3117 25.5447 15.2304 26.0723 13.9642C26.4671 13.0176 26.6467 11.9951 26.5982 10.9706C26.5497 9.94602 26.2742 8.94505 25.7917 8.03996C25.3092 7.13487 24.6317 6.34825 23.8081 5.73693C22.9845 5.1256 22.0354 4.70484 21.0294 4.50502C20.0237 4.30449 18.986 4.32942 17.9911 4.57803C16.9962 4.82663 16.0688 5.29273 15.2757 5.94277C14.4825 6.5928 13.8433 7.41061 13.4042 8.33731C12.965 9.26401 12.7367 10.2765 12.7359 11.302C12.7354 13.1379 13.4638 14.8989 14.7609 16.1981C16.058 17.4973 17.8179 18.2285 19.6537 18.2311M21.0914 29.1995L23.7758 31.8855C23.8701 31.9816 23.9826 32.0578 24.1067 32.1099C24.2308 32.162 24.3641 32.1888 24.4986 32.1888C24.6332 32.1888 24.7665 32.162 24.8906 32.1099C25.0147 32.0578 25.1272 31.9816 25.2214 31.8855L30.6333 26.4737"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title:
      "Fast onboarding with immediate access to your tools, workflows, and codebase",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M27.0359 11.1308V17.4921M19.0843 11.1308V23.8533M11.1328 11.1308V20.6727M4.77148 14.9476C4.77148 11.3853 4.77148 9.6041 5.46486 8.24279C6.07473 7.04589 7.04784 6.07278 8.24474 5.46291C9.60605 4.76953 11.3872 4.76953 14.9495 4.76953H23.2192C26.7815 4.76953 28.5626 4.76953 29.924 5.46291C31.1209 6.07278 32.094 7.04589 32.7038 8.24279C33.3972 9.6041 33.3972 11.3853 33.3972 14.9476V23.2172C33.3972 26.7795 33.3972 28.5607 32.7038 29.922C32.094 31.1189 31.1209 32.092 29.924 32.7019C28.5626 33.3953 26.7815 33.3953 23.2192 33.3953H14.9495C11.3872 33.3953 9.60605 33.3953 8.24474 32.7019C7.04784 32.092 6.07473 31.1189 5.46486 29.922C4.77148 28.5607 4.77148 26.7795 4.77148 23.2172V14.9476Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title:
      "Structured sprint execution aligned with your existing delivery process",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M17.2942 19.0851C17.2942 19.5596 17.4827 20.0146 17.8182 20.3501C18.1538 20.6857 18.6088 20.8742 19.0833 20.8742C19.5578 20.8742 20.0129 20.6857 20.3484 20.3501C20.6839 20.0146 20.8724 19.5596 20.8724 19.0851C20.8724 18.6106 20.6839 18.1555 20.3484 17.82C20.0129 17.4844 19.5578 17.296 19.0833 17.296C18.6088 17.296 18.1538 17.4844 17.8182 17.82C17.4827 18.1555 17.2942 18.6106 17.2942 19.0851ZM24.7488 19.0851C24.7488 19.5596 24.9373 20.0146 25.2728 20.3501C25.6084 20.6857 26.0634 20.8742 26.5379 20.8742C27.0124 20.8742 27.4675 20.6857 27.803 20.3501C28.1385 20.0146 28.327 19.5596 28.327 19.0851C28.327 18.6106 28.1385 18.1555 27.803 17.82C27.4675 17.4844 27.0124 17.296 26.5379 17.296C26.0634 17.296 25.6084 17.4844 25.2728 17.82C24.9373 18.1555 24.7488 18.6106 24.7488 19.0851ZM9.83959 19.0851C9.83959 19.5596 10.0281 20.0146 10.3636 20.3501C10.6991 20.6857 11.1542 20.8742 11.6287 20.8742C12.1032 20.8742 12.5583 20.6857 12.8938 20.3501C13.2293 20.0146 13.4178 19.5596 13.4178 19.0851C13.4178 18.6106 13.2293 18.1555 12.8938 17.82C12.5583 17.4844 12.1032 17.296 11.6287 17.296C11.1542 17.296 10.6991 17.4844 10.3636 17.82C10.0281 18.1555 9.83959 18.6106 9.83959 19.0851ZM34.4846 12.6145C33.6422 10.6129 32.4345 8.81633 30.8952 7.27322C29.3665 5.73908 27.5519 4.51961 25.5539 3.68382C23.5039 2.82281 21.3272 2.38672 19.0833 2.38672H19.0088C16.75 2.3979 14.5621 2.84518 12.5046 3.72482C10.5238 4.56918 8.72614 5.79082 7.21184 7.32167C5.68737 8.86105 4.49091 10.6502 3.66344 12.6443C2.80616 14.7092 2.3738 16.9046 2.38498 19.1633C2.39762 21.7518 3.01002 24.3022 4.17409 26.6142V32.2797C4.17409 32.7345 4.35473 33.1706 4.67627 33.4921C4.99781 33.8137 5.43392 33.9943 5.88865 33.9943H11.5579C13.8699 35.1584 16.4203 35.7708 19.0088 35.7834H19.087C21.3197 35.7834 23.4853 35.351 25.5241 34.5049C27.512 33.6791 29.3199 32.4739 30.8467 30.9565C32.3861 29.4321 33.5975 27.6504 34.4436 25.6638C35.3232 23.6063 35.7705 21.4184 35.7817 19.1596C35.7928 16.8897 35.353 14.6868 34.4846 12.6145ZM28.8526 28.9401C26.2397 31.5268 22.7734 32.9506 19.0833 32.9506H19.02C16.7724 32.9395 14.5397 32.3804 12.568 31.3293L12.2549 31.1615H7.00684V25.9135L6.83911 25.6004C5.78801 23.6286 5.22891 21.396 5.21773 19.1484C5.20282 15.4323 6.62293 11.9435 9.22832 9.31578C11.83 6.68803 15.3076 5.23438 19.0237 5.21947H19.087C20.9507 5.21947 22.7584 5.58102 24.4618 6.29666C26.1242 6.99367 27.6151 7.99632 28.8973 9.27851C30.1758 10.557 31.1822 12.0516 31.8792 13.714C32.6023 15.436 32.9638 17.2624 32.9564 19.1484C32.934 22.8608 31.4766 26.3384 28.8526 28.9401Z"
          fill="white"
        />
      </svg>
    ),
    title:
      "Direct collaboration through shared tools and transparent communication",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M6.36133 6.35938V28.1695C6.36133 29.1335 6.7443 30.0581 7.426 30.7398C8.1077 31.4215 9.03228 31.8045 9.99634 31.8045H30.8977M11.8138 20.8994V26.3519M19.0839 15.4469V26.3519M26.3539 9.99439V26.3519"
          stroke="white"
          strokeWidth="1.81751"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title:
      "Continuous reporting with complete visibility into progress and performance",
  },
];

export const teamSectionHead = {
  badgeText: "Why Teams Choose Us",
  title: "The Team Behind the Outcomes",
  description:
    "Experienced engineers who take ownership, communicate directly, and stay accountable from planning through delivery.",
};

export const teamValuesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 9.5 4.5 6 4l-.5 3.5L2 9l2 3-2 3 3.5 1.5L6 20l3.5-.5L12 22l2.5-2.5L18 20l.5-3.5L22 15l-2-3 2-3-3.5-1.5L18 4l-3.5.5L12 2Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Senior engineers by default",
    description:
      "Senior engineers by default, with no bait-and-switch with juniors after the contract is signed, ensuring consistent expertise, stronger technical decision-making, and reliable execution throughout the entire engagement.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.7 5.24" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 1 0 7.07 7.07l1.76-1.77" />
      </svg>
    ),
    title: "Continuity",
    description:
      "Same people on your project, not a rotating cast, allowing deeper product knowledge, stronger collaboration, faster onboarding, and long-term ownership of technical decisions while maintaining consistency across every stage of development.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 51 51"
        fill="none"
      >
        <path
          d="M27.4219 5.27344V10.547C27.4219 15.5188 27.4219 18.0058 28.966 19.5499C30.51 21.094 32.997 21.094 37.9689 21.094H46.4065"
          stroke="white"
          strokeWidth="3.16411"
        />
        <path
          d="M14.7657 29.5312L12.6562 31.6407L14.7657 33.7501M24.258 33.7501L26.3674 35.8595L24.258 37.9689M21.0939 29.5312L17.9298 37.9689"
          stroke="white"
          strokeWidth="3.16411"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.80083 21.0942C5.80083 20.6746 5.63415 20.2722 5.33746 19.9755C5.04077 19.6788 4.63836 19.5121 4.21878 19.5121C3.79919 19.5121 3.39679 19.6788 3.10009 19.9755C2.8034 20.2722 2.63672 20.6746 2.63672 21.0942H5.80083ZM44.8249 29.5318C44.8249 29.9514 44.9916 30.3538 45.2882 30.6505C45.5849 30.9472 45.9873 31.1138 46.4069 31.1138C46.8265 31.1138 47.2289 30.9472 47.5256 30.6505C47.8223 30.3538 47.989 29.9514 47.989 29.5318H44.8249ZM2.85821 12.5025C2.81737 12.9202 2.9441 13.3369 3.21053 13.6611C3.47697 13.9853 3.86127 14.1904 4.2789 14.2312C4.69652 14.272 5.11327 14.1453 5.43746 13.8789C5.76165 13.6124 5.96671 13.2281 6.00755 12.8105L2.85821 12.5025ZM47.7675 38.1234C47.7877 37.9166 47.767 37.7079 47.7066 37.5091C47.6461 37.3103 47.5471 37.1254 47.4152 36.9648C47.2832 36.8043 47.121 36.6713 46.9377 36.5735C46.7544 36.4757 46.5536 36.415 46.3468 36.3947C46.14 36.3745 45.9313 36.3952 45.7325 36.4557C45.5337 36.5161 45.3488 36.6151 45.1882 36.7471C44.8641 37.0135 44.659 37.3978 44.6181 37.8154L47.7675 38.1234ZM29.5317 44.825H21.094V47.9891H29.5317V44.825ZM5.80083 29.5318V21.0942H2.63672V29.5318H5.80083ZM44.8249 28.61V29.5318H47.989V28.61H44.8249ZM31.4111 9.72655L39.7623 17.2424L41.878 14.8883L33.529 7.37246L31.4111 9.72655ZM47.989 28.61C47.989 25.0472 48.0206 22.7901 47.1241 20.7735L44.2321 22.0624C44.7932 23.3238 44.8249 24.7687 44.8249 28.61H47.989ZM39.7623 17.2424C42.6163 19.8116 43.671 20.8031 44.2321 22.0624L47.1241 20.7735C46.2255 18.7548 44.5274 17.2719 41.878 14.8883L39.7623 17.2424ZM21.1573 5.80095C24.4944 5.80095 25.7537 5.82626 26.8738 6.25658L28.0087 3.30341C26.2115 2.61152 24.2539 2.63684 21.1573 2.63684V5.80095ZM33.529 7.37457C31.2382 5.31367 29.8059 3.99108 28.0087 3.30341L26.8759 6.25658C27.9981 6.6869 28.9431 7.50535 31.4111 9.72655L33.529 7.37457ZM21.094 44.825C17.0714 44.825 14.2153 44.8208 12.0447 44.5297C9.92472 44.2449 8.70127 43.7091 7.80899 42.8168L5.57302 45.0528C7.15085 46.6349 9.15268 47.3331 11.6249 47.6664C14.0507 47.9933 17.1621 47.9891 21.094 47.9891V44.825ZM2.63672 29.5318C2.63672 33.4637 2.6325 36.573 2.95946 39.0009C3.29275 41.4731 3.99307 43.475 5.57091 45.0549L7.80688 42.8189C6.91671 41.9245 6.38092 40.7011 6.09615 38.579C5.80505 36.4127 5.80083 33.5544 5.80083 29.5318H2.63672ZM29.5317 47.9891C33.4636 47.9891 36.5729 47.9933 39.0008 47.6664C41.473 47.3331 43.4748 46.6327 45.0548 45.0549L42.8188 42.8189C41.9244 43.7091 40.701 44.2449 38.5789 44.5297C36.4126 44.8208 33.5543 44.825 29.5317 44.825V47.9891ZM21.1573 2.63684C17.2022 2.63684 14.0781 2.63262 11.6418 2.95958C9.15901 3.29286 7.15085 3.99319 5.57091 5.57102L7.80688 7.80699C8.70127 6.91682 9.92683 6.38103 12.0616 6.09626C14.2406 5.80517 17.1136 5.80095 21.1573 5.80095V2.63684ZM6.00755 12.8105C6.26279 10.2075 6.81335 8.80263 7.80899 7.8091L5.57302 5.57313C3.80955 7.33238 3.14087 9.62108 2.85821 12.5025L6.00755 12.8105ZM44.6181 37.8154C44.3629 40.4184 43.8102 41.8233 42.8167 42.8168L45.0527 45.0528C46.8162 43.2936 47.4848 41.0048 47.7675 38.1234L44.6181 37.8154Z"
          fill="white"
        />
      </svg>
    ),
    title: "Code ownership",
    description:
      "Engineers who care about the quality of what they're building and take responsibility for maintaining high engineering standards, clean architecture, and sustainable long-term product growth.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4A8.5 8.5 0 0 1 4.06 9.94 8.38 8.38 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
        <circle cx="9" cy="11.5" r="0.5" fill="currentColor" />
        <circle cx="12.5" cy="11.5" r="0.5" fill="currentColor" />
        <circle cx="16" cy="11.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Direct communication",
    description:
      "No account management layer between you and the engineers doing the work, enabling faster feedback cycles, clearer communication, quicker decisions, better alignment on priorities, and more effective day-to-day collaboration.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 51 51"
        fill="none"
      >
        <path
          d="M8.4375 8.4375V37.3665C8.4375 38.6453 8.94548 39.8716 9.84969 40.7758C10.7539 41.68 11.9803 42.188 13.259 42.188H40.9826M15.6698 27.7235V34.9558M25.3128 20.4913V34.9558M34.9558 13.259V34.9558"
          stroke="white"
          strokeWidth="2.41075"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Transparent velocity",
    description:
      "You see everything in your tools, not filtered through a project manager, providing complete visibility into progress, sprint performance, delivery timelines, engineering output, and the overall pace of product development at every stage.",
  },
];

export const scaleReadinessSectionHead = {
  badgeText: "When a Fractional Team Makes Sense",
  title: "Built for Products that Need to Scale",
  description:
    "Access the engineering capacity, expertise, and flexibility needed to support growth without the delays of traditional hiring.",
};

export const scaleReadinessIndicators = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M6.04297 19.2267L13.7335 26.9172L29.1146 10.4375"
          stroke="white"
          strokeWidth="3.29595"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Hiring is slow, but delivery can't wait.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M6.04297 19.2267L13.7335 26.9172L29.1146 10.4375"
          stroke="white"
          strokeWidth="3.29595"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Clear roadmap, limited execution capacity.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M6.04297 19.2267L13.7335 26.9172L29.1146 10.4375"
          stroke="white"
          strokeWidth="3.29595"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Need expertise beyond in-house capabilities.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M6.04297 19.2267L13.7335 26.9172L29.1146 10.4375"
          stroke="white"
          strokeWidth="3.29595"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Managing growth between funding rounds.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M6.04297 19.2267L13.7335 26.9172L29.1146 10.4375"
          stroke="white"
          strokeWidth="3.29595"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Validating direction before hiring.",
  },
];
