import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "MVP Development Services",
  description:
    "Build and launch a production-ready minimum viable product that tests your most important assumptions with real users.",
  path: "/product-engineering/mvp-development",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712285/Gloitel/Product%20Engineering/MVP_Development_exyebf.png",
  imageAlt: "MVP product development services",
});

export default function MvpDevelopmentLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
