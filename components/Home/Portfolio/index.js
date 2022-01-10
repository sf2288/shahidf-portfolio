import { ProjectsList, Routes } from "../../../utils";
import style from "./Styles.module.scss";
import {
  Alert,
  Chip,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { TitlePattern } from "../../Common/TitlePattern";
import { SliderComponent } from "./SliderComponent";
import { GridView, InfoOutlined, OpenInNew, Splitscreen } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TYPE_LIST = "LIST";
const TYPE_GRID = "GRID";

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return <motion.div ref={ref}
                     animate={controls}
                     initial="hidden"
                     transition={{ duration: 0.5 }}
                     variants={{
                       visible: { opacity: 1, scale: 1 },
                       hidden: { opacity: 0, scale: 0 }
                     }}>
    {children}
  </motion.div>;
};

const Portfolio = ({ hasLoadedOnce, isPortfolioSectionInView }) => {

  const [view, setView] = React.useState(TYPE_LIST);
  const [projects] = React.useState(ProjectsList);
  // const [selectedProject, setSelectedProject] = React.useState();

  const handleChange = newView => {
    setView(newView);
  };

  const handleScrollInto = (id) => {
    let ele = document.getElementById(id);
    if (ele) {
      ele.scrollIntoView(true);
      ele.style.paddingTop = "4rem";
      // setSelectedProject(id);
    }
  };

  const renderPortfolios = useMemo(() => <>
    {projects.map((d, i) => {
      return <Grid key={i} id={d?.id} item md={view === TYPE_LIST ? 10 : 6} xs={12} className={style.grid}>
        <FadeInWhenVisible>
          <div className={style.portfolioCard}>
            {d?.images && d.images.length ?
              <div className={style.projectImage}>
                <SliderComponent index={i} data={d} view={view} TYPE_GRID={TYPE_GRID}/>
              </div> : null}
            <div className={style.projectInfo}>
              <div className={style.title}>
                <Typography variant="h4" gutterBottom className={style.projectName}>
                  {d?.project_name}
                </Typography>
                <Chip label={d?.type} color="primary" size="small" variant="outlined"/>
              </div>
              {d?.project_url ? <Typography paragraph>
                <a href={d?.project_url} target="_blank" rel="noopener noreferrer">
                  <Chip label={
                    <>
                      {d?.project_url}

                      <IconButton aria-label={d?.project_name} className={style.openInNewButton}>
                        <OpenInNew fontSize="small" classes={{ root: "colorWhite" }}/>
                      </IconButton>
                    </>}
                        color="primary" clickable/>
                </a>
              </Typography> : null}

              {d?.note ? <Alert severity="warning" icon={<InfoOutlined/>}>{d?.note}</Alert> : null}

              <div className={style.descriptionSection}>
                {d?.description ? <>
                  <Typography variant="div" component="h3" className={style.descriptionTitle}>Description:</Typography>

                  <Typography paragraph dangerouslySetInnerHTML={{ __html: d?.description }}/>
                </> : null}
                {d?.tags && d?.tags.length ? <div>
                  {d?.tags.map(d => <Chip key={d} label={d} className={style.tags}/>)}
                </div> : null}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </Grid>;
    })}
  </>, []);

  return <section id={Routes[1].id} className={`bgGray ${style.portfolioSection} commonSecondarySection`}>

    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[1].title}
          </Typography>
          <Typography variant="div" component="h2" className="subTitle">
            {Routes[1].subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Container>
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
              <ListItemButton component="a" onClick={() => handleScrollInto(d?.id)}>
                <ListItemText primary={d?.project_name}/>
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
  </section>;
};
export default Portfolio;