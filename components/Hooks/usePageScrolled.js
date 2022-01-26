import { useEffect, useState } from "react";
import { Routes } from "../../utils";

const usePageScrolled = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const ele =
    typeof window !== "undefined" && document.getElementById(Routes[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (ele && y > 150) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };
    if (ele && typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [ele]);

  return isPageScrolled;
};
export default usePageScrolled;
