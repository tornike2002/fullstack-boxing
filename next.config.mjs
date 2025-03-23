/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withIntl = createNextIntlPlugin("./i18.ts");
const nextConfig = {
  images: {
    domains: ["dzgjwvndxilvokroyqbz.supabase.co"], 
  },
};

export default withIntl(nextConfig);
