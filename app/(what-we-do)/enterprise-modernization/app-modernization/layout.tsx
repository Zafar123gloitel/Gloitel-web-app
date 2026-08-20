import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Application Modernization Services',
  description:
    'Modernize legacy applications incrementally to improve maintainability, performance, and scalability without a risky full rewrite.',
  path: '/enterprise-modernization/app-modernization',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966963/Gloitel/Enterprise%20Modernization/App_Modernization_qy2c0c.png',
  imageAlt: 'Application modernization services',
});

export default function AppModernizationLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
