import { META_DESCRIPTION, META_KEYWORD, META_TITLE, MY_NAME, MY_PHOTO, TWITTER_HANDLE } from "./utils/constants";

const url = typeof window !== "undefined" ? window.location.href : "https://google.com";

export default {
  title: META_TITLE,
  defaultTitle: META_TITLE,
  description: META_DESCRIPTION,
  canonical: url,
  openGraph: {
    url,
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    images: [
      {
        url: MY_PHOTO,
        width: 200,
        height: 200,
        alt: META_TITLE,
        type: "image/webp"
      }
    ],
    site_name: MY_NAME
  },
  twitter: {
    handle: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
    cardType: "player"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    },
    {
      name: "keyword",
      content: META_KEYWORD
    },
    {
      property: "og:locale",
      content: "en_US"
    }
  ],
  additionalLinkTags: [
    {
      rel: "theme-color",
      href: "#FFF"
    },
    {
      rel: "msapplication-TileColor",
      href: "#FFF"
    },
    {
      rel: "apple-mobile-web-app-capable",
      href: "yes"
    },
    {
      rel: "icon",
      href: "./assets/shahid-farooqui.webp"
    }
  ]
};