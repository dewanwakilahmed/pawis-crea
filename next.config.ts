import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // eslint configuration removed - no longer supported in Next.js 16
  // Use eslint.config.mjs instead
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
