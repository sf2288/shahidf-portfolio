import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { IMAGES_BUCKET_URL } from "../utils/constants";
import { sendGoogleAnalyticsEvent } from "../utils";

export default function FourOhFour() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      sendGoogleAnalyticsEvent("404_page_load", { "404_page_load": window?.location?.href });
    }
  }, []);

  const handleGoToHome = () => {
    router.replace("/");
    sendGoogleAnalyticsEvent("404_page_go_to_home_click", { "404_page_go_to_home_click": true });
  };

  return <div className="fourOhFour">
    <img src={`${IMAGES_BUCKET_URL}404.svg`} alt="404 | Page Not Found" height={300} width={400}/>
    <h1>Page Not Found</h1>
    <p>Unfortunately the page you're looking for does not exist.</p>
    <Button variant="contained" color="primary" onClick={handleGoToHome}>
      Go to home
    </Button>
  </div>;
}