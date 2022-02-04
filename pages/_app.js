import React, { useEffect } from "react";
import theme from "@/config/theme";
import ThemeProvider from "@/config/StyledMaterialThemeProvider";
import "../styles/index.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "./../next-seo.config";
import { sendGoogleAnalyticsEvent } from "../utils";
import AOS from "aos";
import "aos/dist/aos.css";

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      sendGoogleAnalyticsEvent("main_page_load", { "main_page_load": window?.location?.href });
    }
    AOS.init({ once: true });
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
