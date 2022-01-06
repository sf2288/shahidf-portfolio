import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const FirstSection = dynamic(() => import("./FirstSection"));
const Portfolio = dynamic(() => import("./Portfolio"));
const AboutMe = dynamic(() => import("./AboutMe"));
const WorkHistory = dynamic(() => import("./WorkHistory"));

const HomeComponent = ({ images: socialIcons }) => {
  const [aboutMeRef, isAboutMeSectionInView] = useInView();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [portfolioRef, isPortfolioSectionInView] = useInView();

  useEffect(() => {
    if (isPortfolioSectionInView) {
      setHasLoadedOnce(isPortfolioSectionInView);
    }
  }, [isPortfolioSectionInView]);

  return <main>
    <FirstSection socialIcons={socialIcons}/>

    <div ref={portfolioRef}>
      <Portfolio hasLoadedOnce={hasLoadedOnce}
                 isPortfolioSectionInView={isPortfolioSectionInView}/>
    </div>

    <div ref={aboutMeRef}>
      <AboutMe hasLoadedOnce={hasLoadedOnce}
                        isAboutMeSectionInView={isAboutMeSectionInView}
                        isPortfolioSectionInView={isPortfolioSectionInView}/>
    </div>

    <div ref={aboutMeRef}>
      <WorkHistory/>
    </div>
  </main>;
};
export default HomeComponent;