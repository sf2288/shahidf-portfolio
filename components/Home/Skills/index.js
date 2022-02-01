import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { Routes } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import { IMAGES_BUCKET_URL } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";

const Skills = ({ skills = [] }) => {
  const [skillsRef, isSkillsInView] = useInView();
  const [hasLoadedOnce, setHasSkillsLoadedOnce] = useState(false);

  useEffect(() => {
    if (isSkillsInView && !hasLoadedOnce) {
      setHasSkillsLoadedOnce(isSkillsInView);
    }
  }, [isSkillsInView]);

  const renderSkills = useMemo(() => skills.map((d) => {
    const url = `${IMAGES_BUCKET_URL}${d?.url}`;
    return <Grid item lg={3} sm={4} xs={6} className={style.skillsList} key={d?.label}>
      <div className={style.skill}>
        <LazyLoadImage src={url}
                       alt={d?.label}
                       height={70}
                       width={80}/>
        <Typography variant="div" component="h3" className={style.label}>
          {d?.label}
        </Typography>
      </div>
    </Grid>;
  }), [isSkillsInView]);

  return <section id={Routes[4].id} className={`${style.skillsSection} commonSecondarySection`} ref={skillsRef}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h2" className="title">
            <TitlePattern/> {Routes[4].title}
          </Typography>
          <Typography variant="div" component="h3" className="subTitle">
            {Routes[4].subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth="lg" className={style.skillsContainer} data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
      <Grid container>
        {renderSkills}
      </Grid>
    </Container>
  </section>;
};

export default Skills;

