import type { ReactNode } from "react";
import { createServiceMetadata } from "../../seo-metadata";

export const metadata = createServiceMetadata({
  title: "Fractional Engineering Teams",
  description:
    "Add senior engineering capacity through flexible fractional teams that integrate with your workflows and accelerate product delivery.",
  path: "/product-engineering/fractional-engineering-teams",
  image:
    "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712281/Gloitel/Product%20Engineering/Fractional_Engineering_Teams_ydvpia.png",
  imageAlt: "Fractional engineering team services",
});

export default function FractionalEngineeringTeamsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
