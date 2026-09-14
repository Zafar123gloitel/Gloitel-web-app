import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Cloud Migration Services',
  description:
    'Plan and execute cloud migrations with the right architecture, migration strategy, safeguards, and long-term operating model.',
  path: '/enterprise-modernization/cloud-migration',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966959/Gloitel/Enterprise%20Modernization/Cloud_Migration_utb9ak.png',
  imageAlt: 'Cloud migration and modernization services',
});

export default function CloudMigrationLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
