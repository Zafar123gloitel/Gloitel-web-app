import {
  ArrowRightIcon,
  ChartIcon,
  CloudBackend,
  DeviceManagement,
  EdgeComputing,
  EngineeringIEC62304Icon,
  MobileCommerceAppsIcon,
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
    icon: <EngineeringIEC62304Icon size={35} />,
    title: 'Device Firmware',
    description:
      'ARM Cortex, ESP32, and STM32 firmware with RTOS support, OTA updates, and power optimization.',
  },
  {
    id: createId(),
    position: 'leftTop',
    icon: <CloudBackend />,
    title: 'Cloud Backend',
    description:
      'Scalable ingestion, time-series storage, rules engines, device registries, and alert management',
  },
  {
    id: createId(),
    position: 'rightTop',
    icon: <DeviceManagement />,
    title: 'Device Management',
    description:
      'Provisioning, OTA updates, configuration, fleet health monitoring, and device analytics.',
  },
  {
    id: createId(),
    position: 'leftBottom',
    icon: <MobileCommerceAppsIcon />,
    title: 'Mobile Apps',
    description:
      'BLE and Wi-Fi pairing, device configuration, telemetry dashboards, and notifications.',
  },
  {
    id: createId(),
    position: 'rightBottom',
    icon: <EdgeComputing size={35} />,
    title: 'Edge Computing',
    description:
      'Local processing, intelligent filtering, and on-device ML inference before cloud transmission.',
  },
  {
    id: createId(),
    position: 'bottom',
    icon: <ChartIcon />,
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

  tabs: ['Connectivity', 'Platforms', 'Firmware', 'Time Series', 'Edge AI'],

  technologies: {
    Connectivity: [
      {
        id: createId(),
        name: 'MQTT',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789127478/Gloitel/icon/1544528_y0jryw.png',
      },
      {
        id: createId(),
        name: 'CoAP',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128065/Gloitel/icon/coap_acmkqi.png',
      },
      {
        id: createId(),
        name: 'HTTP/HTTPS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128187/Gloitel/icon/images_uzeeia.png',
      },
      {
        id: createId(),
        name: 'WebSocket',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789105084/Gloitel/icon/130129149_wgt483.png',
      },
      {
        id: createId(),
        name: 'BLE',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128437/Gloitel/icon/images_m5g9bg.jpg',
      },
      {
        id: createId(),
        name: 'Zigbee',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128596/Gloitel/icon/images_biotqw.jpg',
      },
      {
        id: createId(),
        name: 'Z-Wave',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128711/Gloitel/icon/z-wave-zw98kos07ukara7x8ij8b_ompvrm.webp',
      },
      {
        id: createId(),
        name: 'LoRaWAN',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128770/Gloitel/icon/iot-lora-alliance-logo.svg_akzz5o.png',
      },
    ],
    Platforms: [
      {
        id: createId(),
        name: 'AWS IoT Core',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Azure IoT Hub',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128906/Gloitel/icon/53_iot-hub.f08d8d0436_ycncvv.png',
      },
      {
        id: createId(),
        name: 'Google Cloud IoT ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        id: createId(),
        name: 'EMQX ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128960/Gloitel/icon/emqx_odzr3e.webp',
      },
    ],
    Firmware: [
      {
        id: createId(),
        name: 'FreeRTOS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789128999/Gloitel/icon/images_a2bttu.png',
      },
      {
        id: createId(),
        name: 'Zephyr',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789129189/Gloitel/icon/19595895_jblxzl.png',
      },
      {
        id: createId(),
        name: 'Bare Metal',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789129932/Gloitel/icon/firmware-icon-image-suitable-mobile-application-281164653_l2hsux.webp',
      },
      {
        id: createId(),
        name: 'ESP-IDF',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789129975/Gloitel/icon/1_G4K85o5wVIWDgeuIR1NpGA_h2nwda.jpg',
      },
      {
        id: createId(),
        name: 'Arduino',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130012/Gloitel/icon/arduino-logo-adafruit-industries-computer-software-microcontroller-data-computer-hardware-electronic-component-printer-png-clipart_ojaagz.jpg',
      },
    ],
    'Time Series': [
      {
        id: createId(),
        name: 'InfluxDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130075/Gloitel/icon/InfluxDB_xn75hy.png',
      },
      {
        id: createId(),
        name: 'TimescaleDB',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130112/Gloitel/icon/images_kiz18i.png',
      },
      {
        id: createId(),
        name: 'Apache Kafka',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png',
      },
      {
        id: createId(),
        name: 'AWS Timestream',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130285/Gloitel/icon/images_se4g6k.jpg',
      },
    ],
    'Edge AI': [
      {
        id: createId(),
        name: 'TensorFlow Lite',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130513/Gloitel/icon/TensorFlow_q5o4ae.svg',
      },
      {
        id: createId(),
        name: 'ONNX Runtime',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130575/Gloitel/icon/ORT_icon_for_light_bg_afwnrf.png',
      },
      {
        id: createId(),
        name: 'OpenVINO',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789130654/Gloitel/icon/images_fcqxpq.png',
      },
    ],
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
