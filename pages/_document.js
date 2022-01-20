import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@mui/styles";
import { GOOGLE_ANALYTICS, IMAGES_BUCKET_URL, MY_PREVIEW_PHOTO } from "../utils/constants";

const googleFontsApiDomain = "https://fonts.googleapis.com";
const googleMapsApiDomain = "https://maps.googleapis.com";
const googleAnalyticsDomain = "https://www.google-analytics.com";

export default class MyDocument extends Document {
  componentDidMount() {
  }

  render() {
    const renderAnalytics = process.env.NEXT_PUBLIC_ENV === "PRODUCTION" && <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}/>

      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window?.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS}', {
              page_path: window?.location?.href,
            });`
      }}/>
    </>;

    return (
      <Html lang="en">
        <Head>
          <meta name="image" property="og:image" content={MY_PREVIEW_PHOTO}/>
          <link rel="preconnect" href={googleFontsApiDomain}/>
          <link rel="dns-prefetch" href={googleFontsApiDomain}/>
          <link rel="preconnect" href={IMAGES_BUCKET_URL}/>
          <link rel="dns-prefetch" href={IMAGES_BUCKET_URL}/>
          <link rel="preconnect" href={googleMapsApiDomain}/>
          <link rel="dns-prefetch" href={googleMapsApiDomain}/>
          <link rel="preconnect" href={googleAnalyticsDomain}/>

          {renderAnalytics}

          <link rel="apple-touch-icon" sizes="180x180" href={`${IMAGES_BUCKET_URL}apple-touch-icon.webp`}/>
          <link rel="icon" type="image/png" sizes="32x32" href={`${IMAGES_BUCKET_URL}favicon-32x32.webp`}/>
          <link rel="icon" type="image/png" sizes="16x16" href={`${IMAGES_BUCKET_URL}favicon-16x16.webp`}/>
          <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          materialUiSheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
          {/* {flush() || null} */}
        </>
      )
    };
  } finally {
    // materialUiSheets.seal();
  }
};
