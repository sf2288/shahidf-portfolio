// log the pageView with their URL
import { GOOGLE_ANALYTICS } from "../../utils/constants";

export const pageView = (url) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENV === "PRODUCTION") {
    window?.gtag("config", GOOGLE_ANALYTICS, {
      page_path: url
    });
  }
};

// log specific events happening.
export const event = ({ action, params }) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_ENV === "PRODUCTION") {
    window?.gtag("event", action, params);
  }
};