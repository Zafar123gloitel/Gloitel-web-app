import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Platform Scaling & Modernization Services',
  description:
    'Improve platform architecture, performance, infrastructure, and delivery processes as your product and engineering complexity grow.',
  path: '/product-engineering/platform-scaling',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786712282/Gloitel/Product%20Engineering/Platform_Scaling_azysql.png',
  imageAlt: 'Platform scaling and modernization services',
});

export default function PlatformScalingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
