const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true" && process.env.NEXT_PUBLIC_ENV === "DEVELOPMENT"
});
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    granularChunks: true,
    scrollRestoration: false
  },
  images: { domains: ["shahid-portfolio-bucket.s3.ap-south-1.amazonaws.com"] }
};
module.exports = withBundleAnalyzer(nextConfig);
