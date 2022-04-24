import style from "./Styles.module.scss";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { MY_SOCIAL_PROFILES } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sendGoogleAnalyticsEvent } from "../../../utils";

const SocialIconsComponent = dynamic(() =>
  import("../../Common/SocialIconsComponent")
);

const HireMe = () => {
  const filterItems = ["upwork", "linkedin"];
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={10} xs={12} className={style.grid}>
            {/*id={HIRE_ME_ID?.id}*/}
            <div className={style.hireMe}>
              <div className={style.textCenter}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={style.projectName}
                >
                  Let's build something great together!
                </Typography>
                <Button
                  className={style.hireMeButton}
                  href={MY_SOCIAL_PROFILES[0]?.url}
                  target={MY_SOCIAL_PROFILES[0]?.target}
                  rel="noopener noreferrer"
                  onClick={() =>
                    sendGoogleAnalyticsEvent(
                      "section_hire_me_on_upwork_click",
                      {
                        section_hire_me_on_upwork_click:
                          MY_SOCIAL_PROFILES[0]?.url,
                      }
                    )
                  }
                >
                  Hire Me On Upwork!
                  <LazyLoadImage
                    src={MY_SOCIAL_PROFILES[0]?.src}
                    alt={MY_SOCIAL_PROFILES[0]?.title}
                    className={style.icon}
                    height={25}
                    width={25}
                  />
                </Button>
                {filterItems && !filterItems.length ? (
                  <div className={style.hireMeSocialButton}>
                    <SocialIconsComponent
                      open={true}
                      filterItems={filterItems}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default HireMe;
