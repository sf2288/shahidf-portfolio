import React, { useState } from "react";
import { Button, Container, Fab, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import { Routes, sendGoogleAnalyticsEvent } from "../../utils";
import { Menu, MonetizationOn } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { MY_SHORT_NAME, MY_SOCIAL_PROFILES } from "../../utils/constants";

const Drawer = dynamic(() => import("./../Drawer"));

const Header = () => {
  const router = useRouter();
  const { asPath } = router;
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setDrawerState(!drawerState);
  };

  const handleChangeRoute = (route) => {
    if (route === "/") {
      window.scroll({
        top: 0,
        left: 0
      });
    }
    router.replace(route);
    if (drawerState) {
      setDrawerState(!drawerState);
      sendGoogleAnalyticsEvent("drawer_menu_item_click", { "drawer_menu_item_click": route });
    } else {
      sendGoogleAnalyticsEvent("header_menu_item_click", { "header_menu_item_click": route });
    }
  };

  const headerList = () => <ul className={style.menu}>
    {Routes.map(d => <li key={d?.route} onClick={() => handleChangeRoute(d?.route)}>
      <a href={d?.route} className={`/${d?.route}` === asPath ? style.selected : ""} rel="noopener noreferrer">
        {d?.title}
      </a>
    </li>)}
  </ul>;

  return <nav id="nav_bar" className={style.nav}>
    <Container>
      <Grid container>
        <Grid item xs={12} className={style.container}>
          <Typography variant="h2"
                      className={style.logo}
                      onClick={() => handleChangeRoute("/")}>
            {MY_SHORT_NAME}
          </Typography>
          {headerList()}
          <Button variant="contained"
                  className={style.btnHireMe}
                  href={MY_SOCIAL_PROFILES[0]?.url}
                  target={MY_SOCIAL_PROFILES[0]?.target}
                  rel="noopener noreferrer"
                  onClick={() => sendGoogleAnalyticsEvent("header_hire_me_on_upwork_click", { header_hire_me_on_upwork_click: MY_SOCIAL_PROFILES[0]?.url })}>
            Hire Me! <MonetizationOn className={style.icon}/>
          </Button>
        </Grid>
      </Grid>
    </Container>

    <Fab color="primary" size="small" className={style.menuIcon} aria-label="hamburg"
         onClick={(e) => {
           toggleDrawer(e);
           sendGoogleAnalyticsEvent("header_drawer_menu_click", { header_drawer_menu_click: "open" });
         }}>
      <Menu/>
    </Fab>
    <div className={style.swipeableDrawerContainer}>
      <Drawer anchor="bottom"
              asPath={asPath}
              drawerState={drawerState}
              toggleDrawer={toggleDrawer}
              handleChangeRoute={handleChangeRoute}/>
    </div>
  </nav>;
};

export default Header;
