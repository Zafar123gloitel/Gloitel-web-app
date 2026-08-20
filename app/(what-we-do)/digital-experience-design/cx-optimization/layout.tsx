import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "Customer Experience Optimization Services",
  description:
    "Find and fix friction across existing customer journeys, funnels, and user flows before investing in new features.",
  path: "/digital-experience-design/cx-optimization",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/CX_Optimization_r1mlhh.png",
  imageAlt: "Customer experience optimization services",
});

export default function CxOptimizationLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
