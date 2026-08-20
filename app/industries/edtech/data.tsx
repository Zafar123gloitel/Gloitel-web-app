import {
  AITutoringAndQAndASystemsIcon,
  AdaptiveLearningSystemsIcon,
  AssessmentAndCertificationIcon,
  HeroArrowRightIcon,
  LearningManagementSystemsLMSIcon,
  MobileCommerceAppsIcon,
  VideoLearningPlatformsIcon,
} from 'components/SvgIcon';

export const edtechHeroData = {
  badgeText: 'EdTech',
  title: 'EdTech Built for Learning Outcomes, Not Just Platform Metrics',
  description:
    "EdTech platforms have a unique challenge: the product has to be engaging enough to keep learners coming back, but the real measure of success is whether people actually learn. We've built for EdTech clients who care about both.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056272/Gloitel/Industries/EdTech_q4zsyu.png',
  imageAlt: 'EdTech technology',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our EdTech Team',
    href: '/contact',
  },
  secondaryButton: {
    text: 'EdTech Case Studies',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const edtechChallengesSectionHead = {
  badgeText: 'Challenges We Solve',
  title: 'Modern EdTech Requires more Than Content Delivery',
  description:
    'From content delivery and learner engagement to assessments and personalization, EdTech platforms require technology that can support both scale and meaningful learning outcomes.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056267/Gloitel/Industries/Challenges_We_Solve_EDTECH_mhqe3x.png',
  imageAlt: 'EdTech challenges',
};

export const edtechChallengesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Scalable content delivery for video-heavy learning platforms with growing user bases',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Adaptive learning and personalized content pathways based on learner performance',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Assessment engines and proctoring integrations for secure online examinations',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'LMS customization and LTI integration (Canvas, Moodle, Blackboard) for seamless interoperability',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Cohort-based course platforms and live session management for collaborative learning',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'Mobile-first learning experiences for emerging market users across devices',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    text: 'AI-powered tutoring and doubt resolution tools for personalized learner support',
  },
];

export const edtechSolutionsSectionHead = {
  badgeText: 'Solutions We Build',
  title: 'Building Modern EdTech Requires the Right Technology',
  description:
    'We build scalable learning platforms, content delivery systems, and AI-powered educational tools that help organizations create engaging, accessible, and outcome-driven learning experiences.',
};

export const edtechSolutionsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LearningManagementSystemsLMSIcon />,
    title: 'Learning Management Systems (LMS)',
    description:
      'Custom LMS platforms or deep customizations of Moodle/Canvas. Course management, progress tracking, assessment engines, certificates, and learner analytics.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <VideoLearningPlatformsIcon />,
    title: 'Video Learning Platforms',
    description:
      'High-performance video streaming, interactive video with embedded quizzes, watch history, bookmarking, and AI-generated transcripts and summaries.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AdaptiveLearningSystemsIcon />,
    title: 'Adaptive Learning Systems',
    description:
      'AI-powered learning paths that adjust content difficulty, sequence, and format based on learner performance. Mastery-based progression that meets each learner where they are.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AITutoringAndQAndASystemsIcon />,
    title: 'AI Tutoring & Q&A Systems',
    description:
      'LLM-powered teaching assistants trained on course content. Instant doubt resolution, hint systems, and guided problem-solving with appropriate scaffolding.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MobileCommerceAppsIcon />,
    title: 'EdTech Mobile Apps',
    description:
      'iOS and Android learning apps with offline content access, streak tracking, push notification reminders, and gamification elements that drive daily active usage.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AssessmentAndCertificationIcon />,
    title: 'Assessment & Certification',
    description:
      'Question bank management, adaptive testing, AI-assisted grading, digital certificates with blockchain verification, and proctoring integrations.',
  },
];

export const edtechTechStackData = {
  badge: 'Technology Stack',
  title: 'Technologies Powering Modern EdTech Platforms',
  description:
    'Building engaging and scalable learning experiences requires a strong technology foundation. We leverage modern learning frameworks, cloud infrastructure, AI capabilities, and mobile technologies to create secure, accessible, and high-performing educational platforms.',

  tabs: ['Video Delivery', 'LMS Integration', 'AI', 'Mobile', 'Backend'],

  technologies: {
    'Video Delivery': [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'AWS CloudFront',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/aws-cloudfront_xxxxxx.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Mux',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/mux_xxxxxx.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Vimeo API',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/vimeo-api_xxxxxx.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'HLS streaming',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/Gloitel/icon/hls-streaming_xxxxxx.png',
      },
    ],
    'LMS Integration': [],
    AI: [],
    Mobile: [],
    Backend: [],
  },
};

export const edtechCTAData = {
  badgeText: "Let's Talk EdTech",
  title: 'Engineering the Future of Education',
  description:
    'We help EdTech companies, institutions, and learning providers build modern platforms that improve learner engagement, streamline content delivery, and support meaningful educational outcomes at scale.',
  buttonText: 'Build Your EdTech Platform',
  buttonLink: '/contact',
};
