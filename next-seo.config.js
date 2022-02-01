import {
  GOOGLE_SITE_VERIFICATION,
  IMAGES_BUCKET_URL,
  META_DESCRIPTION,
  META_KEYWORD,
  META_TITLE,
  MY_DOMAIN,
  MY_NAME,
  MY_PREVIEW_PHOTO,
  TWITTER_HANDLE
} from "./utils/constants";

const url = typeof window !== "undefined" ? window.location.origin : MY_DOMAIN;

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
        url: MY_PREVIEW_PHOTO,
        width: 1200,
        height: 627,
        alt: META_TITLE,
        type: "image/jpg"
      }
    ],
    site_name: MY_NAME
  },
  twitter: {
    handle: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
    cardType: "summary"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=0, viewport-fit=cover"
    },
    {
      name: "keyword",
      content: META_KEYWORD
    },
    {
      name: "image",
      content: MY_PREVIEW_PHOTO
    },
    {
      name: "author",
      content: MY_NAME
    },
    {
      property: "og:locale",
      content: "en_US"
    },
    {
      property: "google-site-verification",
      content: GOOGLE_SITE_VERIFICATION
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
      href: `${IMAGES_BUCKET_URL}favicon.ico`
    }
  ]
};