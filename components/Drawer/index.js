import React from "react";
import { List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import { Routes } from "../../utils";
import style from "../Header/Styles.module.scss";

const Drawer = ({ drawerState = false, asPath, handleChangeRoute, toggleDrawer, anchor = "bottom" }) => {

  const drawerList = () => Routes.map((d) => (
    <ListItem disablePadding
              key={d?.route}
              onClick={() => handleChangeRoute(d?.route)}
              className={`/${d?.route}` === asPath ? style.selected : ""}>
      <ListItemButton>
        <ListItemText primary={d?.title}/>
      </ListItemButton>
    </ListItem>
  ));

  return <SwipeableDrawer anchor={anchor}
                          open={drawerState}
                          onClose={toggleDrawer}
                          onOpen={toggleDrawer}
                          classes={{ paper: style.drawer }}>
    <nav>
      <List>
        {drawerList()}
      </List>
    </nav>

  </SwipeableDrawer>;
};
export default Drawer;