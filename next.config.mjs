/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withIntl = createNextIntlPlugin("./i18.ts");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzgjwvndxilvokroyqbz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withIntl(nextConfig);
