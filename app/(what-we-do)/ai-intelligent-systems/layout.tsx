import type { ReactNode } from "react";
import { createServiceMetadata } from "../seo-metadata";

export const metadata = createServiceMetadata({
  title: "AI & Intelligent Systems Services",
  description:
    "Move from AI experimentation to measurable business value with strategy, intelligent automation, integration, and production-ready AI systems.",
  path: "/ai-intelligent-systems",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040168/Gloitel/Parent%20pages/ML_Predictive_Analytics_txf2cy.png",
  imageAlt: "AI and intelligent systems services from Gloitel",
});

export default function AiIntelligentSystemsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
