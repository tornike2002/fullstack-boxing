// app/api/sitemap/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://lgboxing.art"; 


  const staticPages = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/services',
  ];


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return NextResponse.json(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
