import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import React from "react";
import { Routes, SkillsList } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import { IMAGES_BUCKET_URL } from "../../../utils/constants";
import Image from "next/image";

const Skills = ({ hasSkillsLoadedOnce, isSkillsSectionInView }) => {

  return <section id={Routes[4].id} className={`${style.skillsSection} commonSecondarySection`}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[4].title}
          </Typography>
          <Typography variant="div" component="h2" className="subTitle">
            {Routes[4].subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth="lg"
               className={`${style.skillsContainer} ${isSkillsSectionInView || hasSkillsLoadedOnce ? "visible" : "invisible"}`}>
      <Grid container>
        {SkillsList.map((d) => {
          const url = `${IMAGES_BUCKET_URL}${d?.url}`;
          return <Grid item lg={3} sm={4} xs={6} className={style.skillsList} key={d?.label}>
            <div className={style.skill}>
              <Image src={url}
                     alt={d?.label}
                     placeholder="blur"
                     loading="lazy"
                     blurDataURL={url}
                     height={50}
                     width={80}/>
              <Typography variant="div" component="h4">
                {d?.label}
              </Typography>
            </div>
          </Grid>;
        })}
      </Grid>
    </Container>
  </section>;
};

export default Skills;
