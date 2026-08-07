import {
  ChevronRight,
  Download,
  FileText,
  Workflow,
  Timer,
  SearchCode,
  GitBranch,
  BookOpen,
  BarChart3,
  History,
  Bell,
} from "lucide-react";
import { RefreshCcw, Users, Wrench, Handshake, Zap } from "lucide-react";
import {
  ChartNoAxesCombined,
  Link2,
  Server,
  Puzzle,
  Network,
} from "lucide-react";

export const problems = [
  {
    title:
      "You have AI ideas but no clear basis for deciding where to invest first",
  },
  {
    title:
      "Leadership needs a structured business case before approving investment",
  },
  {
    title:
      "You have active AI pilots that aren't tied to measurable business outcomes",
  },
  {
    title:
      "You want to move from experimentation to execution but don't know the right entry point",
  },
];

export const discoverData = {
  badgeText: "Phase 01",
  title: "Discover",
  description:
    "Map workflows, decision points, and value creation/loss across the business.",
  cardTitle: "Current-state workflow map and value leakage analysis",
  image: "/images/What-we-do/discover.png",
  imageAlt: "AI strategy meeting",
};

export const RankData = {
  badgeText: "Phase 03",
  title: "Rank",
  description:
    "Prioritize use cases by value at stake, feasibility, and speed to ROI.",
  cardTitle: "Prioritized use case stack with impact vs. effort matrix",
  image: "/images/What-we-do/rank.png",
  imageAlt: "AI strategy meeting",
};

export const assessData = {
  badgeText: "Phase 02",
  title: "Assess",
  description:
    "Evaluate data maturity, system readiness, and implementation constraints.",
  cardTitle: "Feasibility assessment across shortlisted use cases",
  image: "/images/What-we-do/assess.png",
  imageAlt: "AI assessment",
};
export const enableData = {
  badgeText: "Phase 04",
  title: "Enable",
  description:
    "Scope the highest-priority use case into a pilot-ready brief with a clear investment case.",
  cardTitle: "Defined pilot scope, success metrics, and execution roadmap",
  image: "/images/What-we-do/enable.png",
  imageAlt: "AI assessment",
};

export const outcomesData = [
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
          
        <g clipPath="url(#clip0_1347_31006)">
              
          <path
            d="M19.0841 2.12123C17.5609 2.12648 16.0453 2.33688 14.5782 2.74675L15.3946 4.71874C18.5653 3.87921 21.9244 4.10812 24.9519 5.37005C27.9794 6.63198 30.5066 8.85658 32.1424 11.6996C33.7782 14.5426 34.4314 17.8454 34.0008 21.0971C33.5703 24.3487 32.0801 27.3677 29.7608 29.6871C27.4415 32.0064 24.4224 33.4966 21.1708 33.9271C17.9191 34.3577 14.6163 33.7045 11.7733 32.0687C8.93028 30.4329 6.70569 27.9057 5.44376 24.8782C4.18182 21.8507 3.95291 18.4916 4.79245 15.3209L2.82046 14.4939C1.85811 17.9173 1.99598 21.5566 3.21456 24.8974C4.43314 28.2382 6.67081 31.1115 9.61132 33.1114C12.5518 35.1112 16.0465 36.1363 19.6013 36.0419C23.1561 35.9475 26.5914 34.7383 29.4216 32.5852C32.2518 30.4321 34.3338 27.444 35.3733 24.0432C36.4129 20.6424 36.3573 17.001 35.2146 13.6335C34.0719 10.266 31.8998 7.34276 29.0053 5.27695C26.1107 3.21114 22.6402 2.10722 19.0841 2.12123Z"
            fill="white"
          />
              
          <path
            d="M7.89781 16.6435C7.36864 19.0613 7.63645 21.5856 8.66117 23.8386C9.68589 26.0917 11.4125 27.9524 13.5826 29.1426C15.7528 30.3328 18.25 30.7884 20.7007 30.4414C23.1513 30.0944 25.4238 28.9633 27.1782 27.2173C28.9326 25.4714 30.0746 23.2044 30.4335 20.7555C30.7924 18.3065 30.3488 15.8071 29.1691 13.6312C27.9894 11.4553 26.137 9.71981 23.889 8.68421C21.6409 7.64862 19.118 7.36863 16.6976 7.8861L17.3549 9.54003C19.4142 9.15448 21.5429 9.43928 23.4284 10.3526C25.3139 11.266 26.8569 12.7597 27.831 14.6146C28.805 16.4695 29.1587 18.5878 28.8402 20.6585C28.5216 22.7292 27.5476 24.6433 26.0611 26.1197C24.5747 27.5961 22.654 28.557 20.5812 28.8615C18.5083 29.1659 16.3925 28.7978 14.5443 27.8111C12.6961 26.8245 11.2128 25.2713 10.3124 23.3796C9.41188 21.488 9.14158 19.3574 9.54114 17.3008L7.89781 16.6435Z"
            fill="white"
          />
              
          <path
            d="M19.0823 23.42C18.0195 23.4043 16.9998 22.9978 16.2176 22.2782C15.4354 21.5586 14.9455 20.5762 14.8414 19.5184L13.1133 18.7975V19.0837C13.1133 20.2796 13.4688 21.4484 14.1345 22.4418C14.8003 23.4352 15.7462 24.2083 16.8522 24.663C17.9583 25.1176 19.1745 25.2333 20.3464 24.9953C21.5183 24.7574 22.593 24.1765 23.4341 23.3264C24.2752 22.4764 24.8447 21.3955 25.0702 20.2211C25.2958 19.0468 25.1672 17.8319 24.7008 16.7307C24.2345 15.6296 23.4514 14.6919 22.451 14.0367C21.4506 13.3816 20.278 13.0385 19.0823 13.0511H18.8278L19.5382 14.8429C20.5978 15.0036 21.5598 15.5529 22.2367 16.3838C22.9136 17.2148 23.2571 18.2679 23.2002 19.3382C23.1433 20.4085 22.6901 21.4193 21.9289 22.1738C21.1677 22.9283 20.153 23.3725 19.0823 23.42Z"
            fill="white"
          />
              
          <path
            d="M8.69201 14.1443C8.78989 14.2442 8.92326 14.3013 9.06309 14.3033H12.9329L18.6262 19.9967C18.8258 20.1977 19.0972 20.3112 19.3805 20.3122C19.6638 20.3132 19.936 20.2016 20.137 20.002C20.3381 19.8023 20.4516 19.531 20.4526 19.2477C20.4535 18.9643 20.3419 18.6922 20.1423 18.4912L14.3429 12.7236V9.02347C14.341 8.88364 14.2838 8.75026 14.1839 8.65239L8.25733 2.7258C8.18323 2.65316 8.08945 2.60386 7.9876 2.58401C7.88575 2.56416 7.78031 2.57464 7.68436 2.61415C7.58841 2.65366 7.50617 2.72046 7.44782 2.80627C7.38948 2.89208 7.3576 2.99312 7.35615 3.09688V7.33773H3.17891C3.07515 7.33919 2.97411 7.37106 2.8883 7.4294C2.80249 7.48775 2.73569 7.56999 2.69618 7.66594C2.65667 7.76189 2.64619 7.86733 2.66604 7.96918C2.68589 8.07103 2.73519 8.16481 2.80784 8.23891L8.69201 14.1443Z"
            fill="white"
          />
            
        </g>
          
        <defs>
              
          <clipPath id="clip0_1347_31006">
                  
            <rect width="38.1676" height="38.1676" rx="5.30106" fill="white" />
                
          </clipPath>
            
        </defs>
      </svg>
    ),
    title: "Clarity on where AI will create measurable business impact",
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
          d="M7.91725 15.4003C4.75887 14.1376 3.17969 13.5063 3.17969 12.7206C3.17969 11.935 4.75887 11.3053 7.91725 10.041L12.3829 8.25503C15.5412 6.99073 17.122 6.35938 19.0829 6.35938C21.0437 6.35938 22.6245 6.99073 25.7829 8.25503L30.2485 10.041C33.4069 11.3037 34.9861 11.935 34.9861 12.7206C34.9861 13.5063 33.4069 14.136 30.2485 15.4003L25.7829 17.1879C22.6245 18.4506 21.0437 19.0819 19.0829 19.0819C17.122 19.0819 15.5412 18.4506 12.3829 17.1879L7.91725 15.4003Z"
          stroke="white"
          strokeWidth="2.38548"
        />
          
        <path
          opacity="0.5"
          d="M9.16883 15.9023L7.91725 16.4033C4.75887 17.666 3.17969 18.299 3.17969 19.083C3.17969 19.867 4.75887 20.4984 7.91725 21.7627L12.3829 23.5502C15.5412 24.8129 17.122 25.4443 19.0829 25.4443C21.0437 25.4443 22.6245 24.8129 25.7829 23.5502L30.2485 21.7627C33.4069 20.5 34.9861 19.867 34.9861 19.083C34.9861 18.299 33.4069 17.6676 30.2485 16.4033L28.9969 15.9023M9.16883 22.2636L7.91725 22.7646C4.75887 24.0273 3.17969 24.6602 3.17969 25.4443C3.17969 26.2283 4.75887 26.8596 7.91725 28.1239L12.3829 29.9115C15.5412 31.1742 17.122 31.8055 19.0829 31.8055C21.0437 31.8055 22.6245 31.1742 25.7829 29.9099L30.2485 28.1239C33.4069 26.8612 34.9861 26.2299 34.9861 25.4443C34.9861 24.6602 33.4069 24.0289 30.2485 22.7646L28.9969 22.2636"
          stroke="white"
          strokeWidth="2.38548"
        />
      </svg>
    ),
    title: "A prioritised use case stack ranked by value and feasibility",
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
          d="M8.78546 25.7215L14.4311 20.0758C14.7491 19.7578 15.1202 19.6051 15.5443 19.6178C15.9684 19.6305 16.3395 19.7965 16.6575 20.1156C16.9491 20.4336 17.0949 20.8047 17.0949 21.2288C17.0949 21.6529 16.9491 22.024 16.6575 22.342L9.93844 29.1009C9.62037 29.4189 9.2493 29.578 8.82521 29.578C8.40113 29.578 8.03005 29.4189 7.71199 29.1009L4.29281 25.6817C4.00125 25.3901 3.85547 25.0191 3.85547 24.5685C3.85547 24.1179 4.00125 23.7468 4.29281 23.4552C4.58436 23.1637 4.95544 23.0179 5.40603 23.0179C5.85662 23.0179 6.22769 23.1637 6.51925 23.4552L8.78546 25.7215ZM8.78546 12.9989L14.4311 7.35328C14.7491 7.03521 15.1202 6.88254 15.5443 6.89527C15.9684 6.90799 16.3395 7.07391 16.6575 7.39304C16.9491 7.7111 17.0949 8.08217 17.0949 8.50626C17.0949 8.93034 16.9491 9.30142 16.6575 9.61948L9.93844 16.3783C9.62037 16.6964 9.2493 16.8554 8.82521 16.8554C8.40113 16.8554 8.03005 16.6964 7.71199 16.3783L4.29281 12.9591C4.00125 12.6676 3.85547 12.2965 3.85547 11.8459C3.85547 11.3953 4.00125 11.0243 4.29281 10.7327C4.58436 10.4411 4.95544 10.2954 5.40603 10.2954C5.85662 10.2954 6.22769 10.4411 6.51925 10.7327L8.78546 12.9989ZM22.2634 27.0335C21.8128 27.0335 21.4354 26.8808 21.1311 26.5755C20.8268 26.2701 20.6741 25.8927 20.6731 25.4431C20.672 24.9936 20.8247 24.6162 21.1311 24.3108C21.4375 24.0055 21.8149 23.8528 22.2634 23.8528H33.3956C33.8462 23.8528 34.2242 24.0055 34.5295 24.3108C34.8349 24.6162 34.987 24.9936 34.9859 25.4431C34.9849 25.8927 34.8322 26.2706 34.5279 26.577C34.2237 26.8834 33.8462 27.0356 33.3956 27.0335H22.2634ZM22.2634 14.3109C21.8128 14.3109 21.4354 14.1582 21.1311 13.8529C20.8268 13.5476 20.6741 13.1701 20.6731 12.7206C20.672 12.2711 20.8247 11.8936 21.1311 11.5883C21.4375 11.283 21.8149 11.1303 22.2634 11.1303H33.3956C33.8462 11.1303 34.2242 11.283 34.5295 11.5883C34.8349 11.8936 34.987 12.2711 34.9859 12.7206C34.9849 13.1701 34.8322 13.5481 34.5279 13.8545C34.2237 14.1609 33.8462 14.313 33.3956 14.3109H22.2634Z"
          fill="white"
        />
      </svg>
    ),
    title: "Defined pilot scope with expected outcomes and success metrics",
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
          d="M29.77 17.0393C29.4615 17.3319 29.0526 17.4951 28.6274 17.4951C28.2022 17.4951 27.7932 17.3319 27.4847 17.0393C24.6778 14.3628 20.9167 11.3714 22.7503 7.02985C23.7427 4.68254 26.1218 3.17969 28.6266 3.17969C31.1313 3.17969 33.512 4.68254 34.5028 7.02826C36.3348 11.3666 32.5849 14.3708 29.77 17.0393Z"
          stroke="white"
          strokeWidth="2.38548"
        />
          
        <path
          d="M28.8386 9.54211H28.6398M29.0373 9.54211C29.0373 9.64756 28.9955 9.74868 28.9209 9.82324C28.8463 9.8978 28.7452 9.93969 28.6398 9.93969C28.5343 9.93969 28.4332 9.8978 28.3586 9.82324C28.2841 9.74868 28.2422 9.64756 28.2422 9.54211C28.2422 9.43667 28.2841 9.33554 28.3586 9.26098C28.4332 9.18642 28.5343 9.14453 28.6398 9.14453C28.7452 9.14453 28.8463 9.18642 28.9209 9.26098C28.9955 9.33554 29.0373 9.43667 29.0373 9.54211Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
          
        <path
          d="M7.95064 34.9872C10.5856 34.9872 12.7216 32.8512 12.7216 30.2163C12.7216 27.5813 10.5856 25.4453 7.95064 25.4453C5.31572 25.4453 3.17969 27.5813 3.17969 30.2163C3.17969 32.8512 5.31572 34.9872 7.95064 34.9872Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
          
        <path
          d="M17.4907 11.1324H15.1052C12.0311 11.1324 9.53906 13.2682 9.53906 15.9034C9.53906 18.5385 12.0311 20.6743 15.1052 20.6743H19.8761C22.9502 20.6743 25.4422 22.8101 25.4422 25.4453C25.4422 28.0805 22.9502 30.2162 19.8761 30.2162H17.4907M28.8376 9.54211H28.6388M29.0364 9.54211C29.0364 9.64756 28.9945 9.74868 28.9199 9.82324C28.8454 9.8978 28.7442 9.93969 28.6388 9.93969C28.5333 9.93969 28.4322 9.8978 28.3577 9.82324C28.2831 9.74868 28.2412 9.64756 28.2412 9.54211C28.2412 9.43667 28.2831 9.33554 28.3577 9.26098C28.4322 9.18642 28.5333 9.14453 28.6388 9.14453C28.7442 9.14453 28.8454 9.18642 28.9199 9.26098C28.9945 9.33554 29.0364 9.43667 29.0364 9.54211Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "A structured roadmap aligned to business priorities",
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
          d="M4.76953 20.6747C10.4947 7.95218 27.6701 7.95218 33.3953 20.6747"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
          
        <path
          d="M17.2577 26.6709C17.8365 26.9107 18.4569 27.0341 19.0835 27.0341C20.3488 27.0341 21.5623 26.5314 22.457 25.6367C23.3518 24.742 23.8544 23.5285 23.8544 22.2631C23.8544 20.9978 23.3518 19.7843 22.457 18.8896C21.5623 17.9948 20.3488 17.4922 19.0835 17.4922C18.4569 17.4922 17.8365 17.6156 17.2577 17.8554C16.6789 18.0951 16.1529 18.4465 15.7099 18.8896C15.2669 19.3326 14.9154 19.8585 14.6757 20.4374C14.4359 21.0162 14.3125 21.6366 14.3125 22.2631C14.3125 22.8897 14.4359 23.5101 14.6757 24.0889C14.9154 24.6677 15.2669 25.1937 15.7099 25.6367C16.1529 26.0797 16.6789 26.4312 17.2577 26.6709Z"
          stroke="white"
          strokeWidth="2.38548"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "A clear view of what *not* to build — equally valuable",
  },
];

export const notIncludedData = [
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Not a vendor-led engagement where we pre-sell a solution",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Not a free strategy workshop with vague outputs",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Not an open-ended consulting retainer",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Not a build-first approach without a validated roadmap",
  },
];

export const accordionData = [
  {
    title: "What if we don't know where to start?",
    description:
      "That's exactly the situation this engagement is built for. We guide the entire discovery process — you don't need to arrive with defined use cases.",
  },
  {
    title: "How quickly will we see results?",
    description:
      "The Discovery Sprint delivers actionable output in 3–4 weeks. Pilot programs following Discovery typically show results within 6–10 weeks.",
  },
  {
    title: "What happens after the Discovery Sprint?",
    description:
      "If Discovery identifies a viable pilot, we scope and run the AI Pilot Program. Production build and scale only follows after the pilot demonstrates ROI.",
  },
  {
    title: "Does leadership need to be involved?",
    description:
      "Yes – directly. This engagement is run with business stakeholders, not delegated to IT teams. If leadership cannot participate, this is likely not the right fit.",
  },
];

export const heroSectionData = {
  badgeText: "AI Strategy & Consulting",

  title: "Define Your AI Roadmap Before You Build",

  description:
    "Most AI initiatives fail before they begin — not because of bad technology, but because of misdirected effort. We help you decide *where* AI should be applied before a single line of code is written.",

  image: "/images/What-we-do/Rectangle 1.png",

  imageAlt: "AI strategy meeting",

  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",

  primaryButton: {
    text: "Book a Strategy Session",
    href: "/contact",
  },

  secondaryButton: {
    text: "Download a Sample Roadmap",
    href: "/about",
    icon: <Download size={16} />,
  },
};
export const heroSectionDataGenerative = {
  badgeText: "Generative AI & LLMs",

  title: "Building AI Prototypes is Easy.Building Production Systems is not.",

  description:
    "Building an LLM prototype takes days. Building one that's accurate, secure, cost-controlled, and production-stable takes a team that's shipped it before.",

  image: "/images/What-we-do/Rectangle 1.png",

  imageAlt: "Generative AI & LLMs",

  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",

  primaryButton: {
    text: "Talk to Our GenAI Team",
    href: "/contact",
  },

  secondaryButton: {
    text: "See What We've Built",
    href: "/about",
    icon: <ChevronRight size={16} />,
  },
};

export const aiServicesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 45 45"
        fill="none"
      >
        <path
          d="M19.776 22.1488C19.776 22.7782 20.026 23.3818 20.471 23.8268C20.9161 24.2718 21.5197 24.5219 22.1491 24.5219C22.7784 24.5219 23.382 24.2718 23.8271 23.8268C24.2721 23.3818 24.5221 22.7782 24.5221 22.1488C24.5221 21.5194 24.2721 20.9158 23.8271 20.4708C23.382 20.0257 22.7784 19.7757 22.1491 19.7757C21.5197 19.7757 20.9161 20.0257 20.471 20.4708C20.026 20.9158 19.776 21.5194 19.776 22.1488ZM29.6638 22.1488C29.6638 22.7782 29.9138 23.3818 30.3589 23.8268C30.8039 24.2718 31.4075 24.5219 32.0369 24.5219C32.6663 24.5219 33.2699 24.2718 33.7149 23.8268C34.16 23.3818 34.41 22.7782 34.41 22.1488C34.41 21.5194 34.16 20.9158 33.7149 20.4708C33.2699 20.0257 32.6663 19.7757 32.0369 19.7757C31.4075 19.7757 30.8039 20.0257 30.3589 20.4708C29.9138 20.9158 29.6638 21.5194 29.6638 22.1488ZM9.88813 22.1488C9.88813 22.7782 10.1381 23.3818 10.5832 23.8268C11.0282 24.2718 11.6318 24.5219 12.2612 24.5219C12.8906 24.5219 13.4942 24.2718 13.9392 23.8268C14.3843 23.3818 14.6343 22.7782 14.6343 22.1488C14.6343 21.5194 14.3843 20.9158 13.9392 20.4708C13.4942 20.0257 12.8906 19.7757 12.2612 19.7757C11.6318 19.7757 11.0282 20.0257 10.5832 20.4708C10.1381 20.9158 9.88813 21.5194 9.88813 22.1488ZM42.5774 13.5661C41.46 10.9112 39.8582 8.52827 37.8164 6.48148C35.7888 4.4466 33.3818 2.82908 30.7317 1.72049C28.0126 0.578439 25.1253 0 22.1491 0H22.0502C19.0542 0.0148318 16.1521 0.608103 13.423 1.77487C10.7957 2.89483 8.41124 4.51522 6.40266 6.54575C4.3806 8.58759 2.7936 10.9607 1.69605 13.6057C0.558944 16.3446 -0.0145513 19.2566 0.000280482 22.2526C0.0170565 25.686 0.829336 29.0688 2.37336 32.1355V39.6503C2.37336 40.2534 2.61297 40.8319 3.03946 41.2584C3.46596 41.6849 4.04441 41.9245 4.64757 41.9245H12.1673C15.234 43.4685 18.6168 44.2808 22.0502 44.2976H22.154C25.1154 44.2976 27.9878 43.7241 30.6922 42.6018C33.3289 41.5064 35.7269 39.9078 37.7521 37.8952C39.7939 35.8731 41.4007 33.5099 42.523 30.8748C43.6897 28.1458 44.283 25.2437 44.2978 22.2477C44.3127 19.2368 43.7293 16.3149 42.5774 13.5661ZM35.1071 35.2205C31.6414 38.6516 27.0435 40.5402 22.1491 40.5402H22.065C19.0838 40.5253 16.1224 39.7838 13.5071 38.3896L13.0918 38.1671H6.13075V31.206L5.90827 30.7908C4.51408 28.1754 3.77249 25.214 3.75766 22.2328C3.73789 17.3037 5.62152 12.6762 9.07732 9.19075C12.5282 5.70529 17.1409 3.77716 22.07 3.75738H22.154C24.626 3.75738 27.0238 4.23694 29.2831 5.18618C31.4881 6.11069 33.4657 7.4406 35.1664 9.14131C36.8622 10.8371 38.197 12.8196 39.1215 15.0246C40.0807 17.3087 40.5602 19.7312 40.5503 22.2328C40.5207 27.157 38.5876 31.7697 35.1071 35.2205Z"
          fill="white"
        />
      </svg>
    ),
    title: "Custom AI Chatbots & Assistants",
    description:
      "Intelligent conversational interfaces trained on your domain knowledge. Customer support bots, internal knowledge assistants, sales copilots – built with guardrails, citation support, and fallback logic.",
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
          d="M6.32812 29.5316V21.094C6.32812 13.1394 6.32812 9.16109 8.80035 6.69098C11.2726 4.22086 15.2488 4.21875 23.2034 4.21875H27.4222C35.3768 4.21875 39.3551 4.21875 41.8252 6.69098C43.2048 8.06842 43.8144 9.91415 44.0823 12.6564M44.2975 21.094V29.5316C44.2975 37.4862 44.2975 41.4646 41.8252 43.9347C39.353 46.4048 35.3768 46.4069 27.4222 46.4069H23.2034C15.2488 46.4069 11.2705 46.4069 8.80035 43.9347C7.4208 42.5572 6.81118 40.7115 6.54328 37.9693M16.8752 29.5316H27.4222M16.8752 21.094H18.9846M33.7504 21.094H25.3128"
          stroke="white"
          strokeWidth="3.16411"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Document Intelligence & Processing",
    description:
      "Automate document-heavy workflows with LLMs. Contract analysis, invoice extraction, report summarization, regulatory document parsing – structured outputs from unstructured inputs.",
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
          d="M8.4375 37.9691V12.6562M42.188 12.6562V37.9691"
          stroke="white"
          strokeWidth="3.16411"
          strokeLinecap="round"
        />
        <path
          d="M42.188 25.3128C42.188 29.9746 34.6321 33.7505 25.3128 33.7505C15.9934 33.7505 8.4375 29.9746 8.4375 25.3128M42.188 37.9693C42.188 42.6311 34.6321 46.4069 25.3128 46.4069C15.9934 46.4069 8.4375 42.6311 8.4375 37.9693M25.3128 21.094C34.6321 21.094 42.188 17.3182 42.188 12.6564C42.188 7.99459 34.6321 4.21875 25.3128 4.21875C15.9934 4.21875 8.4375 7.99459 8.4375 12.6564C8.4375 17.3182 15.9934 21.094 25.3128 21.094Z"
          stroke="white"
          strokeWidth="3.16411"
        />
      </svg>
    ),
    title: "RAG (Retrieval-Augmented Generation) Systems",
    description:
      "Connect LLMs to your proprietary data with vector search pipelines. Accurate, source-cited responses drawn from your internal knowledge base, documentation, or enterprise data.",
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
          d="M33.9171 40.0796C33.4249 40.0796 33.017 39.9165 32.6936 39.5902C32.3702 39.264 32.2084 38.8589 32.2084 38.3752V36.1434H25.9625C25.4801 36.1434 25.0751 35.981 24.7475 35.6562C24.4212 35.3285 24.2581 34.9235 24.2581 34.4411V26.3684H18.375V28.5601C18.375 29.0425 18.2118 29.4468 17.8856 29.773C17.5593 30.0993 17.155 30.2624 16.6727 30.2624H8.03253C7.54314 30.2624 7.13673 30.0993 6.81329 29.773C6.48985 29.4468 6.32812 29.0418 6.32812 28.558V22.0273C6.32812 21.5449 6.49125 21.1406 6.81751 20.8144C7.14376 20.4881 7.54877 20.325 8.03253 20.325H16.6727C17.162 20.325 17.5685 20.4881 17.8919 20.8144C18.2153 21.1406 18.3771 21.5449 18.3771 22.0273V24.259H24.2581V16.1463C24.2581 15.6625 24.4212 15.2575 24.7475 14.9312C25.0751 14.605 25.4801 14.4419 25.9625 14.4419H32.2084V12.2101C32.2084 11.7278 32.3716 11.3234 32.6978 10.9972C33.0241 10.6709 33.4291 10.5078 33.9128 10.5078H42.5909C43.0831 10.5078 43.491 10.6709 43.8144 10.9972C44.1378 11.3234 44.2989 11.7278 44.2975 12.2101V18.783C44.2975 19.2654 44.1343 19.6697 43.8081 19.9959C43.4818 20.3222 43.0768 20.4853 42.5931 20.4853H33.9192C33.427 20.4853 33.0192 20.3222 32.6957 19.9959C32.3723 19.6697 32.2106 19.2654 32.2106 18.783V16.5513H26.3675V34.0361H32.2106V31.8445C32.2106 31.3621 32.373 30.9578 32.6978 30.6316C33.0227 30.3053 33.4277 30.1422 33.9128 30.1422H42.5909C43.0831 30.1422 43.491 30.3053 43.8144 30.6316C44.1378 30.9578 44.2989 31.3621 44.2975 31.8445V38.3752C44.2975 38.8589 44.1343 39.264 43.8081 39.5902C43.4818 39.9165 43.0768 40.0796 42.5931 40.0796H33.9171ZM34.3179 37.9702H42.188V32.2495H34.32L34.3179 37.9702ZM8.43753 28.153H16.2677V22.4344H8.43753V28.153ZM34.32 18.378H42.188V12.6151H34.32V18.378Z"
          fill="white"
        />
      </svg>
    ),
    title: "LLM-Powered Workflow Automation",
    description:
      "Replace rule-based automation with AI that understands context. Intelligent triage, email drafting, content generation, and multi-step reasoning tasks embedded in your existing workflows.",
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
        <g clipPath="url(#clip0_1565_889)">
          <path
            d="M16.8737 17.3955C16.879 16.1443 16.467 14.9271 15.703 13.9364C14.9389 12.9456 13.8663 12.2379 12.6549 11.9251V7.03127C12.6549 6.65831 12.5067 6.30061 12.243 6.03689C11.9793 5.77316 11.6216 5.625 11.2486 5.625C10.8756 5.625 10.5179 5.77316 10.2542 6.03689C9.99049 6.30061 9.84233 6.65831 9.84233 7.03127V11.9251C8.61305 12.2195 7.51876 12.9194 6.73593 13.9118C5.95309 14.9043 5.52734 16.1315 5.52734 17.3955C5.52734 18.6595 5.95309 19.8867 6.73593 20.8792C7.51876 21.8716 8.61305 22.5715 9.84233 22.8659V43.5943C9.84233 43.9673 9.99049 44.325 10.2542 44.5887C10.5179 44.8524 10.8756 45.0006 11.2486 45.0006C11.6216 45.0006 11.9793 44.8524 12.243 44.5887C12.5067 44.325 12.6549 43.9673 12.6549 43.5943V22.8659C13.8663 22.5531 14.9389 21.8454 15.703 20.8546C16.467 19.8639 16.879 18.6466 16.8737 17.3955ZM11.2486 20.208C10.6923 20.208 10.1486 20.0431 9.68604 19.734C9.22352 19.425 8.86303 18.9857 8.65015 18.4718C8.43728 17.9579 8.38158 17.3924 8.4901 16.8468C8.59862 16.3012 8.86649 15.8001 9.25983 15.4067C9.65318 15.0134 10.1543 14.7455 10.6999 14.637C11.2455 14.5285 11.811 14.5842 12.3249 14.797C12.8388 15.0099 13.2781 15.3704 13.5871 15.8329C13.8962 16.2954 14.0611 16.8392 14.0611 17.3955C14.0667 17.7684 13.9981 18.1386 13.8593 18.4848C13.7204 18.8309 13.5142 19.1459 13.2524 19.4116C12.9907 19.6772 12.6788 19.8882 12.3348 20.0322C11.9907 20.1761 11.6215 20.2503 11.2486 20.2502V20.208Z"
            fill="white"
          />
          <path
            d="M45.0026 22.2612C45.0079 21.01 44.596 19.7928 43.8319 18.8021C43.0678 17.8113 41.9952 17.1036 40.7838 16.7908V7.03127C40.7838 6.65831 40.6356 6.30061 40.3719 6.03689C40.1082 5.77316 39.7505 5.625 39.3775 5.625C39.0045 5.625 38.6469 5.77316 38.3831 6.03689C38.1194 6.30061 37.9712 6.65831 37.9712 7.03127V16.7908C36.742 17.0852 35.6477 17.7851 34.8648 18.7775C34.082 19.77 33.6562 20.9972 33.6562 22.2612C33.6562 23.5252 34.082 24.7524 34.8648 25.7449C35.6477 26.7373 36.742 27.4372 37.9712 27.7316V43.5943C37.9712 43.9673 38.1194 44.325 38.3831 44.5887C38.6469 44.8524 39.0045 45.0006 39.3775 45.0006C39.7505 45.0006 40.1082 44.8524 40.3719 44.5887C40.6356 44.325 40.7838 43.9673 40.7838 43.5943V27.7316C41.9952 27.4188 43.0678 26.7111 43.8319 25.7203C44.596 24.7296 45.0079 23.5123 45.0026 22.2612ZM39.3775 25.0737C38.8212 25.0737 38.2775 24.9088 37.8149 24.5997C37.3524 24.2907 36.9919 23.8514 36.7791 23.3375C36.5662 22.8236 36.5105 22.2581 36.619 21.7125C36.7275 21.1669 36.9954 20.6658 37.3887 20.2724C37.7821 19.8791 38.2832 19.6112 38.8288 19.5027C39.3744 19.3942 39.9399 19.4499 40.4538 19.6627C40.9677 19.8756 41.407 20.2361 41.7161 20.6986C42.0251 21.1611 42.1901 21.7049 42.1901 22.2612C42.1975 22.6352 42.1303 23.007 41.9923 23.3548C41.8543 23.7025 41.6483 24.0193 41.3864 24.2864C41.1245 24.5536 40.8119 24.7658 40.467 24.9106C40.122 25.0555 39.7516 25.1301 39.3775 25.13V25.0737Z"
            fill="white"
          />
          <path
            d="M30.9362 34.4536C30.9415 33.2024 30.5296 31.9852 29.7655 30.9944C29.0014 30.0037 27.9288 29.296 26.7174 28.9832V7.03127C26.7174 6.65831 26.5692 6.30061 26.3055 6.03689C26.0418 5.77316 25.6841 5.625 25.3111 5.625C24.9381 5.625 24.5804 5.77316 24.3167 6.03689C24.053 6.30061 23.9048 6.65831 23.9048 7.03127V28.9832C22.6756 29.2776 21.5813 29.9774 20.7984 30.9699C20.0156 31.9623 19.5898 33.1895 19.5898 34.4536C19.5898 35.7176 20.0156 36.9448 20.7984 37.9373C21.5813 38.9297 22.6756 39.6296 23.9048 39.924V43.5943C23.9048 43.9673 24.053 44.325 24.3167 44.5887C24.5804 44.8524 24.9381 45.0006 25.3111 45.0006C25.6841 45.0006 26.0418 44.8524 26.3055 44.5887C26.5692 44.325 26.7174 43.9673 26.7174 43.5943V39.924C27.9288 39.6112 29.0014 38.9034 29.7655 37.9127C30.5296 36.9219 30.9415 35.7047 30.9362 34.4536ZM25.3111 37.2661C24.7548 37.2661 24.2111 37.1012 23.7485 36.7921C23.286 36.4831 22.9255 36.0438 22.7127 35.5299C22.4998 35.016 22.4441 34.4504 22.5526 33.9049C22.6611 33.3593 22.929 32.8581 23.3223 32.4648C23.7157 32.0715 24.2168 31.8036 24.7624 31.6951C25.308 31.5865 25.8735 31.6422 26.3874 31.8551C26.9013 32.068 27.3406 32.4285 27.6496 32.891C27.9587 33.3535 28.1236 33.8973 28.1236 34.4536C28.1292 34.8265 28.0606 35.1967 27.9218 35.5428C27.7829 35.889 27.5767 36.204 27.3149 36.4697C27.0532 36.7353 26.7413 36.9463 26.3973 37.0902C26.0532 37.2342 25.684 37.3083 25.3111 37.3083V37.2661Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1565_889">
            <rect width="50.6258" height="50.6258" rx="7.03136" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Fine-Tuning & Model Customization",
    description:
      "Custom fine-tuned models for domain-specific tasks where general-purpose LLMs underperform. Smaller, faster, cheaper – specialized for your exact use case.",
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
          d="M24.1884 43.9197C24.5116 44.1657 24.9066 44.2989 25.3128 44.2989C25.7189 44.2989 26.1139 44.1657 26.4371 43.9197C29.886 41.3315 40.0786 32.8791 40.0786 23.2391V12.8397C40.0808 12.5715 39.9834 12.3119 39.8054 12.1113C39.6273 11.9106 39.3812 11.7831 39.1146 11.7534C34.8909 11.3207 30.8427 9.83697 27.3399 7.43751L26.0532 6.55789C25.8353 6.40823 25.5771 6.32812 25.3128 6.32812C25.0484 6.32812 24.7903 6.40823 24.5724 6.55789L23.2856 7.43751C19.7828 9.83697 15.7347 11.3207 11.5109 11.7534C11.2443 11.7831 10.9982 11.9106 10.8201 12.1113C10.6421 12.3119 10.5447 12.5715 10.5469 12.8397V23.2391C10.5469 32.8791 20.7396 41.3315 24.1884 43.9155"
          stroke="white"
          strokeWidth="3.16411"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Private LLM Deployment",
    description:
      "Deploy LLMs in secure, private environments with complete control over infrastructure and data. On-premises and VPC-hosted deployments built for healthcare, finance, and enterprise organizations with strict compliance and data residency requirements.",
  },
];

export const executionStepOne = {
  badgeText: "Step 01",
  title: "Use Case Definition",
  description:
    "We scope the exact workflow to be augmented, define input/output formats, and establish success metrics before writing code.",
  buttonText: "View more",
  buttonLink: "/use-case-definition",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498264/Gloitel/what-we-do/use-case-definition_izirji.png",
  imageAlt: "Use Case Definition",
};

export const executionStepTwo = {
  badgeText: "Step 02",
  title: "Model Selection",
  description:
    "We evaluate and recommend the right model (GPT-4o, Claude, Gemini, LLaMA, Mistral) based on accuracy requirements, latency, cost, and data sensitivity.",
  buttonText: "View more",
  buttonLink: "/model-selection",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/model-selection_kwalzf.png",
  imageAlt: "Model Selection",
};

export const executionStepThree = {
  badgeText: "Step 03",
  title: "Prototype & Evaluation",
  description:
    "Rapid prototype with human evaluation loops. We measure accuracy, hallucination rate, latency, and cost before green-lighting production build.",
  buttonText: "View more",
  buttonLink: "/prototype-evaluation",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498266/Gloitel/what-we-do/prototype-evaluation_kenj6r.png",
  imageAlt: "Prototype & Evaluation",
};

export const executionStepFour = {
  badgeText: "Step 04",
  title: "Production Engineering",
  description:
    "Full-stack build with authentication, logging, monitoring, rate limiting, fallback handling, and CI/CD pipelines.",
  buttonText: "View more",
  buttonLink: "/production-deployment",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498265/Gloitel/what-we-do/Production-ngineering_pra50l.png",
  imageAlt: "Production Deployment",
};

export const executionStepFive = {
  badgeText: "Step 05",
  title: "Deployment & Monitoring",
  description:
    "Cloud-native deployment with model performance monitoring, cost dashboards, and drift detection.",
  buttonText: "View more",
  buttonLink: "/deployment-monitoring",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/deployment-monitoring_ex4dem.png",
  imageAlt: "Deployment & Monitoring",
};

export const ApproachStepOne = {
  badgeText: "Step 01",
  title: "Process Mapping",
  description:
    "Document the exact workflow the agent will replace or augment. Every input source, decision point, tool call, and output format.",
  buttonText: "View more",
  buttonLink: "/use-case-definition",
  image: "/images/What-we-do/assess.png",
  imageAlt: "Process Mapping",
};

export const ApproachStepTwo = {
  badgeText: "Step 02",
  title: "Tool Architecture",
  description:
    "Design the tool set the agent will have access to. Minimal permissions, auditable actions, rollback capability.",
  buttonText: "View more",
  buttonLink: "/model-selection",
  image: "/images/What-we-do/discover.png",
  imageAlt: "Tool Architecture",
};

export const ApproachStepThree = {
  badgeText: "Step 03",
  title: "Failure Mode Analysis",
  description:
    "Map every point where the agent could go wrong. Design guardrails, fallback paths, and human escalation triggers before build.",
  buttonText: "View more",
  buttonLink: "/prototype-evaluation",
  image: "/images/What-we-do/enable.png",
  imageAlt: "Failure Mode Analysis",
};

export const ApproachStepFour = {
  badgeText: "Step 04",
  title: "Gradual Autonomy",
  description:
    "Increase agent autonomy progressively as confidence builds. Not a binary switch from human to automated.",
  buttonText: "View more",
  buttonLink: "/production-deployment",
  image: "/images/What-we-do/rank.png",
  imageAlt: "Gradual Autonomy",
};

export const ApproachStepFive = {
  badgeText: "Step 05",
  title: "Continuous Optimization",
  description:
    "Monitor model performance, collect feedback, retrain when necessary, and continuously improve quality, speed, and business outcomes.",
  buttonText: "View more",
  buttonLink: "/continuous-optimization",
  image: "/images/What-we-do/assess.png",
  imageAlt: "Continuous Optimization",
};

export const dataAssessmentStep = {
  badgeText: "Step 01",
  title: "Data Assessment",
  description:
    "Evaluate data quality, quantity, and labeling before scoping. We won't commit to a model if the data can't support it.",
  buttonText: "View more",
  buttonLink: "/data-assessment",
  image: "/images/What-we-do/data-assessment.png",
  imageAlt: "Data Assessment",
};

export const baselineBenchmarkingStep = {
  badgeText: "Step 02",
  title: "Baseline & Benchmarking",
  description:
    "Build a simple baseline model first. Establish the performance floor and use metrics appropriate to business value, not just statistical accuracy.",
  buttonText: "View more",
  buttonLink: "/baseline-benchmarking",
  image: "/images/What-we-do/baseline-benchmarking.png",
  imageAlt: "Baseline & Benchmarking",
};

export const featureEngineeringStep = {
  badgeText: "Step 03",
  title: "Feature Engineering",
  description:
    "The most impactful phase. Domain-specific feature creation that makes the difference between a model that works and one that is useful.",
  buttonText: "View more",
  buttonLink: "/feature-engineering",
  image: "/images/What-we-do/feature-engineering.png",
  imageAlt: "Feature Engineering",
};

export const modelDevelopmentSelectionStep = {
  badgeText: "Step 04",
  title: "Model Development & Selection",
  description:
    "Train, evaluate, and compare multiple model architectures. Select based on accuracy, interpretability, latency, and operational requirements.",
  buttonText: "View more",
  buttonLink: "/model-development-selection",
  image: "/images/What-we-do/model-development-selection.png",
  imageAlt: "Model Development & Selection",
};

export const validationTestingStep = {
  badgeText: "Step 05",
  title: "Validation & Testing",
  description:
    "Rigorous hold-out testing, cross-validation, and business metric validation. A model that is accurate by ML metrics but wrong by business metrics is a failure.",
  buttonText: "View more",
  buttonLink: "/validation-testing",
  image: "/images/What-we-do/validation-testing.png",
  imageAlt: "Validation & Testing",
};

export const deploymentMonitoringStep = {
  badgeText: "Step 06",
  title: "Deployment & Monitoring",
  description:
    "REST API deployment with version control, AI testing infrastructure, and data drift monitoring. Models that degrade silently in production are as common as they are preventable.",
  buttonText: "View more",
  buttonLink: "/deployment-monitoring",
  image: "/images/What-we-do/deployment-monitoring.png",
  imageAlt: "Deployment & Monitoring",
};

export const Real_World = [
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing hallucinations in AI outputs.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Managing costs as AI systems scale.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing latency across AI workflows.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Protecting sensitive data and enterprise systems.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Ensuring reliable performance in production.",
  },
];

export const Agent_Projects = [
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing hallucinations in AI outputs.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Managing costs as AI systems scale.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Reducing latency across AI workflows.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Protecting sensitive data and enterprise systems.",
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
        <path
          d="M24.9027 24.9027L1.46484 1.46484M24.9027 1.46484L1.46484 24.9027"
          stroke="white"
          strokeWidth="2.92973"
          strokeLinecap="round"
        />
      </svg>
    ),
    description: "Ensuring reliable performance in production.",
  },
];

export const caseStudies = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Healthcare Client",
    slug: "healthcare-client",
    image: "/images/What-we-do/mega_manu_iamge.png",
    description:
      "Developed a private LLM for clinical documentation summarization, reducing physician admin time per consultation. Zero PHI data leaves the VPC.",
    cta: "View Case Study",
    href: "/case-studies/healthcare-client",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Financial Services",
    slug: "financial-services",
    image: "/images/What-we-do/mega_manu_iamge.png",
    description:
      "Built a RAG-powered compliance assistant over 1000+ regulatory documents. Query response time under 2 seconds. Cited sources on every answer.",
    cta: "View Case Study",
    href: "/case-studies/financial-services",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "E-Commerce",
    slug: "e-commerce",
    image: "/images/What-we-do/mega_manu_iamge.png",
    description:
      "LLM-powered product description generator that reduced content creation time by over 90% while maintaining brand consistency.",
    cta: "View Case Study",
    href: "/case-studies/e-commerce",
  },
];

export const ai_agents_designed = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Agentic Workflow Automation",
    icon: <RefreshCcw />,
    description:
      "Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation — automated with full audit trails.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Multi-Agent Systems",
    icon: <Users />,
    description:
      "Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Tool-Using Agents",
    icon: <Wrench />,
    description:
      "Agents integrated with your real business tools – CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Human-in-the-Loop Workflows",
    icon: <Handshake />,
    description:
      "Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "AI-Powered Process Automation",
    icon: <Zap />,
    description:
      "Next-generation RPA where agents handle unstructured inputs that rule-based bots can't. Document processing, email triage, form filling, data entry – with understanding, not just pattern matching.",
  },
];

export const aiSolutionsData = {
  badge: "Technologies & Stack",

  title: "The Technologies Behind Our AI Solutions.",

  description:
    "We combine leading AI models, frameworks, vector databases, and deployment platforms to build secure, scalable, and production-ready AI systems.",

  tabs: [
    "LLM APIs",
    "Open Source",
    "RAG Frameworks",
    "Vector Stores",
    "Orchestration",
    "Deployment",
  ],

  technologies: {
    "LLM APIs": [
      {
        name: "OpenAI",
        logo: "/images/What-we-do/ai_image/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/What-we-do/ai_image/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/what-we-do/ai_image/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/what-we-do/ai_image/cohere.png",
      },
    ],

    "Open Source": [
      {
        name: "Meta LLaMA 3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png",
      },
      {
        name: "Mistral",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png",
      },
      {
        name: "Phi-3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960584/Gloitel/icon/phi-3_v9nclj.png",
      },
      {
        name: "Qwen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qwen_oyj4re.png",
      },
    ],
    "RAG Frameworks": [
      {
        name: "LangChain",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png",
      },
      {
        name: "LlamaIndex",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
      {
        name: "Haystack",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png",
      },
    ],
    "Vector Stores": [
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        name: "Qdrant",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png",
      },
      {
        name: "pgvector",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png",
      },
      {
        name: "Chroma",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],
    Orchestration: [
      {
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
    ],
    Deployment: [
      {
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
      {
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960617/Gloitel/icon/AWS_Bedrock_segrwb.png",
      },
      {
        name: "Azure OpenAI Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
      {
        name: "Google Vertex AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png",
      },
    ],
  },
};

export const TechnologiesData = {
  badge: "Technologies & Stack",

  title: "Built on Industry-Leading Technologies",

  description:
    "From AI APIs and model serving infrastructure to monitoring, messaging, and data platforms, we use proven technologies trusted by organizations building AI at scale.",

  tabs: [
    "AI APIs",
    "Serving",
    "Messaging",
    "Monitoring",
    "Infrastructure",
    "Data",
  ],

  technologies: {
    "AI APIs": [
      {
        name: "OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        name: "Anthropic Claude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        name: "Google Gemini",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      },
      {
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960626/Gloitel/icon/awsBedrock_lhcxbo.png",
      },
      {
        name: "Cohere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png",
      },
      {
        name: "Replicate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960599/Gloitel/icon/Replicate_lljrha.png",
      },
    ],

    Serving: [
      {
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        name: "TorchServe",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/TorchServe_ili0ug.png",
      },
      {
        name: "TensorFlow Serving",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960606/Gloitel/icon/TensorFlow_Serving_htauuz.png",
      },
      {
        name: "BentoML",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960632/Gloitel/icon/BentoML_ut5xaw.png",
      },
      {
        name: "Triton",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960609/Gloitel/icon/Triton_v28arn.png",
      },
    ],

    Messaging: [
      {
        name: "Kafka",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png",
      },
      {
        name: "RabbitMQ",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png",
      },
      {
        name: "AWS SQS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png",
      },
      {
        name: "Google Pub/Sub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png",
      },
    ],

    Monitoring: [
      {
        name: "LangSmith",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png",
      },
      {
        name: "Helicone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Helicone_nqk9cv.png",
      },
      {
        name: "Arize",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960615/Gloitel/icon/Arize_AI_n3ha33.png",
      },
      {
        name: "Datadog",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960660/Gloitel/icon/Datadog_apthol.png",
      },
      {
        name: "Grafana",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png",
      },
    ],

    Infrastructure: [
      {
        name: "Docker",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png",
      },
      {
        name: "Kubernetes",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png",
      },
      {
        name: "Terraform",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png",
      },
      {
        name: "AWS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png",
      },
      {
        name: "GCP",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png",
      },
      {
        name: "Azure",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
    ],

    Data: [
      {
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png",
      },
      {
        name: "Redis",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png",
      },
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        name: "S3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png",
      },
      {
        name: "BigQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960635/Gloitel/icon/BigQuery_dgjvnk.png",
      },
    ],
  },
};

export const aiAgentTechnologyData = {
  badge: "Technologies & Stack",

  title: "The Technology Stack Powering Production AI Agents",

  description:
    "Building successful AI systems requires more than a single model. We bring together the frameworks, infrastructure, and operational tooling needed to support AI in production.",

  tabs: [
    "Frameworks",
    "Tool Integration",
    "Memory",
    "Observability",
    "Deployment",
  ],

  technologies: {
    Frameworks: [
      {
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
      {
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        name: "Semantic Kernel",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960602/Gloitel/icon/semanticKernel_ypmoe4.png",
      },
      {
        name: "LlamaIndex Workflows",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
    ],

    "Tool Integration": [
      {
        name: "REST APIs",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960600/Gloitel/icon/RESTAPIs_aldign.png",
      },
      {
        name: "MCP",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960575/Gloitel/icon/MCP_q296fc.png",
      },
      {
        name: "Function Calling",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960677/Gloitel/icon/FunctionCalling_ybe6uu.png",
      },
    ],

    Memory: [
      {
        name: "Redis",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/Redis_ppexpj.png",
      },
      {
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960587/Gloitel/icon/PostgreSQL_fmo3yl.png",
      },
      {
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        name: "In-context Memory Management",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],

    Observability: [
      {
        name: "LangSmith",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960572/Gloitel/icon/LangSmith_hhcbvt.png",
      },
      {
        name: "Arize AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960615/Gloitel/icon/Arize_AI_n3ha33.png",
      },
      {
        name: "Helicone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Helicone_nqk9cv.png",
      },
      {
        name: "Custom Logging Pipelines",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960666/Gloitel/icon/Custom_logging_pipelines_p1gbgn.png",
      },
    ],

    Deployment: [
      {
        name: "Docker",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png",
      },
      {
        name: "Kubernetes",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png",
      },
      {
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        name: "AWS Lambda",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960619/Gloitel/icon/AWS_Lambda_cmuj6h.png",
      },
      {
        name: "Cloud Run",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960648/Gloitel/icon/Cloud_Run_ada7sy.png",
      },
    ],
  },
};

export const aiSolutionsDataJson = {
  badge: "Technologies & Stack",
  title: "The Technologies Behind Our AI Solutions.",
  description:
    "We combine leading AI models, frameworks, vector databases, and deployment platforms to build secure, scalable, and production-ready AI systems.",
  tabs: [
    "LLM APIs",
    "Open Source",
    "RAG Frameworks",
    "Vector Stores",
    "Orchestration",
    "Deployment",
  ],
  technologies: {
    "LLM APIs": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Anthropic Claude",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Gemini",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cohere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960654/Gloitel/icon/cohere_xdhzeq.png",
      },
    ],
    "Open Source": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Meta LLaMA 3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960576/Gloitel/icon/meta_brzl7j.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Mistral",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960577/Gloitel/icon/mistral_bmr5b7.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Phi-3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960584/Gloitel/icon/phi-3_v9nclj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Qwen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qwen_oyj4re.png",
      },
    ],
    "RAG Frameworks": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LangChain",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LlamaIndex",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960574/Gloitel/icon/llamaindex_mgxavz.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Haystack",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960566/Gloitel/icon/haystack_o9evlj.png",
      },
    ],
    "Vector Stores": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Pinecone",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960586/Gloitel/icon/pinecone_bpg10a.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Weaviate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960614/Gloitel/icon/weaviate_cc0krw.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Qdrant",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960590/Gloitel/icon/qdrant_kyjm65.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "pgvector",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/pgvector_ofb3i2.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Chroma",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960637/Gloitel/icon/chroma_txebzp.png",
      },
    ],
    Orchestration: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LangGraph",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960571/Gloitel/icon/langgraph_hqwris.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AutoGen",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960616/Gloitel/icon/autogen_hmeonp.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "CrewAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960655/Gloitel/icon/crewai_r8gkaq.png",
      },
    ],
    Deployment: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Modal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960579/Gloitel/icon/modal_ndijkk.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS Bedrock",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960617/Gloitel/icon/AWS_Bedrock_segrwb.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure OpenAI Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Vertex AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960612/Gloitel/icon/vertexAi_axdca5.png",
      },
    ],
  },
};

export const outcomesData2 = [
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
          d="M6.64453 7.59375V33.2231C6.64453 34.7336 7.24458 36.1822 8.31268 37.2503C9.38077 38.3184 10.8294 38.9185 12.3399 38.9185H37.9692"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3398 28.4768L20.8829 19.9337L27.5276 26.5783L37.9691 16.1367"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Predictive Forecasting",
    description:
      "Forecast demand, revenue, inventory, and resource utilization with models that support smarter planning decisions. Built for sales forecasting, capacity planning, energy demand prediction, and financial projections.",
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.7662 22.7815C41.7662 33.2668 33.2668 41.7662 22.7815 41.7662C12.2963 41.7662 3.79688 33.2668 3.79688 22.7815C3.79688 12.2963 12.2963 3.79688 22.7815 3.79688C33.2668 3.79688 41.7662 12.2963 41.7662 22.7815ZM22.7815 37.9693C26.8096 37.9693 30.6726 36.3691 33.5209 33.5209C36.3691 30.6726 37.9693 26.8096 37.9693 22.7815C37.9693 18.7535 36.3691 14.8904 33.5209 12.0422C30.6726 9.19394 26.8096 7.59381 22.7815 7.59381C18.7535 7.59381 14.8904 9.19394 12.0422 12.0422C9.19394 14.8904 7.59381 18.7535 7.59381 22.7815C7.59381 26.8096 9.19394 30.6726 12.0422 33.5209C14.8904 36.3691 18.7535 37.9693 22.7815 37.9693Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7813 26.5783C22.2778 26.5783 21.7949 26.3783 21.4389 26.0223C21.0828 25.6663 20.8828 25.1834 20.8828 24.6799V15.1875C20.8828 14.684 21.0828 14.2011 21.4389 13.8451C21.7949 13.4891 22.2778 13.2891 22.7813 13.2891C23.2848 13.2891 23.7677 13.4891 24.1237 13.8451C24.4797 14.2011 24.6797 14.684 24.6797 15.1875V24.6799C24.6797 25.1834 24.4797 25.6663 24.1237 26.0223C23.7677 26.3783 23.2848 26.5783 22.7813 26.5783Z"
          fill="white"
        />
        <path
          d="M20.8828 30.375C20.8828 29.8715 21.0828 29.3886 21.4389 29.0326C21.7949 28.6766 22.2778 28.4766 22.7813 28.4766C23.2848 28.4766 23.7677 28.6766 24.1237 29.0326C24.4797 29.3886 24.6797 29.8715 24.6797 30.375C24.6797 30.8785 24.4797 31.3614 24.1237 31.7174C23.7677 32.0735 23.2848 32.2735 22.7813 32.2735C22.2778 32.2735 21.7949 32.0735 21.4389 31.7174C21.0828 31.3614 20.8828 30.8785 20.8828 30.375Z"
          fill="white"
        />
      </svg>
    ),
    title: "Anomaly Detection",
    description:
      "Detect fraud, defects, equipment failures, and unusual system behavior before they cause business impact. Real-time monitoring helps identify risks early and improve operational reliability.",
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
          d="M22.78 2.53141C20.9616 2.53768 19.1523 2.78885 17.401 3.27814L18.3755 5.63224C22.1606 4.63003 26.1706 4.90329 29.7847 6.40974C33.3989 7.91619 36.4158 10.5718 38.3685 13.9657C40.3213 17.3596 41.101 21.3024 40.587 25.1841C40.0731 29.0658 38.2941 32.6698 35.5254 35.4385C32.7567 38.2073 29.1526 39.9862 25.2709 40.5002C21.3893 41.0142 17.4464 40.2344 14.0525 38.2817C10.6587 36.3289 8.00303 33.312 6.49658 29.6979C4.99013 26.0837 4.71687 22.0738 5.71908 18.2887L3.36498 17.3015C2.21617 21.3882 2.38074 25.7327 3.83544 29.7208C5.29014 33.7089 7.96139 37.139 11.4717 39.5264C14.9819 41.9137 19.1537 43.1375 23.3974 43.0247C27.641 42.912 31.7419 41.4685 35.1205 38.8982C38.4991 36.3279 40.9845 32.7609 42.2255 28.7011C43.4664 24.6414 43.4001 20.2943 42.036 16.2743C40.6719 12.2543 38.0789 8.76469 34.6235 6.2986C31.1681 3.83251 27.0251 2.51469 22.78 2.53141Z"
          fill="white"
        />
        <path
          d="M9.42962 19.8699C8.79793 22.7563 9.11762 25.7696 10.3409 28.4592C11.5642 31.1488 13.6253 33.3701 16.216 34.7909C18.8067 36.2117 21.7877 36.7557 24.7132 36.3414C27.6387 35.9271 30.3515 34.5769 32.4459 32.4926C34.5402 30.4084 35.9035 27.7021 36.332 24.7786C36.7604 21.8551 36.2308 18.8715 34.8226 16.274C33.4143 13.6765 31.203 11.6047 28.5193 10.3684C25.8356 9.13215 22.8239 8.7979 19.9345 9.41565L20.7192 11.3901C23.1775 10.9298 25.7186 11.2698 27.9695 12.3601C30.2203 13.4504 32.0624 15.2336 33.2251 17.4479C34.3879 19.6622 34.8101 22.191 34.4299 24.6629C34.0496 27.1349 32.8869 29.4198 31.1124 31.1823C29.3379 32.9447 27.0451 34.0919 24.5706 34.4553C22.0961 34.8187 19.5703 34.3793 17.364 33.2015C15.1576 32.0237 13.387 30.1695 12.312 27.9113C11.2371 25.6531 10.9144 23.1097 11.3914 20.6546L9.42962 19.8699Z"
          fill="white"
        />
        <path
          d="M22.7818 27.9565C21.5132 27.9377 20.2958 27.4525 19.3621 26.5935C18.4283 25.7344 17.8435 24.5617 17.7193 23.299L15.6562 22.4383V22.78C15.6563 24.2076 16.0807 25.6029 16.8754 26.7888C17.6701 27.9746 18.7994 28.8976 20.1197 29.4403C21.44 29.9831 22.8919 30.1212 24.2909 29.8371C25.6899 29.553 26.9729 28.8596 27.9769 27.8448C28.981 26.8301 29.6608 25.5398 29.93 24.1379C30.1993 22.7359 30.0458 21.2856 29.4891 19.9711C28.9323 18.6566 27.9975 17.5372 26.8033 16.7551C25.609 15.973 24.2093 15.5635 22.7818 15.5785H22.4781L23.3261 17.7175C24.591 17.9093 25.7394 18.565 26.5475 19.557C27.3555 20.549 27.7655 21.8062 27.6976 23.0838C27.6297 24.3615 27.0888 25.5681 26.1801 26.4688C25.2714 27.3696 24.06 27.8999 22.7818 27.9565Z"
          fill="white"
        />
        <path
          d="M10.3772 16.8823C10.494 17.0015 10.6532 17.0697 10.8201 17.0721H15.4397L22.2362 23.8686C22.4746 24.1086 22.7985 24.2441 23.1367 24.2453C23.4749 24.2465 23.7998 24.1133 24.0398 23.8749C24.2798 23.6366 24.4153 23.3127 24.4165 22.9745C24.4177 22.6363 24.2844 22.3114 24.0461 22.0714L17.123 15.1863V10.7692C17.1207 10.6023 17.0524 10.4431 16.9332 10.3262L9.85825 3.25127C9.7698 3.16455 9.65784 3.10569 9.53625 3.082C9.41467 3.0583 9.2888 3.07081 9.17426 3.11798C9.05972 3.16514 8.96154 3.24489 8.89189 3.34732C8.82224 3.44976 8.78419 3.57039 8.78245 3.69425V8.75682H3.79581C3.67195 8.75856 3.55132 8.79662 3.44889 8.86627C3.34645 8.93591 3.2667 9.0341 3.21954 9.14864C3.17238 9.26318 3.15987 9.38904 3.18356 9.51063C3.20725 9.63221 3.26611 9.74417 3.35283 9.83262L10.3772 16.8823Z"
          fill="white"
        />
      </svg>
    ),
    title: "Recommendation Systems",
    description:
      "Deliver personalized recommendations that increase engagement, conversion, and retention. Ideal for product suggestions, content personalization, search ranking, and next-best-action experiences.",
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
          d="M41.7651 15.1889C41.7651 14.1447 40.9108 13.2904 39.8666 13.2904H26.5774C25.5332 13.2904 24.6789 14.1447 24.6789 15.1889C24.6789 16.2331 25.5332 17.0874 26.5774 17.0874H39.8666C40.9108 17.0874 41.7651 16.2331 41.7651 15.1889ZM24.6789 30.3766C24.6789 31.4208 25.5332 32.2751 26.5774 32.2751H39.8666C40.9108 32.2751 41.7651 31.4208 41.7651 30.3766C41.7651 29.3325 40.9108 28.4782 39.8666 28.4782H26.5774C25.5332 28.4782 24.6789 29.3325 24.6789 30.3766ZM19.8758 8.79106C20.6162 9.53147 20.6162 10.7275 19.8758 11.4679L11.8453 19.5364C11.1049 20.2768 9.90884 20.2768 9.14945 19.5364L5.1247 15.4927C4.76973 15.1377 4.57031 14.6562 4.57031 14.1542C4.57031 13.9057 4.61927 13.6595 4.71439 13.4299C4.80952 13.2002 4.94894 12.9916 5.1247 12.8158C5.30047 12.64 5.50913 12.5006 5.73878 12.4055C5.96842 12.3104 6.21456 12.2614 6.46312 12.2614C6.96513 12.2614 7.44657 12.4608 7.80154 12.8158L10.4974 15.5116L17.2179 8.79106C17.9394 8.06965 19.1544 8.06965 19.8758 8.79106ZM19.8948 23.9978C20.6352 24.7382 20.6352 25.9342 19.8948 26.6746L11.8643 34.7431C11.1239 35.4835 9.92782 35.4835 9.16844 34.7431L5.1247 30.6804C4.94894 30.5046 4.80952 30.296 4.71439 30.0663C4.61927 29.8367 4.57031 29.5905 4.57031 29.342C4.57031 29.0934 4.61927 28.8473 4.71439 28.6176C4.80952 28.388 4.94894 28.1793 5.1247 28.0035C5.30047 27.8278 5.50913 27.6884 5.73878 27.5932C5.96842 27.4981 6.21456 27.4492 6.46312 27.4492C6.71169 27.4492 6.95782 27.4981 7.18747 27.5932C7.41712 27.6884 7.62578 27.8278 7.80154 28.0035L10.4974 30.6994L17.2179 23.9788C17.9394 23.2574 19.1544 23.2574 19.8948 23.9978Z"
          fill="white"
        />
      </svg>
    ),
    title: "Classification & Scoring",
    description:
      "Assign categories, risk scores, and priority rankings using explainable machine learning models. Commonly used for lead scoring, churn prediction, customer segmentation, and credit risk assessment.",
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
          d="M20.646 22.7816C20.646 23.348 20.8711 23.8912 21.2716 24.2918C21.6721 24.6923 22.2154 24.9173 22.7818 24.9173C23.3483 24.9173 23.8915 24.6923 24.292 24.2918C24.6926 23.8912 24.9176 23.348 24.9176 22.7816C24.9176 22.2151 24.6926 21.6719 24.292 21.2713C23.8915 20.8708 23.3483 20.6458 22.7818 20.6458C22.2154 20.6458 21.6721 20.8708 21.2716 21.2713C20.8711 21.6719 20.646 22.2151 20.646 22.7816ZM29.5451 22.7816C29.5451 23.348 29.7701 23.8912 30.1707 24.2918C30.5712 24.6923 31.1144 24.9173 31.6809 24.9173C32.2473 24.9173 32.7906 24.6923 33.1911 24.2918C33.5916 23.8912 33.8167 23.348 33.8167 22.7816C33.8167 22.2151 33.5916 21.6719 33.1911 21.2713C32.7906 20.8708 32.2473 20.6458 31.6809 20.6458C31.1144 20.6458 30.5712 20.8708 30.1707 21.2713C29.7701 21.6719 29.5451 22.2151 29.5451 22.7816ZM11.747 22.7816C11.747 23.348 11.972 23.8912 12.3725 24.2918C12.7731 24.6923 13.3163 24.9173 13.8827 24.9173C14.4492 24.9173 14.9924 24.6923 15.393 24.2918C15.7935 23.8912 16.0185 23.348 16.0185 22.7816C16.0185 22.2151 15.7935 21.6719 15.393 21.2713C14.9924 20.8708 14.4492 20.6458 13.8827 20.6458C13.3163 20.6458 12.7731 20.8708 12.3725 21.2713C11.972 21.6719 11.747 22.2151 11.747 22.7816ZM41.1673 15.0572C40.1617 12.6678 38.72 10.5231 36.8824 8.68099C35.0575 6.84959 32.8913 5.39383 30.5062 4.39609C28.059 3.36825 25.4604 2.84766 22.7818 2.84766H22.6928C19.9964 2.861 17.3845 3.39495 14.9284 4.44504C12.5637 5.453 10.4178 6.91136 8.61005 8.73884C6.79019 10.5765 5.36189 12.7123 4.3741 15.0928C3.35071 17.5578 2.83456 20.1786 2.84791 22.875C2.86301 25.9651 3.59406 29.0096 4.98368 31.7696V38.5329C4.98368 39.0757 5.19933 39.5964 5.58317 39.9802C5.96702 40.364 6.48763 40.5797 7.03047 40.5797H13.7982C16.5582 41.9693 19.6028 42.7004 22.6928 42.7155H22.7863C25.4515 42.7155 28.0367 42.1993 30.4706 41.1893C32.8436 40.2035 35.0018 38.7647 36.8245 36.9533C38.6622 35.1335 40.1083 33.0066 41.1183 30.635C42.1684 28.1788 42.7024 25.567 42.7157 22.8706C42.7291 20.1608 42.204 17.5311 41.1673 15.0572ZM34.444 34.5461C31.3249 37.6341 27.1868 39.3338 22.7818 39.3338H22.7062C20.0231 39.3205 17.3578 38.653 15.004 37.3983L14.6303 37.198H8.36533V30.9331L8.1651 30.5593C6.91033 28.2055 6.2429 25.5403 6.22955 22.8572C6.21175 18.421 7.90703 14.2563 11.0172 11.1193C14.123 7.98242 18.2744 6.2471 22.7106 6.2293H22.7863C25.011 6.2293 27.169 6.6609 29.2025 7.51521C31.187 8.34728 32.9668 9.5442 34.4974 11.0748C36.0236 12.601 37.225 14.3853 38.0571 16.3698C38.9203 18.4255 39.3519 20.6057 39.343 22.8572C39.3163 27.2889 37.5765 31.4403 34.444 34.5461Z"
          fill="white"
        />
      </svg>
    ),
    title: "Natural Language Processing",
    description:
      "Extract meaningful insights from unstructured text through sentiment analysis, entity extraction, and intent classification. Applied to customer feedback, support tickets, reviews, and compliance documents.",
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
          d="M5.69531 24.6799C12.5298 9.49213 33.0332 9.49213 39.8677 24.6799"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6018 31.8401C21.2928 32.1263 22.0334 32.2736 22.7813 32.2736C24.2919 32.2736 25.7405 31.6736 26.8086 30.6055C27.8767 29.5374 28.4767 28.0887 28.4767 26.5782C28.4767 25.0677 27.8767 23.6191 26.8086 22.551C25.7405 21.4829 24.2919 20.8828 22.7813 20.8828C22.0334 20.8828 21.2928 21.0301 20.6018 21.3163C19.9108 21.6026 19.2829 22.0221 18.7541 22.551C18.2252 23.0798 17.8057 23.7077 17.5195 24.3987C17.2333 25.0897 17.0859 25.8303 17.0859 26.5782C17.0859 27.3261 17.2333 28.0668 17.5195 28.7577C17.8057 29.4487 18.2252 30.0766 18.7541 30.6055C19.2829 31.1343 19.9108 31.5539 20.6018 31.8401Z"
          stroke="white"
          strokeWidth="2.8477"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Computer Vision",
    description:
      "Analyze images and video using object detection, classification, and visual inspection systems. Used for quality control, retail analytics, medical imaging, and security monitoring.",
  },
];


export const engineeringData = [
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
    title: "Integration Stability",
    description:
      "AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.",
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
        <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
    title: "Resilient Processing",
    description:
      "Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.",
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
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "Visibility & Control",
    description:
      "Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.",
  },
];

export const engineeringServicesData = [
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
    title: "Third-Party AI API Integration",
    description:
      "Connect your product to OpenAI, Anthropic, Google AI, AWS Bedrock, Azure OpenAI, and other AI providers. Prompt engineering, response parsing, error handling, cost controls, and caching layers included.",
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
        <path d="M17 16.5A4.5 4.5 0 0 0 16 7.6 6 6 0 1 0 5 9" />
        <path d="M12 12v9" />
        <path d="M8.5 15.5h7" />
        <rect x="8" y="12" width="8" height="6" rx="1.5" />
      </svg>
    ),
    title: "Model Serving Infrastructure",
    description:
      "Deploy custom-trained models as low-latency REST APIs. Docker-containerized, auto-scaling, version-managed serving infrastructure with health checks and rollback capability.",
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
        <rect x="3" y="8" width="5" height="8" />
        <rect x="16" y="3" width="5" height="5" />
        <rect x="16" y="16" width="5" height="5" />
        <path d="M8 12h4" />
        <path d="M12 5h4" />
        <path d="M12 19h4" />
        <path d="M12 5v14" />
      </svg>
    ),
    title: "Data Pipeline Engineering for AI",
    description:
      "Build the pipelines that feed your AI systems—ingestion, transformation, vector embedding, indexing, and retrieval. Clean data in = useful AI out.",
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
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: "AI Monitoring & Observability",
    description:
      "Instrument your AI systems for performance tracking: latency, cost, accuracy drift, error rates, and token usage. Alert pipelines so you know before users do when something degrades.",
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
        <path d="M8.5 3.5 6 6l2 2-2 2 2 2-2 2 2 2 2-2 2 2 2-2 2 2 2-2-2-2 2-2-2-2 2-2-2-2-2 2-2-2-2 2Z" />
      </svg>
    ),
    title: "Legacy System AI Augmentation",
    description:
      "Add AI capabilities to existing systems without a full rebuild. Plugin architecture, API bridges, and event-driven integrations that layer intelligence onto what you already have.",
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
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 6h8" />
        <path d="M7.5 7.5 10.5 10.5" />
        <path d="M16.5 7.5 13.5 10.5" />
        <path d="M10.5 13.5 7.5 16.5" />
        <path d="M13.5 13.5 16.5 16.5" />
      </svg>
    ),
    title: "Enterprise AI Platform Setup",
    description:
      "Stand up internal AI platforms—model registries, experimentation infrastructure, prompt management systems, and access control—for teams building AI at scale.",
  },
];

export const architecturePatternsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <Timer className="h-7 w-7" />,
    title: "Synchronous API Pattern",
    description:
      "User-facing features where AI generates a response in real time. Optimized for latency with streaming support and graceful fallback.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <Network className="h-7 w-7" />,
    title: "Async Pipeline Pattern",
    description:
      "Background AI processing—document ingestion, batch enrichment, async summarization. Queue-based with retry logic and dead letter handling.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchCode className="h-7 w-7" />,
    title: "Retrieval-Augmented Pattern",
    description:
      "RAG systems where AI responses are grounded in retrieved documents. Vector search + LLM inference + citation extraction, built as a unified service.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <GitBranch className="h-7 w-7" />,
    title: "Event-Driven Pattern",
    description:
      "AI triggered by business events—a new contract uploaded, a support ticket created, a transaction flagged. Integrated with your event bus (Kafka, SQS, Pub/Sub).",
  },
];

export const deliverablesData = [
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
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6" />
        <path d="M9 12h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    title: "Documented API contracts for every AI integration",
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
        <path d="M6 3h5v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M18 3h-5v18h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
    title: "Runbooks for common failure scenarios",
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
        <path d="M7 15l3-3 3 2 4-6" />
        <path d="M6 10h.01" />
        <path d="M10 8h.01" />
        <path d="M14 11h.01" />
        <path d="M18 6h.01" />
      </svg>
    ),
    title: "Cost dashboards with per-feature AI spend breakdown",
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
        <path d="M12 8v5l3 2" />
        <circle cx="12" cy="13" r="8" />
        <path d="M9 2h6" />
      </svg>
    ),
    title: "Model version control and rollback procedures",
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
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    ),
    title: "Monitoring alerts configured and tested before handoff",
  },
];

export const notEveryProblemData = {
  badgeText: "When ML Isn't the Right Answer",
  heading: "Not Every Problem Needs AI",
  description:
    "Business rules, statistical models, and workflow automation can often deliver better outcomes with less complexity than machine learning.",
  cards: [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
        </svg>
      ),
      title: "Machine Learning",
      description:
        "Best suited for complex prediction problems, pattern recognition, and decision-making scenarios where data-driven intelligence creates measurable business value.",
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
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Simpler Alternatives",
      description:
        "When business rules are clear and outcomes are predictable, simpler solutions often deliver faster implementation, lower costs, and easier maintenance.",
    },
  ],
  bottomText:
    "We've implemented both approaches. The recommendation depends on your business goals, data maturity, and operational requirements.",
};
