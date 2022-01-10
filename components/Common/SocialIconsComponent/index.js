import React from "react";
import style from "./Styles.module.scss";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { MY_SOCIAL_PROFILES } from "../../../utils/constants";

const SocialIconsComponent = ({ open = false }) => {

  return <div className={style.social}>
    {MY_SOCIAL_PROFILES.map(d => {
      return <a key={d?.title} href={d?.url} target={d?.target} rel="noopener noreferrer">
        <Tooltip open={open} TransitionComponent={Zoom} title={d?.title}>
          <IconButton aria-label={d?.title}
                      color="primary"
                      size="large"
                      className={style.socialIcon}>
            <img src={d?.src}
                 alt={d?.title}
                 height={30}
                 width={30}/>
          </IconButton>
        </Tooltip>
      </a>;
    })}
  </div>;
};

export default SocialIconsComponent;
