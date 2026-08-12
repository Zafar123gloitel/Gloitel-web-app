import { ArchitectureItem } from "../uiComponents/ArchitectureCircle";

export const heroData = {
    badgeText: "AI Strategy & Consulting",

    title: "Define Your AI Roadmap Before You Build",

    description:
        "Turn AI ambition into a clear, actionable roadmap designed around your business goals, technology, and opportunities.",

    primaryButton: {
        text: "Start Your AI Journey",
        href: "#",
    },

    secondaryButton: {
        text: "Explore Our Approach",
        href: "#",
    },

    image: "/images/ai-roadmap.png",
    imageAlt: "AI team planning and strategy",
};
export const aiRoadmapData = {
    badgeText: "AI Strategy & Consulting",

    title: "Define Your AI Roadmap Before You Build",

    description:
        "Identify the right AI opportunities, technologies, and implementation strategy before investing in development.",

    image: "/images/ai-roadmap.png",

    imageAlt: "AI strategy planning",

    features: [
        {
            id: 1,
            title: "R&D Systems",
            description:
                "Build a strong foundation for AI experimentation and innovation.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
        },

        {
            id: 2,
            title: "LLM features",
            description:
                "Identify and implement high-value capabilities powered by large language models.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2a7 7 0 0 0-7 7v3a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7Z" />
                    <path d="M8 12h8" />
                    <path d="M9 16h6" />
                    <path d="M12 2v4" />
                </svg>
            ),
        },

        {
            id: 3,
            title: "Agent Systems",
            description:
                "Design intelligent agents that automate workflows and business processes.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="16" height="12" x="4" y="6" rx="2" />
                    <path d="M8 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M16 10h.01" />
                    <path d="M8 14h8" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                </svg>
            ),
        },

        {
            id: 4,
            title: "Custom Models",
            description:
                "Evaluate and build specialized models for unique business requirements.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2 4 6v12l8 4 8-4V6l-8-4Z" />
                    <path d="m4 6 8 4 8-4" />
                    <path d="M12 10v12" />
                </svg>
            ),
        },
    ],
};

export const AiExecutionServicesdata = {
    badgeText: "AI Execution Services",

    title: "Built for Teams Ready to Move Beyond AI Experimentation",

    description:
        "Move from experimentation to production with a structured approach to AI strategy, design, development, and implementation.",

    services: [
        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 13C8.8 14.2 10.2 15 12 15C13.8 15 15.2 14.2 16 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="8.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },

        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 14C9 15.3 10.3 16 12 16C13.7 16 15 15.3 16 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="9"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 13C8.8 14.2 10.2 15 12 15C13.8 15 15.2 14.2 16 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="8.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },

        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 14C9 15.3 10.3 16 12 16C13.7 16 15 15.3 16 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="9"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 13C8.8 14.2 10.2 15 12 15C13.8 15 15.2 14.2 16 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="8.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },

        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 14C9 15.3 10.3 16 12 16C13.7 16 15 15.3 16 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="9"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 13C8.8 14.2 10.2 15 12 15C13.8 15 15.2 14.2 16 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="8.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15.5"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },

        {
            id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),

            title: "Ui/Ux Designer",

            description:
                "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization.",

            list: [
                "Internship",
                "On-site/ Hybrid",
                "Exp/Our",
            ],

            buttonText: "Apply Now",
            buttonLink: "/career/apply-now",

            viewText: "View Details",
            viewLink: "/career/ui-ux-designer",

            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M8 14C9 15.3 10.3 16 12 16C13.7 16 15 15.3 16 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="9"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />

                    <circle
                        cx="15"
                        cy="10"
                        r="1"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
    ],
};

export const diagnoseBeforeDeployData = {
  badgeText: "AI Readiness",

  title: "Diagnose Before You Deploy",

  description:
    "Evaluate your AI readiness, identify gaps, and define the right path before moving into implementation.",

  steps: [
    {
      id: 1,
      number: 1,
      title: "Discover",
      description:
        "Understand your business, technology, data, and AI opportunities.",
      icon: "search",
    },
    {
      id: 2,
      number: 2,
      title: "Assess",
      description:
        "Evaluate current capabilities, challenges, and AI readiness.",
      icon: "assessment",
    },
    {
      id: 3,
      number: 3,
      title: "Plan",
      description:
        "Prioritize opportunities and define the right implementation approach.",
      icon: "plan",
    },
    {
      id: 4,
      number: 4,
      title: "Validate",
      description:
        "Validate the roadmap against business goals and technical feasibility.",
      icon: "validate",
    },
  ],
};

export const AiAgentsIndustriesdata = {
        badgeText: "Industries We Serve",

        title: "AI Agents Driving Results Across Industries.",

        description:
            "From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support faster decision-making.",

        testimonials: [
            {
                id: 1,
                name: "Durgesh Sahu",
                designation: "Founder and Director",
                description:
                    "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
                image: "",
            },

            {
                id: 2,
                name: "Durgesh Sahu",
                designation: "Founder and Director",
                description:
                    "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
                image: "",
            },

            {
                id: 3,
                name: "Durgesh Sahu",
                designation: "Founder and Director",
                description:
                    "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
                image: "",
            },

            {
                id: 4,
                name: "Durgesh Sahu",
                designation: "Founder and Director",
                description:
                    "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
                image: "",
            },
        ],

        navigation: {
            showPrevious: true,
            showNext: true,
        },
    };

export const aiInfrastructureSectionHead = {
    badgeText: "AI Infrastructure",
    title: "Production - Ready by Default",
    description:
        "Build AI systems with the architecture, reliability, security, and scalability required for real-world production environments.",
};

export const aiInfrastructureData: ArchitectureItem[] = [
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "top",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <path
                    d="M18 3.5L30 8.5V16.5C30 24.2 25.2 29.9 18 32.5C10.8 29.9 6 24.2 6 16.5V8.5L18 3.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13 18L16.5 21.5L23.5 14.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        title: "Model Selection",
        description:
            "Choose the right models and capabilities for your workload.",
    },

    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "rightTop",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <circle
                    cx="18"
                    cy="18"
                    r="4"
                    stroke="white"
                    strokeWidth="2"
                />
                <circle
                    cx="7"
                    cy="10"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                />
                <circle
                    cx="29"
                    cy="10"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                />
                <circle
                    cx="7"
                    cy="27"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                />
                <circle
                    cx="29"
                    cy="27"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M10 11L14.5 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M26 11L21.5 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 26L14.5 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M26 26L21.5 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        title: "Orchestration",
        description:
            "Coordinate AI agents, tools, workflows, and services.",
    },

    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "rightBottom",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <ellipse
                    cx="18"
                    cy="8"
                    rx="10"
                    ry="4"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M8 8V18C8 20.2 12.5 22 18 22C23.5 22 28 20.2 28 18V8"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M8 18V28C8 30.2 12.5 32 18 32C23.5 32 28 30.2 28 28V18"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        ),
        title: "Data & Context",
        description:
            "Connect your AI systems with trusted business data and context.",
    },

    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "bottom",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <path
                    d="M6 25V18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M12 25V13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M18 25V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M24 25V16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M30 25V6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M5 30H31"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        title: "Monitoring",
        description:
            "Track performance, reliability, usage, and system behavior.",
    },



    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "leftBottom",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <path
                    d="M7 27V18C7 16.9 7.9 16 9 16H13C14.1 16 15 16.9 15 18V27"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M21 27V11C21 9.9 21.9 9 23 9H27C28.1 9 29 9.9 29 11V27"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M4 30H32"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M9 12L13 8L17 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        title: "Scalability",
        description:
            "Design systems that can scale with users, data, and workloads.",
    },

    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "leftTop",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
            >
                <rect
                    x="5"
                    y="6"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                />
                <rect
                    x="21"
                    y="6"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                />
                <rect
                    x="13"
                    y="20"
                    width="10"
                    height="10"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M15 11H21"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M26 16V20"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M10 16V24H13"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        ),
        title: "Integration",
        description:
            "Connect AI capabilities with your existing technology stack.",
    },
];

export const CareerFinalCtadata = {
        badgeText: "Start with Strategy, Not Assumptions",

        title: "Turn AI Ambition into an Execution Plan",

        description:
            "Every successful AI initiative starts with the right decisions. We provide the structure, insight, and direction needed to make them.",

        buttonText: "Start with a Discovery Call",

        buttonLink: "/contact",
    };

