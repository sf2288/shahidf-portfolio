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
  const [skillsRef, isSkillsSectionInView] = useInView();
  const [hasSkillsLoadedOnce, setHasSkillsLoadedOnce] = useState(false);

  useEffect(() => {
    if (isSkillsSectionInView) {
      setHasSkillsLoadedOnce(isSkillsSectionInView);
    }
  }, [isSkillsSectionInView]);

  return <main>
    <FirstSection/>

    <Portfolio/>

    <HireMe/>

    <AboutMe/>

    <WorkHistory/>

    <div ref={skillsRef}>
      <Skills isSkillsSectionInView={isSkillsSectionInView}
              hasSkillsLoadedOnce={hasSkillsLoadedOnce}/>
    </div>
  </main>;
};
export default HomeComponent;