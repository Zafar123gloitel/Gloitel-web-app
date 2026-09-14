import type { ReactNode } from 'react';
import { createServiceMetadata } from '../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Product Engineering Services',
  description:
    'Build production-ready digital products with disciplined discovery, architecture, development, deployment, and long-term scalability.',
  path: '/product-engineering',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787040164/Gloitel/Parent%20pages/Product_Engineering_udc6rv.png',
  imageAlt: 'Product engineering services from Gloitel',
});

export default function ProductEngineeringLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
