import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "Machine Learning & Predictive Analytics",
  description:
    "Build machine learning models for forecasting, churn prediction, fraud detection, quality control, and measurable business outcomes.",
  path: "/ai-intelligent-systems/ml-predictive-analytics",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613038/Gloitel/what%20we%20do/ML_Predictive_Analytics_lkiy5f.png",
  imageAlt: "Machine learning and predictive analytics services",
});

export default function MlPredictiveAnalyticsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
