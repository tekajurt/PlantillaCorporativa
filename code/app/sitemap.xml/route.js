// Dynamic sitemap route for Next.js App Router
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // Define the important routes to include in the sitemap
  const routes = ['/', '/nosotros', '/galeria', '/contacto', '/blog'];

  const today = new Date().toISOString().split('T')[0];

  const urlEntries = routes
    .map((route) => {
      const loc = `${siteUrl.replace(/\/$/, '')}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
