import React from "react";
import dynamic from "next/dynamic";
import { MY_PHOTO, WORK_HISTORY } from "../utils/constants";
import { ProjectsList, SkillsList } from "../utils";

const HomeComponent = dynamic(() => import("./../components/Home"));

const Home = ({ MY_PHOTO, skills, projects, workHistory }) => {
  return <HomeComponent skills={skills}
                        MY_PHOTO={MY_PHOTO}
                        projects={projects}
                        workHistory={workHistory}/>;
};

export const getStaticProps = () => {
  return {
    props: {
      workHistory: WORK_HISTORY,
      skills: SkillsList,
      projects: ProjectsList,
      MY_PHOTO: MY_PHOTO
    }
  };
};

export default Home;
