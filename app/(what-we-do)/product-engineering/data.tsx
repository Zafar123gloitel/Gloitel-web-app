import { ArrowRightIcon, CloseIcon, CheckTargetIcon, LayersIcon, BarChartIcon, FileIcon, UsersIcon, TargetIcon } from '../../component/SvgIcon';

export const productEngineeringHeroData = {
  badgeText: "Product Engineering",
  title: "From Idea to Production, Without Cutting Corners",
  description:
    "Building a product is easy. Building one that works at scale, survives real users, and can be maintained and extended by a team - that takes engineering discipline that most shops skip in the rush to ship.",
  image: "/images/What-we-do/product-engineering-hero.png",
  imageAlt: "Product engineering",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start Building with Us",
    href: "/contact",
  },
  secondaryButton: {
    text: "See Our Product Work",
    href: "/about",
    icon: <ArrowRightIcon size={16} className="w-4 h-4" />,
  },
};

export const productStruggleData = {
  badgeText: "The Problem with Most Product Builds",
  heading: "Why Promising Products Struggle to Scale",
  description:
    "Many products fail not because of the idea, but because critical decisions are made without validation, scalability, or long-term maintainability in mind.",
  items: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: <CloseIcon size={27} className="" />,
      description: "Built before the core value proposition is validated",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: <CloseIcon size={27} className="" />,
      description: "Architecture built for speed, not scale",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: <CloseIcon size={27} className="" />,
      description: "Scope that expands without a corresponding plan for scale",
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: <CloseIcon size={27} className="" />,
      description: "Teams that ship fast but struggle to maintain and scale",
    },
  ],
};

export const productStruggleNote = {
  icon: <CheckTargetIcon size={18} className="" />,
  text: "We've been through enough product builds to know where the shortcuts cause the most damage - and where speed is genuinely fine.",
};

export const productPracticeSectionHead = {
  badgeText: "Our Product Engineering Practice",
  title: "Engineering Support Across Every Stage of Product Growth",
  description:
    "From validating ideas and launching MVPs to scaling platforms and expanding engineering capacity, we help teams build products that are designed to last.",
};

export const productPracticeData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/discovery-validation.png",
    imageAlt: "Discovery and validation",
    title: "Discovery & Validation",
    description:
      "Validate the right problem before investing in development. Define scope, uncover insights, and reduce risk early.",
    buttonText: "Learn More",
    buttonLink: "/discovery-validation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/mvp-development.png",
    imageAlt: "MVP development",
    title: "MVP Development",
    description:
      "Build a production-ready MVP focused on proving value. Fast to launch, easy to maintain.",
    buttonText: "Learn More",
    buttonLink: "/mvp-development",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/platform-scaling.png",
    imageAlt: "Platform scaling",
    title: "Platform Scaling",
    description:
      "Scale architecture, infrastructure, and performance as adoption grows. Built for long-term sustainability.",
    buttonText: "Learn More",
    buttonLink: "/platform-scaling",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/fractional-engineering-teams.png",
    imageAlt: "Fractional engineering teams",
    title: "Fractional Engineering Teams",
    description:
      "Add senior engineering expertise directly into your workflow. Flexible support without expanding headcount.",
    buttonText: "Learn More",
    buttonLink: "/fractional-engineering-teams",
  },
];

export const productionGradeSectionHead = {
  badgeText: "What We Mean by Production-Grade",
  title: "Built to Perform Beyond Launch",
  description:
    "Production-grade products are designed to be reliable, secure, maintainable, and ready to scale as your business grows.",
};

export const productionGradeData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CheckTargetIcon size={39} className="" />,
    title: "Catch regressions early with automated testing across critical workflows",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LayersIcon size={39} className="" />,
    title: "Monitor performance and issues with logging, metrics, and alerts",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <TargetIcon size={39} className="" />,
    title: "Protect users and systems through secure development practices",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <FileIcon size={35} className="" />,
    title: "Build clean, understandable code that teams can extend confidently",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M25.164 0.15849L25.7778 0.247548C26.732 0.398628 27.8007 0.651489 28.4575 1.30829C29.1143 1.96509 29.3688 3.03538 29.5198 3.98957L29.6089 4.60184C29.8093 6.04903 29.8618 7.94628 29.5198 10.0519C28.8456 14.2074 26.6334 19.1644 21.0784 23.005C21.0541 23.289 21.0451 23.5741 21.0514 23.859L21.0784 24.7225C21.0943 25.2982 21.0848 25.8723 20.9258 26.4242C20.6236 27.4738 19.547 28.1656 18.5403 28.6618L18.0473 28.8955L17.4112 29.1754L16.977 29.3504C15.8527 29.7798 14.4961 30.0803 13.6087 29.1913C13.2064 28.789 13.0203 28.2419 12.8708 27.6949L12.7977 27.4213C12.5432 26.456 12.2554 25.497 11.8959 24.5683C11.7967 24.6889 11.6916 24.8046 11.5811 24.915C10.7143 25.7801 9.53909 26.2159 8.36385 26.553L7.583 26.7677L6.80374 26.9744L6.04357 27.1653L5.35655 27.3243L4.53436 27.4992L4.02069 27.5994C3.7645 27.6469 3.50062 27.6313 3.25181 27.554C3.003 27.4767 2.77672 27.3401 2.59249 27.1558C2.40826 26.9716 2.27161 26.7453 2.19433 26.4965C2.11705 26.2477 2.10145 25.9838 2.14888 25.7276L2.32541 24.8514L2.53056 23.9322L2.72776 23.1211L3.08558 21.7773C3.44022 20.4732 3.8712 19.1294 4.83493 18.1673L4.99237 18.0162L3.77896 17.5804L2.55918 17.1606C1.84513 16.9252 1.0945 16.6771 0.576058 16.1587C-0.371772 15.2109 0.0305785 13.7319 0.502903 12.5693L0.766896 11.9539L0.984769 11.4752C1.4889 10.4033 2.20454 9.16923 3.34321 8.84163C3.89505 8.6826 4.46757 8.67305 5.04485 8.68737L5.90839 8.71599C6.19465 8.72341 6.47932 8.7144 6.7624 8.68896C10.6014 3.13398 15.56 0.921843 19.7155 0.247548C21.5175 -0.0493556 23.3533 -0.0793633 25.164 0.15849ZM20.2244 3.38684C16.7289 3.95458 12.4812 5.82639 9.16696 10.812C8.76461 11.4164 8.08554 11.7042 7.39375 11.8139C7.00253 11.8775 6.60813 11.8934 6.21214 11.8934L5.02418 11.876C4.82698 11.8749 4.62925 11.8781 4.43099 11.8855C3.94753 12.528 3.61038 13.2913 3.35752 14.0499L5.743 14.9166L6.72423 15.2872C8.51811 15.9901 10.2547 16.8409 11.5906 18.1768C13.8409 20.4271 14.9843 23.3708 15.8113 26.3781C16.5365 26.1236 17.2649 25.7992 17.8819 25.3364L17.8914 24.7432L17.8739 23.5568C17.8739 23.1624 17.8899 22.768 17.9535 22.3736C18.0616 21.6819 18.351 21.0028 18.9554 20.6004C23.941 17.2862 25.8128 13.0385 26.3806 9.54296C26.6668 7.7777 26.6191 6.20011 26.4585 5.03759C26.3967 4.55531 26.294 4.07915 26.1516 3.61425C25.6866 3.47237 25.2105 3.37022 24.7282 3.30891C23.2312 3.11491 21.7137 3.14011 20.2244 3.38684ZM7.08205 20.416C6.52544 21.0887 6.26622 21.9713 6.05788 22.846L5.88613 23.5902L5.79866 23.9496L6.90234 23.6904C7.77702 23.4837 8.66124 23.2213 9.33235 22.6647C9.63055 22.3663 9.79799 21.9616 9.79784 21.5398C9.79769 21.1179 9.62996 20.7134 9.33156 20.4152C9.03315 20.117 8.6285 19.9495 8.20664 19.9497C7.78477 19.9498 7.38025 20.1176 7.08205 20.416ZM16.0785 9.17241C16.3738 8.877 16.7244 8.64265 17.1103 8.48274C17.4961 8.32282 17.9097 8.24048 18.3274 8.24041C18.7451 8.24033 19.1587 8.32253 19.5447 8.48231C19.9306 8.64209 20.2813 8.87632 20.5767 9.17162C20.8721 9.46692 21.1065 9.81752 21.2664 10.2034C21.4263 10.5893 21.5086 11.0029 21.5087 11.4206C21.5088 11.8383 21.4266 12.2519 21.2668 12.6378C21.107 13.0237 20.8728 13.3744 20.5775 13.6698C19.9809 14.2664 19.1717 14.6016 18.328 14.6016C17.4843 14.6016 16.6751 14.2664 16.0785 13.6698C15.4819 13.0732 15.1467 12.2641 15.1467 11.4203C15.1467 10.5766 15.4819 9.76743 16.0785 9.17082V9.17241Z" fill="white" />
      </svg>
    ),
    title: "Design architectures that support growth without major rewrites",
  },
];

export const productTechStackData = {
  badge: "Technologies We Work With",
  title: "The Technology Stack behind Every Product",
  description:
    "A carefully selected ecosystem of frameworks, platforms, and tools that support reliable product development at scale.",

  tabs: ["Frontend", "Backend", "Databases", "Cloud", "DevOps", "Testing"],

  technologies: {
    Frontend: [
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "React", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Next.js", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "React Native", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Flutter", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960672/Gloitel/icon/flutter_lplnyz.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Vue.js", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/vuejs_xxxxxx.png" },
      { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "TypeScript", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960523/Gloitel/icon/typescript_qce4ug.png" },
    ],
    Backend: [],
    Databases: [],
    Cloud: [],
    DevOps: [],
    Testing: [],
  },
};

export const productAudienceSectionHead = {
  badgeText: "Who We Work With",
  title: "Built for Product Teams, Backed by Engineers",
  description:
    "Whether you're validating an idea, scaling infrastructure, or expanding engineering capacity, we provide the expertise needed at every stage of growth.",
};

export const productAudienceData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: <UsersIcon size={36} className="" />,
    title: "First Product",
    description:
      "Validate product ideas early before investing heavily in development.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: <LayersIcon size={36} className="" />,
    title: "Growth Stage",
    description:
      "Strengthen systems and infrastructure as product adoption increases.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: <CheckTargetIcon size={36} className="" />,
    title: "Enterprise Teams",
    description:
      "Launch new digital initiatives alongside internal teams.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clippath="url(#clip0_1929_7416)">
    <path d="M21.2182 4.60561C21.5921 4.71077 21.909 4.96011 22.0991 5.29882C22.2891 5.63752 22.3369 6.03785 22.2319 6.41179L15.7426 29.5391C15.6906 29.7243 15.6027 29.8976 15.4838 30.0488C15.365 30.2001 15.2175 30.3265 15.0497 30.4207C14.882 30.515 14.6974 30.5753 14.5063 30.5982C14.3153 30.6211 14.1216 30.6062 13.9364 30.5542C13.7511 30.5023 13.5779 30.4144 13.4267 30.2955C13.2754 30.1766 13.149 30.0291 13.0547 29.8614C12.9605 29.6937 12.9002 29.509 12.8773 29.318C12.8544 29.127 12.8693 28.9333 12.9212 28.7481L19.4106 5.62076C19.4625 5.43533 19.5505 5.26196 19.6694 5.11056C19.7884 4.95916 19.9361 4.83269 20.104 4.73841C20.2718 4.64412 20.4567 4.58386 20.6479 4.56108C20.8391 4.53829 21.0329 4.55342 21.2182 4.60561ZM10.5555 10.3288C10.8301 10.6035 10.9844 10.9761 10.9844 11.3645C10.9844 11.7529 10.8301 12.1255 10.5555 12.4002L5.37718 17.5799L10.5555 22.7582C10.6916 22.8942 10.7996 23.0557 10.8733 23.2334C10.947 23.4112 10.9849 23.6017 10.985 23.7941C10.9851 23.9865 10.9472 24.177 10.8737 24.3548C10.8001 24.5326 10.6922 24.6942 10.5562 24.8303C10.4202 24.9664 10.2587 25.0744 10.081 25.1481C9.90326 25.2218 9.71275 25.2597 9.52034 25.2598C9.32793 25.2599 9.1374 25.222 8.95961 25.1485C8.78182 25.0749 8.62027 24.967 8.48416 24.831L2.26874 18.6156C1.99412 18.3409 1.83984 17.9684 1.83984 17.5799C1.83984 17.1915 1.99412 16.819 2.26874 16.5443L8.48416 10.3288C8.75887 10.0542 9.13139 9.89995 9.51982 9.89995C9.90825 9.89995 10.2808 10.0542 10.5555 10.3288ZM24.5977 12.4002C24.4578 12.265 24.3462 12.1034 24.2694 11.9247C24.1926 11.746 24.1522 11.5537 24.1505 11.3592C24.1489 11.1647 24.1859 10.9718 24.2596 10.7918C24.3332 10.6118 24.442 10.4482 24.5795 10.3107C24.7171 10.1731 24.8806 10.0644 25.0607 9.99072C25.2407 9.91706 25.4336 9.88 25.6281 9.88169C25.8226 9.88338 26.0148 9.92379 26.1935 10.0006C26.3722 10.0773 26.5339 10.1889 26.669 10.3288L32.8844 16.5443C33.1591 16.819 33.3133 17.1915 33.3133 17.5799C33.3133 17.9684 33.1591 18.3409 32.8844 18.6156L26.669 24.831C26.3941 25.1057 26.0214 25.2599 25.6328 25.2598C25.2443 25.2596 24.8716 25.1052 24.597 24.8303C24.3223 24.5554 24.1681 24.1827 24.1682 23.7941C24.1683 23.4055 24.3228 23.0329 24.5977 22.7582L29.776 17.5799L24.5977 12.4002Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1929_7416">
      <rect width="35.1568" height="35.1568" rx="4.88289" fill="white"/>
    </clipPath>
  </defs>
</svg>
    ),
    title: "CTOs & Founders",
    description:
      "Access senior technical expertise without expanding internal headcount requirements.",
  },
];

export const productEngineeringCTAData = {
  badgeText: "Ready to Build Your Product?",
  title: "Turn Product Ideas into Production-Ready Software",
  description:
    "Partner with an engineering team focused on creating scalable, market-ready, growth-ready digital products.",
  buttonText: "Talk About Your Product",
  buttonLink: "/contact",
};