import type { Metadata } from 'next';

const siteUrl = 'https://www.gloitel.in';

interface ServiceMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  index?: boolean;
}

export function createServiceMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  index = true,
}: ServiceMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const pageTitle = `${title} | Gloitel`;
  const images = image
    ? [
        {
          url: image,
          alt: imageAlt ?? title,
        },
      ]
    : undefined;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: 'Gloitel',
      type: 'website',
      locale: 'en_IN',
      images,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: pageTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index,
      follow: true,
    },
  };
}
