import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "AI Agents & Automation Services",
  description:
    "Design and deploy production-ready AI agents that make decisions, interact with systems, and automate complex business workflows.",
  path: "/ai-intelligent-systems/ai-agents-automation",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613040/Gloitel/what%20we%20do/AI_Agents_Automation_pjmzaj.png",
  imageAlt: "AI agents and workflow automation services",
});

export default function AiAgentsAutomationLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
