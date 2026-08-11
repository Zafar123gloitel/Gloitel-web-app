export const aiEngineeringHeroData = {
    badgeText: "AI Engineering",
    title: "AI Engineering That Ships and Stays Shipped",
    description:
        "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong - that's engineering. We've done that latter.",
    image: "/images/Engineering/ai-engineering-hero.png",
    imageAlt: "AI engineering",
    video:
        "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
    primaryButton: {
        text: "Talk to Our AI Engineers",
        href: "/contact",
    },
    secondaryButton: {
        text: "View AI Work",
        href: "/about",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        ),
    },
};

export const aiSystemsSectionHead = {
    badgeText: "AI Strategy & Consulting",
    title: "Define Your AI Roadmap Before You Build",
    description:
        "Most AI initiatives fail before they begin - not because of bad technology, but because of misdirected effort. We help you decide \"where\" AI should be applied before a single line of code is written. Most AI initiatives fail before they begin - not because of bad technology, but because of misdirected effort. We help you decide \"where\" AI should be applied before a single line of code is written.", // ⚠️ sentence repeated twice in source image
    image: "/images/What-we-do/ai-roadmap.jpg",
    imageAlt: "Team planning AI roadmap",
};

export const aiSystemsData = [
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
            </svg>
        ),
        title: "RAG Systems",
        description: "Vector search and document intelligence pipelines.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4A8.5 8.5 0 0 1 4.06 9.94 8.38 8.38 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
                <circle cx="9" cy="11.5" r="0.5" fill="white" />
                <circle cx="12.5" cy="11.5" r="0.5" fill="white" />
                <circle cx="16" cy="11.5" r="0.5" fill="white" />
            </svg>
        ),
        title: "LLM Features",
        description: "AI capabilities embedded into existing products.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.6 13.5 15.4 17.5" />
                <path d="M15.4 6.5 8.6 10.5" />
            </svg>
        ),
        title: "Agent Systems",
        description: "Coordinated agents with tools, memory, and workflows.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
                <path d="M12 22.08V12" />
            </svg>
        ),
        title: "Custom Models",
        description: "Domain-specific models optimized for specialized tasks.",
    },
];

export const whoThisIsForSectionHead = {
    badgeText: "Who This Is For",
    title: "Built for Teams Ready to move beyond AI Experimentation",
    description:
        "Designed for organizations that want to invest in AI strategically, align initiatives with business outcomes, and prioritize the right opportunities before committing resources.",
};

export const whoThisIsForTimelineData = [
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "left",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "right",
        year: "2016",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>,
        description: "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "left",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "right",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "left",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "right",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "left",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "right",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "left",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        side: "right",
        year: "2016",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.08-2.92a2.18 2.18 0 0 0-2.92-.08z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        description:
            "AI systems often fail not because the model is but because the surrounding integrations are unreliable.",
    },
];

export const aiBuildProcessSectionHead = {
    badgeText: "Our Build Process",
    title: "How we turn AI Concepts into Production Systems.",
    description:
        "From initial discovery and model selection to deployment and ongoing monitoring, we follow a structured process that transforms AI concepts into secure, scalable, and production-ready solutions.",
};

export const useCaseDefinitionData = {
    badgeText: "Step 01",
    title: "Use Case Definition",
    description:
        "We scope the exact workflow to be augmented, define input/output formats, and establish success metrics before writing code.",
    buttonText: "View more",
    buttonLink: "/use-case-definition",
    image: "/images/What-we-do/use-case-definition.png",
    imageAlt: "Use case definition",
};

export const modelSelectionData = {
    badgeText: "Step 02",
    title: "Model Selection",
    description:
        "We evaluate and recommend the right model (GPT-4o, Claude, Gemini, LLaMA, Mistral) based on accuracy requirements, latency, cost, and data sensitivity.",
    buttonText: "View more",
    buttonLink: "/model-selection",
    image: "/images/What-we-do/model-selection.png",
    imageAlt: "Model selection",
};

export const scalingSolutionsHead = {
    badgeText: "How we Help you Scale",
    title: "Engineering for the Next Stage of Growth",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path d="M22.7815 3.79688C20.2884 3.79687 17.8198 4.28793 15.5164 5.242C13.2131 6.19607 11.1202 7.59447 9.35736 9.35736C5.79704 12.9177 3.79688 17.7465 3.79688 22.7815C3.79688 27.8166 5.79704 32.6454 9.35736 36.2057C11.1202 37.9686 13.2131 39.367 15.5164 40.3211C17.8198 41.2752 20.2884 41.7662 22.7815 41.7662C27.8166 41.7662 32.6454 39.766 36.2057 36.2057C39.766 32.6454 41.7662 27.8166 41.7662 22.7815C41.7662 20.2884 41.2752 17.8198 40.3211 15.5164C39.367 13.2131 37.9686 11.1202 36.2057 9.35736C34.4428 7.59447 32.35 6.19607 30.0467 5.242C27.7433 4.28793 25.2746 3.79688 22.7815 3.79688ZM22.7815 7.59381C26.8096 7.59381 30.6726 9.19394 33.5209 12.0422C36.3691 14.8904 37.9693 18.7535 37.9693 22.7815C37.9693 27.3379 36.0708 31.3246 32.8434 34.1723C30.1856 31.7043 26.5785 30.3754 22.7815 30.3754C18.9846 30.3754 15.5674 31.7043 12.7197 34.1723C9.49228 31.3246 7.59381 27.3379 7.59381 22.7815C7.59381 18.7535 9.19394 14.8904 12.0422 12.0422C14.8904 9.19394 18.7535 7.59381 22.7815 7.59381ZM26.5785 11.1819C25.8571 11.2009 25.1736 11.6755 24.8699 12.4159L22.4208 18.548L22.231 18.9846C20.8831 19.2314 19.763 20.1237 19.2504 21.3767C18.472 23.3321 19.4213 25.5343 21.3767 26.3127C23.3321 27.0911 25.5343 26.1418 26.3127 24.1864C26.8063 22.9334 26.5785 21.4906 25.7621 20.4274L25.952 19.9338L28.401 13.8398L28.42 13.7828C28.7997 12.8146 28.3251 11.7135 27.3568 11.3148C27.11 11.2199 26.8632 11.1819 26.5785 11.1819ZM18.9846 11.3907C18.4811 11.3907 17.9982 11.5908 17.6422 11.9468C17.2862 12.3028 17.0861 12.7857 17.0861 13.2892C17.0861 13.7927 17.2862 14.2756 17.6422 14.6316C17.9982 14.9877 18.4811 15.1877 18.9846 15.1877C19.4881 15.1877 19.971 14.9877 20.327 14.6316C20.6831 14.2756 20.8831 13.7927 20.8831 13.2892C20.8831 12.7857 20.6831 12.3028 20.327 11.9468C19.971 11.5908 19.4881 11.3907 18.9846 11.3907ZM13.2892 17.0861C12.7857 17.0861 12.3028 17.2862 11.9468 17.6422C11.5908 17.9982 11.3907 18.4811 11.3907 18.9846C11.3907 19.4881 11.5908 19.971 11.9468 20.327C12.3028 20.6831 12.7857 20.8831 13.2892 20.8831C13.7927 20.8831 14.2756 20.6831 14.6316 20.327C14.9877 19.971 15.1877 19.4881 15.1877 18.9846C15.1877 18.4811 14.9877 17.9982 14.6316 17.6422C14.2756 17.2862 13.7927 17.0861 13.2892 17.0861ZM32.2739 17.0861C31.7704 17.0861 31.2875 17.2862 30.9315 17.6422C30.5754 17.9982 30.3754 18.4811 30.3754 18.9846C30.3754 19.4881 30.5754 19.971 30.9315 20.327C31.2875 20.6831 31.7704 20.8831 32.2739 20.8831C32.7774 20.8831 33.2603 20.6831 33.6163 20.327C33.9723 19.971 34.1723 19.4881 34.1723 18.9846C34.1723 18.4811 33.9723 17.9982 33.6163 17.6422C33.2603 17.2862 32.7774 17.0861 32.2739 17.0861Z" fill="white" />
    </svg>),
    description:
        "From infrastructure and databases to engineering processes, we focus on the areas that matter most for sustainable scale.",
};

export const scalingSolutions = [
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
                <path d="M12 8v8" />
                <path d="m9.5 12 5-3v6l-5-3Z" />
            </svg>
        ),
        title: "Performance Optimization",
        description:
            "Identify and fix the bottlenecks that matter. Database query analysis, index optimization, caching strategy, CDN configuration, and frontend bundle optimization. Instrumented with before/after benchmarks.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
                <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
            </svg>
        ),
        title: "Database Architecture & Migration",
        description:
            "Schema redesign, read replica setup, connection pooling, sharding strategy for high-throughput systems, and safe zero-downtime migration execution.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 32H32C36 32 39 29 39 25C39 21.5 36.5 18.7 33.2 18.1C32.4 12.4 27.5 8 21.5 8C15.5 8 10.5 12.6 10 18.4C6.5 19 4 22 4 25.5C4 29.6 7.4 32 11 32Z" />
            </svg>
        ),
        title: "Infrastructure Redesign",
        description:
            "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing, and infrastructure-as-code so your environment is reproducible.",
    },
    {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="19" r="2.5" />
                <path d="M8.2 13.4 15.8 17.6" />
                <path d="M15.8 6.4 8.2 10.6" />
            </svg>
        ),
        title: "API Gateway & Microservices",
        description:
            "When a monolith has outgrown itself, we plan and execute the decomposition — starting with the highest-value, most isolated services, not a full rewrite.",
    },
];

export const teamCardsSectionHead = {
  badgeText: "How We Help You Scale",
  title: "Engineering for the Next Stage of Growth",
  description:
    "From infrastructure and databases to engineering processes, we focus on the areas that matter most for sustainable scale.",
};

export const teamCardsTabs = [
  "LLMs",
  "RAG/Orchestration",
  "Vector DBs",
  "ML",
  "MLOps",
  "Serving",
  "Observability",
  "Cloud AI",
];

export const teamCardsData = {
  LLMs: [
    {
      id: "openai-gpt-4o",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      imageAlt: "OpenAI GPT-4o",
      heading: "OpenAI GPT-4o",
      subheading: "Foundation Model",
      cardDescription:
        "Advanced multimodal AI model for building intelligent and production-ready applications.",
      icons: [
        {
          id: 1,
          type: "linkedin",
        },
      ],
    },
    {
      id: "claude-3-5-sonnet",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      imageAlt: "Claude 3.5 Sonnet",
      heading: "Claude 3.5 Sonnet",
      subheading: "Foundation Model",
      cardDescription:
        "Powerful language model designed for reasoning, coding, analysis, and enterprise AI workloads.",
      icons: [
        {
          id: 1,
          type: "linkedin",
        },
      ],
    },
    {
      id: "gemini-1-5-pro",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960682/Gloitel/icon/gemini_b4dcsa.png",
      imageAlt: "Gemini 1.5 Pro",
      heading: "Gemini 1.5 Pro",
      subheading: "Foundation Model",
      cardDescription:
        "Multimodal AI model built for long-context reasoning and complex enterprise use cases.",
      icons: [
        {
          id: 1,
          type: "linkedin",
        },
      ],
    },
 
  ],

  "RAG/Orchestration": [],

  "Vector DBs": [],

  ML: [],

  MLOps: [],

  Serving: [],

  Observability: [],

  "Cloud AI": [],
};

export const optimizationProcessSectionHead = {
  badgeText: "Our Optimization Process",
  title: "How we Optimize Customer Experiences",
  description:
    "We combine measurement, experimentation, and continuous monitoring to identify opportunities, validate improvements, and deliver meaningful business impact.",
};

export const instrumentMeasureData = {
  badgeText: "Step 01",
  title: "Instrument & Measure",
  description:
    "Establish baseline metrics. If you can't measure it, you can't improve it.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/instrument-measure.png",
  imageAlt: "Instrument & Measure",
};

export const identifyOpportunitiesData = {
  badgeText: "Step 02",
  title: "Identify Opportunities",
  description:
    "Combine quantitative (analytics, funnel data) with qualitative (session recordings, user interviews) to identify the highest-impact improvement opportunities.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/identify-opportunities.png",
  imageAlt: "Identify Opportunities",
};

export const hypothesizeData = {
  badgeText: "Step 03",
  title: "Hypothesize",
  description:
    "For each opportunity, form a specific, testable hypothesis about what change will improve which metric by approximately how much.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/hypothesize.png",
  imageAlt: "Hypothesize",
};

export const designTestData = {
  badgeText: "Step 04",
  title: "Design & Test",
  description:
    "Design the change, implement the test, collect data with statistical significance.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/design-test.png",
  imageAlt: "Design & Test",
};

export const implementMonitorData = {
  badgeText: "Step 05",
  title: "Implement & Monitor",
  description:
    "Roll out winning variations. Monitor for regressions. Document learnings.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/implement-monitor.png",
  imageAlt: "Implement & Monitor",
};

export const industriesWeServeSectionHead = {
  badgeText: "Industries We Serve",
  title: "AI Agents Driving Results Across Industries.",
  description:
    "From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support faster decision-making.",
};

export const industriesWeServeData = [
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15.5C5.5 13.8 7.5 13 9.5 13C11.2 13 12.5 13.7 13.5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 12V8.5L12 5L16 8.5V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 15.5C14.2 14.2 15.8 13.5 17.5 13.5C19 13.5 20 14 21 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 17.5C5.5 16.5 8.5 16.5 11 17.5C13.5 18.5 16.5 18.5 19 17.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20C12 20 4.5 15.5 4.5 9.5C4.5 6.8 6.4 5 8.7 5C10.2 5 11.4 5.8 12 7C12.6 5.8 13.8 5 15.3 5C17.6 5 19.5 6.8 19.5 9.5C19.5 15.5 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 11.5H11M10 10.5V12.5M14 10H17M15.5 8.5V11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Media & Publishing",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 7H17M7 10H17M7 13H12M7 16H12M15 13H17M15 16H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Legal",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5L17 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 7L9 4L11 6L8 9L6 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M15 15L18 12L20 14L17 17L15 15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 19H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 17H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Finance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 9.5V14.5M17 9.5V14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export const clientTestimonialsSectionHead = {
  badgeText: "Industries We Serve",
  title: "AI Agents Driving Results Across Industries.",
  description:
    "From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support faster decision-making.",
};

export const clientTestimonialsData = [
  {
    name: "Durgesh Sahu",
    designation: "Founder and Director",
    description:
      "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
  },
  {
    name: "Durgesh Sahu",
    designation: "Founder and Director",
    description:
      "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
  },
  {
    name: "Durgesh Sahu",
    designation: "Founder and Director",
    description:
      "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
  },
  {
    name: "Durgesh Sahu",
    designation: "Founder and Director",
    description:
      "Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.",
  },
];