import style from "./Styles.module.scss";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Typography
} from "@mui/material";
import { Routes, sendGoogleAnalyticsEvent, WEBSITE_REPORT } from "../../../utils";
import { TitlePattern } from "../../Common/TitlePattern";
import {
  Bolt,
  Clear,
  InstallMobile,
  Recommend,
  ScreenRotation,
  ScreenShare,
  Speed,
  Star,
  Timeline
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import Snackbar from "@mui/material/Snackbar";
import { EMAIL_ID } from "../../../utils/constants";

const REPORT_ITEMS = [
  {
    icon: <Bolt/>,
    label: "Speed"
  },
  {
    icon: <Recommend/>,
    label: "Accessibility"
  },
  {
    icon: <Star/>,
    label: "Best Practices"
  },
  {
    icon: <ScreenRotation/>,
    label: "Responsive Design"
  },
  {
    icon: <ScreenShare/>,
    label: "SEO"
  },
  {
    icon: <InstallMobile/>,
    label: "Progressive Web App (PWA)"
  }
];

const WebsiteReport = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [websiteReportRef, isWebsiteReportInView] = useInView();
  const [hasLoadedOnce, setWebsiteReportLoadedOnce] = useState(false);

  useEffect(() => {
    if (isWebsiteReportInView && !hasLoadedOnce) {
      setWebsiteReportLoadedOnce(isWebsiteReportInView);
    }
  }, [isWebsiteReportInView]);


  const handleWebsite = e => {
    setWebsite(e?.target?.value);
  };

  const handleNameChange = e => {
    setName(e?.target?.value);
  };

  const handleEmailChange = e => {
    setEmail(e?.target?.value);
  };

  const handleWebsiteClear = () => {
    setWebsite("");
  };

  const handleNameClear = () => {
    setName("");
  };

  const handleEmailClear = () => {
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, website };
    if (email && email !== EMAIL_ID) {
      setIsLoading(true);
      await fetch("/api/website-report", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(r => r?.json()).then(r => {
        setIsLoading(false);
        setEmailMessage(r?.data?.message);
        setShowMessage(true);
        handleNameClear();
        handleEmailClear();
        handleWebsiteClear();
        sendGoogleAnalyticsEvent("generate_website_report", { "generate_website_report": website });
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      });
    } else {
      setEmailMessage("Please use your work/personal email id.");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  return <section id={Routes[5].id} className={`bgGray commonSecondarySection ${style.websiteReportSection}`}
                  ref={websiteReportRef}>
    {emailMessage ? <Snackbar anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
                              open={showMessage}
                              autoHideDuration={6000}
                              message={emailMessage}/> : null}
    {/*<div className={style.checkPerformance} onClick={() => handleScrollInto(Routes[5].id)}>
      <Card className={style.card}>
        <CardContent className={style.cardContent}>
          <LazyLoadImage src={`/assets/gauge.svg`}
                         alt={WEBSITE_REPORT?.title}
            // className={style.gauge}
                         height={70}
                         width={80}/>
             <IconButton className={style.gauge}
                      size="large">
            <Speed fontSize="large"/>
          </IconButton>
          <Typography component="p">
            Get your <span>FREE</span> site performance.
          </Typography>
        </CardContent>
      </Card>
    </div>*/}

    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h2" className="title colorWhite">
            <TitlePattern className={style.titlePattern}/> {WEBSITE_REPORT.title}
          </Typography>
          <Typography variant="div" component="h3" className="subTitle">
            {WEBSITE_REPORT.subTitle} <IconButton className={style.gauge}
                                                  size="large">
            <Speed fontSize="large"/>
          </IconButton>
          </Typography>

          <Typography paragraph className={style.textMessage}>
            Let me review your existing site before you commit to working with me on an awesome new one.
            In your FREE site analysis, you will understand exactly where your site can improve.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={style.websiteReportContainer} data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back">
        <Grid item md={6} xs={12}>
          <Container className={style.reportItemsContainer}>
            <Grid container>
              {REPORT_ITEMS?.map(d => {
                return <Grid item lg={6} xs={6} key={d?.label}>
                  <div className={style.reportItems}>
                    <IconButton aria-label="Clear" size="large" className={style.icon} color="primary">
                      {d?.icon}
                    </IconButton>
                    <Typography variant="div" component="h3" className={style.label}>
                      {d?.label}
                    </Typography>
                  </div>
                </Grid>;
              })}
            </Grid>
          </Container>
        </Grid>
        <Grid item md={6} xs={12} className={style.formContainer}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    Your Website URL
                    <Input placeholder="www.mywebsite.com"
                           value={website}
                           required={true}
                           onChange={handleWebsite}
                           className={style.input}
                           endAdornment={
                             website ? <InputAdornment position="end" onClick={handleWebsiteClear}>
                               <IconButton aria-label="Clear">
                                 <Clear/>
                               </IconButton>
                             </InputAdornment> : null}/>
                  </Grid>
                  <Grid item xs={12}>
                    Name
                    <Input placeholder="Dave Scott"
                           value={name}
                           required={true}
                           onChange={handleNameChange}
                           className={style.input}
                           endAdornment={
                             name ? <InputAdornment position="end" onClick={handleNameClear}>
                               <IconButton aria-label="Clear">
                                 <Clear/>
                               </IconButton>
                             </InputAdornment> : null}/>
                  </Grid>
                  <Grid item xs={12}>
                    Email
                    <Input placeholder="dave@example.com"
                           value={email}
                           required={true}
                           type="email"
                           onChange={handleEmailChange}
                           className={style.input}
                           endAdornment={
                             email ? <InputAdornment position="end" onClick={handleEmailClear}>
                               <IconButton aria-label="Clear">
                                 <Clear/>
                               </IconButton>
                             </InputAdornment> : null}/>
                  </Grid>
                  <Grid item sm={12} className={style.sendReport}>
                    <div className={style.submitButtonContainer}>
                      <Button type="submit" variant="contained" className={style.submitButton} disabled={isLoading}>
                        Get Report <Timeline fontSize="large" className={style.icon}/>
                      </Button>
                      {isLoading ? <CircularProgress size="2rem"/> : null}
                    </div>

                    {/*{emailMessage ? <Typography paragraph className={style.message} color="primary">
                      {emailMessage}
                    </Typography> : null}*/}

                    <Typography paragraph>
                      <b>Note:</b> I'll be sending you the report. Keep an eye on your email (and spam if we haven't
                      chatted in the past).
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </section>;
};
export default WebsiteReport;