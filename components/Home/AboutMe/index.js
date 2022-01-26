import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import FadeInAnimation from "../../Common/FadeInAnimation";
import React, { useEffect, useMemo, useState } from "react";
import { Routes } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import { COUNTRY, MY_NAME } from "../../../utils/constants";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutMe = () => {
  const [aboutMeRef, isAboutMeSectionInView] = useInView();
  const [hasLoadedOnce, setHasAboutMeLoadedOnce] = useState(false);

  useEffect(() => {
    if (isAboutMeSectionInView && !hasLoadedOnce) {
      setHasAboutMeLoadedOnce(isAboutMeSectionInView);
    }
  }, [isAboutMeSectionInView]);

  const renderAnimation = useMemo(() => {
    return <LazyLoadImage src={"/about_me.gif"}
                          alt={MY_NAME}
                          height={300}
                          width={500}/>;
  }, []);

  return <section id={Routes[2].id} className={`${style.aboutMeSection} commonSecondarySection`} ref={aboutMeRef}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[2].title}
          </Typography>
          <Typography variant="div" component="h2" className={`subTitle ${style.subTitle}`}>
            {Routes[2].subTitle} {COUNTRY}
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="lg" className={style.aboutMe}>
      <Grid container>
        <Grid item md={7} xs={12}>
          <FadeInAnimation>
            <div className={style.myInfo}>
              I’m a front-end web developer with over 4 years of experience. I work with agencies/individuals across
              the
              globe to create high performance & rich interactive websites that work across all platforms & devices.
              <br/><br/>
              Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5,
              CSS3,
              React.js, Next.js, Material-UI & ofCourse JavaScript.
              <br/><br/>
              With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of
              website front-end code without compromising on browser support and performance.
              <br/><br/>
              In a quest for always keeping myself updated, I read articles on various blogs like Medium, Daily.dev,
              Quora, etc and attend conferences & meetups.
              <Typography paragraph className={style.highLightedText}>
                Allora lavoriamo insieme! &#128521;
              </Typography>
            </div>
          </FadeInAnimation>
        </Grid>
        <Grid item md={5} xs={12} className={style.myImageContainer}>
          {(isAboutMeSectionInView || hasLoadedOnce) ? <>{renderAnimation}</> : null}
        </Grid>
      </Grid>
    </Container>
  </section>;
};

export default AboutMe;

