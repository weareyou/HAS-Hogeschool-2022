export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=86400', 'Content-Type': 'application/xml',
  };
  return {
    headers,
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
   </url>
   </urlset>`,
  };
}
