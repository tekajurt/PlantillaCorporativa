export function getDefaultMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const title = 'Escuela Arcoiris';
  const description = 'Proyecto web creado con Daniel Hurtado';

  return {
    title,
    description,
    keywords: ['plantilla', 'corporativa', 'nextjs'],
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: 'Escuela Arcoiris',
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
