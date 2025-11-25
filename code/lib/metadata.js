export function getDefaultMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const title = 'MiSitio';
  const description = 'Proyecto web creado con Plantilla Corporativa';

  return {
    title,
    description,
    keywords: ['plantilla', 'corporativa', 'nextjs'],
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: 'MiSitio',
      images: [`${siteUrl.replace(/\/$/, '')}/vercel.svg`],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
