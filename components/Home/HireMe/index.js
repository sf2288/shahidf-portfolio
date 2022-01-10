import style from "./Styles.module.scss";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { Routes } from "../../../utils";

const SocialIconsComponent = dynamic(() => import("../../Common/SocialIconsComponent"));

const HireMe = () => {

  const handleScrollInto = (id) => {
    let ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView(true);
    }
  };

  return <section>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={10} xs={12} className={style.grid}>
          <div className={style.hireMe}>
            <div className={style.textCenter}>
              <Typography variant="h4" gutterBottom className={style.projectName}>
                Let's build something great together!
              </Typography>
              <Button variant="contained" className={style.hireMeButton}
                      onClick={() => handleScrollInto(Routes[5].id)}>Hire Me</Button>
              <div className={style.hireMeSocialButton}>
                <SocialIconsComponent open={true}/>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </section>;
};
export default HireMe;