import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "AI Integration Services",
  description:
    "Integrate AI reliably into products, ERP, CRM, and data platforms with production-ready engineering, infrastructure, and safeguards.",
  path: "/ai-intelligent-systems/ai-integration",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613037/Gloitel/what%20we%20do/AI_Integration_lzjw5j.png",
  imageAlt: "AI integration services for business systems",
});

export default function AiIntegrationLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
