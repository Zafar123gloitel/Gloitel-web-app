import { ArchitectureItem } from "../../../uiComponents/ArchitectureCircle";
import { ArrowRightIcon, UsersSecurityIcon, RefreshCcwIcon, DiamondStackIcon, ShieldCheckIcon, PredictiveForecastingIcon, ShieldAlertIcon } from '../../../component/SvgIcon';

export const mvpheroSection = {
    badgeText: "MVP Development",
    title: "Ship Something Real. Fast. That You Won't Regret.",
    description:
        "An MVP is not a rough prototype thrown together to 'move fast.' It's the smallest complete product that lets you test your most important assumption with real users in production. Done right, it takes weeks and gives you genuine signal. Done wrong, it takes months and teaches you nothing.",
    image: "/images/What-we-do/Rectangle 1.png",
    imageAlt: "Discovery and validation workshop",
    video:
        "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
    primaryButton: {
        text: "Build Your MVP with Us",
        href: "/contact",
    },
    secondaryButton: {
        text: "See Our MVP Portfolio",
        href: "/about",
        icon: <ArrowRightIcon size={16} className="w-4 h-4" />,
    },
};

export const weekOneData = {
    badgeText: "Week 1",
    title: "Setup & Architecture",
    description:
        "Repository setup, infrastructure provisioning, team onboarding, architectural decisions documented. No surprises mid-build.",
    buttonText: "View more",
    buttonLink: "#",
    image: "/images/What-we-do/discover.png",
    imageAlt: "Setup & Architecture",
};

export const weekTwoData = {
    badgeText: "Week 2",
    title: "Core Build",
    description:
        "Agile sprints with weekly demos. You see working software every week—not a big reveal at the end.",
    buttonText: "View more",
    buttonLink: "#",
    image: "/images/What-we-do/assess.png",
    imageAlt: "Core Build",
};

export const weekThreeData = {
    badgeText: "Week 3",
    title: "Hardening & Launch Prep",
    description:
        "QA pass, performance testing, security review, deployment configuration, and launch checklist.",
    buttonText: "View more",
    buttonLink: "#",
    image: "/images/What-we-do/rank.png",
    imageAlt: "Hardening & Launch Prep",
};

export const weekFourData = {
    badgeText: "Week 4",
    title: "Measure & Iterate",
    description:
        "Support your first real users. Instrument the product to capture the metrics that answer your core hypothesis.",
    buttonText: "View more",
    buttonLink: "#",
    image: "/images/What-we-do/enable.png",
    imageAlt: "Measure & Iterate",
};

export const coreFeaturesData: ArchitectureItem[] = [
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "top",
        title: "Authentication & User Management",
        description:
            "Proper authentication with secure user access, role-based permissions, and account management capabilities.",
        icon: <UsersSecurityIcon size={25} className="" />,
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "leftTop",
        title: "CI/CD Pipeline",
        description:
            "Automated build, testing, deployment, and release workflows for reliable production delivery.",
        icon: <RefreshCcwIcon size={25} className="" />,
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "rightTop",
        title: "Core Feature Set",
        description:
            "The essential workflow that validates the product value proposition with real users.",
        icon: <DiamondStackIcon size={25} className="" />,
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "leftBottom",
        title: "Basic Security",
        description:
            "Authentication, encryption, validation, and essential security best practices for production systems.",
        icon: <ShieldCheckIcon size={25} className="" />,
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "bottom",
        title: "Logging & Monitoring",
        description:
            "Track system health, logs, metrics, and application performance in real time.",
        icon: <PredictiveForecastingIcon size={25} className="" />,
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        position: "rightBottom",
        title: "Error Handling",
        description:
            "Graceful exception handling, retry strategies, and meaningful user-facing error responses.",
        icon: <ShieldAlertIcon size={25} className="" />,
    },
];

export const technologyChoicesData = {
    badge: "Technology Choices for MVPs",
    title: "Modern Tools. Practical Decisions.",
    description:
        "Every technology is selected to reduce complexity, speed up development, and keep your MVP easy to scale.",
    tabs: ["Full-Stack Web", "Mobile", "Backend APIs", "Auth", "Database", "Payments", "File Storage", "Deployment"],
    technologies: {
        "Full-Stack Web": [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Next.js", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "PostgreSQL", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Vercel", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960611/Gloitel/icon/vercel_ecvrkl.png" },
        ],
        Mobile: [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "React Native", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Flutter", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960672/Gloitel/icon/flutter_lplnyz.png" },
        ],
        "Backend APIs": [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Node.js / NestJS", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960581/Gloitel/icon/nodejs_tpmxcf.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Python / FastAPI", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png" },
        ],
        Auth: [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Clerk", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960643/Gloitel/icon/clerk_fapefn.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Auth0", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784961896/Gloitel/icon/Auth0_shuxwm.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Supabase Auth", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png" },
        ],
        Database: [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "PostgreSQL (default)", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Firebase", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960671/Gloitel/icon/firebase_cf9k34.png" },
        ],
        Payments: [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Stripe", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960603/Gloitel/icon/stripe_cmfiwd.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Razorpay", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960594/Gloitel/icon/razorpay_cceonz.png" },
        ],
        "File Storage": [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "AWS S3", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Cloudinary", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960649/Gloitel/icon/cloudinary_y3xnvs.png" },
        ],
        Deployment: [
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Vercel", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960611/Gloitel/icon/vercel_ecvrkl.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Railway", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960593/Gloitel/icon/railway_wsfpls.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "AWS", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png" },
            { id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), name: "Render", logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960597/Gloitel/icon/render_twuslb.png" },
        ],
    },
};

export const accordionData2 = [
    { title: "How fast can you actually build an MVP?", description: "Depends on scope. A single-workflow web app with auth and one integration: 4-5 weeks. A cross-platform mobile app with a backend: 6-8 weeks. We scope accurately before we commit." },
    { title: "Can we add features mid-build?", description: "Yes, but it extends the timeline. We use a change request process so additions are explicit decisions, not scope creep." },
    { title: "Who owns the code?", description: "You do. 100%. We transfer all repositories, credentials, and infrastructure on handoff." },
    { title: "What if we want to continue building after the MVP?", description: "Most clients do. We offer ongoing sprint-based development or a fractional team model depending on your needs." },
];
