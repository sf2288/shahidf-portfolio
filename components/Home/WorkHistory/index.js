import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import React, { useMemo } from "react";
import { Routes } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { WORK_HISTORY, WORK_HISTORY_DOT_COLOR } from "../../../utils/constants";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const WorkHistory = ({ hasLoadedOnce, isAboutMeSectionInView }) => {

  const renderTimelineUnused = useMemo(() => <Timeline position="right">
    {WORK_HISTORY.map((d, index) => {
      const random = Math.floor(Math.random() * WORK_HISTORY_DOT_COLOR.length);
      return <TimelineItem key={d?.id}>
        <TimelineSeparator>
          <TimelineDot color={WORK_HISTORY_DOT_COLOR[random]}/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <div className={style.card}>
            <Typography gutterBottom variant="h6" component="div">
              {d?.company_name}
            </Typography>
            <Typography paragraph color="text.secondary">
              {`${d?.from} - ${d?.to}`}
            </Typography>
          </div>
        </TimelineContent>
      </TimelineItem>;
    })}
  </Timeline>, []);

  const renderTimeline = useMemo(() => <Timeline position="alternate">
    {WORK_HISTORY.map((d, index) => {
      const random = Math.floor(Math.random() * WORK_HISTORY_DOT_COLOR.length);
      return <TimelineItem key={d?.id} className={style.timeLineItemRoot}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {`${d?.from} - ${d?.to}`}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color={WORK_HISTORY_DOT_COLOR[random]}/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent className={style.timeLineContent}>
          <Typography variant="h6" component="span">
            {d?.title}
          </Typography>
          <Typography paragraph>
            @{d?.company_name}
          </Typography>
        </TimelineContent>
      </TimelineItem>;
    })}
  </Timeline>, []);

  return <section id={Routes[3].id} className={`bgGray ${style.workHistorySection} commonSecondarySection`}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[3].title}
          </Typography>
          <Typography variant="div" component="h2" className="subTitle">
            Working Period
          </Typography>
        </Grid>
      </Grid>
    </Container>

    {/*<Container maxWidth="lg" className={style.content}>
      <Grid container>
        <Grid item xs={12}>
          <FadeInAnimation>
            <div className={style.myInfo}>
              With 4+ years experience as a professional Front-End Web developer, I have acquired the skills and
              knowledge necessary to make your project a success by using the Best Practices and Tools.
            </div>
          </FadeInAnimation>
        </Grid>
      </Grid>
    </Container>*/}
    <Container maxWidth="lg" className={style.timeline}>
      <Grid container>
        <Grid item md={9} xs={12} className={style.timelineGrid}>
          {renderTimeline}
        </Grid>
      </Grid>
    </Container>
  </section>;
};

export default WorkHistory;

