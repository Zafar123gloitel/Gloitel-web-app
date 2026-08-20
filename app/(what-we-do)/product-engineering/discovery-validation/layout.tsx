import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Product Discovery & Validation Services',
  description:
    'Validate product problems, assumptions, opportunities, and priorities before committing significant time and engineering investment.',
  path: '/product-engineering/discovery-validation',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712288/Gloitel/Product%20Engineering/Discovery_Validation_rj2az2.png',
  imageAlt: 'Product discovery and validation workshop',
});

export default function DiscoveryValidationLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
