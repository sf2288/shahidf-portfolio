const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({
  reactStrictMode: true,
  compress: true,
  images: { domains: ["assets.website-files.com", "images.unsplash.com"] }
});
