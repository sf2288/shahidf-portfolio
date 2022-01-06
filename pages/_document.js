import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  componentDidMount() {
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://maps.googleapis.com/"/>
          <link rel="dns-prefetch" href="https://maps.googleapis.com/"/>
          {/*<link rel="preconnect" href="https://www.google-analytics.com"/>*/}
          {/*<link rel="dns-prefetch" href="https://www.google-analytics.com"/>*/}
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
