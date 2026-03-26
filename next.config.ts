import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
};

export default nextConfig;
