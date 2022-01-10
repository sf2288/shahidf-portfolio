import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const FirstSection = dynamic(() => import("./FirstSection"));
const Portfolio = dynamic(() => import("./Portfolio"));
const HireMe = dynamic(() => import("./HireMe"));
const AboutMe = dynamic(() => import("./AboutMe"));
const WorkHistory = dynamic(() => import("./WorkHistory"));
const Skills = dynamic(() => import("./Skills"));

const HomeComponent = () => {
  const [aboutMeRef, isAboutMeSectionInView] = useInView();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [portfolioRef, isPortfolioSectionInView] = useInView();
  const [skillsRef, isSkillsSectionInView] = useInView();
  const [hasSkillsLoadedOnce, setHasSkillsLoadedOnce] = useState(false);

  useEffect(() => {
    if (isPortfolioSectionInView) {
      setHasLoadedOnce(isPortfolioSectionInView);
    }
  }, [isPortfolioSectionInView]);

  useEffect(() => {
    if (isSkillsSectionInView) {
      setHasSkillsLoadedOnce(isSkillsSectionInView);
    }
  }, [isSkillsSectionInView]);

  return <main>
    <FirstSection/>

    <div ref={portfolioRef}>
      <Portfolio hasLoadedOnce={hasLoadedOnce}
                 isPortfolioSectionInView={isPortfolioSectionInView}/>
    </div>

    <HireMe/>

    <div ref={aboutMeRef}>
      <AboutMe hasLoadedOnce={hasLoadedOnce}
               isAboutMeSectionInView={isAboutMeSectionInView}
               isPortfolioSectionInView={isPortfolioSectionInView}/>
    </div>

    <div ref={aboutMeRef}>
      <WorkHistory/>
    </div>

    <div ref={skillsRef}>
      <Skills isSkillsSectionInView={isSkillsSectionInView}
              hasSkillsLoadedOnce={hasSkillsLoadedOnce}/>
    </div>
  </main>;
};
export default HomeComponent;