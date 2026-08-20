import { CloudIcon, GearInterlockIcon, HeroArrowRightIcon, LightbulbTargetIcon, SettingsGearIcon, SettingsIcon, WorkflowIcon } from "components/SvgIcon";

export const cloudMigrationHeroData = {
  badgeText: "Cloud Migration",
  title: "Move to the Cloud. Do It Right the First Time.",
  description:
    "Cloud migration projects fail when they're treated as infrastructure projects. They succeed when they're treated as architecture redesign opportunities. We help you move to the cloud with a target state that's genuinely better — not just the same system on different hardware.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966959/Gloitel/Enterprise%20Modernization/Cloud_Migration_utb9ak.png",
  imageAlt: "Cloud migration",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Plan Your Cloud Migration",
    href: "/contact",
  },
  secondaryButton: {
    text: "Cloud Readiness Assessment",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

export const migrationApproachSectionHead = {
  badgeText: "Migration Approaches We Use",
  title: "Choosing the Right Migration Path",
  description:
    "Every workload has different requirements. We choose the right migration strategy based on business priorities, technical constraints, and long-term goals.",
};

export const migrationApproachData = [
  {
    step: 1,
    title: "Lift & Shift",
    description:
      "Move existing workloads to the cloud with minimal changes. Fastest path to cloud, best for workloads that aren't being actively developed.",
    icon: <GearInterlockIcon size={25} className="text-white" />,
  },
  {
    step: 2,
    title: "Replatform",
    description:
      "Move to the cloud with targeted optimizations and cloud-native capabilities. More work than lift & shift, with greater benefits.",
    icon: <SettingsGearIcon size={25} className="text-white" />,
  },
  {
    step: 3,
    title: "Refactor/Re-architect",
    description:
      "Redesign for cloud-native architecture using serverless and managed services. Most effort, best long-term outcome. Recommended for product workloads.",
    icon: <LightbulbTargetIcon size={25} className="text-white" />,
  },
];

export const cloudCoverageSectionHead = {
  badgeText: "What We Cover",
  title: "Comprehensive Cloud Migration Coverage",
  description:
    "We address every layer of the migration journey - from architecture and automation to optimization and resilience - ensuring a secure and scalable transition to the cloud.",
};

export const cloudCoverageData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Cloud provider selection and architecture design (AWS vs GCP vs Azure)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Infrastructure-as-code (Terraform, Pulumi) for reproducible environments",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Network architecture — VPCs, subnets, security groups, and private connectivity",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Database migration — zero-downtime strategies, replication, cutover planning",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Container orchestration – ECS, GKE, AKS, or Kubernetes for scalable and efficient workload management.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "CI/CD pipeline migration to modernize deployment workflows and enable faster, more reliable software releases.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Security configuration — IAM, secrets management, compliance controls",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Cost optimization — right-sizing, reserved instances, spot capacity",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Monitoring & observability — CloudWatch, Grafana, Datadog setup",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Disaster recovery & backup configuration to ensure rapid recovery and business continuity.",
  },
];

export const migrationStrategySectionHead = {
  badgeText: "Zero-Downtime Migration Strategy",
  title: "A Controlled Path to the Cloud",
  description:
    "We reduce uncertainty through a phased migration strategy that prioritizes reliability and reversibility.",
};

export const migrationStrategySteps = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    title: "Replicate production to cloud environment",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    title: "Run in parallel with traffic mirroring",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    title: "Validate cloud environment matches production",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    title: "Gradual traffic shifting (10% → 25% → 50% → 100%)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 5,
    title: "Maintain rollback capability until fully validated",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 6,
    title: "Decommission old environment",
  },
];

export const cloudPlatformsData = {
  badge: "Cloud Platforms",

  title: "Built on Trusted Cloud Platforms",

  description:
    "From compute and storage to networking and security, we leverage proven cloud services to build scalable, resilient, and production-ready environments.",

  tabs: ["AWS", "Google Cloud", "Azure"],

  technologies: {
    AWS: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "EC2",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220511/Gloitel/icon/ec2_jxd9hn.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "ECS/EKS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220510/Gloitel/icon/ecs_nkk5pq.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "RDS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220506/Gloitel/icon/rds_qpyrum.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Lambda",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960619/Gloitel/icon/AWS_Lambda_cmuj6h.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "S3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "CloudFront",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220504/Gloitel/icon/cloudefront_jciwbv.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Route 53",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220500/Gloitel/icon/route53_bidt6r.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Secrets Manager",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220499/Gloitel/icon/secrets-manager_wg7t1w.png",
      },
    ],

    "Google Cloud": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "GKE",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/gke_q0yrnd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloud Run",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudrun_o7vmgs.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloud SQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudsql_lzoobz.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Pub/Sub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "BigQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960635/Gloitel/icon/BigQuery_dgjvnk.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Firebase",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960671/Gloitel/icon/firebase_cf9k34.png",
      },
    ],

    Azure: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AKS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/ask_xj5plr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "App Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220525/Gloitel/icon/app-service_cu5anj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure SQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220524/Gloitel/icon/azure-sql_uvazbj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220519/Gloitel/icon/azure-openai_a7qgyj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cosmos DB",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220519/Gloitel/icon/cosmos-db_zqp3xm.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Event Hub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220514/Gloitel/icon/event-hub_uo5mx7.png",
      },
    ],
  },
};