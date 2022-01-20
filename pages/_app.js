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
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
