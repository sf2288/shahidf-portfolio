import React from "react";
import dynamic from "next/dynamic";
import { WORK_HISTORY } from "../utils/constants";
import { ProjectsList, SkillsList } from "../utils";

const HomeComponent = dynamic(() => import("./../components/Home"));

const Home = ({ skills, projects, workHistory }) => {
  return <HomeComponent skills={skills}
                        projects={projects}
                        workHistory={workHistory}/>;
};

export const getStaticProps = () => {
  return {
    props: {
      workHistory: WORK_HISTORY,
      skills: SkillsList,
      projects: ProjectsList
    }
  };
};

export default Home;
