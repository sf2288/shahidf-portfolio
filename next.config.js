const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({
  reactStrictMode: true,
  compress: true,
  experimental: {
    scrollRestoration: false
  },
  images: { domains: ["shahid-portfolio-bucket.s3.ap-south-1.amazonaws.com"] }
});
