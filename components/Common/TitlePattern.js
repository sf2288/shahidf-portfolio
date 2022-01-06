import React, { useMemo } from "react";

export const TitlePattern = () => {
  return useMemo(() => <img
    src="https://assets.website-files.com/61234ef29aee7e1ff63319b5/61248864f54fd3436216890b_Pattern%20(3).svg"
    loading="lazy"
    alt="Pattern"
    height={10}
    width={70}/>, []);
};