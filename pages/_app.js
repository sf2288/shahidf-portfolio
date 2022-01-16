import React, { useEffect } from "react";
import theme from "@/config/theme";
import ThemeProvider from "@/config/StyledMaterialThemeProvider";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
import { sendGoogleAnalyticsEvent } from "../utils";

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    sendGoogleAnalyticsEvent("main_page_load", { "main_page_load": window?.location?.href });
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      {/*<Head>
        <meta name="description" content={description}/>
        <title>{title}</title>
        <meta property="og:title" content={title} key="ogtitle"/>
        <meta name="author" content={MY_NAME}/>
        <meta name="keywords" content={description}/>
        <meta property="og:description" content={description} key="ogdesc"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={currentURL} key="ogurl"/>
        <meta property="og:image" content={image} key="ogimage"/>
        <meta property="og:site_name" content={MY_NAME} key="ogsitename"/>
        <meta property="og:image:width" content="200"/>
        <meta property="og:image:width" content="200"/>

        <meta name="twitter:card" content="summary" key="twcard"/>
        <meta name="twitter:site" content={twitterHandle}/>
        <meta property="twitter:title" content={title}/>
        <meta name="twitter:creator" content={twitterHandle} key="twhandle"/>
        <meta property="twitter:description" content={description} key="ogdesc"/>
        <meta property="twitter:image" content={image} key="ogimage"/>
        <meta name="twitter:image:src" content={image}/>
      </Head>*/}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
