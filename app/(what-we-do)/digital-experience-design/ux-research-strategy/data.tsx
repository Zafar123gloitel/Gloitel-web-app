import { ArchitectureItem } from "../../../uiComponents/ArchitectureCircle";

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
