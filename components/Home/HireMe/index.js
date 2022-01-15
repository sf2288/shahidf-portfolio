import style from "./Styles.module.scss";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { HIRE_ME_ID } from "../../../utils";

const SocialIconsComponent = dynamic(() => import("../../Common/SocialIconsComponent"));

const HireMe = () => {

  return <section>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={10} xs={12} className={style.grid} id={HIRE_ME_ID?.id}>
          <div className={style.hireMe}>
            <div className={style.textCenter}>
              <Typography variant="h4" gutterBottom className={style.projectName}>
                Let's build something great together!
              </Typography>
              <Button className={style.hireMeButton}>Hire Me On</Button>
              {/*<Typography variant="h4" gutterBottom className={style.hireMeText}>
                <div className={style.or}>OR</div>
                <div>Hire Me On</div>
              </Typography>*/}
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