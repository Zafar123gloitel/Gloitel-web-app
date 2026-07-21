import {
  ChevronRight,
  Database,
  Download,
  FileText,
  MessageCircleMore,
  Shield,
  SlidersHorizontal,
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
  CircleAlert,
  Target,
  BadgeCheck,
  Eye,
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
  badgeText: "Our Approach",
  title: "Discover",
  description:
    "Map workflows, decision points, and value creation/loss across the business.",
  cardTitle: "Workflow maps, decision trees, and opportunity heatmaps",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "AI strategy meeting",
};

export const RankData = {
  badgeText: "Phase 03",
  title: "Rank",
  description:
    "Prioritize use cases by value at stake, feasibility, and speed to ROI.",
  cardTitle: "Prioritized use case stack with impact vs. effort matrix",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "AI strategy meeting",
};

export const assessData = {
  badgeText: "Our Approach",
  title: "Assess",
  description:
    "Evaluate AI opportunities based on business impact, technical feasibility, and organizational readiness.",
  cardTitle: "AI readiness assessment and prioritized opportunity roadmap",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "AI assessment",
};

export const outcomesData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
          
        <g clip-path="url(#clip0_1347_31006)">
              
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
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
          
        <path
          d="M7.91725 15.4003C4.75887 14.1376 3.17969 13.5063 3.17969 12.7206C3.17969 11.935 4.75887 11.3053 7.91725 10.041L12.3829 8.25503C15.5412 6.99073 17.122 6.35938 19.0829 6.35938C21.0437 6.35938 22.6245 6.99073 25.7829 8.25503L30.2485 10.041C33.4069 11.3037 34.9861 11.935 34.9861 12.7206C34.9861 13.5063 33.4069 14.136 30.2485 15.4003L25.7829 17.1879C22.6245 18.4506 21.0437 19.0819 19.0829 19.0819C17.122 19.0819 15.5412 18.4506 12.3829 17.1879L7.91725 15.4003Z"
          stroke="white"
          stroke-width="2.38548"
        />
          
        <path
          opacity="0.5"
          d="M9.16883 15.9023L7.91725 16.4033C4.75887 17.666 3.17969 18.299 3.17969 19.083C3.17969 19.867 4.75887 20.4984 7.91725 21.7627L12.3829 23.5502C15.5412 24.8129 17.122 25.4443 19.0829 25.4443C21.0437 25.4443 22.6245 24.8129 25.7829 23.5502L30.2485 21.7627C33.4069 20.5 34.9861 19.867 34.9861 19.083C34.9861 18.299 33.4069 17.6676 30.2485 16.4033L28.9969 15.9023M9.16883 22.2636L7.91725 22.7646C4.75887 24.0273 3.17969 24.6602 3.17969 25.4443C3.17969 26.2283 4.75887 26.8596 7.91725 28.1239L12.3829 29.9115C15.5412 31.1742 17.122 31.8055 19.0829 31.8055C21.0437 31.8055 22.6245 31.1742 25.7829 29.9099L30.2485 28.1239C33.4069 26.8612 34.9861 26.2299 34.9861 25.4443C34.9861 24.6602 33.4069 24.0289 30.2485 22.7646L28.9969 22.2636"
          stroke="white"
          stroke-width="2.38548"
        />
      </svg>
    ),
    title: "A prioritised use case stack ranked by value and feasibility",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
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
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
          
        <path
          d="M29.77 17.0393C29.4615 17.3319 29.0526 17.4951 28.6274 17.4951C28.2022 17.4951 27.7932 17.3319 27.4847 17.0393C24.6778 14.3628 20.9167 11.3714 22.7503 7.02985C23.7427 4.68254 26.1218 3.17969 28.6266 3.17969C31.1313 3.17969 33.512 4.68254 34.5028 7.02826C36.3348 11.3666 32.5849 14.3708 29.77 17.0393Z"
          stroke="white"
          stroke-width="2.38548"
        />
          
        <path
          d="M28.8386 9.54211H28.6398M29.0373 9.54211C29.0373 9.64756 28.9955 9.74868 28.9209 9.82324C28.8463 9.8978 28.7452 9.93969 28.6398 9.93969C28.5343 9.93969 28.4332 9.8978 28.3586 9.82324C28.2841 9.74868 28.2422 9.64756 28.2422 9.54211C28.2422 9.43667 28.2841 9.33554 28.3586 9.26098C28.4332 9.18642 28.5343 9.14453 28.6398 9.14453C28.7452 9.14453 28.8463 9.18642 28.9209 9.26098C28.9955 9.33554 29.0373 9.43667 29.0373 9.54211Z"
          stroke="white"
          stroke-width="2.38548"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
          
        <path
          d="M7.95064 34.9872C10.5856 34.9872 12.7216 32.8512 12.7216 30.2163C12.7216 27.5813 10.5856 25.4453 7.95064 25.4453C5.31572 25.4453 3.17969 27.5813 3.17969 30.2163C3.17969 32.8512 5.31572 34.9872 7.95064 34.9872Z"
          stroke="white"
          stroke-width="2.38548"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
          
        <path
          d="M17.4907 11.1324H15.1052C12.0311 11.1324 9.53906 13.2682 9.53906 15.9034C9.53906 18.5385 12.0311 20.6743 15.1052 20.6743H19.8761C22.9502 20.6743 25.4422 22.8101 25.4422 25.4453C25.4422 28.0805 22.9502 30.2162 19.8761 30.2162H17.4907M28.8376 9.54211H28.6388M29.0364 9.54211C29.0364 9.64756 28.9945 9.74868 28.9199 9.82324C28.8454 9.8978 28.7442 9.93969 28.6388 9.93969C28.5333 9.93969 28.4322 9.8978 28.3577 9.82324C28.2831 9.74868 28.2412 9.64756 28.2412 9.54211C28.2412 9.43667 28.2831 9.33554 28.3577 9.26098C28.4322 9.18642 28.5333 9.14453 28.6388 9.14453C28.7442 9.14453 28.8454 9.18642 28.9199 9.26098C28.9945 9.33554 29.0364 9.43667 29.0364 9.54211Z"
          stroke="white"
          stroke-width="2.38548"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "A structured roadmap aligned to business priorities",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
          
        <path
          d="M4.76953 20.6747C10.4947 7.95218 27.6701 7.95218 33.3953 20.6747"
          stroke="white"
          stroke-width="2.38548"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
          
        <path
          d="M17.2577 26.6709C17.8365 26.9107 18.4569 27.0341 19.0835 27.0341C20.3488 27.0341 21.5623 26.5314 22.457 25.6367C23.3518 24.742 23.8544 23.5285 23.8544 22.2631C23.8544 20.9978 23.3518 19.7843 22.457 18.8896C21.5623 17.9948 20.3488 17.4922 19.0835 17.4922C18.4569 17.4922 17.8365 17.6156 17.2577 17.8554C16.6789 18.0951 16.1529 18.4465 15.7099 18.8896C15.2669 19.3326 14.9154 19.8585 14.6757 20.4374C14.4359 21.0162 14.3125 21.6366 14.3125 22.2631C14.3125 22.8897 14.4359 23.5101 14.6757 24.0889C14.9154 24.6677 15.2669 25.1937 15.7099 25.6367C16.1529 26.0797 16.6789 26.4312 17.2577 26.6709Z"
          stroke="white"
          stroke-width="2.38548"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "A clear view of what *not* to build — equally valuable",
  },
];

export const notIncludedData = [
  {
    id: 1,
    icon: "X",
    description: "Not a vendor-led engagement where we pre-sell a solution",
  },
  {
    id: 2,
    icon: "X",
    description: "Not a free strategy workshop with vague outputs",
  },
  {
    id: 3,
    icon: "X",
    description: "Not an open-ended consulting retainer",
  },
  {
    id: 4,
    icon: "X",
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
  badgeText: "AI Development Services",

  title: "Define Your AI Roadmap Before You Build",

  description:
    "Most AI initiatives fail before they begin because of misdirected effort. We help you identify where AI should be applied first so every decision is grounded in business value.",

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
    id: 1,
    icon: <MessageCircleMore size={28} />,
    title: "Custom AI Chatbots & Assistants",
    description:
      "Intelligent conversational interfaces trained on your domain knowledge. Customer support bots, internal knowledge assistants, sales copilots – built with guardrails, citation support, and fallback logic.",
  },
  {
    id: 2,
    icon: <FileText size={28} />,
    title: "Document Intelligence & Processing",
    description:
      "Automate document-heavy workflows with LLMs. Contract analysis, invoice extraction, report summarization, regulatory document parsing – structured outputs from unstructured inputs.",
  },
  {
    id: 3,
    icon: <Database size={28} />,
    title: "RAG (Retrieval-Augmented Generation) Systems",
    description:
      "Connect LLMs to your proprietary data with vector search pipelines. Accurate, source-cited responses drawn from your internal knowledge base, documentation, or enterprise data.",
  },
  {
    id: 4,
    icon: <Workflow size={28} />,
    title: "LLM-Powered Workflow Automation",
    description:
      "Replace rule-based automation with AI that understands context. Intelligent triage, email drafting, content generation, and multi-step reasoning tasks embedded in your existing workflows.",
  },
  {
    id: 5,
    icon: <SlidersHorizontal size={28} />,
    title: "Fine-Tuning & Model Customization",
    description:
      "Custom fine-tuned models for domain-specific tasks where general-purpose LLMs underperform. Smaller, faster, cheaper – specialized for your exact use case.",
  },
  {
    id: 6,
    icon: <Shield size={28} />,
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
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Use Case Definition",
};

export const executionStepTwo = {
  badgeText: "Step 02",
  title: "Model Selection",
  description:
    "We evaluate and recommend the right model (GPT-4o, Claude, Gemini, LLaMA, Mistral) based on accuracy requirements, latency, cost, and data sensitivity.",
  buttonText: "View more",
  buttonLink: "/model-selection",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Model Selection",
};

export const executionStepThree = {
  badgeText: "Step 03",
  title: "Prototype & Evaluation",
  description:
    "Rapid prototype with human evaluation loops. We measure accuracy, hallucination rate, latency, and cost before green-lighting production build.",
  buttonText: "View more",
  buttonLink: "/prototype-evaluation",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Prototype & Evaluation",
};

export const executionStepFour = {
  badgeText: "Step 04",
  title: "Production Deployment",
  description:
    "Deploy the validated solution into production with monitoring, observability, security, and scalability built into the deployment pipeline.",
  buttonText: "View more",
  buttonLink: "/production-deployment",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Production Deployment",
};

export const executionStepFive = {
  badgeText: "Step 05",
  title: "Continuous Optimization",
  description:
    "Monitor model performance, collect feedback, retrain when necessary, and continuously improve quality, speed, and business outcomes.",
  buttonText: "View more",
  buttonLink: "/continuous-optimization",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Continuous Optimization",
};

export const Real_World = [
  {
    id: 1,
    icon: "X",
    description: "Reducing hallucinations in AI outputs.",
  },
  {
    id: 2,
    icon: "X",
    description: "Managing costs as AI systems scale.",
  },
  {
    id: 3,
    icon: "X",
    description: "Reducing latency across AI workflows.",
  },
  {
    id: 4,
    icon: "X",
    description: "Protecting sensitive data and enterprise systems.",
  },
  {
    id: 5,
    icon: "X",
    description: "Ensuring reliable performance in production.",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Healthcare Client",
    slug: "healthcare-client",
    image: "/images/What-we-do/mega_manu_iamge.png",
    description:
      "Developed a private LLM for clinical documentation summarization, reducing physician admin time per consultation. Zero PHI data leaves the VPC.",
    cta: "View Case Study",
    href: "/case-studies/healthcare-client",
  },
  {
    id: 2,
    title: "Financial Services",
    slug: "financial-services",
    image: "/images/What-we-do/mega_manu_iamge.png",
    description:
      "Built a RAG-powered compliance assistant over 1000+ regulatory documents. Query response time under 2 seconds. Cited sources on every answer.",
    cta: "View Case Study",
    href: "/case-studies/financial-services",
  },
  {
    id: 3,
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
    id: 1,
    title: "Agentic Workflow Automation",
    icon: <RefreshCcw />,
    description:
      "Replace manual multi-step processes with agents that handle them end-to-end. Lead qualification, invoice processing, content moderation, compliance checks, research aggregation — automated with full audit trails.",
  },
  {
    id: 2,
    title: "Multi-Agent Systems",
    icon: <Users />,
    description:
      "Orchestrate teams of specialized agents working in parallel. One agent researches, another writes, another reviews. Each agent is optimized for a specific responsibility within the workflow. Complex tasks completed in minutes instead of hours.",
  },
  {
    id: 3,
    title: "Tool-Using Agents",
    icon: <Wrench />,
    description:
      "Agents integrated with your real business tools – CRMs, ERPs, databases, Slack, email, calendars, file systems. Seamlessly connecting data, workflows, and actions across your organization. They don't just generate text; they take action inside your systems.",
  },
  {
    id: 4,
    title: "Human-in-the-Loop Workflows",
    icon: <Handshake />,
    description:
      "Autonomous agents with configurable human oversight gates. The agent handles routine decisions; humans review exceptions. Designed for regulated industries and high-stakes workflows.",
  },
  {
    id: 5,
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
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
    ],

    "Open Source": [
      {
        name: "OpenAI",
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
    ],
    "RAG Frameworks": [
      {
        name: "OpenAI",
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
    ],
    "Vector Stores": [
      {
        name: "OpenAI",
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
      {
        name: "Cohere",
        logo: "/images/technology/cohere.png",
      },
    ],
    Orchestration: [
      {
        name: "OpenAI",
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
      {
        name: "Google Gemini",
        logo: "/images/technology/gemini.png",
      },
    ],
    Deployment: [
      {
        name: "OpenAI",
        logo: "/images/technology/openai.png",
      },
      {
        name: "Anthropic Claude",
        logo: "/images/technology/claude.png",
      },
    ],
  },
};

export const outcomesData2 = [
  {
    id: 1,
    icon: <ChartNoAxesCombined className="h-6 w-6" />,
    title: "Predictive Forecasting",
    description:
      "Forecast demand, revenue, inventory, and resource utilization with models that support smarter planning decisions. Built for sales forecasting, capacity planning, energy demand prediction, and financial projections.",
  },
  {
    id: 2,
    icon: <CircleAlert className="h-6 w-6" />,
    title: "Anomaly Detection",
    description:
      "Detect fraud, defects, equipment failures, and unusual system behavior before they cause business impact. Real-time monitoring helps identify risks early and improve operational reliability.",
  },
  {
    id: 3,
    icon: <Target className="h-6 w-6" />,
    title: "Recommendation Systems",
    description:
      "Deliver personalized recommendations that increase engagement, conversion, and retention. Ideal for product suggestions, content personalization, search ranking, and next-best-action experiences.",
  },
  {
    id: 4,
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Classification & Scoring",
    description:
      "Assign categories, risk scores, and priority rankings using explainable machine learning models. Commonly used for lead scoring, churn prediction, customer segmentation, and credit risk assessment.",
  },
  {
    id: 5,
    icon: <MessageCircleMore className="h-6 w-6" />,
    title: "Natural Language Processing",
    description:
      "Extract meaningful insights from unstructured text through sentiment analysis, entity extraction, and intent classification. Applied to customer feedback, support tickets, reviews, and compliance documents.",
  },
  {
    id: 6,
    icon: <Eye className="h-6 w-6" />,
    title: "Computer Vision",
    description:
      "Analyze images and video using object detection, classification, and visual inspection systems. Used for quality control, retail analytics, medical imaging, and security monitoring.",
  },
];

export const engineeringData = [
  {
    id: 1,
    icon: <Link2 className="h-7 w-7" />,
    title: "Integration Stability",
    description:
      "AI systems often fail not because the model is ineffective, but because the surrounding integrations are unreliable. We build stable connections between AI services, applications, and enterprise systems with proper error handling, fallback mechanisms, and operational safeguards.",
  },
  {
    id: 2,
    icon: <RefreshCcw className="h-7 w-7" />,
    title: "Resilient Processing",
    description:
      "Production AI requires systems that can recover gracefully from failures. We implement retry logic, queue-based processing, and recovery workflows that ensure temporary disruptions do not impact business operations or user experience.",
  },
  {
    id: 3,
    icon: <ChartNoAxesCombined className="h-7 w-7" />,
    title: "Visibility & Control",
    description:
      "Without observability, AI systems can degrade silently over time. We provide monitoring, performance tracking, usage analytics, and alerting capabilities that help teams detect issues early and maintain consistent production performance.",
  },
];

export const engineeringServicesData = [
  {
    id: 1,
    icon: <Link2 className="h-7 w-7" />,
    title: "Third-Party AI API Integration",
    description:
      "Connect your product to OpenAI, Anthropic, Google AI, AWS Bedrock, Azure OpenAI, and other AI providers. Prompt engineering, response parsing, error handling, cost controls, and caching layers included.",
  },
  {
    id: 2,
    icon: <Server className="h-7 w-7" />,
    title: "Model Serving Infrastructure",
    description:
      "Deploy custom-trained models as low-latency REST APIs. Docker-containerized, auto-scaling, version-managed serving infrastructure with health checks and rollback capability.",
  },
  {
    id: 3,
    icon: <Workflow className="h-7 w-7" />,
    title: "Data Pipeline Engineering for AI",
    description:
      "Build the pipelines that feed your AI systems—ingestion, transformation, vector embedding, indexing, and retrieval. Clean data in = useful AI out.",
  },
  {
    id: 4,
    icon: <ChartNoAxesCombined className="h-7 w-7" />,
    title: "AI Monitoring & Observability",
    description:
      "Instrument your AI systems for performance tracking: latency, cost, accuracy drift, error rates, and token usage. Alert pipelines so you know before users do when something degrades.",
  },
  {
    id: 5,
    icon: <Puzzle className="h-7 w-7" />,
    title: "Legacy System AI Augmentation",
    description:
      "Add AI capabilities to existing systems without a full rebuild. Plugin architecture, API bridges, and event-driven integrations that layer intelligence onto what you already have.",
  },
  {
    id: 6,
    icon: <Network className="h-7 w-7" />,
    title: "Enterprise AI Platform Setup",
    description:
      "Stand up internal AI platforms—model registries, experimentation infrastructure, prompt management systems, and access control—for teams building AI at scale.",
  },
];

export const architecturePatternsData = [
  {
    id: 1,
    icon: <Timer className="h-7 w-7" />,
    title: "Synchronous API Pattern",
    description:
      "User-facing features where AI generates a response in real time. Optimized for latency with streaming support and graceful fallback.",
  },
  {
    id: 2,
    icon: <Network className="h-7 w-7" />,
    title: "Async Pipeline Pattern",
    description:
      "Background AI processing—document ingestion, batch enrichment, async summarization. Queue-based with retry logic and dead letter handling.",
  },
  {
    id: 3,
    icon: <SearchCode className="h-7 w-7" />,
    title: "Retrieval-Augmented Pattern",
    description:
      "RAG systems where AI responses are grounded in retrieved documents. Vector search + LLM inference + citation extraction, built as a unified service.",
  },
  {
    id: 4,
    icon: <GitBranch className="h-7 w-7" />,
    title: "Event-Driven Pattern",
    description:
      "AI triggered by business events—a new contract uploaded, a support ticket created, a transaction flagged. Integrated with your event bus (Kafka, SQS, Pub/Sub).",
  },
];


export const deliverablesData = [
  {
    id: 1,
    icon: <FileText className="h-7 w-7" />,
    title: "Documented API contracts for every AI integration",
  },
  {
    id: 2,
    icon: <BookOpen className="h-7 w-7" />,
    title: "Runbooks for common failure scenarios",
  },
  {
    id: 3,
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Cost dashboards with per-feature AI spend breakdown",
  },
  {
    id: 4,
    icon: <History className="h-7 w-7" />,
    title: "Model version control and rollback procedures",
  },
  {
    id: 5,
    icon: <Bell className="h-7 w-7" />,
    title: "Monitoring alerts configured and tested before handoff",
  },
];
