import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "UI/UX Design Services",
  description:
    "Design user-focused digital products that balance customer needs, visual quality, accessibility, and engineering feasibility.",
  path: "/digital-experience-design/ui-ux-design",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033715/Gloitel/Digital%20Experience%20Design/UIUX_Design_uptvhe.png",
  imageAlt: "UI and UX design services",
});

export default function UiUxDesignLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
