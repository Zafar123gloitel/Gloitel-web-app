import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Business Process Automation Services',
  description:
    'Automate rule-based workflows, document processing, system integrations, and intelligent business processes with the right technology.',
  path: '/enterprise-modernization/process-automation',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966955/Gloitel/Enterprise%20Modernization/Process_Automation_e8v0mh.png',
  imageAlt: 'Business process automation services',
});

export default function ProcessAutomationLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
