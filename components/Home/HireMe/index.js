import style from "./Styles.module.scss";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { MY_SOCIAL_PROFILES } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SocialIconsComponent = dynamic(() => import("../../Common/SocialIconsComponent"));

const HireMe = () => {

  return <section>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={10} xs={12} className={style.grid}>{/*id={HIRE_ME_ID?.id}*/}
          <div className={style.hireMe}>
            <div className={style.textCenter}>
              <Typography variant="h4" gutterBottom className={style.projectName}>
                Let's build something great together!
              </Typography>
              <Button className={style.hireMeButton} href={MY_SOCIAL_PROFILES[0]?.url}
                      target={MY_SOCIAL_PROFILES[0]?.target} rel="noopener noreferrer">
                Hire Me On <LazyLoadImage src={MY_SOCIAL_PROFILES[0]?.src}
                                          alt={MY_SOCIAL_PROFILES[0]?.title}
                                          className={style.icon}
                                          height={25}
                                          width={25}/>
              </Button>
              <div className={style.hireMeSocialButton}>
                <SocialIconsComponent open={true} hideUpwork={true}/>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </section>;
};
export default HireMe;