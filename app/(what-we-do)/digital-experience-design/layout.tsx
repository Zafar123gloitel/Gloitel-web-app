import type { ReactNode } from "react";
import { createServiceMetadata } from "../seo-metadata";

export const metadata = createServiceMetadata({
  title: "Digital Experience Design Services",
  description:
    "Create useful, consistent digital experiences by bringing user strategy, interface design, and engineering together from day one.",
  path: "/digital-experience-design",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040160/Gloitel/Parent%20pages/Digital_Experience_Design_fygufd.png",
  imageAlt: "Digital experience design services from Gloitel",
});

export default function DigitalExperienceDesignLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
