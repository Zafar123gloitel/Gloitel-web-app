import {
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HeroArrowRightIcon,
  MobileIcon,
  ReactIcon,
} from 'components/SvgIcon';
import { ArchitectureCard } from 'uiComponents/EngineeringArchitecture';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const mobileEngineeringHeroData = {
  badgeText: 'Mobile Engineering',
  title: 'Mobile Apps That Work on Real Devices, Not Just the Demo Phone',
  description:
    'Mobile engineering is harder than it looks in screenshots. Real users have older devices, poor network conditions, background notifications, and battery optimization that can break your carefully designed experience. We build for users, not just the simulator.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757672/Gloitel/Product%20Engineering/Mobile_Engineering_pot5xi.png',
  imageAlt: 'Mobile engineering',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to our Mobile Team',
    href: '/contact',
  },
  secondaryButton: {
    text: 'See Mobile Portfolio',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const architectureData: ArchitectureCard[] = [
  {
    id: createId(),
    position: 'leftTop',
    icon: <ReactIcon size={35} />,
    title: 'React Native',
    description:
      'Cross-platform development with a shared codebase, native modules where performance demands it, and Expo for simpler apps and faster iteration.',
  },

  {
    id: createId(),
    position: 'leftBottom',
    icon: <FlutterIcon size={35} />,
    title: 'Flutter',
    description:
      'Dart-based cross-platform development with excellent animation performance and consistent UI across platforms. A strong choice for highly visual products.',
  },

  {
    id: createId(),
    position: 'rightTop',
    icon: <AppleIcon size={35} />,
    title: 'iOS Native',
    description:
      "Swift-first applications built for Apple's ecosystem. Full access to native APIs, Core ML, hardware capabilities, background modes, and widgets.",
  },

  {
    id: createId(),
    position: 'rightBottom',
    icon: <AndroidIcon size={35} />,
    title: 'Native Android',
    description:
      'Kotlin-first apps with Jetpack Compose and modern Android capabilities. Built for device fragmentation, background processing, and Play Store requirements.',
  },
];
export const mobileAgentsSectionHead = {
  badgeText: 'Mobile Platforms',
  title: 'Native When It Matters. Cross-Platform When It Makes Sense.',
  description:
    'We choose the mobile architecture around your product requirements—not around a preferred framework.',
  image: '/images/Engineering/mobile-phone-mockup.png',
  imageAlt: 'Mobile app on phone',
};

export const mobileProcessSectionHead = {
  badgeText: 'Mobile Engineering Practices',
  title: 'Built for Everything That Happens After Install',
  description:
    'A production mobile app has to survive unreliable networks, background restrictions, device limitations, and continuous updates—not just look good on a simulator.',
};

export const mobileProcessData = [
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'Offline-First Architecture',
    description:
      'Apps continue working without connectivity and synchronize data reliably when the network recovers.',
  },
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'Push Notification Engineering',
    description:
      'FCM and APNs integration with proper background handling, deep linking, notification grouping, and delivery behavior.',
  },
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'App Performance Profiling',
    description:
      'Frame-rate monitoring, memory-leak detection, startup-time optimization, and device-level performance profiling.',
  },
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'CI/CD for Mobile',
    description:
      'Automated build, testing, signing, and distribution pipelines using Fastlane, EAS Build, and Bitrise.',
  },
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'App Store Optimization',
    description:
      'Screenshot preparation, metadata release management, and deployment workflows for the Apple App Store and Google Play.',
  },
  {
    id: createId(),
    icon: <MobileIcon />,
    title: 'Over-the-Air Updates',
    description:
      'CodePush and EAS Update workflows for safely delivering eligible JavaScript updates without waiting for another store review.',
  },
];
export const mobileRoadmapSectionHead = {
  badgeText: 'What You Walk Away With',
  title: 'A Clear AI Roadmap backed by Business Value',
  description:
    'Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes.',
};

export const mobileRoadmapData = [
  {
    id: createId(),
    stape: 1,
    title: 'Consumer Applications: Consumer apps scaled to 1M+ downloads.',
  },
  {
    id: createId(),
    stape: 2,
    title: 'Healthcare Applications: Secure mobile apps with HIPAA-compliant storage.',
  },
  {
    id: createId(),
    stape: 3,
    title: 'Fintech Applications: Fintech apps with biometrics and secure transactions.',
  },
  {
    id: createId(),
    stape: 4,
    title: 'EdTech Applications: Learning apps with offline video and playback.',
  },
  {
    id: createId(),
    stape: 5,
    title: 'IoT Companion Applications: IoT apps with BLE and Wi-Fi device pairing.',
  },
  {
    id: createId(),
    stape: 6,
    title: 'On-Demand Applications: Service apps with real-time location tracking.',
  },
];

export const mobileEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: 'Build a Mobile App That Works Beyond the Demo',
  description:
    'From your first release to millions of installs, we build mobile products engineered for real devices, real networks, and real operational realities.',
  buttonText: 'Build Your Mobile App',
  buttonLink: '/contact',
};
