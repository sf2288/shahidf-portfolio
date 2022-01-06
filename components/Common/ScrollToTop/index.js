import React from "react";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import usePageScrolled from "../../Hooks/usePageScrolled";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const router = useRouter();
  const hasPageScrolled = usePageScrolled();
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0
    });
    router.replace("/");
  };

  return hasPageScrolled ? <Fab color="primary" size="small" id="scrollTop" className="scrollTop"
                                aria-label="scroll back to top" onClick={scrollToTop}>
    <KeyboardArrowUp className="mt-1"/>
  </Fab> : null;
};

export default ScrollToTop;
