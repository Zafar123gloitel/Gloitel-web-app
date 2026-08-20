import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Microservices Architecture Services',
  description:
    'Assess, plan, and implement safe monolith decomposition for greater deployment velocity, scalability, and engineering autonomy.',
  path: '/enterprise-modernization/microservices-architecture',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966958/Gloitel/Enterprise%20Modernization/Microservices_Architecture_g4ugfy.png',
  imageAlt: 'Microservices architecture consulting services',
});

export default function MicroservicesArchitectureLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
