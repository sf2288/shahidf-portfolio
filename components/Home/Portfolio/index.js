import { Routes } from "../../../utils";
import style from "./Styles.module.scss";
import { Chip, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { TitlePattern } from "../../Common/TitlePattern";
import { SliderComponent } from "./SliderComponent";
import IconButton from "@mui/material/IconButton";
import { GridView, OpenInNew, Splitscreen } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

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

const Portfolio = ({ isPortfolioSectionInView, hasLoadedOnce }) => {
  const projects = [
    {
      id: 1,
      project_name: "Sentient",
      description: "Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi involuta aperiri, Quae fuerit causa, mox videro; interea hoc epicurus in ea quid malum, sensu.",
      tags: ["HTML", "CSS", "Javascript", "React"],
      url: "https://paid.com/",
      images:
        [
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89cae73e2d745093e2b94_gallery-image-02.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f606e845875e3136f8ccc_floria-gallery-image-01.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898a09285521e3d7bceec_floria-gallery-image-04.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898c32c2e014b669dbb85_floria-gallery-image-06.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89cae73e2d745093e2b94_gallery-image-02.jpg"]
    },
    {
      id: 2,
      project_name: "Paid",
      description: "Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi involuta aperiri, Quae fuerit causa, mox videro; interea hoc epicurus in ea quid malum, sensu.",
      tags: ["HTML", "CSS", "Javascript", "React"],
      url: "https://paid.com/",
      images:
        [
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898a09285521e3d7bceec_floria-gallery-image-04.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89cae73e2d745093e2b94_gallery-image-02.jpg",
          "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89c5c34a8ea4cef8cce57_gallery-image-06.jpg"]
    },
    {
      id: 3,
      project_name: "Luxembourg Expats",
      description: "Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi involuta aperiri, Quae fuerit causa, mox videro; interea hoc epicurus in ea quid malum, sensu.",
      tags: ["HTML", "CSS", "Javascript", "React"],
      url: "https://paid.com/",
      images: [
        "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898c32c2e014b669dbb85_floria-gallery-image-06.jpg",
        "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f60de86b4691c9fb74229_gallery-image-01.jpg"
      ],
      hidden: true
    },
    {
      id: 4,
      project_name: "Pinegray",
      description: "Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi involuta aperiri, Quae fuerit causa, mox videro; interea hoc epicurus in ea quid malum, sensu.",
      tags: ["HTML", "CSS", "Javascript", "React"],
      url: "https://paid.com/",
      images: [
        "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f60de86b4691c9fb74229_gallery-image-01.jpg",
        "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898a09285521e3d7bceec_floria-gallery-image-04.jpg"
      ],
      hidden: true
    }
  ].filter(d => !d?.hidden);
  const [view, setView] = React.useState(TYPE_LIST);
  // const [selectedProject, setSelectedProject] = React.useState();

  const handleChange = (event, newView) => {
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
            <div className={style.projectImage}>
              <SliderComponent index={i} data={d} view={view} TYPE_GRID={TYPE_GRID}/>
            </div>
            <div className={style.projectInfo}>
              <Typography variant="h4" gutterBottom>
                {d?.project_name}
              </Typography>

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

              <Typography paragraph>
                {d?.description}
              </Typography>
              {d?.tags && d?.tags.length ? <div>
                {d?.tags.map(d => <Chip key={d} label={d} className={style.tags}/>)}
              </div> : null}
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
            Each project is a unique piece of development
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <div className={style.projects}>
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
        <div className={isPortfolioSectionInView || hasLoadedOnce ? "visible" : "invisible"}>
          <Grid container className={style.portfolioToggle}>
            <Grid item>
              <ToggleButtonGroup color="primary"
                                 value={view}
                                 exclusive
                                 onChange={handleChange}>
                <ToggleButton value={TYPE_LIST} aria-label={TYPE_LIST}><Splitscreen/></ToggleButton>
                <ToggleButton value={TYPE_GRID} aria-label={TYPE_GRID}><GridView/></ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          {/*<Grid container className={style.portfolioMobileNavToggle}>
            {projects.map((d) => {
              return <Grid item key={d?.id}>
                <Chip label={d?.project_name}
                      classes={{ root: d?.id === selectedProject ? style.selected : style.nonSelected }}
                      onClick={() => handleScrollInto(d?.id)}
                      onDelete={() => handleScrollInto(d?.id)}
                      deleteIcon={d?.id === selectedProject ? <CheckCircle classes={{ root: "colorWhite" }}/> :
                        <CheckCircleOutline classes={{ root: "colorWhite" }}/>}/>
              </Grid>;
            })}
          </Grid>*/}

          <Grid container spacing={3}>
            {renderPortfolios}

            {/*    {images.map((d, i) => {
          return <Grid key={i} item md={4} sm={6} xs={12}>
            <Card className={style.portfolioCard}>
              <div className={style.hoverContainer}>
                <ArrowUpward className={style.icon} fontSize="large"/>
                <div className={style.textContent}>
                  <Typography variant="h6" className={style.title}>
                    Project {i + 1}
                  </Typography>
                  <Typography paragraph color="secondary">
                    Each project is a unique piece of development
                  </Typography>
                </div>
              </div>
              <Image layout="responsive"
                     width={5}
                     height={5}
                     objectFit="cover"
                     src="/assets/shahid.png"
                     alt="green iguana"
              />
            </Card>
          </Grid>;
        })}*/}

          </Grid>
        </div>
      </Container>
    </div>
  </section>;
};
export default Portfolio;