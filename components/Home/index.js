import React from "react";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./FirstSection"));
const Portfolio = dynamic(() => import("./Portfolio"));
const HireMe = dynamic(() => import("./HireMe"));
const AboutMe = dynamic(() => import("./AboutMe"));
const WorkHistory = dynamic(() => import("./WorkHistory"));
const Skills = dynamic(() => import("./Skills"));

const HomeComponent = () => {

  return <main>
    <FirstSection/>

    <Portfolio/>

    <HireMe/>

    <AboutMe/>

    <WorkHistory/>

    <Skills/>
  </main>;
};
export default HomeComponent;