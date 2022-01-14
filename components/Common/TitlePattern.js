import React, { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const TitlePattern = () => {
  return useMemo(() => <LazyLoadImage
    alt="Pattern"
    src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg"
    height={10}
    width={70}/>, []);
};