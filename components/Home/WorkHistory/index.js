import { Container, Grid, Typography } from "@mui/material";
import style from "./Styles.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import { Routes } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { WORK_HISTORY_DOT_COLOR } from "../../../utils/constants";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useInView } from "react-intersection-observer";

const WorkHistory = ({ workHistory = [] }) => {
  const [workHistoryRef, isWorkHistoryInView] = useInView();
  const [hasLoadedOnce, setHasWorkHistoryLoadedOnce] = useState(false);

  useEffect(() => {
    if (isWorkHistoryInView && !hasLoadedOnce) {
      setHasWorkHistoryLoadedOnce(isWorkHistoryInView);
    }
  }, [isWorkHistoryInView]);

  const renderTimeline = useMemo(() => <Timeline position="alternate">
    {workHistory.map(d => {
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
          <Typography variant="h6" component="span" className={style.label}>
            {d?.title}
          </Typography>
          <Typography paragraph>
            @{d?.company_name}
          </Typography>
        </TimelineContent>
      </TimelineItem>;
    })}
  </Timeline>, [isWorkHistoryInView]);

  return <section id={Routes[3].id} className={`bgGray ${style.workHistorySection} commonSecondarySection`}
                  ref={workHistoryRef}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h2" className="title">
            <TitlePattern/> {Routes[3].title}
          </Typography>
          <Typography variant="div" component="h3" className="subTitle">
            {Routes[3].subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth="lg" className={style.timeline}>
      <Grid container>
        <Grid item md={9} xs={12} className={style.timelineGrid} data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
          {renderTimeline}
        </Grid>
      </Grid>
    </Container>
  </section>;
};

export default WorkHistory;

