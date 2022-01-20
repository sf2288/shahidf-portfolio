import React from "react";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./FirstSection"));
const Portfolio = dynamic(() => import("./Portfolio"));
const HireMe = dynamic(() => import("./HireMe"));
const AboutMe = dynamic(() => import("./AboutMe"));
const WorkHistory = dynamic(() => import("./WorkHistory"));
const Skills = dynamic(() => import("./Skills"));

const HomeComponent = ({ MY_PHOTO, skills, projects, workHistory }) => {

  return <main>
    <FirstSection MY_PHOTO={MY_PHOTO}/>

    <Portfolio projects={projects}/>

    <HireMe/>

    <AboutMe/>

    <WorkHistory workHistory={workHistory}/>

    <Skills skills={skills}/>
  </main>;
};
export default HomeComponent;