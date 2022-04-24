import React from "react";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./FirstSection"));
const Portfolio = dynamic(() => import("./Portfolio"));
const HireMe = dynamic(() => import("./HireMe"));
const AboutMe = dynamic(() => import("./AboutMe"));
const WorkHistory = dynamic(() => import("./WorkHistory"));
// const WebsiteReport = dynamic(() => import("./WebsiteReport"));
const Skills = dynamic(() => import("./Skills"));

const HomeComponent = ({ skills, projects, workHistory }) => {

  return <main className="main-content">

    <FirstSection/>

    <Portfolio projects={projects}/>

    <HireMe/>

    <AboutMe/>

    <WorkHistory workHistory={workHistory}/>

    <Skills skills={skills}/>

    {/*<WebsiteReport/>*/}
  </main>;
};
export default HomeComponent;