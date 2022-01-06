import { Container, Grid, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import style from "./Styles.module.scss";
// import FadeInAnimation from "../../Common/FadeInAnimation";
import React from "react";
import { Routes } from "../../../utils";
import { COUNTRY, CV_URL, MY_NAME, MY_PHOTO } from "../../../utils/constants";
import Button from "@mui/material/Button";
import { ArrowDownward, Send } from "@mui/icons-material";
import Image from "next/image";

const FirstSection = ({ socialIcons }) => {

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
          <Image src={"/assets/my_full_name.webp"}
                 alt={MY_NAME}
                 placeholder="blur"
                 blurDataURL={"/assets/my_full_name.webp"}
                 height={103}
                 width={514}/>
          {/*<Typography variant="h2" className={style.title}>{MY_NAME}</Typography>*/}
          <Typography variant="h5" className={style.subTitle} gutterBottom>
            A meticulous Front-End Developer based in <span>{COUNTRY}</span>.
          </Typography>
          <br/>
          <Typography variant="h5" className={style.subTitle}>
            {/*I build things for the web.*/}
            Specialized in creating Responsive, Minimal and Interactive user interfaces.
          </Typography>
          <div className={style.social}>
            {socialIcons.map(d => {
              return <a key={d?.title} href={d?.url} target={d?.target} rel="noopener noreferrer">
                <Tooltip TransitionComponent={Zoom} title={d?.title}>
                  <IconButton aria-label={d?.title}
                              color="primary"
                              size="large"
                              className={style.socialIcon}>
                    <img src={d?.image?.img?.src}
                         alt={d?.image?.img?.src}
                         height={25}
                         width={25}/>
                  </IconButton>
                </Tooltip>
              </a>;
            })}
          </div>
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
          <Image src={MY_PHOTO}
                 alt={MY_NAME}
                 placeholder="blur"
                 blurDataURL={MY_PHOTO}
                 className={style.image}
                 height={150}
                 width={150}/>
        </Grid>
      </Grid>
    </Container>
    {/*</FadeInAnimation>*/}
  </section>;
};

export default FirstSection;
