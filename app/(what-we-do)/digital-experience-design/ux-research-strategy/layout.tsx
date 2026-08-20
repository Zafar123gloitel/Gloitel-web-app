import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "UX Research & Strategy Services",
  description:
    "Validate user needs, workflows, and product assumptions through structured UX research before committing to design and development.",
  path: "/digital-experience-design/ux-research-strategy",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033715/Gloitel/Digital%20Experience%20Design/UX_Research_Strategy_maoak0.png",
  imageAlt: "UX research and product strategy services",
});

export default function UxResearchStrategyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
