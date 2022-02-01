import React, { useEffect, useState } from "react";
import style from "./Styles.module.scss";
import { IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import { MY_SOCIAL_PROFILES } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sendGoogleAnalyticsEvent } from "../../../utils";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: "15px !important"
  }
}));

const SocialIconsComponent = ({ open = false, hideUpwork = false, hideContactMe = false }) => {
  const [socialProfiles, setSocialProfiles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (hideUpwork) {
      let profiles = MY_SOCIAL_PROFILES.filter(d => d?.name !== "upwork");
      setSocialProfiles(profiles);
    } else setSocialProfiles(MY_SOCIAL_PROFILES);
  }, []);

  return <div className={style.social}>
    {!hideContactMe ? <Typography variant="h6" gutterBottom className={style.hireMeText}>
      Contact me on
    </Typography> : null}
    <div>
      {socialProfiles.map(d => {
        return <a key={d?.title}
                  href={d?.url}
                  target={d?.target}
                  rel="noopener noreferrer"
                  onClick={() => sendGoogleAnalyticsEvent("social_icon_click", { "social_icon_click": d?.name })}>
          <Tooltip open={open} TransitionComponent={Zoom} title={d?.title}
                   classes={{ tooltip: classes.tooltip }}>
            <IconButton aria-label={d?.title}
                        color="primary"
                        size="large"
                        className={style.socialIcon}>
              <LazyLoadImage src={d?.src}
                             alt={d?.title}
                             height={30}
                             width={30}/>
            </IconButton>
          </Tooltip>
        </a>;
      })}
    </div>
  </div>;
};

export default SocialIconsComponent;
