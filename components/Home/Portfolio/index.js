import { Routes, sendGoogleAnalyticsEvent } from "../../../utils";
import style from "./Styles.module.scss";
import {
  Alert,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { TitlePattern } from "../../Common/TitlePattern";
import { GridView, InfoOutlined, Splitscreen } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const SliderComponent = dynamic(() => import("./SliderComponent"));

const TYPE_LIST = "LIST";
const TYPE_GRID = "GRID";

const Portfolio = ({ projects = [] }) => {
  const [portfolioRef, isPortfolioSectionInView] = useInView();
  const [hasLoadedOnce, setHasPortfolioLoadedOnce] = useState(false);

  const [view, setView] = useState(TYPE_LIST);
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    if (isPortfolioSectionInView && !hasLoadedOnce) {
      setHasPortfolioLoadedOnce(isPortfolioSectionInView);
    }
  }, [isPortfolioSectionInView]);

  const handleChange = newView => {
    setView(newView);
  };

  const handleScrollInto = (id) => {
    let ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView(true);
      ele.style.paddingTop = "8rem";
      setSelectedProject(id);
    }
  };

  const renderPortfolios = useMemo(() => projects.map((d, i) => {
    return <Grid key={i} id={d?.id} item sm={10} xs={12} className={style.grid}>
      <div className={style.portfolioCard} data-aos="zoom-in">
        {d?.images && d.images.length ?
          <div className={style.projectImage}>
            <SliderComponent index={i} data={d} view={view} TYPE_GRID={TYPE_GRID}/>
          </div> : null}
        <div className={style.projectInfo}>
          <div className={style.title}>
            {d?.project_url ? <a href={d?.project_url} target="_blank" rel="noopener noreferrer">
              <Typography variant="h4" gutterBottom className={style.projectName}>
                {d?.project_name}
              </Typography>
            </a> : <Typography variant="h4" gutterBottom>
              {d?.project_name}
            </Typography>}
            <Chip label={d?.type} color="primary" size="small" variant="outlined"/>
          </div>

          {d?.note ?
            <Alert severity="warning" icon={<InfoOutlined/>} className={style.alert}>{d?.note}</Alert> : null}

          {d?.description ? <>
            <Typography variant="div" component="h3">Description:</Typography>

            <Typography paragraph>
              <div dangerouslySetInnerHTML={{ __html: d?.description }}/>
            </Typography>
          </> : null}

          <Typography variant="div" component="h3">Tech used and deliverables:</Typography>
          <div className={style.tagsContainer}>
            {d?.tags && d?.tags.length ? d?.tags.map(d => <Chip key={d} label={d}
                                                                className={style.tags}/>) : null}
          </div>
        </div>
      </div>
    </Grid>;
  }), []);

  return <section id={Routes[1].id} ref={portfolioRef}
                  className={`bgGray ${style.portfolioSection} commonSecondarySection`}>

    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h2" className="title">
            <TitlePattern/> {Routes[1].title}
          </Typography>
          <Typography variant="div" component="h3" className="subTitle">
            {Routes[1].subTitle}
          </Typography>
        </Grid>
      </Grid>
      <div className={`${style.projects} ${isPortfolioSectionInView || hasLoadedOnce ? "visible" : "invisible"}`}>

        <nav className={style.nav}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Projects in this Section" classes={{ primary: style.header }}/>
              </ListItemButton>
            </ListItem>
            {projects.map((d) => {
              return <ListItem key={d?.id} disablePadding>
                <ListItemButton component="a" onClick={() => {
                  handleScrollInto(d?.id);
                  sendGoogleAnalyticsEvent("projects_menu_item_click", { "projects_menu_item_click": d?.project_name });
                }}>
                  <ListItemText primary={d?.project_name}
                                className={selectedProject === d?.id ? style.selected : ""}/>
                </ListItemButton>
              </ListItem>;
            })}
          </List>
        </nav>

        <Container maxWidth="lg" className={style.portfolioContainer}>
          <Grid container className={style.portfolioToggle}>
            <Grid item>
              <ToggleButtonGroup color="primary"
                                 value={view}
                                 exclusive>
                <ToggleButton value={TYPE_LIST} aria-label={TYPE_LIST}
                              onClick={() => handleChange(TYPE_LIST)}><Splitscreen/></ToggleButton>
                <ToggleButton value={TYPE_GRID} aria-label={TYPE_GRID}
                              onClick={() => handleChange(TYPE_GRID)}><GridView/></ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {renderPortfolios}
          </Grid>
        </Container>
      </div>
    </Container>
  </section>;
};
export default Portfolio;