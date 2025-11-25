import React from 'react';
import Head from 'next/head';

const DEFAULTS = {
  siteName: 'MiSitio',
  title: 'MiSitio',
  description: 'Proyecto web creado con Plantilla Corporativa',
  url: 'https://example.com',
  image: '/vercel.svg',
  twitter: '@tu_usuario',
};

export default function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
  children,
  author,
  robots = 'index,follow',
}) {
  const pageTitle = title ? `${title} · ${DEFAULTS.siteName}` : DEFAULTS.title;
  const metaDesc = description || DEFAULTS.description;
  const metaUrl = url || DEFAULTS.url;
  const metaImage = image || DEFAULTS.image;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={robots} />

        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={DEFAULTS.twitter} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={metaImage} />

        {author && <meta name="author" content={author} />}

        {/* Canonical */}
        <link rel="canonical" href={metaUrl} />
      </Head>
      {children}
    </>
  );
}
