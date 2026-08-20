
import { ArrowRightIcon, BarChartIcon, TargetIcon, DiamondStackIcon, RadarIcon, CheckTargetIcon, ClipboardIcon, DatabaseIcon, AnomalyDetectionIcon, CloudIcon, WorkflowIcon1, CodeIcon, DocumentIcon, ChartIcon, ShieldIcon } from 'components/SvgIcon';

export const platformHeroSection = {
  badgeText: "Platform Scaling",
  title: "Your MVP Got You Here. You Need Something Different to Go Further.",
  description:
    "Architectures built for speed in the early days show their limits when scale arrives. Slow queries, deployment bottlenecks, on-call nightmares, and features that take 3x longer than they should - these are engineering debt coming due. We help you pay it down without stopping the product.",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712282/Gloitel/Product%20Engineering/Platform_Scaling_azysql.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: { text: "Talk About Scaling Challenges", href: "/contact" },
  secondaryButton: { text: "Technical Review", href: "/about", icon: <ArrowRightIcon size={16} className="w-4 h-4" /> },
};

export const auditPhaseData = {
  badgeText: "Step 01",
  title: "Technical Audit (1-2 weeks)",
  description:
    "Instrument, profile, and document the current system. Identify the top 10 issues ranked by impact and effort. No guessing.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712282/Gloitel/Product%20Engineering/Technical_Audit_ko3ec5.png",
  imageAlt: "Technical audit",
};

export const roadmapPhaseData = {
  badgeText: "Step 02",
  title: "Prioritized Roadmap",
  description:
    "A phased plan that addresses the highest-impact issues first, with each phase delivering measurable improvement that can be shipped and validated independently.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712282/Gloitel/Product%20Engineering/Prioritized_Roadmap_yxlgjv.png",
  imageAlt: "Prioritized roadmap",
};

export const executionPhaseData = {
  badgeText: "Step 03",
  title: "Execution",
  description:
    "Work alongside your existing team. We don't take over — we accelerate and upskill. Changes made in branches, reviewed, and deployed with your existing process.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712281/Gloitel/Product%20Engineering/Execution_aihpdn.png",
  imageAlt: "Execution phase",
};

export const handoffPhaseData = {
  badgeText: "Step 04",
  title: "Handoff & Documentation",
  description:
    "Architecture documentation, runbooks, and knowledge transfer so your team can own what we've built.",
  buttonText: "View more",
  buttonLink: "/",
  image: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712281/Gloitel/Product%20Engineering/Handoff_Documentation_keykkd.png",
  imageAlt: "Handoff and documentation",
};

export const principlesData = [
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <BarChartIcon size={25} className="" />, title: "Fix the measurement problem first - you can't optimize what you can't observe" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <TargetIcon size={25} className="" />, title: "Address the bottleneck, not the symptom" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <ChartIcon size={25} className="" />, title: "Migrate incrementally — big-bang rewrites have a terrible success rate" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <ShieldIcon size={25} className="" />, title: "Write the test before the fix - regression prevention, not just performance improvement" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <DocumentIcon size={25} className="" />, title: "Document decisions, not just code" },
];

export const scalingIndicators = [
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "Page load times increasing as your dataset grows" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "Database queries struggling as users grow from 10K to 100K" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "Deployments requiring a weekend and a prayer" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "New features taking 3× longer due to code complexity" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "On-call rotations nobody wants to own" },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <AnomalyDetectionIcon size={25} className="" />, description: "Engineering velocity slowing despite team growth" },
];

export const scalingSolutions = [
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <RadarIcon size={25} className="" />, title: "Performance Optimization", description: "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks." },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <DatabaseIcon size={25} className="" />, title: "Database Architecture & Migration", description: "Schema redesign, read replica setup, connection pooling, sharding strategy for high-throughput systems, and safe zero-downtime migration execution." },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <CloudIcon size={25} className="" />, title: "Infrastructure Redesign", description: "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing, and infrastructure-as-code so your environment is reproducible." },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <WorkflowIcon1 size={25} className="" />, title: "API Gateway & Microservices", description: "When a monolith has outgrown itself, we plan and execute the decomposition — starting with the highest-value, most isolated services, not a full rewrite." },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <DiamondStackIcon size={25} className="" />, title: "Caching Layer Design", description: "Redis/Memcached strategy across application, database, and CDN layers. Proper cache invalidation patterns that don't cause the bugs that give caching its bad reputation." },
  { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), icon: <CodeIcon size={25} className="" />, title: "Caching LEngineering Process Improvementayer Design", description: "Technical debt inventory, CI/CD pipeline optimization, test coverage improvement, code review standards, and documentation practices that scale with your team" },
];
