export const uxDesignHeroData = {
  badgeText: "UI/UX Design",
  title: "Where great User Experience meets Engineering Reality.",
  description:
    "Good UI/UX design is the intersection of three things: what users need, what looks right, and what your engineering team can actually ship. Designs that fail usually optimize for only one of these.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "UI/UX design",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start a Design Project",
    href: "/contact",
  },
  secondaryButton: {
    text: "See Our Portfolio",
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

export const designProcessSectionHead = {
  badgeText: "Our Design Process",
  title: "Every Great Product starts with the Right Foundation.",
  description:
    "Every successful agent starts with a clear process. From workflow analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments.",
};

export const discoveryResearchData = {
  badgeText: "Step 01",
  title: "Discovery & Research",
  description:
    "Before opening Figma, we understand the user, the use case, the technical constraints, and the business objective.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/discovery-research.png",
  imageAlt: "Discovery and research",
};

export const informationArchitectureData = {
  badgeText: "Step 02",
  title: "Information Architecture",
  description:
    "Define the structure and organization of the interface - navigation, content hierarchy, and user flows - before designing individual screens.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/information-architecture.png",
  imageAlt: "Information architecture",
};

export const wireframingData = {
  badgeText: "Step 03",
  title: "Wireframing",
  description:
    "Low-fidelity wireframes for every key user flow. Fast to produce, fast to iterate and unambiguous about layout and hierarchy without getting distracted by visual details.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/wireframing.png",
  imageAlt: "Wireframing",
};

export const visualDesignData = {
  badgeText: "Step 04",
  title: "Visual Design",
  description:
    "Apply visual language - color, typography, iconography, spacing - to wireframes. Design that is consistent with your brand and optimized for the target platform (web, iOS, Android).",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/visual-design.png",
  imageAlt: "Visual design",
};

export const interactivePrototypeData = {
  badgeText: "Step 05",
  title: "Interactive Prototype",
  description:
    "High-fidelity prototype for user testing, stakeholder review, and developer reference. Clickable, realistic, and testable.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/interactive-prototype.png",
  imageAlt: "Interactive prototype",
};

export const designHandoffData = {
  badgeText: "Step 06",
  title: "Design Handoff",
  description:
    "Developer-ready Figma files with component specs, design tokens, and interaction documentation. Plus availability during development to answer questions and review implementation.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/design-handoff.png",
  imageAlt: "Design handoff",
};

export const whatWeDesignSectionHead = {
  badgeText: "What We Design",
  title: "From First Click to Daily Use",
  description:
    "We design the touchpoints that define a product experience—from acquisition and onboarding to everyday interactions and decision-making.",
};

export const whatWeDesignData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/web-applications.png",
    imageAlt: "Web applications",
    title: "Web Applications",
    description:
      "Complex dashboard interfaces, multi-step workflows, data visualization, admin panels, and customer-facing products.",
    buttonText: "View More",
    buttonLink: "/",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/mobile-applications.png",
    imageAlt: "Mobile applications",
    title: "Mobile Applications",
    description:
      "iOS and Android native experiences, React Native and Flutter - designed to accommodate while minimizing brand consistency.",
    buttonText: "View More",
    buttonLink: "/",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/landing-pages-marketing.png",
    imageAlt: "Landing pages and marketing sites",
    title: "Landing Pages & Marketing Sites",
    description:
      "Conversion-optimized pages with clear hierarchy, compelling visuals, and measurable CTAs.",
    buttonText: "View More",
    buttonLink: "/",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/onboarding-flows.png",
    imageAlt: "Onboarding flows",
    title: "Onboarding Flows",
    description:
      "First-time experiences that turn signups into active users. Motivated, setup wizards, matrix, and progressive feature introduction.",
    buttonText: "View More",
    buttonLink: "/",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    image: "/images/What-we-do/data-dashboards.png",
    imageAlt: "Data dashboards",
    title: "Data Dashboards",
    description:
      "Analytics and reporting interfaces where information hierarchy, chart type selection, and interaction design determine whether data is actually usable.",
    buttonText: "View More",
    buttonLink: "/",
  },
];

export const designStandardsSectionHead = {
  badgeText: "What We Walk Away With",
  title: "A Clear AI Roadmap backed by Business Value",
  description:
    "Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.",
};

export const designStandardsData = [
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
          d="M19.0839 3.97656C20.9543 3.97599 22.7756 4.57499 24.2805 5.68563C25.7854 6.79628 26.8947 8.36008 27.4455 10.1475C27.9963 11.9349 27.9596 13.8519 27.3408 15.6169C26.7221 17.382 25.5538 18.9022 24.0075 19.9545C26.6914 20.9389 29.0193 22.704 30.6915 25.0227C32.3637 27.3414 33.3036 30.1075 33.3904 32.9649C33.3985 33.1235 33.3749 33.2821 33.3208 33.4315C33.2668 33.5808 33.1835 33.7179 33.0758 33.8346C32.9681 33.9513 32.8382 34.0454 32.6937 34.1112C32.5492 34.177 32.393 34.2134 32.2342 34.218C32.0755 34.2227 31.9174 34.1956 31.7692 34.1383C31.6211 34.0811 31.4859 33.9948 31.3715 33.8846C31.2572 33.7744 31.166 33.6425 31.1033 33.4966C31.0406 33.3506 31.0077 33.1937 31.0065 33.0349C30.9118 29.9361 29.6143 26.9959 27.3888 24.8374C25.1634 22.679 22.1849 21.4718 19.0847 21.4718C15.9844 21.4718 13.006 22.679 10.7806 24.8374C8.55513 26.9959 7.25757 29.9361 7.16287 33.0349C7.15338 33.3512 7.01862 33.6508 6.78822 33.8678C6.55783 34.0847 6.25068 34.2013 5.93435 34.1918C5.61802 34.1823 5.31841 34.0476 5.10144 33.8172C4.88446 33.5868 4.7679 33.2796 4.77739 32.9633C4.86446 30.1061 5.80457 27.3404 7.47674 25.022C9.1489 22.7037 11.4766 20.9388 14.1603 19.9545C12.614 18.9022 11.4457 17.382 10.827 15.6169C10.2082 13.8519 10.1715 11.9349 10.7223 10.1475C11.2731 8.36008 12.3824 6.79628 13.8873 5.68563C15.3922 4.57499 17.2135 3.97599 19.0839 3.97656ZM12.7226 12.7233C12.7226 14.4104 13.3928 16.0284 14.5858 17.2214C15.7788 18.4144 17.3968 19.0846 19.0839 19.0846C20.771 19.0846 22.389 18.4144 23.582 17.2214C24.775 16.0284 25.4452 14.4104 25.4452 12.7233C25.4452 11.0362 24.775 9.41818 23.582 8.22521C22.389 7.03224 20.771 6.36204 19.0839 6.36204C17.3968 6.36204 15.7788 7.03224 14.5858 8.22521C13.3928 9.41818 12.7226 11.0362 12.7226 12.7233Z"
          fill="white"
        />
      </svg>
    ),
    title: "WCAG 2.1 AA accessibility compliance by default",
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
          d="M6.36133 15.9022C6.36133 9.90514 6.36133 6.9058 8.22518 5.04354C10.089 3.18128 13.0868 3.17969 19.0839 3.17969C25.081 3.17969 28.0803 3.17969 29.9426 5.04354C31.8048 6.90739 31.8064 9.90514 31.8064 15.9022V22.2635C31.8064 28.2606 31.8064 31.2599 29.9426 33.1222C28.0787 34.9845 25.081 34.9861 19.0839 34.9861C13.0868 34.9861 10.0874 34.9861 8.22518 33.1222C6.36292 31.2583 6.36133 28.2606 6.36133 22.2635V15.9022Z"
          stroke="white"
          strokeWidth="2.38548"
        />
        <path
          d="M23.855 30.2155H14.3131M26.6349 3.78125L26.5013 3.98163C25.299 5.78505 24.6979 6.68676 23.82 7.23224C23.6451 7.34144 23.4643 7.43845 23.2777 7.52327C22.3362 7.95265 21.2516 7.95265 19.084 7.95265C16.9164 7.95265 15.8334 7.95265 14.892 7.52327C14.7046 7.43809 14.5229 7.34088 14.3481 7.23224C13.4702 6.68676 12.8691 5.78505 11.6668 3.98163L11.5332 3.78125"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Mobile-first responsive design",
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
          d="M19.0838 34.9861C16.9104 34.9861 14.8562 34.5683 12.9214 33.7329C10.9865 32.8974 9.29703 31.7577 7.85302 30.3137C6.40901 28.8697 5.26928 27.1802 4.43384 25.2454C3.59839 23.3105 3.18066 21.2563 3.18066 19.0829C3.18066 16.8829 3.61164 14.8155 4.47359 12.8806C5.33555 10.9457 6.50178 9.26265 7.97229 7.83137C9.44281 6.40008 11.1588 5.26725 13.1202 4.43286C15.0815 3.59847 17.1755 3.18075 19.4019 3.17969C21.5223 3.17969 23.5235 3.5444 25.4054 4.27383C27.2872 5.00325 28.9375 6.01045 30.356 7.29543C31.7746 8.58041 32.9011 10.1045 33.7354 11.8676C34.5698 13.6307 34.987 15.5322 34.987 17.5721C34.987 20.6202 34.0593 22.9595 32.204 24.5901C30.3486 26.2207 28.0956 27.0355 25.4451 27.0345H22.503C22.2645 27.0345 22.0991 27.1007 22.0069 27.2332C21.9146 27.3658 21.868 27.5116 21.8669 27.6706C21.8669 27.9887 22.0657 28.4461 22.4633 29.043C22.8609 29.6399 23.0596 30.3222 23.0596 31.0898C23.0596 32.415 22.6955 33.3957 21.9671 34.0319C21.2387 34.668 20.2776 34.9861 19.0838 34.9861ZM12.0467 19.9973C12.4973 19.5467 12.7226 18.9768 12.7226 18.2877C12.7226 17.5986 12.4973 17.0287 12.0467 16.5781C11.5961 16.1275 11.0262 15.9022 10.3371 15.9022C9.64796 15.9022 9.07809 16.1275 8.6275 16.5781C8.17691 17.0287 7.95162 17.5986 7.95162 18.2877C7.95162 18.9768 8.17691 19.5467 8.6275 19.9973C9.07809 20.4479 9.64796 20.6732 10.3371 20.6732C11.0262 20.6732 11.5961 20.4479 12.0467 19.9973ZM16.8176 13.636C17.2682 13.1854 17.4935 12.6156 17.4935 11.9264C17.4935 11.2373 17.2682 10.6674 16.8176 10.2168C16.3671 9.76626 15.7972 9.54096 15.1081 9.54096C14.4189 9.54096 13.849 9.76626 13.3985 10.2168C12.9479 10.6674 12.7226 11.2373 12.7226 11.9264C12.7226 12.6156 12.9479 13.1854 13.3985 13.636C13.849 14.0866 14.4189 14.3119 15.1081 14.3119C15.7972 14.3119 16.3671 14.0866 16.8176 13.636ZM24.7692 13.636C25.2198 13.1854 25.4451 12.6156 25.4451 11.9264C25.4451 11.2373 25.2198 10.6674 24.7692 10.2168C24.3186 9.76626 23.7488 9.54096 23.0596 9.54096C22.3705 9.54096 21.8006 9.76626 21.35 10.2168C20.8995 10.6674 20.6742 11.2373 20.6742 11.9264C20.6742 12.6156 20.8995 13.1854 21.35 13.636C21.8006 14.0866 22.3705 14.3119 23.0596 14.3119C23.7488 14.3119 24.3186 14.0866 24.7692 13.636ZM29.5402 19.9973C29.9908 19.5467 30.2161 18.9768 30.2161 18.2877C30.2161 17.5986 29.9908 17.0287 29.5402 16.5781C29.0896 16.1275 28.5197 15.9022 27.8306 15.9022C27.1415 15.9022 26.5716 16.1275 26.121 16.5781C25.6704 17.0287 25.4451 17.5986 25.4451 18.2877C25.4451 18.9768 25.6704 19.5467 26.121 19.9973C26.5716 20.4479 27.1415 20.6732 27.8306 20.6732C28.5197 20.6732 29.0896 20.4479 29.5402 19.9973ZM19.0838 31.8054C19.3224 31.8054 19.5148 31.7392 19.6611 31.6066C19.8074 31.4741 19.8801 31.3018 19.879 31.0898C19.879 30.7187 19.6802 30.2814 19.2826 29.7778C18.8851 29.2742 18.6863 28.5188 18.6863 27.5116C18.6863 26.3983 19.0706 25.5104 19.8392 24.8478C20.6079 24.1851 21.5488 23.8538 22.6621 23.8538H25.4451C27.1945 23.8538 28.692 23.3439 29.9378 22.3239C31.1835 21.304 31.8064 19.7201 31.8064 17.5721C31.8064 14.3649 30.5808 11.6943 28.1296 9.56004C25.6784 7.42584 22.7691 6.35926 19.4019 6.36032C15.7972 6.36032 12.7226 7.59282 10.1781 10.0578C7.63355 12.5228 6.3613 15.5312 6.3613 19.0829C6.3613 22.6081 7.60069 25.6101 10.0795 28.0888C12.5582 30.5676 15.5597 31.8065 19.0838 31.8054Z"
          fill="white"
        />
      </svg>
    ),
    title: "Design token systems for consistent theming",
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
          d="M24.4749 6.98069C24.6748 7.1808 24.9245 7.32397 25.1981 7.39544C25.4718 7.46691 25.7596 7.4641 26.0318 7.3873C26.3041 7.31049 26.5509 7.16247 26.7468 6.95849C26.9428 6.75451 27.0808 6.50196 27.1466 6.22688C27.3117 5.5397 27.657 4.90894 28.1469 4.39957C28.6368 3.89019 29.2536 3.52061 29.9338 3.32888C30.6141 3.13715 31.3331 3.1302 32.0169 3.30876C32.7007 3.48731 33.3246 3.84491 33.8242 4.34472C34.3239 4.84454 34.6813 5.46851 34.8596 6.15237C35.0379 6.83624 35.0307 7.55527 34.8388 8.23544C34.6468 8.9156 34.277 9.5323 33.7675 10.022C33.258 10.5118 32.6271 10.8568 31.9398 11.0217C31.6648 11.0875 31.4122 11.2255 31.2082 11.4215C31.0043 11.6175 30.8562 11.8643 30.7794 12.1365C30.7026 12.4087 30.6998 12.6965 30.7713 12.9702C30.8428 13.2439 30.9859 13.4935 31.186 13.6934L33.8625 16.3683C34.219 16.7248 34.5019 17.148 34.6948 17.6138C34.8877 18.0796 34.987 18.5788 34.987 19.083C34.987 19.5872 34.8877 20.0864 34.6948 20.5522C34.5019 21.018 34.219 21.4412 33.8625 21.7977L31.186 24.4742C30.9861 24.6743 30.7365 24.8175 30.4628 24.8889C30.1891 24.9604 29.9013 24.9576 29.6291 24.8808C29.3569 24.804 29.1101 24.656 28.9141 24.452C28.7181 24.248 28.5801 23.9955 28.5143 23.7204C28.3492 23.0332 28.0039 22.4024 27.514 21.8931C27.0241 21.3837 26.4073 21.0141 25.7271 20.8224C25.0469 20.6306 24.3278 20.6237 23.644 20.8023C22.9602 20.9808 22.3364 21.3384 21.8367 21.8382C21.3371 22.338 20.9797 22.962 20.8013 23.6459C20.623 24.3297 20.6302 25.0488 20.8222 25.7289C21.0141 26.4091 21.3839 27.0258 21.8934 27.5155C22.403 28.0053 23.0339 28.3503 23.7211 28.5152C23.9962 28.581 24.2487 28.719 24.4527 28.915C24.6567 29.1109 24.8047 29.3578 24.8815 29.63C24.9583 29.9022 24.9611 30.19 24.8896 30.4637C24.8182 30.7374 24.675 30.987 24.4749 31.1869L21.7984 33.8618C21.4419 34.2183 21.0187 34.5011 20.5529 34.6941C20.0871 34.887 19.5879 34.9863 19.0837 34.9863C18.5796 34.9863 18.0803 34.887 17.6145 34.6941C17.1488 34.5011 16.7255 34.2183 16.369 33.8618L13.6925 31.1853C13.4926 30.9852 13.243 30.8421 12.9693 30.7706C12.6956 30.6991 12.4078 30.7019 12.1356 30.7787C11.8634 30.8555 11.6166 31.0036 11.4206 31.2075C11.2246 31.4115 11.0866 31.6641 11.0208 31.9391C10.8557 32.6263 10.5105 33.2571 10.0205 33.7665C9.53064 34.2758 8.91382 34.6454 8.23359 34.8371C7.55336 35.0289 6.83433 35.0358 6.15052 34.8573C5.46672 34.6787 4.84287 34.3211 4.34322 33.8213C3.84357 33.3215 3.48617 32.6975 3.30785 32.0136C3.12952 31.3298 3.1367 30.6107 3.32866 29.9306C3.52062 29.2504 3.8904 28.6337 4.39994 28.144C4.90948 27.6543 5.54035 27.3092 6.22758 27.1443C6.50267 27.0785 6.75522 26.9405 6.9592 26.7445C7.16317 26.5486 7.3112 26.3018 7.388 26.0295C7.46481 25.7573 7.46762 25.4695 7.39615 25.1958C7.32468 24.9222 7.1815 24.6725 6.9814 24.4726L4.30489 21.7977C3.94838 21.4412 3.66558 21.018 3.47264 20.5522C3.2797 20.0864 3.18039 19.5872 3.18039 19.083C3.18039 18.5788 3.2797 18.0796 3.47264 17.6138C3.66558 17.148 3.94838 16.7248 4.30489 16.3683L6.9814 13.6918C7.1813 13.4917 7.43096 13.3486 7.70464 13.2771C7.97831 13.2056 8.2661 13.2084 8.53833 13.2852C8.81055 13.362 9.05737 13.5101 9.25333 13.714C9.44928 13.918 9.5873 14.1706 9.65313 14.4456C9.81821 15.1328 10.1635 15.7636 10.6534 16.273C11.1433 16.7823 11.7601 17.1519 12.4403 17.3436C13.1206 17.5354 13.8396 17.5423 14.5234 17.3638C15.2072 17.1852 15.8311 16.8276 16.3307 16.3278C16.8304 15.828 17.1878 15.204 17.3661 14.5201C17.5444 13.8363 17.5372 13.1172 17.3453 12.4371C17.1533 11.7569 16.7835 11.1402 16.274 10.6505C15.7645 10.1607 15.1336 9.81569 14.4463 9.65083C14.1713 9.585 13.9187 9.44699 13.7147 9.25103C13.5108 9.05507 13.3627 8.80825 13.2859 8.53603C13.2091 8.2638 13.2063 7.97602 13.2778 7.70234C13.3493 7.42867 13.4924 7.17901 13.6925 6.9791L16.369 4.30418C16.7255 3.94768 17.1488 3.66488 17.6145 3.47194C18.0803 3.27899 18.5796 3.17969 19.0837 3.17969C19.5879 3.17969 20.0871 3.27899 20.5529 3.47194C21.0187 3.66488 21.4419 3.94768 21.7984 4.30418L24.4749 6.98069Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Component-based design matched to the frontend framework",
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
          d="M24.6537 32.2683C22.8911 33.0128 20.9971 33.3964 19.0837 33.3962C15.4765 33.3975 12.0018 32.0367 9.3548 29.5861C6.70783 27.1355 5.08381 23.7757 4.80765 20.1791C4.5315 16.5825 5.62358 13.0142 7.8654 10.1882C10.1072 7.3622 13.3334 5.4869 16.8986 4.9375C15.889 7.15755 15.6364 9.64771 16.1796 12.0253C16.7228 14.4028 18.0318 16.5362 19.9053 18.0976C21.7788 19.6589 24.1132 20.5618 26.5497 20.6675C28.9863 20.7732 31.3901 20.0759 33.3918 18.6826C33.4453 20.5953 33.1149 22.4992 32.4199 24.282C31.725 26.0647 30.6796 27.69 29.3457 29.0617C28.0117 30.4335 26.4163 31.5238 24.6537 32.2683Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dark mode variants where relevant",
  },
];

export const uxDesignCTAData = {
  badgeText: "Design Beyond Aesthetics",
  title: "Create Experiences People Love to Use",
  description:
    "From wireframes and prototypes to develop-ready handoff, our design experience thinking through every screen and interaction.",
  buttonText: "Start Your Design Project",
  buttonLink: "/contact",
};
