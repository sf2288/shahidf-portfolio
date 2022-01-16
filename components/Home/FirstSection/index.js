import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
// import FadeInAnimation from "../../Common/FadeInAnimation";
import React from "react";
import { Routes } from "../../../utils";
import { COUNTRY, CV_URL, MY_NAME, MY_PHOTO } from "../../../utils/constants";
import Button from "@mui/material/Button";
import { ArrowDownward, Send } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <Container maxWidth="md">
      <Grid container className={style.about}>
        <Grid item md={8} sm={12} className={style.aboutContent}>
          <Typography variant="h2" className={style.title}>{MY_NAME}</Typography>
          <Typography variant="h5" className={style.subTitle} gutterBottom>
            A meticulous <span className={style.subText}>Front-End Developer</span> based in {COUNTRY}.
          </Typography>
          <br/>
          <Typography variant="h5" className={style.subTitle}>
            Specialized in creating Responsive, Minimal and Interactive user interfaces.
          </Typography>

          <SocialIconsComponent hideContactMe={true}/>

          <div className={style.mainCTAs}>
            <Button variant="contained" className={style.btnGetInTouch}
                    onClick={() => handleScrollInto(Routes[5].id)}>
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
          <LazyLoadImage src={MY_PHOTO}
                         alt={MY_NAME}
                         className={style.avatarImage}
                         height={150}
                         width={150}/>
        </Grid>
      </Grid>
    </Container>
  </section>;
};

export default FirstSection;
