import { Routes, sendGoogleAnalyticsEvent } from "../../utils";
import style from "./Styles.module.scss";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Email, LocationOn } from "@mui/icons-material";
import {
  COUNTRY,
  EMAIL_ID,
  MY_NAME,
  MY_SOCIAL_PROFILES,
} from "../../utils/constants";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { TitlePattern } from "../Common/TitlePattern";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FormComponent = dynamic(() => import("./FormComponent"));

const Footer = () => {
  const [contactRef, isContactInView] = useInView();
  const [hasLoadedOnce, setHasContactLoadedOnce] = useState(false);

  useEffect(() => {
    if (isContactInView && !hasLoadedOnce) {
      setHasContactLoadedOnce(isContactInView);
    }
  }, [isContactInView]);

  const renderForm = useMemo(() => {
    if (isContactInView || hasLoadedOnce) {
      return <FormComponent />;
    }
  }, [isContactInView]);

  return (
    <section
      id={Routes[5].id}
      className={`${style.contacts} bgGray commonSecondarySection`}
      ref={contactRef}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item>
            <Typography variant="div" component="h2" className="title">
              <TitlePattern /> {Routes[5].title}
            </Typography>
            <Typography variant="div" component="h3" className="subTitle">
              {Routes[5].subTitle}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={style.contactsInfoGroup}>
        <Grid container className={style.contactsContainer}>
          <Grid item md={4} sm={12} className={style.contactInfo}>
            <div className={style.icon}>
              <IconButton
                aria-label="Location"
                color="primary"
                size="large"
                className="circle-icons"
              >
                <LocationOn />
              </IconButton>
            </div>
            <div className={style.detail}>
              <Typography variant="h6" component="div">
                Location
              </Typography>
              <Typography paragraph>{COUNTRY}</Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={12} className={style.contactInfo}>
            <div className={style.icon}>
              <a
                href={MY_SOCIAL_PROFILES[0].url}
                target={MY_SOCIAL_PROFILES[0].target}
                rel="noopener noreferrer"
                onClick={() =>
                  sendGoogleAnalyticsEvent(
                    "footer_contact_hire_me_on_upwork_icon_click",
                    {
                      footer_contact_hire_me_on_upwork_icon_click: true,
                    }
                  )
                }
              >
                <IconButton
                  aria-label="Upwork"
                  color="primary"
                  size="large"
                  className="circle-icons"
                >
                  <LazyLoadImage
                    src={MY_SOCIAL_PROFILES[0]?.src}
                    alt={MY_SOCIAL_PROFILES[0]?.title}
                    height={25}
                    width={25}
                  />
                </IconButton>
              </a>
            </div>
            <div className={style.detail}>
              <a
                href={MY_SOCIAL_PROFILES[0].url}
                target={MY_SOCIAL_PROFILES[0].target}
                rel="noopener noreferrer"
                onClick={() =>
                  sendGoogleAnalyticsEvent(
                    "footer_contact_hire_me_on_upwork_click",
                    {
                      footer_contact_hire_me_on_upwork_click: true,
                    }
                  )
                }
              >
                <Typography variant="h6" component="div">
                  Upwork
                </Typography>
                <Typography paragraph>
                  <a
                    href={MY_SOCIAL_PROFILES[0]?.url}
                    target={MY_SOCIAL_PROFILES[0]?.target}
                    rel="noopener noreferrer"
                  >
                    Hire me on Upwork!
                  </a>
                </Typography>
              </a>
            </div>
          </Grid>
          <Grid item md={4} sm={12} className={style.contactInfo}>
            <div className={style.icon}>
              <a
                href={`mailto:${EMAIL_ID}`}
                rel="noopener noreferrer"
                onClick={() =>
                  sendGoogleAnalyticsEvent("footer_contact_email_icon_click", {
                    footer_contact_email_icon_click: true,
                  })
                }
              >
                <IconButton
                  aria-label="Email"
                  color="primary"
                  size="large"
                  className="circle-icons"
                >
                  <Email />
                </IconButton>
              </a>
            </div>
            <div className={style.detail}>
              <a
                href={`mailto:${EMAIL_ID}`}
                rel="noopener noreferrer"
                onClick={() =>
                  sendGoogleAnalyticsEvent("footer_contact_email_click", {
                    footer_contact_email_click: true,
                  })
                }
              >
                <Typography variant="h6" component="div">
                  Email
                </Typography>
                <Typography paragraph>{EMAIL_ID}</Typography>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      {renderForm}
      <Container maxWidth="lg">
        <Typography variant="h6" className={style.subFooter}>
          Made with<span className={style.love}>&nbsp;❤&nbsp;</span>by{" "}
          <b>{MY_NAME}</b>
          &nbsp;-&nbsp;&copy; Copyright {new Date().getFullYear()}
        </Typography>
      </Container>
    </section>
  );
};
export default Footer;
