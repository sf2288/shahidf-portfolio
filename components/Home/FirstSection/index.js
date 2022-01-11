import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
// import FadeInAnimation from "../../Common/FadeInAnimation";
import React from "react";
import { Routes } from "../../../utils";
import { COUNTRY, CV_URL, MY_FULL_NAME_PHOTO, MY_NAME, MY_PHOTO } from "../../../utils/constants";
import Button from "@mui/material/Button";
import { ArrowDownward, Send } from "@mui/icons-material";
import dynamic from "next/dynamic";

const SocialIconsComponent = dynamic(() => import("../../Common/SocialIconsComponent"));

const FirstSection = () => {

  const handleScrollInto = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView(true);
    }
  };

  return <section className={`commonSection ${style.firstSection}`}>
    {/*<span className={style.availability}> Available for new projects</span>*/}
    {/*<FadeInAnimation>*/}
    <Container maxWidth="md">
      <Grid container className={style.about}>
        <Grid item md={8} sm={12}>
          <img src={MY_FULL_NAME_PHOTO}
               alt={MY_NAME}
               className={style.nameImage}
               placeholder="blur"
               loading="lazy"
               height={103}/>
          <Typography variant="h5" className={style.subTitle} gutterBottom>
            A meticulous Front-End Developer based in <span>{COUNTRY}</span>.
          </Typography>
          <br/>
          <Typography variant="h5" className={style.subTitle}>
            Specialized in creating Responsive, Minimal and Interactive user interfaces.
          </Typography>

          <SocialIconsComponent/>

          <div className={style.mainCTAs}>
            <Button variant="contained" className={style.btnGetInTouch}
                    onClick={() => handleScrollInto(Routes[4].id)}>
              Get In Touch <Send className={style.icon} fontSize="large"/>
            </Button>
            <Button href={CV_URL}
                    target="_blank" rel="noopener noreferrer"
                    variant="outlined"
                    className={style.btnDownloadCv}
                    download>
              Download CV <ArrowDownward color="primary" className={style.icon} fontSize="large"/>
            </Button>
          </div>
          <a onClick={() => handleScrollInto(Routes[1].id)}>
            <ArrowDownward className={style.scrollDownArrow} fontSize="large"/>
          </a>
        </Grid>
        <Grid item md={4} sm={12} className={style.avatar}>
          <img src={MY_PHOTO}
               alt={MY_NAME}
               className={style.avatarImage}
               placeholder="blur"
               loading="lazy"
               height={150}
               width={150}/>
        </Grid>
      </Grid>
    </Container>
    {/*</FadeInAnimation>*/}
  </section>;
};

export default FirstSection;
