import { Download, ChevronRight, ArrowRight } from "lucide-react";

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

export const outcomesData = [
  {
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          stroke-width="2.92973"
          stroke-linecap="round"
        />
      </svg>
    ),
    description: "You have an idea but haven't talked to enough real users",
  },
  {
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          stroke-width="2.92973"
          stroke-linecap="round"
        />
      </svg>
    ),
    description: "Your team disagrees on what to build",
  },
  {
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          stroke-width="2.92973"
          stroke-linecap="round"
        />
      </svg>
    ),
    description: "You need to justify investment before committing a team",
  },
  {
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          stroke-width="2.92973"
          stroke-linecap="round"
        />
      </svg>
    ),
    description: "You need to justify investment before committing a team",
  },
  {
    id: crypto.randomUUID(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          stroke-width="2.92973"
          stroke-linecap="round"
        />
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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

export const coreFeaturesData = [
  {
    id: crypto.randomUUID(),
    position: "top",
    title: "Authentication & User Management",
    description:
      "Proper authentication with secure user access, role-based permissions, and account management capabilities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    id: crypto.randomUUID(),
    position: "leftTop",
    title: "CI/CD Pipeline",
    description:
      "Automated build, testing, deployment, and release workflows for reliable production delivery.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    id: crypto.randomUUID(),
    position: "rightTop",
    title: "Core Feature Set",
    description:
      "The essential workflow that validates the product value proposition with real users.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    id: crypto.randomUUID(),
    position: "leftBottom",
    title: "Basic Security",
    description:
      "Authentication, encryption, validation, and essential security best practices for production systems.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    id: crypto.randomUUID(),
    position: "bottom",
    title: "Logging & Monitoring",
    description:
      "Track system health, logs, metrics, and application performance in real time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    id: crypto.randomUUID(),
    position: "rightBottom",
    title: "Error Handling",
    description:
      "Graceful exception handling, retry strategies, and meaningful user-facing error responses.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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