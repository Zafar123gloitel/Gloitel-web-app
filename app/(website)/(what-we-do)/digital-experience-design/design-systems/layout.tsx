import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Design System Services',
  description:
    'Build scalable design systems that improve product consistency, accelerate delivery, and reduce design and engineering debt.',
  path: '/digital-experience-design/design-systems',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033713/Gloitel/Digital%20Experience%20Design/Design_Systems_fttrfz.png',
  imageAlt: 'Scalable design system services',
});

export default function DesignSystemsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
