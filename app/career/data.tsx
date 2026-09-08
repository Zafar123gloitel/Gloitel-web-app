import {
  BookIcon,
  ResearchPersonaIcon,
  StayCuriousIcon,
  TargetIcon,
  UsersIcon,
} from '@/components/SvgIcon';
import { ArchitectureItem } from 'uiComponents/ArchitectureCircle';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const heroData = {
  badgeText: 'Careers at Gloitel',

  title: 'Build Meaningful Technology. Grow With Us.',

  description:
    'Join designers, engineers, and problem-solvers building AI, cloud, web, mobile, and enterprise solutions for real-world challenges.',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',

  primaryButton: {
    text: 'Explore Open Positions',
    href: '#',
  },

  secondaryButton: {
    text: 'Life at Gloitel',
    href: '#',
  },

  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869132/Gloitel/Career/Car3_yzxzyh.png',
  imageAlt: 'AI team planning and strategy',
};
export const aiRoadmapData = {
  badgeText: 'Why Gloitel',

  title: 'A Place to Build, Learn & Grow.',

  description:
    'Work across technologies, industries, and challenging products while learning from a collaborative team. At Gloitel, you get the freedom to contribute ideas, take ownership, and grow with every project.',

  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869131/Gloitel/Career/Cae2_jhkra3.png',

  imageAlt: 'AI strategy planning',

  features: [
    {
      id: createId(),
      title: 'Meaningful Work',
      description: 'Build technology that solves genuine business and user problems.',
      icon: <TargetIcon />,
    },

    {
      id: createId(),
      title: 'Learn & Grow',
      description: 'Develop new skills through projects, collaboration, and continuous learning.',
      icon: <BookIcon />,
    },

    {
      id: createId(),
      title: 'Take Ownership',
      description: 'Contribute ideas, make decisions, and see your work reach production.',
      icon: <ResearchPersonaIcon />,
    },

    {
      id: createId(),
      title: 'Work Together',
      description: 'Collaborate with designers, engineers, product teams, and business leaders.',
      icon: <UsersIcon />,
    },
  ],
};
const EngineeringIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='31' height='36' viewBox='0 0 31 36' fill='none'>
    <g clipPath='url(#clip0_2437_50274)'>
      <path
        d='M6.64286 9C6.64286 11.3869 7.57602 13.6761 9.23705 15.364C10.8981 17.0518 13.1509 18 15.5 18C17.8491 18 20.1019 17.0518 21.7629 15.364C23.424 13.6761 24.3571 11.3869 24.3571 9C24.3571 6.61305 23.424 4.32387 21.7629 2.63604C20.1019 0.948212 17.8491 0 15.5 0C13.1509 0 10.8981 0.948212 9.23705 2.63604C7.57602 4.32387 6.64286 6.61305 6.64286 9ZM13.1819 23.0766L14.469 25.2563L12.1647 33.968L9.67366 23.6391C9.53527 23.0695 8.99554 22.6969 8.43504 22.8445C3.59129 24.075 0 28.5328 0 33.8414C0 35.0367 0.954911 36 2.12433 36H28.8757C30.052 36 31 35.0297 31 33.8414C31 28.5328 27.4087 24.075 22.565 22.8445C22.0045 22.7039 21.4647 23.0766 21.3263 23.6391L18.8353 33.968L16.531 25.2563L17.8181 23.0766C18.2609 22.3242 17.7281 21.375 16.8701 21.375H14.1368C13.2788 21.375 12.746 22.3313 13.1888 23.0766H13.1819Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_2437_50274'>
        <rect width='31' height='36' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const AiExecutionServicesdata = {
  badgeText: 'Current Opportunities',
  title: 'Find a Role Where You Can Make an Impact.',
  description:
    'Explore opportunities across engineering, design, AI, cloud, quality, and business teams.',

  services: [
    {
      id: createId(),
      slug: 'senior-software-engineer',
      title: 'Senior Software Engineer',
      description:
        'Build scalable applications and contribute to architecture and technical decisions.',
      list: ['Engineering', 'Full Time', 'Raipur / Hybrid'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/senior-software-engineer',
      icon: EngineeringIcon,
    },
    {
      id: createId(),
      slug: 'ui-ux-designer',
      title: 'UI/UX Designer',
      description: 'Create intuitive experiences across web, mobile, and enterprise products.',
      list: ['Design', 'Full Time', 'Raipur / Hybrid'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/ui-ux-designer',
      icon: EngineeringIcon,
    },
    {
      id: createId(),
      slug: 'ai-ml-engineer',
      title: 'AI/ML Engineer',
      description: 'Develop and deploy practical AI solutions for real production environments.',
      list: ['AI & Data', 'Full Time', 'Hybrid'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/ai-ml-engineer',
      icon: EngineeringIcon,
    },
    {
      id: createId(),
      slug: 'backend-engineer',
      title: 'Backend Engineer',
      description: 'Design and maintain robust APIs, services, and database systems at scale.',
      list: ['Engineering', 'Full Time', 'Raipur / Hybrid'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/backend-engineer',
      icon: EngineeringIcon,
    },
    {
      id: createId(),
      slug: 'devops-engineer',
      title: 'DevOps Engineer',
      description: 'Own CI/CD pipelines, infrastructure automation, and production reliability.',
      list: ['Infrastructure', 'Full Time', 'Remote'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/devops-engineer',
      icon: EngineeringIcon,
    },
    {
      id: createId(),
      slug: 'product-manager',
      title: 'Product Manager',
      description: 'Drive product strategy and work closely with engineering and design teams.',
      list: ['Product', 'Full Time', 'Raipur / Hybrid'],
      buttonText: 'Apply Now',
      buttonLink: '/career/apply-now',
      viewText: 'View Details',
      viewLink: '/career/product-manager',
      icon: EngineeringIcon,
    },
  ],
};

export const diagnoseBeforeDeployData = {
  badgeText: 'What to Expect',

  title: 'Simple, Transparent & Focused on the Right Fit.',

  description:
    'Our hiring process is designed to understand your skills, experience, interests, and how we can grow together.',

  steps: [
    {
      id: createId(),
      number: 1,
      title: 'Apply',
      description: 'Find the right opportunity and share your profile with us.',
    },
    {
      id: createId(),
      number: 2,
      title: 'Connect',
      description: 'A short conversation about your experience, interests, and expectations.',
    },
    {
      id: createId(),
      number: 3,
      title: 'Skill Discussion',
      description: 'Discuss your work, skills, and problem-solving approach with the team.',
    },
    {
      id: createId(),
      number: 4,
      title: 'Final Conversation',
      description: 'Align on the role, responsibilities, team, and growth opportunities.',
    },
  ],
};

export const AiAgentsIndustriesdata = {
  badgeText: 'Inside Gloitel',

  title: 'Good People. Meaningful Work. Continuous Growth.',

  description:
    'Meet the people behind our products and discover a culture built around collaboration, ownership, curiosity, and learning.',

  testimonials: [
    {
      id: createId(),
      name: 'Durgesh Sahu',
      designation: 'Founder and Director',
      description:
        '“Every project brings a new challenge. That keeps us learning, exploring better solutions, and growing together.”',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869254/Gloitel/Profile%20G/ChatGPT_Image_Jun_10_2026_03_20_20_PM_jxpzth.png',
    },

    {
      id: createId(),
      name: 'Zafaryab Khan',
      designation: 'Software Engineer',
      description:
        'Collaboration makes complex problems easier. We learn from each other and build better solutions as one team.',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_06_16_PM_iabgqm.png',
    },

    {
      id: createId(),
      name: 'Manish Sahu',
      designation: 'Technical Team Lead',
      description:
        'Leads the engineering team in delivering scalable and reliable software solutions, driving technical excellence, mentoring team members, and ensuring projects are delivered efficiently and to a high standard.',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869255/Gloitel/Profile%20G/ChatGPT_Image_Jun_9_2026_07_02_32_PM_eguhmv.png',
    },
  ],

  navigation: {
    showPrevious: true,
    showNext: true,
  },
};

export const aiInfrastructureSectionHead = {
  badgeText: 'How We Work',
  title: 'The Values Behind How We Build.',
  description:
    "A strong team isn't defined only by technical skills. It's shaped by how people think, collaborate, and take responsibility.",
};

export const aiInfrastructureData: ArchitectureItem[] = [
  {
    id: createId(),
    position: 'top',
    icon: <StayCuriousIcon />,
    title: 'Stay Curious',
    description: 'Keep learning and exploring better solutions.',
  },

  {
    id: createId(),
    position: 'rightTop',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='22'
        height='24'
        viewBox='0 0 22 24'
        fill='none'
      >
        <path
          d='M11 12C14.3733 12 17.1111 9.312 17.1111 6C17.1111 2.688 14.3733 0 11 0C7.62667 0 4.88889 2.688 4.88889 6C4.88889 9.312 7.62667 12 11 12ZM11 2.4C13.0167 2.4 14.6667 4.02 14.6667 6C14.6667 7.98 13.0167 9.6 11 9.6C8.98333 9.6 7.33333 7.98 7.33333 6C7.33333 4.02 8.98333 2.4 11 2.4ZM1.22222 24H20.7778C21.45 24 22 23.46 22 22.8V21.6C22 16.968 18.1622 13.2 13.4444 13.2H8.55556C3.83778 13.2 0 16.968 0 21.6V22.8C0 23.46 0.55 24 1.22222 24ZM8.55556 15.6H13.4444C16.8178 15.6 19.5556 18.288 19.5556 21.6H2.44444C2.44444 18.288 5.18222 15.6 8.55556 15.6Z'
          fill='white'
        />
      </svg>
    ),
    title: 'Take Ownership',
    description: 'Be accountable for your work and decisions.',
  },

  {
    id: createId(),
    position: 'rightBottom',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='21'
        viewBox='0 0 20 21'
        fill='none'
      >
        <path
          d='M19.6172 13.1684L18.082 11.8559C18.1547 11.4105 18.1922 10.9559 18.1922 10.5012C18.1922 10.0465 18.1547 9.5918 18.082 9.14648L19.6172 7.83398C19.733 7.73486 19.8159 7.60283 19.8548 7.45547C19.8937 7.3081 19.8869 7.15237 19.8352 7.00898L19.8141 6.94805C19.3915 5.76685 18.7586 4.67187 17.9461 3.71602L17.9039 3.6668C17.8053 3.5509 17.674 3.46759 17.5271 3.42785C17.3803 3.3881 17.2248 3.39378 17.0813 3.44414L15.1758 4.12148C14.4727 3.54492 13.6875 3.09023 12.8391 2.77148L12.4711 0.779297C12.4433 0.629396 12.3706 0.49149 12.2626 0.383901C12.1546 0.276312 12.0164 0.204133 11.8664 0.176953L11.8031 0.165234C10.582 -0.0550781 9.29766 -0.0550781 8.07657 0.165234L8.01329 0.176953C7.86328 0.204133 7.72509 0.276312 7.61708 0.383901C7.50908 0.49149 7.43636 0.629396 7.4086 0.779297L7.03829 2.78086C6.19663 3.09969 5.41283 3.55414 4.71797 4.12617L2.79844 3.44414C2.65492 3.39338 2.49936 3.38749 2.35242 3.42726C2.20547 3.46704 2.07411 3.55058 1.97579 3.6668L1.9336 3.71602C1.12206 4.67255 0.489314 5.76735 0.0656298 6.94805L0.044536 7.00898C-0.0609328 7.30195 0.025786 7.63008 0.262505 7.83398L1.81641 9.16055C1.74375 9.60117 1.7086 10.0512 1.7086 10.4988C1.7086 10.9488 1.74375 11.3988 1.81641 11.8371L0.262505 13.1637C0.146713 13.2628 0.0638402 13.3948 0.0249047 13.5422C-0.0140308 13.6896 -0.0071836 13.8453 0.044536 13.9887L0.0656298 14.0496C0.489848 15.2309 1.11797 16.3207 1.9336 17.2816L1.97579 17.3309C2.07435 17.4468 2.20572 17.5301 2.35257 17.5698C2.49943 17.6096 2.65488 17.6039 2.79844 17.5535L4.71797 16.8715C5.41641 17.4457 6.19688 17.9004 7.03829 18.2168L7.4086 20.2184C7.43636 20.3683 7.50908 20.5062 7.61708 20.6138C7.72509 20.7213 7.86328 20.7935 8.01329 20.8207L8.07657 20.8324C9.30888 21.0539 10.5708 21.0539 11.8031 20.8324L11.8664 20.8207C12.0164 20.7935 12.1546 20.7213 12.2626 20.6138C12.3706 20.5062 12.4433 20.3683 12.4711 20.2184L12.8391 18.2262C13.6872 17.9083 14.4767 17.4521 15.1758 16.8762L17.0813 17.5535C17.2248 17.6043 17.3803 17.6102 17.5273 17.5704C17.6742 17.5306 17.8056 17.4471 17.9039 17.3309L17.9461 17.2816C18.7617 16.3184 19.3898 15.2309 19.8141 14.0496L19.8352 13.9887C19.9406 13.7004 19.8539 13.3723 19.6172 13.1684ZM16.418 9.42305C16.4766 9.77695 16.507 10.1402 16.507 10.5035C16.507 10.8668 16.4766 11.2301 16.418 11.584L16.2633 12.5238L18.0141 14.0215C17.7487 14.6329 17.4136 15.2118 17.0156 15.7465L14.8406 14.9754L14.1047 15.5801C13.5445 16.0395 12.9211 16.4004 12.2461 16.6535L11.3531 16.9887L10.9336 19.2621C10.2717 19.3371 9.60336 19.3371 8.94141 19.2621L8.52188 16.984L7.63594 16.6441C6.96797 16.391 6.34688 16.0301 5.79141 15.573L5.05547 14.966L2.86641 15.7441C2.46797 15.2074 2.13516 14.6285 1.86797 14.0191L3.63751 12.5074L3.48516 11.5699C3.42891 11.2207 3.39844 10.8598 3.39844 10.5035C3.39844 10.1449 3.42657 9.78633 3.48516 9.43711L3.63751 8.49961L1.86797 6.98789C2.13282 6.37617 2.46797 5.79961 2.86641 5.26289L5.05547 6.04102L5.79141 5.43398C6.34688 4.97695 6.96797 4.61602 7.63594 4.36289L8.52422 4.02773L8.94375 1.74961C9.60235 1.67461 10.275 1.67461 10.9359 1.74961L11.3555 4.02305L12.2484 4.3582C12.9211 4.61133 13.5469 4.97227 14.107 5.43164L14.843 6.03633L17.018 5.26523C17.4164 5.80195 17.7492 6.38086 18.0164 6.99023L16.2656 8.48789L16.418 9.42305ZM9.94219 6.14414C7.66407 6.14414 5.81719 7.99102 5.81719 10.2691C5.81719 12.5473 7.66407 14.3941 9.94219 14.3941C12.2203 14.3941 14.0672 12.5473 14.0672 10.2691C14.0672 7.99102 12.2203 6.14414 9.94219 6.14414ZM11.7984 12.1254C11.555 12.3696 11.2656 12.5632 10.9471 12.6951C10.6285 12.827 10.287 12.8947 9.94219 12.8941C9.24141 12.8941 8.58282 12.6199 8.08594 12.1254C7.84178 11.8819 7.64816 11.5926 7.51623 11.274C7.3843 10.9555 7.31666 10.6139 7.31719 10.2691C7.31719 9.56836 7.59141 8.90977 8.08594 8.41289C8.58282 7.91602 9.24141 7.64414 9.94219 7.64414C10.643 7.64414 11.3016 7.91602 11.7984 8.41289C12.0426 8.65635 12.2362 8.94569 12.3682 9.26426C12.5001 9.58283 12.5677 9.92434 12.5672 10.2691C12.5672 10.9699 12.293 11.6285 11.7984 12.1254Z'
          fill='white'
        />
      </svg>
    ),
    title: 'Keep It Practical',
    description: 'Solve real problems without unnecessary complexity.',
  },

  {
    id: createId(),
    position: 'bottom',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='26'
        height='22'
        viewBox='0 0 26 22'
        fill='none'
      >
        <path
          d='M19.4167 20.75C19.4167 18.5424 16.4313 16.7531 12.75 16.7531C9.06867 16.7531 6.08333 18.5424 6.08333 20.75M24.75 16.7531C24.75 15.1144 23.1047 13.7061 20.75 13.0893M0.75 16.7531C0.75 15.1144 2.39533 13.7061 4.75 13.0893M20.75 7.74141C21.145 7.39247 21.4671 6.96894 21.6977 6.49518C21.9283 6.02141 22.0629 5.50677 22.0938 4.98083C22.1247 4.4549 22.0512 3.92806 21.8775 3.43062C21.7039 2.93317 21.4335 2.47493 21.082 2.08226C20.7305 1.68958 20.3048 1.37022 19.8294 1.14253C19.3539 0.91485 18.8381 0.783337 18.3116 0.75556C17.7851 0.727782 17.2582 0.804288 16.7614 0.980677C16.2646 1.15707 15.8076 1.42986 15.4167 1.78336M4.75 7.74141C3.9664 7.03283 3.49528 6.04316 3.43956 4.98861C3.38384 3.93406 3.74804 2.90033 4.45261 2.11323C5.15718 1.32613 6.14486 0.849631 7.19988 0.787825C8.25491 0.726018 9.29154 1.08393 10.0833 1.78336M12.75 12.7562C11.6891 12.7562 10.6717 12.3351 9.92157 11.5855C9.17143 10.836 8.75 9.81934 8.75 8.75929C8.75 7.69925 9.17143 6.68262 9.92157 5.93305C10.6717 5.18349 11.6891 4.76239 12.75 4.76239C13.8109 4.76239 14.8283 5.18349 15.5784 5.93305C16.3286 6.68262 16.75 7.69925 16.75 8.75929C16.75 9.81934 16.3286 10.836 15.5784 11.5855C14.8283 12.3351 13.8109 12.7562 12.75 12.7562Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    title: 'Work Together',
    description: 'Share knowledge and support the people around you.',
  },

  {
    id: createId(),
    position: 'leftTop',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='31'
        viewBox='0 0 29 31'
        fill='none'
      >
        <path
          d='M14.2824 21.4238C14.7195 21.4238 15.1387 21.5975 15.4477 21.9065C15.7568 22.2156 15.9304 22.6347 15.9304 23.0718C15.9304 23.5089 15.7568 23.928 15.4477 24.2371C15.1387 24.5462 14.7195 24.7198 14.2824 24.7198C13.8454 24.7198 13.4262 24.5462 13.1172 24.2371C12.8081 23.928 12.6345 23.5089 12.6345 23.0718C12.6345 22.6347 12.8081 22.2156 13.1172 21.9065C13.4262 21.5975 13.8454 21.4238 14.2824 21.4238ZM14.3945 6.59756C14.6651 6.6253 14.9158 6.75245 15.098 6.95439C15.2803 7.15632 15.3812 7.41869 15.3811 7.69071V17.5786C15.3811 17.8699 15.2653 18.1494 15.0593 18.3554C14.8533 18.5615 14.5738 18.6772 14.2824 18.6772L14.1704 18.6717C13.8998 18.644 13.6491 18.5168 13.4668 18.3149C13.2846 18.1129 13.1837 17.8506 13.1838 17.5786V7.69071C13.1838 7.39933 13.2995 7.11989 13.5056 6.91385C13.7116 6.70781 13.9911 6.59206 14.2824 6.59206L14.3945 6.59756ZM13.6727 0.184738C13.8532 0.0642826 14.0654 0 14.2824 0C14.4995 0 14.7117 0.0642826 14.8922 0.184738C18.0959 2.32051 22.3191 4.42333 27.5761 4.94958C27.8471 4.97682 28.0983 5.10374 28.281 5.30573C28.4637 5.50772 28.5649 5.77038 28.5649 6.04274V15.3813C28.5649 19.3056 26.6642 22.6038 24.1593 25.1263C23.9103 25.3826 23.6572 25.6302 23.4001 25.869C20.6601 28.3959 17.307 30.1207 14.7241 30.6701C14.6142 30.6979 14.5066 30.7243 14.4011 30.7492C14.3229 30.7665 14.242 30.7665 14.1638 30.7492C14.0576 30.725 13.9496 30.6986 13.8397 30.6701C11.2568 30.1207 7.90369 28.3959 5.16475 25.869C4.90509 25.6282 4.65195 25.3806 4.40559 25.1263C1.90066 22.6038 0 19.3056 0 15.3813V6.04274C-3.42156e-06 5.77038 0.10116 5.50772 0.283865 5.30573C0.466569 5.10374 0.717789 4.97682 0.988785 4.94958C6.24582 4.42333 10.4701 2.32051 13.6727 0.184738ZM14.2824 2.4106C11.1689 4.40355 7.13683 6.34157 2.1973 7.02054V15.3813C2.1973 18.809 4.08148 21.8809 6.65452 24.254C9.15285 26.5589 12.1555 28.0652 14.2824 28.5211C16.4094 28.0652 19.412 26.5589 21.9104 24.254C24.4834 21.8809 26.3676 18.809 26.3676 15.3813V7.01944C21.4281 6.34157 17.396 4.40355 14.2824 2.4106Z'
          fill='white'
        />
      </svg>
    ),
    title: 'Deliver Quality',
    description: 'Build with reliability and long-term value in mind.',
  },

  {
    id: createId(),
    position: 'leftBottom',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='31'
        height='31'
        viewBox='0 0 31 31'
        fill='none'
      >
        <path
          d='M10.3346 12.917C9.99206 12.917 9.66352 13.0531 9.42129 13.2953C9.17905 13.5375 9.04297 13.8661 9.04297 14.2087C9.04297 14.5512 9.17905 14.8798 9.42129 15.122C9.66352 15.3642 9.99206 15.5003 10.3346 15.5003C10.6772 15.5003 11.0057 15.3642 11.248 15.122C11.4902 14.8798 11.6263 14.5512 11.6263 14.2087C11.6263 13.8661 11.4902 13.5375 11.248 13.2953C11.0057 13.0531 10.6772 12.917 10.3346 12.917ZM15.5013 12.917C15.1587 12.917 14.8302 13.0531 14.588 13.2953C14.3457 13.5375 14.2096 13.8661 14.2096 14.2087C14.2096 14.5512 14.3457 14.8798 14.588 15.122C14.8302 15.3642 15.1587 15.5003 15.5013 15.5003C15.8439 15.5003 16.1724 15.3642 16.4146 15.122C16.6569 14.8798 16.793 14.5512 16.793 14.2087C16.793 13.8661 16.6569 13.5375 16.4146 13.2953C16.1724 13.0531 15.8439 12.917 15.5013 12.917ZM20.668 12.917C20.3254 12.917 19.9969 13.0531 19.7546 13.2953C19.5124 13.5375 19.3763 13.8661 19.3763 14.2087C19.3763 14.5512 19.5124 14.8798 19.7546 15.122C19.9969 15.3642 20.3254 15.5003 20.668 15.5003C21.0105 15.5003 21.3391 15.3642 21.5813 15.122C21.8236 14.8798 21.9596 14.5512 21.9596 14.2087C21.9596 13.8661 21.8236 13.5375 21.5813 13.2953C21.3391 13.0531 21.0105 12.917 20.668 12.917Z'
          fill='white'
        />
        <path
          d='M15.4987 3.875C8.38161 3.875 2.58203 8.51208 2.58203 14.2083C2.58203 17.9671 5.0362 21.3254 9.04037 23.1596V27.125C9.04037 27.6158 9.31162 28.0679 9.75078 28.2746C9.93162 28.365 10.1254 28.4167 10.332 28.4167C10.6033 28.4167 10.8745 28.3262 11.107 28.1583L15.9379 24.5417C22.8612 24.3608 28.4154 19.7883 28.4154 14.2083C28.4154 8.62833 22.6158 3.875 15.4987 3.875ZM15.4987 21.9583C15.2145 21.9583 14.9433 22.0487 14.7237 22.2167L11.6237 24.5417V22.3071C11.6237 21.7775 11.3008 21.2996 10.797 21.1058C7.32245 19.7625 5.16536 17.1275 5.16536 14.2083C5.16536 9.93292 9.80245 6.45833 15.4987 6.45833C21.1949 6.45833 25.832 9.93292 25.832 14.2083C25.832 18.4837 21.1949 21.9583 15.4987 21.9583Z'
          fill='white'
        />
      </svg>
    ),
    title: 'Respect Perspectives',
    description: 'Different viewpoints help us make better decisions.',
  },
];

export const CareerFinalCtadata = {
  badgeText: 'Your Next Chapter',

  title: 'Ready to Build What’s Next?',

  description:
    'Bring your skills, ideas, and curiosity to a team building meaningful technology for real-world challenges.',

  buttonText: 'Explore Open Positions',

  buttonLink: '/contact',
  secondaryButton: {
    text: 'Send Your Profile',
    Href: '/contact',
  },
};
