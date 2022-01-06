import { useEffect } from "react";

const useShowHideNavOnScroll = () => {
  const ele =
    typeof window !== "undefined" && document.getElementById("nav_bar");

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        ele.style.top = "0";
        ele.style.height = "60px";
      } else {
        ele.style.top = "-60px";
        ele.style.height = "0";
      }
      prevScrollPos = currentScrollPos;
    };
    if (ele && typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [ele]);
};
export default useShowHideNavOnScroll;
