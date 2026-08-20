import type { ReactNode } from "react";
import { createServiceMetadata } from "../seo-metadata";

export const metadata = createServiceMetadata({
  title: "Enterprise Modernization",
  description:
    "Explore Gloitel's enterprise modernization services for applications, cloud platforms, architectures, and business processes.",
  path: "/enterprise-modernization",
  index: false,
});

export default function EnterpriseModernizationLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
