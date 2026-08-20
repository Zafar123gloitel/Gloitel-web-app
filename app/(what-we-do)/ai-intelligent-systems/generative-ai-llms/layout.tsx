import type { ReactNode } from 'react';
import { createServiceMetadata } from '../../seo-metadata';

export const metadata = createServiceMetadata({
  title: 'Generative AI & LLM Development Services',
  description:
    'Build accurate, secure, cost-controlled generative AI and LLM systems designed for reliable production use.',
  path: '/ai-intelligent-systems/generative-ai-llms',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786616338/Gloitel/what%20we%20do/heroimage_jryx9d.png',
  imageAlt: 'Generative AI and LLM development services',
});

export default function GenerativeAiLlmsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
