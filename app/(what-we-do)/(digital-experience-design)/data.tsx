import { ArchitectureItem } from "../../uiComponents/ArchitectureCircle";

export const uxResearchHeroData = {
  badgeText: "UX Research & Strategy",
  title: "Design the Right Thing, then Design It Right",
  description:
    "The most expensive design mistake is building a beautiful interface for the wrong user flow. UX research is the work that tells you what's actually worth designing before you spend time and money designing it.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "UX research and strategy",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Start a Research Engagement",
    href: "/contact",
  },
  secondaryButton: {
    text: "View Research Case Studies",
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

export const researchMethodsSectionHead = {
  badgeText: "Research Methods We Use",
  title: "Understanding Reality before Building Solutions",
  description:
    "The fastest way to waste time is solving the wrong problem. We use a structured research process to uncover user needs, operational constraints, and business opportunities before product decisions are made.",
};

export const researchMethodsData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M28.2971 24.0288C27.4377 23.1688 26.4336 22.4668 25.3308 21.9551C26.886 20.6951 27.8783 18.7725 27.8783 16.6164C27.8783 12.8123 24.7059 9.69143 20.9018 9.7498C17.1561 9.80816 14.1383 12.8603 14.1383 16.6164C14.1383 18.7725 15.1339 20.6951 16.6858 21.9551C15.5827 22.4665 14.5785 23.1685 13.7194 24.0288C11.8448 25.9068 10.7805 28.3856 10.7119 31.0293C10.7109 31.0659 10.7174 31.1024 10.7308 31.1365C10.7442 31.1706 10.7642 31.2017 10.7898 31.2279C10.8154 31.2542 10.846 31.275 10.8798 31.2893C10.9136 31.3035 10.9499 31.3108 10.9865 31.3108H12.9092C13.0568 31.3108 13.1804 31.1941 13.1838 31.0464C13.2491 29.0551 14.0559 27.1909 15.4738 25.7764C16.1994 25.0469 17.0625 24.4686 18.013 24.0749C18.9636 23.6813 19.9828 23.4801 21.0117 23.4829C23.1026 23.4829 25.0698 24.2966 26.5496 25.7764C27.9641 27.1909 28.7709 29.0551 28.8396 31.0464C28.843 31.1941 28.9666 31.3108 29.1142 31.3108H31.0369C31.0735 31.3108 31.1098 31.3035 31.1436 31.2893C31.1774 31.275 31.208 31.2542 31.2336 31.2279C31.2592 31.2017 31.2792 31.1706 31.2926 31.1365C31.306 31.1024 31.3125 31.0659 31.3115 31.0293C31.2429 28.3856 30.1786 25.9068 28.2971 24.0288ZM21.0117 21.011C19.8375 21.011 18.732 20.5543 17.9046 19.7235C17.4893 19.3115 17.1613 18.8201 16.9401 18.2786C16.7189 17.7371 16.6091 17.1566 16.6171 16.5717C16.6274 15.4456 17.0772 14.3573 17.8634 13.5504C18.6874 12.7059 19.7895 12.2355 20.9671 12.2218C22.131 12.2115 23.2605 12.6647 24.0914 13.4783C24.9428 14.3126 25.4097 15.4284 25.4097 16.6164C25.4097 17.7905 24.9531 18.8926 24.1223 19.7235C23.7146 20.1331 23.2298 20.4577 22.6959 20.6787C22.162 20.8997 21.5896 21.0126 21.0117 21.011ZM12.4113 17.5227C12.3804 17.224 12.3633 16.9219 12.3633 16.6164C12.3633 16.0705 12.4148 15.5383 12.5109 15.0199C12.5349 14.8963 12.4697 14.7693 12.3564 14.7178C11.8895 14.5083 11.4603 14.2199 11.0895 13.856C10.6526 13.4324 10.3088 12.9223 10.08 12.3583C9.85125 11.7944 9.74254 11.189 9.76084 10.5807C9.79174 9.47857 10.2346 8.43142 11.0071 7.64176C11.8551 6.77314 12.995 6.29935 14.2069 6.31308C15.3022 6.32338 16.3596 6.74568 17.1596 7.49413C17.4308 7.7482 17.6643 8.02972 17.86 8.33185C17.9286 8.43828 18.0625 8.48292 18.1792 8.44172C18.7835 8.23229 19.4221 8.08466 20.0779 8.01599C20.2701 7.99539 20.38 7.78939 20.2941 7.61773C19.1783 5.41013 16.8986 3.88575 14.2619 3.84456C10.4544 3.78619 7.28201 6.90704 7.28201 10.7077C7.28201 12.8638 8.27423 14.7864 9.82951 16.0464C8.73772 16.5511 7.73177 17.2481 6.85972 18.1201C4.97828 19.9981 3.91397 22.477 3.8453 25.124C3.84438 25.1607 3.85081 25.1971 3.8642 25.2312C3.8776 25.2654 3.89768 25.2965 3.92328 25.3227C3.94888 25.3489 3.97946 25.3698 4.01324 25.384C4.04702 25.3982 4.08331 25.4056 4.11996 25.4056H6.04603C6.19366 25.4056 6.31726 25.2888 6.3207 25.1412C6.38593 23.1499 7.19275 21.2856 8.61069 19.8711C9.62008 18.8617 10.8561 18.1613 12.2053 17.8214C12.3392 17.7871 12.4285 17.6601 12.4113 17.5227Z"
          fill="white"
        />
      </svg>
    ),
    title: "User Interviews",
    description:
      "1:1 conversations with real users. We recruit, moderate, and synthesize insights from 8-12 interviews to surface meaningful patterns.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M2.92969 11.7188L5.85942 14.6485L11.7189 8.78906M17.5784 11.7188H32.227M2.92969 23.4377L5.85942 26.3675L11.7189 20.508M17.5784 23.4377H32.227"
          stroke="white"
          strokeWidth="2.1973"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Survey Research",
    description:
      "Quantitative validation of qualitative insights. Large-sample data that confirms (or challenges) what interviews revealed.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M4.39453 19.0431C9.66805 7.32417 25.4886 7.32417 30.7621 19.0431"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8965 24.568C16.4296 24.7888 17.0011 24.9025 17.5782 24.9025C18.7437 24.9025 19.8615 24.4395 20.6856 23.6153C21.5098 22.7912 21.9728 21.6734 21.9728 20.5079C21.9728 19.3424 21.5098 18.2246 20.6856 17.4004C19.8615 16.5763 18.7437 16.1133 17.5782 16.1133C17.0011 16.1133 16.4296 16.227 15.8965 16.4478C15.3633 16.6686 14.8788 16.9924 14.4707 17.4004C14.0627 17.8085 13.739 18.293 13.5181 18.8261C13.2973 19.3593 13.1836 19.9308 13.1836 20.5079C13.1836 21.085 13.2973 21.6564 13.5181 22.1896C13.739 22.7228 14.0627 23.2073 14.4707 23.6153C14.8788 24.0234 15.3633 24.3471 15.8965 24.568Z"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Contextual Inquiry",
    description:
      "Observe users performing real tasks in their actual environment. The gap between what users say and do often reveals the most valuable insights.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
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
    title: "Competitive Analysis",
    description:
      "Systematic review of how competitors solve the same problems. Not to copy but to understand established patterns and identify differentiation opportunities.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "bottom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M27.4207 15.696C27.1366 15.9655 26.7598 16.1158 26.3682 16.1158C25.9766 16.1158 25.5998 15.9655 25.3157 15.696C22.7302 13.2306 19.2658 10.4752 20.9548 6.47613C21.8689 4.31399 24.0603 2.92969 26.3675 2.92969C28.6746 2.92969 30.8675 4.31399 31.7801 6.47466C33.4677 10.4708 30.0135 13.238 27.4207 15.696Z"
          stroke="white"
          strokeWidth="2.1973"
        />
        <path
          d="M26.5654 8.78809H26.3823M26.7485 8.78809C26.7485 8.88522 26.71 8.97837 26.6413 9.04705C26.5726 9.11572 26.4795 9.15431 26.3823 9.15431C26.2852 9.15431 26.1921 9.11572 26.1234 9.04705C26.0547 8.97837 26.0161 8.88522 26.0161 8.78809C26.0161 8.69096 26.0547 8.59782 26.1234 8.52914C26.1921 8.46046 26.2852 8.42188 26.3823 8.42188C26.4795 8.42188 26.5726 8.46046 26.6413 8.52914C26.71 8.59782 26.7485 8.69096 26.7485 8.78809Z"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.32429 32.2267C9.75136 32.2267 11.7189 30.2592 11.7189 27.8321C11.7189 25.405 9.75136 23.4375 7.32429 23.4375C4.89722 23.4375 2.92969 25.405 2.92969 27.8321C2.92969 30.2592 4.89722 32.2267 7.32429 32.2267Z"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1134 10.253H13.9161C11.0845 10.253 8.78906 12.2203 8.78906 14.6476C8.78906 17.0748 11.0845 19.0422 13.9161 19.0422H18.3107C21.1423 19.0422 23.4377 21.0095 23.4377 23.4368C23.4377 25.864 21.1423 27.8314 18.3107 27.8314H16.1134M26.5652 8.78809H26.3821M26.7483 8.78809C26.7483 8.88522 26.7097 8.97837 26.6411 9.04705C26.5724 9.11573 26.4792 9.15431 26.3821 9.15431C26.285 9.15431 26.1918 9.11573 26.1232 9.04705C26.0545 8.97837 26.0159 8.88522 26.0159 8.78809C26.0159 8.69096 26.0545 8.59782 26.1232 8.52914C26.1918 8.46046 26.285 8.42188 26.3821 8.42188C26.4792 8.42188 26.5724 8.46046 26.6411 8.52914C26.7097 8.59782 26.7483 8.69096 26.7483 8.78809Z"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Journey Mapping",
    description:
      "Map the end-to-end user experience - across channels, touchpoints, and time - to identify where value is created and where it's destroyed. Foundation for every product strategy decision.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M13.1836 19.629L15.6944 21.9727L21.9728 16.1133"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.7621 23.4387C30.7621 27.5829 30.7621 29.6542 29.4745 30.9418C28.1884 32.2279 26.1156 32.2279 21.9729 32.2279H13.1837C9.04109 32.2279 6.9683 32.2279 5.68215 30.9418C4.39453 29.6527 4.39453 27.5829 4.39453 23.4387V19.0441M23.4378 5.86328C26.6239 5.88086 28.3495 6.02295 29.4745 7.14797C30.7621 8.43559 30.7621 10.5069 30.7621 14.6495V17.5793M11.7189 5.86328C8.53278 5.88086 6.80717 6.02295 5.68215 7.14797C4.55713 8.27299 4.41504 9.9986 4.39746 13.1847"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
        />
        <path
          d="M11.7188 5.12699C11.7187 4.54423 11.9503 3.98534 12.3623 3.57326C12.7744 3.16119 13.3333 2.92969 13.916 2.92969H21.2404C21.8231 2.92969 22.382 3.16119 22.7941 3.57326C23.2062 3.98534 23.4377 4.54423 23.4377 5.12699V6.59185C23.4377 7.17461 23.2062 7.73351 22.7941 8.14558C22.382 8.55765 21.8231 8.78915 21.2404 8.78915H13.916C13.3333 8.78915 12.7744 8.55765 12.3623 8.14558C11.9503 7.73351 11.7188 7.17461 11.7188 6.59185V5.12699Z"
          stroke="white"
          strokeWidth="2.1973"
        />
      </svg>
    ),
    title: "Usability Testing",
    description:
      "Test existing or prototype interfaces with real users. Identify friction points, confusion, and failure modes before production.",
  },
];

export const deliverablesSectionHead = {
  badgeText: "Research Deliverables",
  title: "Outputs of the Research Process",
  description:
    "A structured set of deliverables designed to capture insights, communicate findings, and provide clear direction for product and UX teams.",
};

export const deliverablesData = [
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
          d="M4.771 22.2635V15.9022C4.771 9.90514 4.771 6.9058 6.63485 5.04354C8.4987 3.18128 11.4965 3.17969 17.4935 3.17969H20.6742C26.6713 3.17969 29.6706 3.17969 31.5329 5.04354C32.5729 6.08202 33.0325 7.47355 33.2345 9.54096M33.3967 15.9022V22.2635C33.3967 28.2606 33.3967 31.2599 31.5329 33.1222C29.669 34.9845 26.6713 34.9861 20.6742 34.9861H17.4935C11.4965 34.9861 8.49711 34.9861 6.63485 33.1222C5.59478 32.0837 5.13518 30.6922 4.93321 28.6248M12.7226 22.2635H20.6742M12.7226 15.9022H14.3129M25.4451 15.9022H19.0839"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "User research report with findings and recommendations",
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.4452 14.3105C25.4452 15.9976 24.775 17.6156 23.582 18.8086C22.3891 20.0016 20.771 20.6718 19.0839 20.6718C17.3968 20.6718 15.7788 20.0016 14.5858 18.8086C13.3929 17.6156 12.7227 15.9976 12.7227 14.3105C12.7227 12.6234 13.3929 11.0054 14.5858 9.81239C15.7788 8.61942 17.3968 7.94922 19.0839 7.94922C20.771 7.94922 22.3891 8.61942 23.582 9.81239C24.775 11.0054 25.4452 12.6234 25.4452 14.3105ZM22.2646 14.3105C22.2646 15.154 21.9295 15.9631 21.333 16.5595C20.7365 17.156 19.9275 17.4911 19.0839 17.4911C18.2404 17.4911 17.4314 17.156 16.8349 16.5595C16.2384 15.9631 15.9033 15.154 15.9033 14.3105C15.9033 13.4669 16.2384 12.6579 16.8349 12.0614C17.4314 11.465 18.2404 11.1299 19.0839 11.1299C19.9275 11.1299 20.7365 11.465 21.333 12.0614C21.9295 12.6579 22.2646 13.4669 22.2646 14.3105Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0838 1.58984C9.42265 1.58984 1.59033 9.42216 1.59033 19.0833C1.59033 28.7445 9.42265 36.5768 19.0838 36.5768C28.745 36.5768 36.5773 28.7445 36.5773 19.0833C36.5773 9.42216 28.745 1.58984 19.0838 1.58984ZM4.77097 19.0833C4.77097 22.4071 5.90487 25.4669 7.8053 27.8969C9.14028 26.1446 10.8621 24.7244 12.8365 23.7473C14.8108 22.7702 16.9843 22.2626 19.1872 22.264C21.3618 22.2614 23.5082 22.7555 25.4628 23.7086C27.4174 24.6616 29.1285 26.0485 30.4657 27.7633C31.8437 25.9561 32.7714 23.8467 33.1723 21.6097C33.5731 19.3727 33.4355 17.0724 32.7709 14.8992C32.1062 12.7259 30.9336 10.7422 29.3501 9.11211C27.7666 7.48202 25.8176 6.25243 23.6646 5.5251C21.5115 4.79777 19.2161 4.59359 16.9685 4.92947C14.7208 5.26535 12.5855 6.13162 10.7391 7.45661C8.89267 8.78161 7.38833 10.5272 6.35052 12.549C5.31271 14.5709 4.77126 16.8107 4.77097 19.0833ZM19.0838 33.3962C15.7981 33.4015 12.6115 32.2712 10.0635 30.1965C11.089 28.728 12.4541 27.5291 14.0426 26.7017C15.6312 25.8743 17.3961 25.4431 19.1872 25.4446C20.9559 25.4431 22.6995 25.8636 24.273 26.6712C25.8466 27.4789 27.2047 28.6504 28.2345 30.0883C25.6669 32.2305 22.4277 33.4014 19.0838 33.3962Z"
          fill="white"
        />
      </svg>
    ),
    title: "Persona definitions grounded in research data",
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
          d="M29.769 17.0393C29.4606 17.3319 29.0516 17.4951 28.6264 17.4951C28.2012 17.4951 27.7922 17.3319 27.4837 17.0393C24.6768 14.3628 20.9157 11.3714 22.7494 7.02985C23.7417 4.68254 26.1208 3.17969 28.6256 3.17969C31.1303 3.17969 33.5111 4.68254 34.5018 7.02826C36.3339 11.3666 32.5839 14.3708 29.769 17.0393Z"
          stroke="white"
          strokeWidth="2.38548"
        />
        <path
          d="M28.8405 9.54211H28.6417M29.0393 9.54211C29.0393 9.64756 28.9974 9.74868 28.9229 9.82324C28.8483 9.8978 28.7472 9.93969 28.6417 9.93969C28.5363 9.93969 28.4351 9.8978 28.3606 9.82324C28.286 9.74868 28.2441 9.64756 28.2441 9.54211C28.2441 9.43667 28.286 9.33554 28.3606 9.26098C28.4351 9.18642 28.5363 9.14453 28.6417 9.14453C28.7472 9.14453 28.8483 9.18642 28.9229 9.26098C28.9974 9.33554 29.0393 9.43667 29.0393 9.54211Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.95162 34.9872C10.5865 34.9872 12.7226 32.8512 12.7226 30.2163C12.7226 27.5813 10.5865 25.4453 7.95162 25.4453C5.31669 25.4453 3.18066 27.5813 3.18066 30.2163C3.18066 32.8512 5.31669 34.9872 7.95162 34.9872Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4936 11.1324H15.1081C12.034 11.1324 9.54199 13.2682 9.54199 15.9034C9.54199 18.5385 12.034 20.6743 15.1081 20.6743H19.8791C22.9531 20.6743 25.4452 22.8101 25.4452 25.4453C25.4452 28.0805 22.9531 30.2162 19.8791 30.2162H17.4936M28.8405 9.54211H28.6417M29.0393 9.54211C29.0393 9.64756 28.9974 9.74868 28.9228 9.82324C28.8483 9.8978 28.7472 9.93969 28.6417 9.93969C28.5363 9.93969 28.4351 9.8978 28.3606 9.82324C28.286 9.74868 28.2441 9.64756 28.2441 9.54211C28.2441 9.43667 28.286 9.33554 28.3606 9.26098C28.4351 9.18642 28.5363 9.14453 28.6417 9.14453C28.7472 9.14453 28.8483 9.18642 28.9228 9.26098C28.9974 9.33554 29.0393 9.43667 29.0393 9.54211Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "User journey maps (current state and desired state)",
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
        <g clipPath="url(#clip0_1766_3070)">
          <path
            d="M19.0836 2.12123C17.5604 2.12648 16.0448 2.33688 14.5777 2.74675L15.3941 4.71874C18.5648 3.87921 21.9239 4.10812 24.9514 5.37005C27.9789 6.63198 30.5061 8.85658 32.1419 11.6996C33.7777 14.5426 34.4309 17.8454 34.0004 21.097C33.5698 24.3487 32.0796 27.3677 29.7603 29.6871C27.441 32.0064 24.4219 33.4966 21.1703 33.9271C17.9186 34.3577 14.6158 33.7045 11.7728 32.0687C8.92979 30.4329 6.7052 27.9057 5.44327 24.8782C4.18134 21.8507 3.95243 18.4916 4.79196 15.3209L2.81997 14.4939C1.85763 17.9173 1.99549 21.5566 3.21407 24.8974C4.43265 28.2382 6.67032 31.1115 9.61083 33.1114C12.5513 35.1112 16.046 36.1363 19.6008 36.0419C23.1557 35.9475 26.5909 34.7383 29.4211 32.5852C32.2513 30.4321 34.3333 27.444 35.3728 24.0432C36.4124 20.6425 36.3568 17.001 35.2141 13.6335C34.0714 10.266 31.8993 7.34276 29.0048 5.27695C26.1102 3.21114 22.6397 2.10722 19.0836 2.12123Z"
            fill="white"
          />
          <path
            d="M7.89879 16.6435C7.36962 19.0613 7.63743 21.5856 8.66215 23.8386C9.68687 26.0917 11.4134 27.9524 13.5836 29.1426C15.7538 30.3328 18.251 30.7884 20.7016 30.4414C23.1523 30.0944 25.4248 28.9633 27.1792 27.2173C28.9336 25.4714 30.0756 23.2044 30.4345 20.7555C30.7933 18.3065 30.3498 15.8071 29.1701 13.6312C27.9904 11.4553 26.138 9.71981 23.8899 8.68421C21.6419 7.64862 19.119 7.36863 16.6985 7.8861L17.3559 9.54003C19.4152 9.15448 21.5438 9.43928 23.4293 10.3526C25.3149 11.266 26.8579 12.7597 27.8319 14.6146C28.806 16.4695 29.1597 18.5878 28.8411 20.6585C28.5226 22.7292 27.5486 24.6433 26.0621 26.1197C24.5756 27.5961 22.655 28.557 20.5822 28.8615C18.5093 29.1659 16.3935 28.7978 14.5453 27.8111C12.697 26.8245 11.2138 25.2713 10.3133 23.3796C9.41286 21.488 9.14255 19.3574 9.54211 17.3008L7.89879 16.6435Z"
            fill="white"
          />
          <path
            d="M19.0837 23.42C18.021 23.4043 17.0012 22.9978 16.219 22.2782C15.4369 21.5586 14.947 20.5762 14.8429 19.5184L13.1147 18.7975V19.0837C13.1148 20.2796 13.4703 21.4484 14.136 22.4418C14.8017 23.4352 15.7477 24.2083 16.8537 24.663C17.9597 25.1176 19.1759 25.2333 20.3479 24.9953C21.5198 24.7574 22.5945 24.1765 23.4356 23.3264C24.2767 22.4764 24.8462 21.3955 25.0717 20.2211C25.2972 19.0468 25.1687 17.8319 24.7023 16.7307C24.2359 15.6296 23.4528 14.6919 22.4524 14.0367C21.452 13.3816 20.2795 13.0385 19.0837 13.0511H18.8293L19.5396 14.8429C20.5993 15.0036 21.5612 15.5529 22.2382 16.3838C22.9151 17.2148 23.2585 18.2679 23.2016 19.3382C23.1448 20.4085 22.6916 21.4193 21.9304 22.1738C21.1692 22.9283 20.1545 23.3725 19.0837 23.42Z"
            fill="white"
          />
          <path
            d="M8.69397 14.1443C8.79184 14.2442 8.92522 14.3013 9.06504 14.3033H12.9348L18.6282 19.9967C18.8278 20.1977 19.0991 20.3112 19.3825 20.3122C19.6658 20.3132 19.9379 20.2016 20.139 20.002C20.34 19.8023 20.4535 19.531 20.4545 19.2477C20.4555 18.9643 20.3439 18.6922 20.1443 18.4912L14.3449 12.7236V9.02347C14.3429 8.88364 14.2857 8.75026 14.1859 8.65239L8.25928 2.7258C8.18519 2.65316 8.0914 2.60386 7.98955 2.58401C7.8877 2.56416 7.78227 2.57464 7.68632 2.61415C7.59036 2.65366 7.50812 2.72046 7.44978 2.80627C7.39143 2.89208 7.35956 2.99312 7.3581 3.09688V7.33773H3.18086C3.07711 7.33919 2.97606 7.37106 2.89025 7.4294C2.80444 7.48775 2.73764 7.56999 2.69813 7.66594C2.65862 7.76189 2.64814 7.86733 2.66799 7.96918C2.68784 8.07103 2.73714 8.16481 2.80979 8.23891L8.69397 14.1443Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_3070">
            <rect width="38.1676" height="38.1676" rx="5.30106" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Jobs-to-be-done framework",
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
          d="M15.1081 25.4437C12.219 25.4437 9.77414 24.4428 7.77352 22.4411C5.7729 20.4395 4.77206 17.9946 4.771 15.1066C4.76994 12.2186 5.77078 9.77373 7.77352 7.77205C9.77626 5.77037 12.2211 4.76953 15.1081 4.76953C17.995 4.76953 20.4404 5.77037 22.4442 7.77205C24.448 9.77373 25.4483 12.2186 25.4451 15.1066C25.4451 16.2728 25.2596 17.3728 24.8885 18.4065C24.5174 19.4402 24.0138 20.3546 23.3777 21.1498L32.2835 30.0556C32.5751 30.3471 32.7208 30.7182 32.7208 31.1688C32.7208 31.6194 32.5751 31.9905 32.2835 32.282C31.9919 32.5736 31.6209 32.7194 31.1703 32.7194C30.7197 32.7194 30.3486 32.5736 30.0571 32.282L21.1513 23.3763C20.3561 24.0124 19.4417 24.516 18.408 24.8871C17.3743 25.2581 16.2743 25.4437 15.1081 25.4437ZM15.1081 22.263C17.096 22.263 18.7859 21.5675 20.178 20.1765C21.5701 18.7855 22.2656 17.0956 22.2645 15.1066C22.2634 13.1176 21.5679 11.4282 20.178 10.0383C18.7881 8.64832 17.0981 7.95229 15.1081 7.95017C13.118 7.94805 11.4286 8.64408 10.0397 10.0383C8.65084 11.4324 7.95481 13.1219 7.95163 15.1066C7.94845 17.0913 8.64448 18.7813 10.0397 20.1765C11.435 21.5718 13.1244 22.2673 15.1081 22.263Z"
          fill="white"
        />
      </svg>
    ),
    title: "Experience audit of existing product",
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
          d="M5.56592 6.35938V27.8287C5.56592 29.094 6.06857 30.3075 6.9633 31.2022C7.85803 32.097 9.07154 32.5996 10.3369 32.5996H31.8062"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3369 23.8527L17.4933 16.6963L23.0595 22.2624L31.8062 13.5156"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Opportunity map - prioritized areas for improvement",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 31 31"
        fill="none"
      >
        <path
          d="M16.5396 26.7163H26.7177M19.0841 6.36022L24.1732 11.4492M26.939 8.66554C27.2721 8.33256 27.5363 7.93724 27.7166 7.50215C27.8969 7.06706 27.9897 6.60072 27.9898 6.12975C27.9898 5.65879 27.8971 5.19242 27.717 4.75729C27.5368 4.32215 27.2727 3.92676 26.9397 3.5937C26.6067 3.26064 26.2114 2.99642 25.7763 2.81613C25.3412 2.63585 24.8749 2.54303 24.4039 2.54297C23.9329 2.54291 23.4666 2.63561 23.0314 2.81579C22.5963 2.99597 22.2009 3.26008 21.8678 3.59306L4.88833 20.5764C4.59294 20.8709 4.37449 21.2336 4.2522 21.6324L2.57156 27.1692C2.53867 27.2792 2.53619 27.3961 2.56437 27.5074C2.59255 27.6188 2.65033 27.7204 2.7316 27.8015C2.81287 27.8827 2.91458 27.9403 3.02595 27.9683C3.13732 27.9963 3.2542 27.9936 3.36417 27.9606L8.9023 26.2812C9.30073 26.16 9.66332 25.9429 9.95827 25.6489L26.939 8.66554Z"
          stroke="white"
          strokeWidth="2.54451"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Research-backed design brief for the UI/UX phase",
  },
];

export const assumptionsSectionHead = {
  badgeText: "When Research is Critical",
  title: "When Assumptions aren't Enough",
  description:
    "Research provides the evidence needed to validate ideas, understand users, and make informed decisions before committing significant time, budget, and resources.",
};

export const assumptionsData = [
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: "Designing a new product or feature without user feedback",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: "Redesigning an existing product that isn't performing well",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: "Entering a new market or user segment",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: "Building for specialized users and non-English speakers",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    description: "When teams have conflicting opinions about what users want",
  },
];

export const uxResearchCTAData = {
  badgeText: "Insight Before Execution",
  title: "The Best Design Decisions Start with Research",
  description:
    "We help teams identify opportunities, reduce risk, and align around evidence before making into design.",
  buttonText: "Plan a Research Sprint",
  buttonLink: "/contact",
};

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

export const designSystemsHeroData = {
  badgeText: "Design Systems",
  title: "Build Once. Use Everywhere. Ship Faster.",
  description:
    "Every time your team creates a new button, chooses a color, or picks a font size without a system to reference, you're accumulating design debt. A design system isn't overhead - it's the infrastructure that makes your product faster to build, more consistent for users, and cheaper to maintain.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Design systems",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Build Your Design System",
    href: "/contact",
  },
  secondaryButton: {
    text: "Audit Your Existing System",
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

export const designSystemComponentsSectionHead = {
  badgeText: "What a Design System Includes",
  title: "Consistency at Scale starts with Systems",
  description:
    "A design system creates a shared foundation for designers and engineers - making products faster to build, easier to maintain, and more consistent across every experience.",
};

export const designSystemComponentsData: ArchitectureItem[] = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "top",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M17.5784 32.227C15.5764 32.227 13.6842 31.8422 11.902 31.0727C10.1197 30.3032 8.56356 29.2533 7.23346 27.9232C5.90337 26.5931 4.85355 25.037 4.084 23.2547C3.31446 21.4725 2.92969 19.5803 2.92969 17.5784C2.92969 15.552 3.32667 13.6476 4.12062 11.8654C4.91458 10.0831 5.98882 8.5328 7.34333 7.21442C8.69784 5.89604 10.2784 4.85257 12.0851 4.084C13.8918 3.31544 15.8205 2.93066 17.8713 2.92969C19.8245 2.92969 21.6678 3.26563 23.4012 3.93752C25.1346 4.6094 26.6547 5.53715 27.9613 6.72076C29.268 7.90437 30.3056 9.3082 31.0742 10.9323C31.8427 12.5563 32.227 14.3078 32.227 16.1867C32.227 18.9944 31.3725 21.1492 29.6635 22.6512C27.9545 24.1532 25.8793 24.9037 23.4378 24.9027H20.7278C20.5081 24.9027 20.3557 24.9637 20.2708 25.0858C20.1858 25.2079 20.1428 25.3421 20.1419 25.4886C20.1419 25.7816 20.325 26.203 20.6912 26.7528C21.0574 27.3026 21.2405 27.931 21.2405 28.6381C21.2405 29.8588 20.9051 30.7621 20.2342 31.3481C19.5632 31.934 18.678 32.227 17.5784 32.227ZM11.0963 18.4206C11.5114 18.0056 11.7189 17.4807 11.7189 16.8459C11.7189 16.2111 11.5114 15.6862 11.0963 15.2712C10.6813 14.8561 10.1564 14.6486 9.52159 14.6486C8.88681 14.6486 8.3619 14.8561 7.94685 15.2712C7.53181 15.6862 7.32429 16.2111 7.32429 16.8459C7.32429 17.4807 7.53181 18.0056 7.94685 18.4206C8.3619 18.8357 8.88681 19.0432 9.52159 19.0432C10.1564 19.0432 10.6813 18.8357 11.0963 18.4206ZM15.4909 12.5612C15.906 12.1461 16.1135 11.6212 16.1135 10.9865C16.1135 10.3517 15.906 9.82677 15.4909 9.41172C15.0759 8.99668 14.551 8.78915 13.9162 8.78915C13.2814 8.78915 12.7565 8.99668 12.3415 9.41172C11.9264 9.82677 11.7189 10.3517 11.7189 10.9865C11.7189 11.6212 11.9264 12.1461 12.3415 12.5612C12.7565 12.9762 13.2814 13.1838 13.9162 13.1838C14.551 13.1838 15.0759 12.9762 15.4909 12.5612ZM22.8152 12.5612C23.2303 12.1461 23.4378 11.6212 23.4378 10.9865C23.4378 10.3517 23.2303 9.82677 22.8152 9.41172C22.4002 8.99668 21.8753 8.78915 21.2405 8.78915C20.6057 8.78915 20.0808 8.99668 19.6658 9.41172C19.2507 9.82677 19.0432 10.3517 19.0432 10.9865C19.0432 11.6212 19.2507 12.1461 19.6658 12.5612C20.0808 12.9762 20.6057 13.1838 21.2405 13.1838C21.8753 13.1838 22.4002 12.9762 22.8152 12.5612ZM27.2098 18.4206C27.6249 18.0056 27.8324 17.4807 27.8324 16.8459C27.8324 16.2111 27.6249 15.6862 27.2098 15.2712C26.7948 14.8561 26.2699 14.6486 25.6351 14.6486C25.0003 14.6486 24.4754 14.8561 24.0604 15.2712C23.6453 15.6862 23.4378 16.2111 23.4378 16.8459C23.4378 17.4807 23.6453 18.0056 24.0604 18.4206C24.4754 18.8357 25.0003 19.0432 25.6351 19.0432C26.2699 19.0432 26.7948 18.8357 27.2098 18.4206ZM17.5784 29.2973C17.7981 29.2973 17.9753 29.2362 18.1101 29.1142C18.2449 28.9921 18.3118 28.8334 18.3108 28.6381C18.3108 28.2963 18.1277 27.8935 17.7615 27.4296C17.3952 26.9657 17.2121 26.2699 17.2121 25.3421C17.2121 24.3167 17.5661 23.4989 18.2742 22.8885C18.9822 22.2781 19.8489 21.9729 20.8743 21.9729H23.4378C25.0492 21.9729 26.4286 21.5032 27.5761 20.5637C28.7235 19.6243 29.2973 18.1653 29.2973 16.1867C29.2973 13.2326 28.1684 10.7726 25.9105 8.80673C23.6527 6.84088 20.9729 5.85844 17.8713 5.85942C14.551 5.85942 11.7189 6.99469 9.3751 9.26523C7.03131 11.5358 5.85942 14.3068 5.85942 17.5784C5.85942 20.8255 7.00104 23.5907 9.28428 25.8739C11.5675 28.1571 14.3322 29.2983 17.5784 29.2973Z"
          fill="white"
        />
      </svg>
    ),
    title: "Design Tokens",
    description:
      "The atomic values that define your visual language - colors, typography, spacing, border radii, shadows, and motion. Stored as variables that propagate from design files into code.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftTop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0812 6.54784C11.2021 6.33933 9.30581 6.33933 7.42678 6.54784C7.20973 6.57229 7.00717 6.66888 6.85153 6.82213C6.69589 6.97538 6.59618 7.17642 6.56837 7.39306C6.34578 9.29432 6.34578 11.215 6.56837 13.1163C6.59655 13.3329 6.69661 13.5338 6.85251 13.6868C7.00842 13.8397 7.21115 13.936 7.42824 13.9601C9.29009 14.1681 11.2179 14.1681 13.0797 13.9601C13.2968 13.936 13.4995 13.8397 13.6554 13.6868C13.8113 13.5338 13.9114 13.3329 13.9396 13.1163C14.1622 11.2149 14.1622 9.293 13.9396 7.3916C13.9114 7.175 13.8113 6.97412 13.6554 6.82114C13.4995 6.66816 13.2968 6.57192 13.0797 6.54784M7.18215 4.36519C9.22279 4.13869 11.2822 4.13869 13.3229 4.36519C14.7731 4.52632 15.9494 5.66892 16.1208 7.13671C16.3632 9.2078 16.3632 11.3001 16.1208 13.3712C16.0351 14.081 15.7121 14.7411 15.2043 15.2445C14.6964 15.7478 14.0335 16.0648 13.3229 16.1442C11.2984 16.3698 9.20659 16.3698 7.18215 16.1442C6.47155 16.0648 5.80859 15.7478 5.30075 15.2445C4.79291 14.7411 4.46995 14.081 4.38425 13.3712C4.14177 11.3001 4.14177 9.2078 4.38425 7.13671C4.47026 6.42712 4.79335 5.76736 5.30117 5.26433C5.80898 4.7613 6.47177 4.44447 7.18215 4.36519ZM13.0812 21.1965C11.2021 20.988 9.30581 20.988 7.42678 21.1965C7.20995 21.2209 7.00755 21.3173 6.85194 21.4702C6.69633 21.6232 6.59649 21.8239 6.56837 22.0403C6.34567 23.942 6.34567 25.8632 6.56837 27.765C6.59655 27.9816 6.69661 28.1824 6.85251 28.3354C7.00842 28.4884 7.21115 28.5846 7.42824 28.6087C9.29009 28.8167 11.2179 28.8167 13.0797 28.6087C13.2968 28.5846 13.4995 28.4884 13.6554 28.3354C13.8113 28.1824 13.9114 27.9816 13.9396 27.765C14.1622 25.8636 14.1622 23.9417 13.9396 22.0403C13.9114 21.8237 13.8113 21.6228 13.6554 21.4698C13.4995 21.3168 13.2968 21.2206 13.0797 21.1965M7.18215 19.0138C9.22279 18.7873 11.2822 18.7873 13.3229 19.0138C14.7731 19.175 15.9494 20.3176 16.1208 21.7854C16.3632 23.8565 16.3632 25.9488 16.1208 28.0198C16.0348 28.7294 15.7117 29.3892 15.2038 29.8922C14.696 30.3953 14.0332 30.7121 13.3229 30.7914C11.2984 31.0184 9.20659 31.0184 7.18215 30.7914C6.47177 30.7121 5.80898 30.3953 5.30117 29.8922C4.79335 29.3892 4.47026 28.7294 4.38425 28.0198C4.14177 25.9488 4.14177 23.8565 4.38425 21.7854C4.47026 21.0758 4.79335 20.416 5.30117 19.913C5.80898 19.41 6.47177 19.0931 7.18215 19.0138ZM27.7298 6.54784C25.8508 6.33933 23.9545 6.33933 22.0754 6.54784C21.8584 6.57229 21.6558 6.66888 21.5002 6.82213C21.3446 6.97538 21.2448 7.17642 21.217 7.39306C20.9944 9.29432 20.9944 11.215 21.217 13.1163C21.2452 13.3329 21.3453 13.5338 21.5012 13.6868C21.6571 13.8397 21.8598 13.936 22.0769 13.9601C23.9388 14.1681 25.8665 14.1681 27.7284 13.9601C27.9455 13.936 28.1482 13.8397 28.3041 13.6868C28.46 13.5338 28.5601 13.3329 28.5882 13.1163C28.8109 11.2149 28.8109 9.293 28.5882 7.3916C28.5601 7.175 28.46 6.97412 28.3041 6.82114C28.1482 6.66816 27.9469 6.57192 27.7298 6.54784ZM21.8308 4.36519C23.8715 4.13869 25.9309 4.13869 27.9715 4.36519C29.4217 4.52632 30.598 5.66892 30.7694 7.13671C31.0119 9.2078 31.0119 11.3001 30.7694 13.3712C30.6837 14.081 30.3608 14.7411 29.8529 15.2445C29.3451 15.7478 28.6821 16.0648 27.9715 16.1442C25.9471 16.3698 23.8553 16.3698 21.8308 16.1442C21.1202 16.0648 20.4573 15.7478 19.9494 15.2445C19.4416 14.7411 19.1186 14.081 19.0329 13.3712C18.7904 11.3001 18.7904 9.2078 19.0329 7.13671C19.1189 6.42712 19.442 5.76736 19.9498 5.26433C20.4576 4.7613 21.1204 4.44447 21.8308 4.36519ZM27.7298 21.1965C25.8508 20.988 23.9545 20.988 22.0754 21.1965C21.8586 21.2209 21.6562 21.3173 21.5006 21.4702C21.345 21.6232 21.2451 21.8239 21.217 22.0403C20.9943 23.942 20.9943 25.8632 21.217 27.765C21.2452 27.9816 21.3453 28.1824 21.5012 28.3354C21.6571 28.4884 21.8598 28.5846 22.0769 28.6087C23.9388 28.8167 25.8665 28.8167 27.7284 28.6087C27.9455 28.5846 28.1482 28.4884 28.3041 28.3354C28.46 28.1824 28.5601 27.9816 28.5882 27.765C28.8109 25.8636 28.8109 23.9417 28.5882 22.0403C28.5601 21.8237 28.46 21.6228 28.3041 21.4698C28.1482 21.3168 27.9469 21.2206 27.7298 21.1965ZM21.8308 19.0138C23.8715 18.7873 25.9309 18.7873 27.9715 19.0138C29.4217 19.175 30.598 20.3176 30.7694 21.7854C31.0119 23.8565 31.0119 25.9488 30.7694 28.0198C30.6834 28.7294 30.3603 29.3892 29.8525 29.8922C29.3447 30.3953 28.6819 30.7121 27.9715 30.7914C25.9471 31.0184 23.8553 31.0184 21.8308 30.7914C21.1204 30.7121 20.4576 30.3953 19.9498 29.8922C19.442 29.3892 19.1189 28.7294 19.0329 28.0198C18.7904 25.9488 18.7904 23.8565 19.0329 21.7854C19.1189 21.0758 19.442 20.416 19.9498 19.913C20.4576 19.41 21.1204 19.0931 21.8308 19.0138Z"
          fill="white"
        />
      </svg>
    ),
    title: "Pattern Library",
    description:
      "Higher-level patterns built from components - forms, navigation patterns, empty states, loading states, error states. Solved problems that never need to be solved again.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightTop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M22.5443 6.43085C22.7284 6.61517 22.9584 6.74705 23.2104 6.81288C23.4625 6.87872 23.7276 6.87613 23.9784 6.80538C24.2291 6.73463 24.4565 6.59829 24.637 6.4104C24.8175 6.22251 24.9446 5.98989 25.0052 5.7365C25.1573 5.10353 25.4753 4.52253 25.9266 4.05334C26.3778 3.58414 26.946 3.24371 27.5726 3.06711C28.1991 2.8905 28.8615 2.88411 29.4913 3.04857C30.1212 3.21304 30.6958 3.54243 31.1561 4.00282C31.6163 4.46321 31.9455 5.03796 32.1098 5.66787C32.274 6.29779 32.2674 6.96011 32.0906 7.58661C31.9138 8.21312 31.5732 8.78118 31.1038 9.23228C30.6345 9.68338 30.0534 10.0012 29.4203 10.1531C29.167 10.2137 28.9343 10.3408 28.7464 10.5213C28.5586 10.7018 28.4222 10.9292 28.3515 11.1799C28.2807 11.4307 28.2781 11.6958 28.344 11.9479C28.4098 12.1999 28.5417 12.4299 28.726 12.614L31.1914 15.078C31.5197 15.4063 31.7802 15.7962 31.958 16.2252C32.1357 16.6542 32.2272 17.1141 32.2272 17.5785C32.2272 18.0429 32.1357 18.5027 31.958 18.9318C31.7802 19.3608 31.5197 19.7506 31.1914 20.079L28.726 22.5444C28.5419 22.7287 28.3119 22.8606 28.0598 22.9264C27.8077 22.9922 27.5426 22.9897 27.2919 22.9189C27.0411 22.8482 26.8138 22.7118 26.6333 22.5239C26.4528 22.336 26.3257 22.1034 26.265 21.85C26.113 21.2171 25.7949 20.6361 25.3437 20.1669C24.8924 19.6977 24.3242 19.3572 23.6977 19.1806C23.0711 19.004 22.4088 18.9976 21.7789 19.1621C21.1491 19.3266 20.5744 19.656 20.1142 20.1163C19.654 20.5767 19.3248 21.1515 19.1605 21.7814C18.9962 22.4113 19.0029 23.0736 19.1797 23.7001C19.3565 24.3267 19.6971 24.8947 20.1664 25.3458C20.6358 25.7969 21.2169 26.1148 21.8499 26.2666C22.1033 26.3272 22.3359 26.4544 22.5238 26.6349C22.7117 26.8154 22.848 27.0427 22.9188 27.2935C22.9895 27.5442 22.9921 27.8093 22.9263 28.0614C22.8605 28.3135 22.7286 28.5434 22.5443 28.7276L20.0789 31.1915C19.7505 31.5199 19.3607 31.7804 18.9316 31.9581C18.5026 32.1358 18.0428 32.2273 17.5784 32.2273C17.114 32.2273 16.6541 32.1358 16.2251 31.9581C15.796 31.7804 15.4062 31.5199 15.0778 31.1915L12.6125 28.7261C12.4283 28.5418 12.1984 28.4099 11.9463 28.3441C11.6942 28.2782 11.4291 28.2808 11.1784 28.3516C10.9276 28.4223 10.7003 28.5587 10.5198 28.7466C10.3393 28.9344 10.2121 29.1671 10.1515 29.4205C9.99943 30.0534 9.68139 30.6344 9.23014 31.1036C8.77888 31.5728 8.21071 31.9132 7.58414 32.0898C6.95758 32.2665 6.29526 32.2729 5.6654 32.1084C5.03554 31.9439 4.4609 31.6145 4.00066 31.1541C3.54042 30.6937 3.21123 30.119 3.04697 29.4891C2.88271 28.8592 2.88932 28.1969 3.06614 27.5703C3.24295 26.9438 3.58357 26.3758 4.05291 25.9247C4.52225 25.4736 5.10336 25.1557 5.73638 25.0039C5.98977 24.9432 6.22239 24.8161 6.41028 24.6356C6.59817 24.4551 6.73451 24.2278 6.80526 23.977C6.87601 23.7263 6.8786 23.4612 6.81276 23.2091C6.74693 22.957 6.61505 22.727 6.43073 22.5429L3.96536 20.079C3.63697 19.7506 3.37648 19.3608 3.19876 18.9318C3.02104 18.5027 2.92957 18.0429 2.92957 17.5785C2.92957 17.1141 3.02104 16.6542 3.19876 16.2252C3.37648 15.7962 3.63697 15.4063 3.96536 15.078L6.43073 12.6126C6.61486 12.4283 6.84483 12.2964 7.09692 12.2305C7.349 12.1647 7.61409 12.1673 7.86484 12.2381C8.11559 12.3088 8.34294 12.4451 8.52344 12.633C8.70394 12.8209 8.83106 13.0535 8.8917 13.3069C9.04376 13.9399 9.3618 14.5209 9.81306 14.9901C10.2643 15.4593 10.8325 15.7997 11.459 15.9763C12.0856 16.1529 12.7479 16.1593 13.3778 15.9949C14.0077 15.8304 14.5823 15.501 15.0425 15.0406C15.5028 14.5802 15.832 14.0055 15.9962 13.3756C16.1605 12.7456 16.1539 12.0833 15.9771 11.4568C15.8002 10.8303 15.4596 10.2623 14.9903 9.81115C14.5209 9.36005 13.9398 9.04221 13.3068 8.89036C13.0534 8.82972 12.8208 8.70259 12.6329 8.52209C12.445 8.34159 12.3087 8.11425 12.2379 7.86349C12.1672 7.61274 12.1646 7.34766 12.2304 7.09557C12.2963 6.84349 12.4281 6.61352 12.6125 6.42938L15.0778 3.96548C15.4062 3.63709 15.796 3.3766 16.2251 3.19888C16.6541 3.02116 17.114 2.92969 17.5784 2.92969C18.0428 2.92969 18.5026 3.02116 18.9316 3.19888C19.3607 3.3766 19.7505 3.63709 20.0789 3.96548L22.5443 6.43085Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Component Library (Figma)",
    description:
      "Every reusable UI component documented in Figma - with all variants, states, and interaction behaviors. The single source of truth for designers.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "leftBottom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M30.7621 23.4387C30.7621 27.5829 30.7621 29.6542 29.4745 30.9418C28.1884 32.2279 26.1156 32.2279 21.9729 32.2279H13.1837C9.04109 32.2279 6.9683 32.2279 5.68215 30.9418C4.39453 29.6527 4.39453 27.5829 4.39453 23.4387V19.0441M23.4378 5.86328C26.6239 5.88086 28.3495 6.02295 29.4745 7.14797C30.7621 8.43559 30.7621 10.5069 30.7621 14.6495V17.5793M11.7189 5.86328C8.53278 5.88086 6.80717 6.02295 5.68215 7.14797C4.55713 8.27299 4.41504 9.9986 4.39746 13.1847M13.1837 25.636H21.9729"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
        />
        <path
          d="M11.7188 5.12699C11.7187 4.54423 11.9503 3.98534 12.3623 3.57326C12.7744 3.16119 13.3333 2.92969 13.916 2.92969H21.2404C21.8231 2.92969 22.382 3.16119 22.7941 3.57326C23.2062 3.98534 23.4377 4.54423 23.4377 5.12699V6.59185C23.4377 7.17461 23.2062 7.73351 22.7941 8.14558C22.382 8.55765 21.8231 8.78915 21.2404 8.78915H13.916C13.3333 8.78915 12.7744 8.55765 12.3623 8.14558C11.9503 7.73351 11.7188 7.17461 11.7188 6.59185V5.12699Z"
          stroke="white"
          strokeWidth="2.1973"
        />
        <path
          d="M11.7188 20.5098H13.1836M23.4377 20.5098H17.5782M24.9026 15.3828H21.9728M17.5782 15.3828H10.2539"
          stroke="white"
          strokeWidth="2.1973"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Usage Guidelines",
    description:
      "Documentation for when and how to use each component - not just what it looks like. Includes dos/don'ts and accessibility requirements.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    position: "rightBottom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M5.60308 17.5782L9.81457 21.7896C10.0831 22.0826 10.2238 22.4308 10.2365 22.8341C10.2491 23.2374 10.1085 23.5851 9.81457 23.8771C9.52062 24.1691 9.17882 24.3156 8.78917 24.3165C8.39951 24.3175 8.05771 24.171 7.76376 23.8771L2.49024 18.6036C2.19727 18.3106 2.05078 17.9688 2.05078 17.5782C2.05078 17.1875 2.19727 16.8457 2.49024 16.5527L7.76376 11.2792C8.05673 10.9863 8.39853 10.8398 8.78917 10.8398C9.1798 10.8398 9.5216 10.9863 9.81457 11.2792C10.1075 11.5722 10.254 11.9203 10.254 12.3237C10.254 12.727 10.1075 13.0747 9.81457 13.3667L5.60308 17.5782ZM13.0563 28.5837C12.8727 28.2292 12.842 27.8566 12.964 27.466L19.4094 6.81138C19.5315 6.42075 19.7698 6.13364 20.1243 5.95004C20.4788 5.76645 20.8509 5.73617 21.2405 5.85922C21.6302 5.98227 21.9173 6.22055 22.1019 6.57408C22.2864 6.9276 22.3167 7.29967 22.1927 7.6903L15.7473 28.3449C15.6252 28.7355 15.3869 29.0227 15.0324 29.2063C14.6779 29.3899 14.3059 29.4201 13.9162 29.2971C13.5265 29.174 13.2399 28.9357 13.0563 28.5822M29.5536 17.5782L25.3422 13.3667C25.0492 13.0737 24.9027 12.726 24.9027 12.3237C24.9027 11.9213 25.0492 11.5732 25.3422 11.2792C25.6351 10.9853 25.9769 10.8388 26.3676 10.8398C26.7582 10.8407 27.1 10.9872 27.393 11.2792L32.6665 16.5527C32.9595 16.8457 33.1059 17.1875 33.1059 17.5782C33.1059 17.9688 32.9595 18.3106 32.6665 18.6036L27.393 23.8771C27.1 24.17 26.7582 24.3165 26.3676 24.3165C25.9769 24.3165 25.6351 24.17 25.3422 23.8771C25.0492 23.5841 24.9027 23.2364 24.9027 22.8341C24.9027 22.4317 25.0492 22.0836 25.3422 21.7896L29.5536 17.5782Z"
          fill="white"
        />
      </svg>
    ),
    title: "Code Component Library",
    description:
      "Matching React (or React Native, Vue, etc.) component library with TypeScript props, Storybook documentation, and automated visual regression testing. The single source of truth for engineers.",
  },
];

export const foundationDecisionData = {
  badgeText: "Choosing the Right Foundation",
  heading: "The Best Systems start with the Right Decision",
  description:
    "Whether you build from scratch or extend an existing library, the right approach depends on your product needs and long-term priorities.",
  cards: [
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
            d="M31.5 24.0044V11.9978C31.4995 11.6048 31.3961 11.2188 31.2001 10.8782C31.0041 10.5376 30.7223 10.2543 30.3827 10.0565L19.6952 3.83662C19.1803 3.53684 18.5951 3.37891 17.9993 3.37891C17.4035 3.37891 16.8183 3.53684 16.3034 3.83662L5.61727 10.0565C5.27772 10.2543 4.99591 10.5376 4.79989 10.8782C4.60387 11.2188 4.50048 11.6048 4.5 11.9978V24.0044C4.50023 24.3976 4.60351 24.7839 4.79954 25.1247C4.99558 25.4656 5.27752 25.7491 5.61727 25.9471L16.3048 32.1669C16.8198 32.4663 17.405 32.624 18.0007 32.624C18.5964 32.624 19.1816 32.4663 19.6966 32.1669L30.3841 25.9471C30.7236 25.749 31.0053 25.4653 31.2011 25.1245C31.3968 24.7836 31.4999 24.3974 31.5 24.0044Z"
            stroke="white"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.85156 10.8281L18 18.5625M18 18.5625L31.1484 10.8281M18 18.5625V32.625"
            stroke="white"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Build from scratch",
      description:
        "When your brand is distinctive, your product has unique interaction patterns, or you need complete control over accessibility and performance.",
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
            d="M23.085 6.58513C23.2736 6.77388 23.5091 6.90892 23.7672 6.97633C24.0253 7.04374 24.2968 7.04109 24.5535 6.96865C24.8103 6.8962 25.0431 6.75659 25.2279 6.56419C25.4128 6.3718 25.5429 6.1336 25.605 5.87413C25.7607 5.22598 26.0864 4.63105 26.5485 4.1506C27.0106 3.67015 27.5924 3.32156 28.234 3.14072C28.8756 2.95988 29.5538 2.95332 30.1987 3.12174C30.8437 3.29015 31.4321 3.62744 31.9034 4.09887C32.3747 4.5703 32.7118 5.15883 32.88 5.80386C33.0482 6.44888 33.0414 7.12708 32.8603 7.76862C32.6793 8.41015 32.3305 8.99183 31.8499 9.45375C31.3693 9.91567 30.7742 10.2411 30.126 10.3966C29.8666 10.4587 29.6284 10.5889 29.436 10.7737C29.2436 10.9586 29.104 11.1914 29.0315 11.4481C28.9591 11.7049 28.9564 11.9763 29.0238 12.2345C29.0913 12.4926 29.2263 12.7281 29.415 12.9166L31.9395 15.4396C32.2758 15.7759 32.5425 16.1751 32.7245 16.6144C32.9065 17.0537 33.0002 17.5246 33.0002 18.0001C33.0002 18.4757 32.9065 18.9465 32.7245 19.3859C32.5425 19.8252 32.2758 20.2244 31.9395 20.5606L29.415 23.0851C29.2265 23.2739 28.991 23.4089 28.7329 23.4763C28.4747 23.5437 28.2033 23.5411 27.9465 23.4686C27.6898 23.3962 27.457 23.2566 27.2721 23.0642C27.0873 22.8718 26.9571 22.6336 26.895 22.3741C26.7393 21.726 26.4137 21.131 25.9516 20.6506C25.4895 20.1702 24.9077 19.8216 24.2661 19.6407C23.6245 19.4599 22.9463 19.4533 22.3014 19.6217C21.6564 19.7902 21.068 20.1274 20.5967 20.5989C20.1254 21.0703 19.7883 21.6588 19.6201 22.3039C19.4519 22.9489 19.4587 23.6271 19.6398 24.2686C19.8208 24.9102 20.1696 25.4918 20.6502 25.9538C21.1308 26.4157 21.7258 26.7411 22.374 26.8966C22.6335 26.9587 22.8717 27.0889 23.0641 27.2737C23.2565 27.4586 23.3961 27.6914 23.4686 27.9481C23.541 28.2049 23.5437 28.4763 23.4762 28.7345C23.4088 28.9926 23.2738 29.2281 23.085 29.4166L20.5605 31.9396C20.2243 32.2759 19.8251 32.5426 19.3858 32.7246C18.9464 32.9066 18.4756 33.0003 18 33.0003C17.5245 33.0003 17.0536 32.9066 16.6143 32.7246C16.175 32.5426 15.7758 32.2759 15.4395 31.9396L12.915 29.4151C12.7265 29.2264 12.491 29.0913 12.2329 29.0239C11.9747 28.9565 11.7033 28.9592 11.4465 29.0316C11.1898 29.1041 10.957 29.2437 10.7721 29.4361C10.5873 29.6285 10.4571 29.8667 10.395 30.1261C10.2393 30.7743 9.91367 31.3692 9.45159 31.8497C8.98951 32.3301 8.40771 32.6787 7.76612 32.8595C7.12452 33.0404 6.44632 33.0469 5.80135 32.8785C5.15638 32.7101 4.56796 32.3728 4.09669 31.9014C3.62541 31.43 3.28832 30.8414 3.12012 30.1964C2.95192 29.5514 2.9587 28.8732 3.13975 28.2316C3.32081 27.5901 3.66959 27.0084 4.15019 26.5465C4.63079 26.0846 5.22583 25.7591 5.87404 25.6036C6.1335 25.5415 6.37171 25.4114 6.5641 25.2265C6.75649 25.0417 6.89611 24.8089 6.96855 24.5521C7.041 24.2954 7.04365 24.0239 6.97624 23.7658C6.90882 23.5077 6.77378 23.2722 6.58504 23.0836L4.06054 20.5606C3.72428 20.2244 3.45754 19.8252 3.27556 19.3859C3.09357 18.9465 2.99991 18.4757 2.99991 18.0001C2.99991 17.5246 3.09357 17.0537 3.27556 16.6144C3.45754 16.1751 3.72428 15.7759 4.06054 15.4396L6.58504 12.9151C6.77359 12.7264 7.00907 12.5913 7.26721 12.5239C7.52534 12.4565 7.79678 12.4592 8.05355 12.5316C8.31031 12.6041 8.54311 12.7437 8.72794 12.9361C8.91277 13.1285 9.04294 13.3667 9.10504 13.6261C9.26075 14.2743 9.58641 14.8692 10.0485 15.3497C10.5106 15.8301 11.0924 16.1787 11.734 16.3595C12.3756 16.5404 13.0538 16.5469 13.6987 16.3785C14.3437 16.2101 14.9321 15.8728 15.4034 15.4014C15.8747 14.93 16.2118 14.3414 16.38 13.6964C16.5482 13.0514 16.5414 12.3732 16.3603 11.7316C16.1793 11.0901 15.8305 10.5084 15.3499 10.0465C14.8693 9.58459 14.2742 9.25912 13.626 9.10363C13.3666 9.04154 13.1284 8.91136 12.936 8.72653C12.7436 8.5417 12.604 8.30891 12.5315 8.05214C12.4591 7.79537 12.4564 7.52393 12.5238 7.2658C12.5913 7.00767 12.7263 6.77219 12.915 6.58363L15.4395 4.06063C15.7758 3.72437 16.175 3.45763 16.6143 3.27565C17.0536 3.09367 17.5245 3 18 3C18.4756 3 18.9464 3.09367 19.3858 3.27565C19.8251 3.45763 20.2243 3.72437 20.5605 4.06063L23.085 6.58513Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Extend an existing library",
      description:
        "(shadcn/ui, Radix UI, Material UI, Ant Design, Mantine) when speed is the priority and your brand can be expressed through tokens without component logic.",
    },
  ],
  bottomText: "We've done both. The recommendation depends on your situation.",
};

export const designSystemDeliverablesSectionHead = {
  badgeText: "Design System Deliverables",
  title: "More Than Components, A Complete System",
  description:
    "We provide the tools, documentation, and frameworks required to keep your design system effective over time.",
};

export const designSystemDeliverablesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    text: "Figma component library with all variants and states",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    text: "React / React Native / Flutter component library",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    text: "Storybook documentation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    text: "Design token files (CSS variables, Tailwind config, or native tokens)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 5,
    text: "Usage guidelines and pattern documentation",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 6,
    text: "Contribution guide for your team",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 7,
    text: "Governance process for system updates",
  },
];

export const maintenanceSectionHead = {
  badgeText: "Maintenance & Evolution",
  title: "Maintaining Consistency over Time",
  description:
    "We provide the processes and support needed to prevent drift between design and implementation.",
};

export const maintenanceData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M28.2971 24.0288C27.4377 23.1688 26.4336 22.4668 25.3308 21.9551C26.886 20.6951 27.8783 18.7725 27.8783 16.6164C27.8783 12.8123 24.7059 9.69143 20.9018 9.7498C17.1561 9.80816 14.1383 12.8603 14.1383 16.6164C14.1383 18.7725 15.1339 20.6951 16.6858 21.9551C15.5827 22.4665 14.5785 23.1685 13.7194 24.0288C11.8448 25.9068 10.7805 28.3856 10.7119 31.0293C10.7109 31.0659 10.7174 31.1024 10.7308 31.1365C10.7442 31.1706 10.7642 31.2017 10.7898 31.2279C10.8154 31.2542 10.846 31.275 10.8798 31.2893C10.9136 31.3035 10.9499 31.3108 10.9865 31.3108H12.9092C13.0568 31.3108 13.1804 31.1941 13.1838 31.0464C13.2491 29.0551 14.0559 27.1909 15.4738 25.7764C16.1994 25.0469 17.0625 24.4686 18.013 24.0749C18.9636 23.6813 19.9828 23.4801 21.0117 23.4829C23.1026 23.4829 25.0698 24.2966 26.5496 25.7764C27.9641 27.1909 28.7709 29.0551 28.8396 31.0464C28.843 31.1941 28.9666 31.3108 29.1142 31.3108H31.0369C31.0735 31.3108 31.1098 31.3035 31.1436 31.2893C31.1774 31.275 31.208 31.2542 31.2336 31.2279C31.2592 31.2017 31.2792 31.1706 31.2926 31.1365C31.306 31.1024 31.3125 31.0659 31.3115 31.0293C31.2429 28.3856 30.1786 25.9068 28.2971 24.0288ZM21.0117 21.011C19.8375 21.011 18.732 20.5543 17.9046 19.7235C17.4893 19.3115 17.1613 18.8201 16.9401 18.2786C16.7189 17.7371 16.6091 17.1566 16.6171 16.5717C16.6274 15.4456 17.0772 14.3573 17.8634 13.5504C18.6874 12.7059 19.7895 12.2355 20.9671 12.2218C22.131 12.2115 23.2605 12.6647 24.0914 13.4783C24.9428 14.3126 25.4097 15.4284 25.4097 16.6164C25.4097 17.7905 24.9531 18.8926 24.1223 19.7235C23.7146 20.1331 23.2298 20.4577 22.6959 20.6787C22.162 20.8997 21.5896 21.0126 21.0117 21.011ZM12.4113 17.5227C12.3804 17.224 12.3633 16.9219 12.3633 16.6164C12.3633 16.0705 12.4148 15.5383 12.5109 15.0199C12.5349 14.8963 12.4697 14.7693 12.3564 14.7178C11.8895 14.5083 11.4603 14.2199 11.0895 13.856C10.6526 13.4324 10.3088 12.9223 10.08 12.3583C9.85125 11.7944 9.74254 11.189 9.76084 10.5807C9.79174 9.47857 10.2346 8.43142 11.0071 7.64176C11.8551 6.77314 12.995 6.29935 14.2069 6.31308C15.3022 6.32338 16.3596 6.74568 17.1596 7.49413C17.4308 7.7482 17.6643 8.02972 17.86 8.33185C17.9286 8.43828 18.0625 8.48292 18.1792 8.44172C18.7835 8.23229 19.4221 8.08466 20.0779 8.01599C20.2701 7.99539 20.38 7.78939 20.2941 7.61773C19.1783 5.41013 16.8986 3.88575 14.2619 3.84456C10.4544 3.78619 7.28201 6.90704 7.28201 10.7077C7.28201 12.8638 8.27423 14.7864 9.82951 16.0464C8.73772 16.5511 7.73177 17.2481 6.85972 18.1201C4.97828 19.9981 3.91397 22.477 3.8453 25.124C3.84438 25.1607 3.85081 25.1971 3.8642 25.2312C3.8776 25.2654 3.89768 25.2965 3.92328 25.3227C3.94888 25.3489 3.97946 25.3698 4.01324 25.384C4.04702 25.3982 4.08331 25.4056 4.11996 25.4056H6.04603C6.19366 25.4056 6.31726 25.2888 6.3207 25.1412C6.38593 23.1499 7.19275 21.2856 8.61069 19.8711C9.62008 18.8617 10.8561 18.1613 12.2053 17.8214C12.3392 17.7871 12.4285 17.6601 12.4113 17.5227Z"
          fill="white"
        />
      </svg>
    ),
    title: "Contribution Process",
    description:
      "Set up contribution processes so teams can submit new components while maintaining quality standards.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
    title: "Quarterly Audits",
    description:
      "Run quarterly audits to identify drift between design and implementation.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "On-Call Support",
    description:
      "Provide on-call support for design system questions and edge cases.",
  },
];

export const designSystemsCTAData = {
  badgeText: "Design Systems That Evolve With You",
  title: "The Infrastructure behind Better Products",
  description:
    "Empower your teams with reusable components, clear guidelines, and the infrastructure needed to ship efficiently.",
  buttonText: "Design Your System",
  buttonLink: "/contact",
};

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 51 51"
        fill="none"
      >
        <path
          d="M9.49231 30.059L31.1734 3.26294C31.1955 3.23245 31.2245 3.20761 31.258 3.19043C31.2915 3.17325 31.3286 3.16421 31.3662 3.16406C31.4006 3.16395 31.4346 3.17115 31.466 3.1852C31.4974 3.19924 31.5254 3.21981 31.5482 3.24553C31.5711 3.27126 31.5882 3.30154 31.5984 3.33438C31.6086 3.36722 31.6117 3.40185 31.6075 3.43598L28.477 20.5667H41.1334L19.4504 47.3677C19.4287 47.3968 19.4005 47.4205 19.368 47.4368C19.3356 47.4531 19.2998 47.4616 19.2635 47.4616C19.2294 47.4617 19.1956 47.4543 19.1647 47.4399C19.1337 47.4256 19.1063 47.4046 19.0843 47.3785C19.0624 47.3524 19.0464 47.3217 19.0375 47.2888C19.0287 47.2558 19.0272 47.2213 19.0331 47.1877L22.1488 30.059H9.49231Z"
          stroke="white"
          strokeWidth="3.16411"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "A/B Testing & Experimentation",
    description:
      "Design, implement, and analyze controlled experiments. Test layout changes, copy variations, feature rollouts, and pricing presentation. Statistical rigor, not gut feel.",
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
          d="M25.3129 4.21875V10.547M10.5576 25.3023H4.22935M10.4015 10.4035L14.8734 14.8797M40.2327 10.3888L35.7545 14.8649M14.8713 35.7481L10.3994 40.22M23.2035 23.2034L44.2975 32.4848L34.9381 34.938L32.4849 44.2975L23.2035 23.2034Z"
          stroke="white"
          strokeWidth="3.16411"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Session Recording & Heatmap Analysis",
    description:
      "Analyze real user behavior using session recordings and heatmaps. Find where users click, where they scroll, where they rage-click, and where they abandon.",
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
          d="M43.0741 12.8896L26.2621 4.45196C25.6715 4.15664 24.9543 4.15664 24.3636 4.45196L7.55167 12.8896C6.89775 13.206 6.47587 13.8388 6.39149 14.556C6.3704 14.7881 4.36646 37.2743 24.4269 46.2182C24.6981 46.3431 24.9932 46.4078 25.2918 46.4078C25.5904 46.4078 25.8854 46.3431 26.1566 46.2182C46.2171 37.2532 44.2343 14.7881 44.1921 14.556C44.1584 14.2019 44.0339 13.8625 43.8307 13.5705C43.6274 13.2786 43.3523 13.0441 43.0319 12.8896H43.0741ZM25.3129 41.9783C11.0955 35.0806 10.4205 20.3358 10.547 16.117L25.3129 8.71296L40.0787 16.117C40.1631 20.3147 39.3826 35.1438 25.3129 41.9994V41.9783Z"
          fill="white"
        />
      </svg>
    ),
    title: "Accessibility Audit & Remediation",
    description:
      "WCAG 2.1 compliance audit with a prioritized remediation plan. Accessible products reach more users and reduce legal risk.",
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
          d="M25.3129 4.21875C22.5428 4.21875 19.7998 4.76436 17.2405 5.82444C14.6813 6.88452 12.3559 8.4383 10.3971 10.3971C6.44122 14.353 4.21881 19.7183 4.21881 25.3128C4.21881 30.9073 6.44122 36.2727 10.3971 40.2286C12.3559 42.1874 14.6813 43.7411 17.2405 44.8012C19.7998 45.8613 22.5428 46.4069 25.3129 46.4069C30.9074 46.4069 36.2727 44.1845 40.2286 40.2286C44.1846 36.2727 46.407 30.9073 46.407 25.3128C46.407 22.5427 45.8613 19.7997 44.8013 17.2405C43.7412 14.6812 42.1874 12.3558 40.2286 10.3971C38.2699 8.4383 35.9445 6.88452 33.3852 5.82444C30.826 4.76436 28.083 4.21875 25.3129 4.21875ZM25.3129 8.43756C29.7885 8.43756 34.0808 10.2155 37.2455 13.3802C40.4102 16.5449 42.1881 20.8372 42.1881 25.3128C42.1881 30.3754 40.0787 34.8052 36.4927 37.9693C33.5396 35.227 29.5317 33.7505 25.3129 33.7505C21.0941 33.7505 17.2971 35.227 14.133 37.9693C10.547 34.8052 8.43763 30.3754 8.43763 25.3128C8.43763 20.8372 10.2155 16.5449 13.3803 13.3802C16.545 10.2155 20.8373 8.43756 25.3129 8.43756ZM29.5317 12.4243C28.7301 12.4454 27.9707 12.9728 27.6332 13.7955L24.9121 20.6088L24.7012 21.094C23.2035 21.3682 21.9589 22.3597 21.3894 23.7519C20.5245 25.9246 21.5792 28.3715 23.7519 29.2363C25.9246 30.1012 28.3715 29.0465 29.2364 26.8738C29.7848 25.4816 29.5317 23.8784 28.6247 22.6972L28.8356 22.1487L31.5567 15.3775L31.5778 15.3142C31.9997 14.2384 31.4724 13.015 30.3966 12.572C30.1223 12.4665 29.8481 12.4243 29.5317 12.4243ZM21.0941 12.6564C20.5346 12.6564 19.9981 12.8786 19.6025 13.2742C19.2069 13.6698 18.9847 14.2063 18.9847 14.7658C18.9847 15.3252 19.2069 15.8618 19.6025 16.2574C19.9981 16.653 20.5346 16.8752 21.0941 16.8752C21.6535 16.8752 22.1901 16.653 22.5856 16.2574C22.9812 15.8618 23.2035 15.3252 23.2035 14.7658C23.2035 14.2063 22.9812 13.6698 22.5856 13.2742C22.1901 12.8786 21.6535 12.6564 21.0941 12.6564ZM14.7658 18.9846C14.2064 18.9846 13.6699 19.2068 13.2743 19.6024C12.8787 19.998 12.6564 20.5346 12.6564 21.094C12.6564 21.6535 12.8787 22.19 13.2743 22.5856C13.6699 22.9812 14.2064 23.2034 14.7658 23.2034C15.3253 23.2034 15.8618 22.9812 16.2574 22.5856C16.653 22.19 16.8753 21.6535 16.8753 21.094C16.8753 20.5346 16.653 19.998 16.2574 19.6024C15.8618 19.2068 15.3253 18.9846 14.7658 18.9846ZM35.8599 18.9846C35.3005 18.9846 34.7639 19.2068 34.3683 19.6024C33.9728 19.998 33.7505 20.5346 33.7505 21.094C33.7505 21.6535 33.9728 22.19 34.3683 22.5856C34.7639 22.9812 35.3005 23.2034 35.8599 23.2034C36.4194 23.2034 36.9559 22.9812 37.3515 22.5856C37.7471 22.19 37.9693 21.6535 37.9693 21.094C37.9693 20.5346 37.7471 19.998 37.3515 19.6024C36.9559 19.2068 36.4194 18.9846 35.8599 18.9846Z"
          fill="white"
        />
      </svg>
    ),
    title: "Performance-UX Impact Assessment",
    description:
      "Measure how performance issues (load time, interaction latency) affect user behavior and conversion. Make the business case for performance investment.",
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
          d="M38.8553 5.90163L39.6695 6.01976C40.9352 6.22015 42.3527 6.55555 43.2239 7.42673C44.095 8.29792 44.4326 9.71755 44.6329 10.9832L44.7511 11.7953C45.0169 13.7149 45.0865 16.2314 44.6329 19.0243C43.7386 24.5361 40.8044 31.1112 33.4362 36.2054C33.404 36.582 33.392 36.9602 33.4004 37.3381L33.4362 38.4835C33.4573 39.2471 33.4447 40.0086 33.2337 40.7406C32.8329 42.1328 31.4049 43.0504 30.0696 43.7085L29.4157 44.0186L28.5719 44.3899L27.9961 44.6219C26.5047 45.1915 24.7054 45.5901 23.5283 44.411C22.9946 43.8773 22.7478 43.1517 22.5496 42.426L22.4525 42.0632C22.115 40.7828 21.7332 39.5108 21.2565 38.2789C21.1249 38.4389 20.9855 38.5924 20.8388 38.7388C19.6892 39.8863 18.1304 40.4643 16.5715 40.9115L15.5358 41.1962L14.5022 41.4705L13.4939 41.7236L12.5826 41.9345L11.492 42.1666L10.8107 42.2995C10.4709 42.3624 10.1209 42.3417 9.79087 42.2392C9.46084 42.1367 9.1607 41.9554 8.91634 41.7111C8.67198 41.4667 8.49073 41.1665 8.38822 40.8365C8.28571 40.5065 8.26502 40.1565 8.32794 39.8167L8.56208 38.6544L8.83419 37.4352L9.09576 36.3594L9.57038 34.5769C10.0408 32.8472 10.6124 31.0647 11.8907 29.7886L12.0996 29.5882L10.4901 29.0102L8.87216 28.4533C7.92504 28.1411 6.9294 27.812 6.24173 27.1244C4.98453 25.8672 5.51821 23.9054 6.1447 22.3634L6.49486 21.5471L6.78385 20.9122C7.45253 19.4904 8.40176 17.8535 9.9121 17.419C10.6441 17.2081 11.4035 17.1954 12.1692 17.2144L13.3146 17.2524C13.6943 17.2622 14.0719 17.2502 14.4473 17.2165C19.5394 9.84833 26.1166 6.91414 31.6285 6.01976C34.0185 5.62594 36.4536 5.58614 38.8553 5.90163ZM32.3035 10.1837C27.667 10.9368 22.0328 13.4196 17.6368 20.0325C17.1031 20.8341 16.2024 21.2159 15.2848 21.3615C14.7658 21.4459 14.2427 21.4669 13.7175 21.4669L12.1417 21.4437C11.8802 21.4423 11.6179 21.4466 11.3549 21.4564C10.7137 22.3086 10.2665 23.3211 9.93109 24.3273L13.0952 25.4769L14.3967 25.9684C16.7761 26.9008 19.0796 28.0293 20.8515 29.8012C23.8363 32.786 25.353 36.6905 26.4499 40.6794C27.4117 40.3419 28.3779 39.9116 29.1963 39.2978L29.209 38.511L29.1858 36.9373C29.1858 36.4142 29.2069 35.8911 29.2912 35.3679C29.4347 34.4503 29.8186 33.5496 30.6202 33.016C37.2331 28.6199 39.7159 22.9857 40.469 18.3492C40.8487 16.0078 40.7854 13.9153 40.5723 12.3733C40.4903 11.7336 40.3541 11.102 40.1652 10.4854C39.5485 10.2972 38.9169 10.1617 38.2773 10.0804C36.2916 9.82303 34.2789 9.85646 32.3035 10.1837ZM14.8713 32.7713C14.133 33.6635 13.7892 34.8343 13.5129 35.9944L13.285 36.9816L13.169 37.4584L14.633 37.1145C15.7931 36.8403 16.966 36.4923 17.8561 35.754C18.2517 35.3582 18.4738 34.8214 18.4736 34.2619C18.4734 33.7023 18.2509 33.1657 17.8551 32.7702C17.4593 32.3747 16.9225 32.1526 16.363 32.1528C15.8034 32.153 15.2668 32.3754 14.8713 32.7713ZM26.8042 17.8577C27.1959 17.4659 27.661 17.1551 28.1728 16.943C28.6846 16.7308 29.2332 16.6216 29.7872 16.6215C30.3413 16.6214 30.8899 16.7305 31.4018 16.9424C31.9137 17.1543 32.3789 17.465 32.7707 17.8567C33.1625 18.2484 33.4734 18.7134 33.6855 19.2253C33.8976 19.7371 34.0068 20.2857 34.0069 20.8397C34.007 21.3937 33.898 21.9424 33.6861 22.4543C33.4741 22.9662 33.1634 23.4313 32.7717 23.8232C31.9804 24.6145 30.9071 25.0591 29.788 25.0591C28.6689 25.0591 27.5956 24.6145 26.8042 23.8232C26.0129 23.0318 25.5683 21.9585 25.5683 20.8394C25.5683 19.7203 26.0129 18.647 26.8042 17.8556V17.8577Z"
          fill="white"
        />
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
