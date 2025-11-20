import React from 'react'
import Head from 'next/head'

export default function SEO({ title, description, children }) {
  const site = title ? `${title} · MiSitio` : 'MiSitio'
  return (
    <>
      <Head>
        <title>{site}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}
