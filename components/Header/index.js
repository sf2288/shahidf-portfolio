import React, { useState } from "react";
import { Container, Grid, IconButton } from "@mui/material";
import style from "./Styles.module.scss";
import { Routes } from "../../utils";
import { Menu } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { MY_NAME } from "../../utils/constants";
import Image from "next/image";

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

  /*const handleScrollInto = (id) => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView(true);
    }
    setSelectedSection(id);
  };*/

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
    }
  };

  const headerList = () => <ul className={style.menu}>
    {Routes.map((d) => <li key={d?.route} onClick={() => handleChangeRoute(d?.route)}>
      <a href={d?.route} className={`/${d?.route}` === asPath ? style.selected : ""}>
        {d?.title}
      </a>
    </li>)}
  </ul>;

  // return <nav id="nav_bar" className={`${style.nav} ${isPageScrolled ? `bgWhite ${style.shadow}` : ""}`}>
  return <nav id="nav_bar" className={style.nav}>
    <Container>
      <Grid container>
        <Grid item xs={12} className={style.container}>
          {/*<a href={Routes[0]?.route} onClick={() => handleChangeRoute(Routes[0]?.route)}>
            <Typography variant="h4" color="primary" className={style.logo}>
              {MY_NAME}
            </Typography>
          </a>*/}
          <span className={style.logo} onClick={() => handleChangeRoute("/")}>
          <Image src={"/assets/my_short_name.webp"}
                 alt={MY_NAME}
                 placeholder="blur"
                 blurDataURL={"/assets/my_short_name.webp"}
                 height={37}
                 width={133}/>
                 </span>
          {/*<Typography variant="h2" className={style.logo}>{MY_SHORT_NAME}</Typography>*/}
          <IconButton aria-label="hamburg"
                      color="primary"
                      size="large"
                      className={style.menuIcon}
                      onClick={toggleDrawer}>
            <Menu/>
          </IconButton>
          {headerList()}
        </Grid>
      </Grid>
    </Container>

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
