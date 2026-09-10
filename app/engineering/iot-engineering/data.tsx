import {
  ArrowRightIcon,
  ConnectedSystemsIcon,
  EngineeringHIPAAIcon,
  EngineeringIEC62304Icon,
  IoTGDPRIcon,
  IoTSOC2TypeIIIcon,
  WCAGComplianceIcon,
} from 'components/SvgIcon';
import { ArchitectureItem } from 'uiComponents/ArchitectureCircle';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const iotHeroData = {
  badgeText: 'IoT Engineering',
  title: 'IoT Engineering: From Device to Dashboard',
  description:
    "IoT projects fail at the edges — literally. Firmware that doesn't survive a dropped connection. A platform that can't handle the actual message volume. A mobile app that makes device pairing a 10-step nightmare. We've seen all of these and design to avoid them.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/IoT_Engineering_xlp2pd.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our IoT Team',
    href: '/about',
  },
  secondaryButton: {
    text: 'IoT Case Studies',
    href: '/about',
    icon: <ArrowRightIcon />,
  },
};

export const fullStackComplianceSectionHead = {
  badgeText: 'What Our IoT Engineers Build',
  title: 'Connected Systems From Edge to Cloud',
  description:
    'We engineer the complete IoT stack—from embedded firmware and device connectivity to scalable cloud platforms, companion apps, and real-time analytics.',
};

export const fullStackComplianceData: ArchitectureItem[] = [
  {
    id: createId(),
    position: 'top',
    icon: <EngineeringHIPAAIcon />,
    title: 'Device Firmware',
    description:
      'ARM Cortex, ESP32, and STM32 firmware with RTOS support, OTA updates, and power optimization.',
  },
  {
    id: createId(),
    position: 'leftTop',
    icon: <IoTGDPRIcon />,
    title: 'Cloud Backend',
    description:
      'Scalable ingestion, time-series storage, rules engines, device registries, and alert management',
  },
  {
    id: createId(),
    position: 'rightTop',
    icon: <ConnectedSystemsIcon />,
    title: 'Device Management',
    description:
      'Provisioning, OTA updates, configuration, fleet health monitoring, and device analytics.',
  },
  {
    id: createId(),
    position: 'leftBottom',
    icon: <WCAGComplianceIcon />,
    title: 'Mobile Apps',
    description:
      'BLE and Wi-Fi pairing, device configuration, telemetry dashboards, and notifications.',
  },
  {
    id: createId(),
    position: 'rightBottom',
    icon: <EngineeringIEC62304Icon />,
    title: 'Edge Computing',
    description:
      'Local processing, intelligent filtering, and on-device ML inference before cloud transmission.',
  },
  {
    id: createId(),
    position: 'bottom',
    icon: <IoTSOC2TypeIIIcon />,
    title: 'Analytics',
    description:
      'Real-time telemetry, historical analytics, anomaly detection, alerts, and fleet intelligence.',
  },
];

export const aiEcosystemData = {
  badge: 'IoT Engineering Stack',
  title: 'Protocols & Technologies We Build With',
  description:
    'From low-power device connectivity to cloud ingestion and edge intelligence, we select technologies around reliability, scale, power constraints, and maintainability.',

  tabs: ['Connectivity', 'Platforms', 'Firmware', 'Time Series', 'Edge', 'AI'],

  technologies: {
    Connectivity: [
      {
        id: createId(),
        name: 'OpenAI GPT-4o',
        logo: '',
      },
      {
        id: createId(),
        name: 'Claude 3.5 Sonnet',
        logo: '',
      },
      {
        id: createId(),
        name: 'Gemini 1.5 Pro',
        logo: '',
      },
      {
        id: createId(),
        name: 'LLaMA 3',
        logo: '',
      },
      {
        id: createId(),
        name: 'Mistral',
        logo: '',
      },
    ],
    Platforms: [],
    Firmware: [],
    'Time Series': [],
    Edge: [],
    AI: [],
  },
};

export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
