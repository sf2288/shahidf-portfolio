import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { Routes } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import { COUNTRY, IMAGES_BUCKET_URL, MY_NAME } from "../../../utils/constants";
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
    return (
      <LazyLoadImage
        src={`${IMAGES_BUCKET_URL}about/about_me.gif`}
        alt={MY_NAME}
        height={300}
        width={500}
      />
    );
  }, []);

  return (
    <section
      id={Routes[2].id}
      className={`${style.aboutMeSection} commonSecondarySection`}
      ref={aboutMeRef}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item>
            <Typography variant="div" component="h2" className="title">
              <TitlePattern /> {Routes[2].title}
            </Typography>
            <Typography variant="div" component="h3" className="subTitle">
              {Routes[2].subTitle} {COUNTRY}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={style.aboutMe}>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <div
              className={style.myInfo}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
            >
              <Typography paragraph>
                A <b>Front-End Web Developer</b> with 4+ years of experience. I
                help solo entrepreneurs, startups, and small and medium-sized
                businesses by developing high performant & interactive web apps
                that work across all platforms & devices.
                <br />
                <br />
                My primary tech stack are{" "}
                <b>
                  HTML5, CSS3, React.js, Next.js, Redux, JavaScript, Typescript,
                  Material-UI, Bootstrap, Tailwind CSS etc
                </b>
                .
                <br />
                <br />I do follow and use <b>
                  latest tools and best-practices
                </b>{" "}
                in my projects.
                <br />
                <br />
                With a strong emphasis on <b>Progressive Enhancement</b>, I look
                for creative ways to push the boundaries of website front-end
                code without compromising on browser support and performance.
                <br />
                <br />
                In a quest for always keeping myself updated, I read articles on
                various blogs like Medium, Daily.dev, Quora, etc and attend
                conferences & meetups.
              </Typography>
              <Typography paragraph className={style.highLightedText}>
                Allora lavoriamo insieme! &#128521;
              </Typography>
            </div>
          </Grid>
          <Grid item md={5} xs={12} className={style.myImageContainer}>
            {isAboutMeSectionInView || hasLoadedOnce ? (
              <>{renderAnimation}</>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
