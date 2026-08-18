export const cxOptimizationHeroData = {
  badgeText: "CX Optimization",
  title: "Improve What you have before you Build New Things",
  description:
    "Many companies invest heavily in new features while their existing user flows are leaking value. CX optimization finds where users drop off, get confused, or fail to complete key actions - and fixes those before adding anything new.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "CX optimization",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Audit Your User Experience",
    href: "/contact",
  },
  secondaryButton: {
    text: "CX Review",
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

export const cxCoversSectionHead = {
  badgeText: "What CX Optimization Covers",
  title: "Improve Every Step of the Customer Journey",
  description:
    "CX optimization reveals where users drop off, get confused, or fail to complete key actions - so you can improve existing experiences before building something new.",
};

export const cxCoversData = [
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
          d="M45.6027 9.79483C45.3592 9.23223 44.9557 8.75363 44.4424 8.41855C43.929 8.08347 43.3285 7.90669 42.7155 7.91021H7.91026C7.29787 7.91141 6.69899 8.09031 6.18626 8.42518C5.67354 8.76005 5.26901 9.23652 5.02176 9.79678C4.7745 10.357 4.69513 10.977 4.79329 11.5815C4.89145 12.186 5.16291 12.749 5.57475 13.2022L5.59057 13.22L18.9846 27.5218V42.7154C18.9845 43.2881 19.1398 43.8501 19.4339 44.3414C19.7281 44.8327 20.1501 45.235 20.6549 45.5054C21.1597 45.7758 21.7284 45.9041 22.3004 45.8766C22.8724 45.8492 23.4263 45.667 23.9029 45.3496L30.2311 41.1294C30.6649 40.8405 31.0206 40.4488 31.2666 39.9893C31.5126 39.5297 31.6412 39.0165 31.6411 38.4953V27.5218L45.0372 13.22L45.053 13.2022C45.4692 12.751 45.7432 12.1873 45.841 11.5813C45.9388 10.9753 45.8559 10.354 45.6027 9.79483ZM28.9081 25.823C28.6344 26.1132 28.4804 26.496 28.477 26.8949V38.4953L22.1488 42.7154V26.8949C22.1489 26.4931 21.9962 26.1064 21.7216 25.8131L7.91026 11.0743H42.7155L28.9081 25.823Z"
          fill="white"
        />
      </svg>
    ),
    title: "Funnel Analysis & Conversion Optimization",
    description:
      "Map every step in your key user funnels - signup, activation, purchase, renewal. Identify where users drop off and why. Prioritized fixes with projected impact.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
        <path d="M9.49231 30.059L31.1734 3.26294C31.1955 3.23245 31.2245 3.20761 31.258 3.19043C31.2915 3.17325 31.3286 3.16421 31.3662 3.16406C31.4006 3.16395 31.4346 3.17115 31.466 3.1852C31.4974 3.19924 31.5254 3.21981 31.5482 3.24553C31.5711 3.27126 31.5882 3.30154 31.5984 3.33438C31.6086 3.36722 31.6117 3.40185 31.6075 3.43598L28.477 20.5667H41.1334L19.4504 47.3677C19.4287 47.3968 19.4005 47.4205 19.368 47.4368C19.3356 47.4531 19.2998 47.4616 19.2635 47.4616C19.2294 47.4617 19.1956 47.4543 19.1647 47.4399C19.1337 47.4256 19.1063 47.4046 19.0843 47.3785C19.0624 47.3524 19.0464 47.3217 19.0375 47.2888C19.0287 47.2558 19.0272 47.2213 19.0331 47.1877L22.1488 30.059H9.49231Z" stroke="white" strokeWidth="3.16411" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "A/B Testing & Experimentation",
    description:
      "Design, implement, and analyze controlled experiments. Test layout changes, copy variations, feature rollouts, and pricing presentation. Statistical rigor, not gut feel.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
        <path d="M25.3129 4.21875V10.547M10.5576 25.3023H4.22935M10.4015 10.4035L14.8734 14.8797M40.2327 10.3888L35.7545 14.8649M14.8713 35.7481L10.3994 40.22M23.2035 23.2034L44.2975 32.4848L34.9381 34.938L32.4849 44.2975L23.2035 23.2034Z" stroke="white" strokeWidth="3.16411" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Session Recording & Heatmap Analysis",
    description:
      "Analyze real user behavior using session recordings and heatmaps. Find where users click, where they scroll, where they rage-click, and where they abandon.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
        <path d="M43.0741 12.8896L26.2621 4.45196C25.6715 4.15664 24.9543 4.15664 24.3636 4.45196L7.55167 12.8896C6.89775 13.206 6.47587 13.8388 6.39149 14.556C6.3704 14.7881 4.36646 37.2743 24.4269 46.2182C24.6981 46.3431 24.9932 46.4078 25.2918 46.4078C25.5904 46.4078 25.8854 46.3431 26.1566 46.2182C46.2171 37.2532 44.2343 14.7881 44.1921 14.556C44.1584 14.2019 44.0339 13.8625 43.8307 13.5705C43.6274 13.2786 43.3523 13.0441 43.0319 12.8896H43.0741ZM25.3129 41.9783C11.0955 35.0806 10.4205 20.3358 10.547 16.117L25.3129 8.71296L40.0787 16.117C40.1631 20.3147 39.3826 35.1438 25.3129 41.9994V41.9783Z" fill="white" />
      </svg>
    ),
    title: "Accessibility Audit & Remediation",
    description:
      "WCAG 2.1 compliance audit with a prioritized remediation plan. Accessible products reach more users and reduce legal risk.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
        <path d="M25.3129 4.21875C22.5428 4.21875 19.7998 4.76436 17.2405 5.82444C14.6813 6.88452 12.3559 8.4383 10.3971 10.3971C6.44122 14.353 4.21881 19.7183 4.21881 25.3128C4.21881 30.9073 6.44122 36.2727 10.3971 40.2286C12.3559 42.1874 14.6813 43.7411 17.2405 44.8012C19.7998 45.8613 22.5428 46.4069 25.3129 46.4069C30.9074 46.4069 36.2727 44.1845 40.2286 40.2286C44.1846 36.2727 46.407 30.9073 46.407 25.3128C46.407 22.5427 45.8613 19.7997 44.8013 17.2405C43.7412 14.6812 42.1874 12.3558 40.2286 10.3971C38.2699 8.4383 35.9445 6.88452 33.3852 5.82444C30.826 4.76436 28.083 4.21875 25.3129 4.21875ZM25.3129 8.43756C29.7885 8.43756 34.0808 10.2155 37.2455 13.3802C40.4102 16.5449 42.1881 20.8372 42.1881 25.3128C42.1881 30.3754 40.0787 34.8052 36.4927 37.9693C33.5396 35.227 29.5317 33.7505 25.3129 33.7505C21.0941 33.7505 17.2971 35.227 14.133 37.9693C10.547 34.8052 8.43763 30.3754 8.43763 25.3128C8.43763 20.8372 10.2155 16.5449 13.3803 13.3802C16.545 10.2155 20.8373 8.43756 25.3129 8.43756ZM29.5317 12.4243C28.7301 12.4454 27.9707 12.9728 27.6332 13.7955L24.9121 20.6088L24.7012 21.094C23.2035 21.3682 21.9589 22.3597 21.3894 23.7519C20.5245 25.9246 21.5792 28.3715 23.7519 29.2363C25.9246 30.1012 28.3715 29.0465 29.2364 26.8738C29.7848 25.4816 29.5317 23.8784 28.6247 22.6972L28.8356 22.1487L31.5567 15.3775L31.5778 15.3142C31.9997 14.2384 31.4724 13.015 30.3966 12.572C30.1223 12.4665 29.8481 12.4243 29.5317 12.4243ZM21.0941 12.6564C20.5346 12.6564 19.9981 12.8786 19.6025 13.2742C19.2069 13.6698 18.9847 14.2063 18.9847 14.7658C18.9847 15.3252 19.2069 15.8618 19.6025 16.2574C19.9981 16.653 20.5346 16.8752 21.0941 16.8752C21.6535 16.8752 22.1901 16.653 22.5856 16.2574C22.9812 15.8618 23.2035 15.3252 23.2035 14.7658C23.2035 14.2063 22.9812 13.6698 22.5856 13.2742C22.1901 12.8786 21.6535 12.6564 21.0941 12.6564ZM14.7658 18.9846C14.2064 18.9846 13.6699 19.2068 13.2743 19.6024C12.8787 19.998 12.6564 20.5346 12.6564 21.094C12.6564 21.6535 12.8787 22.19 13.2743 22.5856C13.6699 22.9812 14.2064 23.2034 14.7658 23.2034C15.3253 23.2034 15.8618 22.9812 16.2574 22.5856C16.653 22.19 16.8753 21.6535 16.8753 21.094C16.8753 20.5346 16.653 19.998 16.2574 19.6024C15.8618 19.2068 15.3253 18.9846 14.7658 18.9846ZM35.8599 18.9846C35.3005 18.9846 34.7639 19.2068 34.3683 19.6024C33.9728 19.998 33.7505 20.5346 33.7505 21.094C33.7505 21.6535 33.9728 22.19 34.3683 22.5856C34.7639 22.9812 35.3005 23.2034 35.8599 23.2034C36.4194 23.2034 36.9559 22.9812 37.3515 22.5856C37.7471 22.19 37.9693 21.6535 37.9693 21.094C37.9693 20.5346 37.7471 19.998 37.3515 19.6024C36.9559 19.2068 36.4194 18.9846 35.8599 18.9846Z" fill="white" />
      </svg>
    ),
    title: "Performance-UX Impact Assessment",
    description:
      "Measure how performance issues (load time, interaction latency) affect user behavior and conversion. Make the business case for performance investment.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
        <path d="M38.8553 5.90163L39.6695 6.01976C40.9352 6.22015 42.3527 6.55555 43.2239 7.42673C44.095 8.29792 44.4326 9.71755 44.6329 10.9832L44.7511 11.7953C45.0169 13.7149 45.0865 16.2314 44.6329 19.0243C43.7386 24.5361 40.8044 31.1112 33.4362 36.2054C33.404 36.582 33.392 36.9602 33.4004 37.3381L33.4362 38.4835C33.4573 39.2471 33.4447 40.0086 33.2337 40.7406C32.8329 42.1328 31.4049 43.0504 30.0696 43.7085L29.4157 44.0186L28.5719 44.3899L27.9961 44.6219C26.5047 45.1915 24.7054 45.5901 23.5283 44.411C22.9946 43.8773 22.7478 43.1517 22.5496 42.426L22.4525 42.0632C22.115 40.7828 21.7332 39.5108 21.2565 38.2789C21.1249 38.4389 20.9855 38.5924 20.8388 38.7388C19.6892 39.8863 18.1304 40.4643 16.5715 40.9115L15.5358 41.1962L14.5022 41.4705L13.4939 41.7236L12.5826 41.9345L11.492 42.1666L10.8107 42.2995C10.4709 42.3624 10.1209 42.3417 9.79087 42.2392C9.46084 42.1367 9.1607 41.9554 8.91634 41.7111C8.67198 41.4667 8.49073 41.1665 8.38822 40.8365C8.28571 40.5065 8.26502 40.1565 8.32794 39.8167L8.56208 38.6544L8.83419 37.4352L9.09576 36.3594L9.57038 34.5769C10.0408 32.8472 10.6124 31.0647 11.8907 29.7886L12.0996 29.5882L10.4901 29.0102L8.87216 28.4533C7.92504 28.1411 6.9294 27.812 6.24173 27.1244C4.98453 25.8672 5.51821 23.9054 6.1447 22.3634L6.49486 21.5471L6.78385 20.9122C7.45253 19.4904 8.40176 17.8535 9.9121 17.419C10.6441 17.2081 11.4035 17.1954 12.1692 17.2144L13.3146 17.2524C13.6943 17.2622 14.0719 17.2502 14.4473 17.2165C19.5394 9.84833 26.1166 6.91414 31.6285 6.01976C34.0185 5.62594 36.4536 5.58614 38.8553 5.90163ZM32.3035 10.1837C27.667 10.9368 22.0328 13.4196 17.6368 20.0325C17.1031 20.8341 16.2024 21.2159 15.2848 21.3615C14.7658 21.4459 14.2427 21.4669 13.7175 21.4669L12.1417 21.4437C11.8802 21.4423 11.6179 21.4466 11.3549 21.4564C10.7137 22.3086 10.2665 23.3211 9.93109 24.3273L13.0952 25.4769L14.3967 25.9684C16.7761 26.9008 19.0796 28.0293 20.8515 29.8012C23.8363 32.786 25.353 36.6905 26.4499 40.6794C27.4117 40.3419 28.3779 39.9116 29.1963 39.2978L29.209 38.511L29.1858 36.9373C29.1858 36.4142 29.2069 35.8911 29.2912 35.3679C29.4347 34.4503 29.8186 33.5496 30.6202 33.016C37.2331 28.6199 39.7159 22.9857 40.469 18.3492C40.8487 16.0078 40.7854 13.9153 40.5723 12.3733C40.4903 11.7336 40.3541 11.102 40.1652 10.4854C39.5485 10.2972 38.9169 10.1617 38.2773 10.0804C36.2916 9.82303 34.2789 9.85646 32.3035 10.1837ZM14.8713 32.7713C14.133 33.6635 13.7892 34.8343 13.5129 35.9944L13.285 36.9816L13.169 37.4584L14.633 37.1145C15.7931 36.8403 16.966 36.4923 17.8561 35.754C18.2517 35.3582 18.4738 34.8214 18.4736 34.2619C18.4734 33.7023 18.2509 33.1657 17.8551 32.7702C17.4593 32.3747 16.9225 32.1526 16.363 32.1528C15.8034 32.153 15.2668 32.3754 14.8713 32.7713ZM26.8042 17.8577C27.1959 17.4659 27.661 17.1551 28.1728 16.943C28.6846 16.7308 29.2332 16.6216 29.7872 16.6215C30.3413 16.6214 30.8899 16.7305 31.4018 16.9424C31.9137 17.1543 32.3789 17.465 32.7707 17.8567C33.1625 18.2484 33.4734 18.7134 33.6855 19.2253C33.8976 19.7371 34.0068 20.2857 34.0069 20.8397C34.007 21.3937 33.898 21.9424 33.6861 22.4543C33.4741 22.9662 33.1634 23.4313 32.7717 23.8232C31.9804 24.6145 30.9071 25.0591 29.788 25.0591C28.6689 25.0591 27.5956 24.6145 26.8042 23.8232C26.0129 23.0318 25.5683 21.9585 25.5683 20.8394C25.5683 19.7203 26.0129 18.647 26.8042 17.8556V17.8577Z" fill="white" />
      </svg>
    ),
    title: "Onboarding Optimization",
    description:
      "Improve the first-use experience - reduce time-to-value, improve activation rates, and increase the percentage of signups who become active users.",
  },
];

export const optimizationProcessSectionHead = {
  badgeText: "Our Optimization Process",
  title: "How we Optimize Customer Experiences",
  description:
    "We combine measurement, experimentation, and continuous monitoring to identify opportunities, validate improvements, and deliver meaningful business impact.",
};

export const instrumentMeasureData = {
  badgeText: "Step 01",
  title: "Instrument & Measure",
  description:
    "Establish baseline metrics. If you can't measure it, you can't improve it.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/instrument-measure.png",
  imageAlt: "Instrument and measure",
};

export const identifyOpportunitiesData = {
  badgeText: "Step 02",
  title: "Identify Opportunities",
  description:
    "Combine quantitative (analytics, funnel data) with qualitative (session recordings, user interviews) to identify the highest-impact improvement opportunities.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/identify-opportunities.png",
  imageAlt: "Identify opportunities",
};

export const hypothesizeData = {
  badgeText: "Step 03",
  title: "Hypothesize",
  description:
    "For each opportunity, form a specific, testable hypothesis about what change will improve which metric by approximately how much.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/hypothesize.png",
  imageAlt: "Hypothesize",
};

export const designTestData = {
  badgeText: "Step 04",
  title: "Design & Test",
  description:
    "Design the change, implement the test, collect data with statistical significance.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/design-test.png",
  imageAlt: "Design and test",
};

export const implementMonitorData = {
  badgeText: "Step 05",
  title: "Implement & Monitor",
  description:
    "Roll out winning variations. Monitor for regressions. Document learnings.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/implement-monitor.png",
  imageAlt: "Implement and monitor",
};

export const cxToolsData = {
  badge: "Tools We Use",
  title: "Built with Industry-Leading Platforms",
  description:
    "We use trusted, industry-leading platforms to uncover insights, validate decisions, and optimize experiences through data-driven experimentation and continuous improvement.",

  tabs: ["Analytics", "Session Recording", "A/B Testing", "Accessibility"],

  technologies: {
    Analytics: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mixpanel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Mixpanel_v5pw9e.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Amplitude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Amplitude_nlbsxg.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Analytics 4",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Google_Analytics_4_csiihb.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostHog",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/PostHog_fxlifh.png",
      },
    ],
    "Session Recording": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Hotjar",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Hotjar_ei3k1j.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "FullStory",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/FullStory_e1mekd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Microsoft Clarity",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Microsoft_Clarity_a8l3wm.png",
      },
    ],
    "A/B Testing": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Optimizely",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Optimizely_lf2i5p.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "VWO",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/VWO_kqz4nd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LaunchDarkly",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/LaunchDarkly_zquuun.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "GrowthBook",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/GrowthBook_kmngex.png",
      },
    ],
    Accessibility: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Axe",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Axe_x4gssd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "WAVE",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/WAVE_qnwohi.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Lighthouse",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312782/Gloitel/icon/Lighthouse_xcj1md.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Screen Reader testing",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785312783/Gloitel/icon/Screen_Reader_testing_l767ar.png",
      },
    ],
  },
};

export const cxOptimizationCTAData = {
  badgeText: "Better Experiences Drive Better Outcomes",
  title: "The Best Opportunities are Already in Front of You",
  description:
    "Reveal hidden friction, improve critical journeys, and unlock measurable gains from the experiences you already have.",
  buttonText: "Start a CX Optimization Engagement",
  buttonLink: "/contact",
};
