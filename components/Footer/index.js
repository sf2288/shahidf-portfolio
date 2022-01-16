import { Routes, sendGoogleAnalyticsEvent } from "../../utils";
import style from "./Styles.module.scss";
import {
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Slider,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Clear, Email, LocationOn, Send, WhatsApp } from "@mui/icons-material";
import {
  CONTACT_MESSAGE,
  COUNTRY,
  EMAIL_ID,
  INITIAL_VALUE_BUDGET,
  LATITUDE,
  LONGITUDE,
  MAX_BUDGET,
  MIN_BUDGET,
  MY_NAME,
  MY_SOCIAL_PROFILES,
  PHONE_NUMBER,
  REGEX_ONLY_NUMBERS
} from "../../utils/constants";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { TitlePattern } from "../Common/TitlePattern";

const MapComponent = dynamic(() => import("./../Common/MapComponent"));

const minDistance = 10;

const Footer = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState([MIN_BUDGET, INITIAL_VALUE_BUDGET]);
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const handleNameChange = e => {
    setName(e?.target?.value);
  };

  const handleEmailChange = e => {
    setEmail(e?.target?.value);
  };

  const handlePhoneChange = e => {
    const value = e?.target?.value;
    if (value === "" || REGEX_ONLY_NUMBERS.test(value)) {
      setPhone(value);
    }
  };

  const handleMessageChange = e => {
    setMessage(e?.target?.value);
  };

  const handleNameClear = () => {
    setName("");
  };

  const handleEmailClear = () => {
    setEmail("");
  };

  const handlePhoneClear = () => {
    setPhone("");
  };

  const handleMessageClear = () => {
    setMessage("");
  };

  const handleResetBudget = () => {
    setBudget([MIN_BUDGET, INITIAL_VALUE_BUDGET]);
  };

  const renderMap = useMemo(() => <MapComponent zoom={14}
                                                visible={true}
                                                containerStyle={fullScreen ? { minHeight: "400px !important" } : {}}
                                                coordinates={{
                                                  lat: LATITUDE,
                                                  lng: LONGITUDE
                                                }}
                                                address={COUNTRY}/>, []);


  const handleBudgetSelection = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setBudget([Math.min(newValue[0], budget[1] - minDistance), budget[1]]);
    } else {
      setBudget([budget[0], Math.max(newValue[1], budget[0] + minDistance)]);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = { name, email, phone, min_budget: `$${budget[0]}`, max_budget: `$${budget[1]}`, message };
    setIsLoading(true);
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(r => r?.json()).then(r => {
      setIsLoading(false);
      setEmailMessage(r?.data?.message);
      handleNameClear();
      handlePhoneClear();
      handleEmailClear();
      handleResetBudget();
      handleMessageClear();
      sendGoogleAnalyticsEvent("footer_contact_send_message", { "footer_contact_send_message": email });
    });
  };

  return <section id={Routes[5].id} className={`bgGray ${style.contacts} commonSecondarySection`}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[5].title}
          </Typography>
          <Typography variant="div" component="h2" className="subTitle">
            {Routes[5].subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="lg" className={style.contactsInfoGroup}>
      <Grid container className={style.contactsContainer}>
        <Grid item md={4} sm={12} className={style.contactInfo}>
          <div className={style.icon}>
            <IconButton aria-label="Location"
                        color="primary"
                        size="large"
                        className="circle-icons">
              <LocationOn/>
            </IconButton>
          </div>
          <div className={style.detail}>
            <Typography variant="h6" component="div">
              Location
            </Typography>
            <Typography paragraph>
              {COUNTRY}
            </Typography>
          </div>
        </Grid>
        <Grid item md={4} sm={12} className={style.contactInfo}>
          <div className={style.icon}>
            <a href={MY_SOCIAL_PROFILES[3].url} target={MY_SOCIAL_PROFILES[3].target} rel="noopener noreferrer"
               onClick={() => sendGoogleAnalyticsEvent("footer_contact_phone_icon_click", { "footer_contact_phone_icon_click": true })}>
              <IconButton aria-label="Phone"
                          color="primary"
                          size="large"
                          className="circle-icons">
                <WhatsApp/>
              </IconButton>
            </a>
          </div>
          <div className={style.detail}>
            <a href={MY_SOCIAL_PROFILES[3].url} target={MY_SOCIAL_PROFILES[3].target} rel="noopener noreferrer"
               onClick={() => sendGoogleAnalyticsEvent("footer_contact_phone_click", { "footer_contact_phone_click": true })}>
              <Typography variant="h6" component="div">
                Phone
              </Typography>
              <Typography paragraph>
                {PHONE_NUMBER}
              </Typography>
            </a>
          </div>
        </Grid>
        <Grid item md={4} sm={12} className={style.contactInfo}>
          <div className={style.icon}>
            <a href={`mailto:${EMAIL_ID}`} rel="noopener noreferrer"
               onClick={() => sendGoogleAnalyticsEvent("footer_contact_email_icon_click", { "footer_contact_email_icon_click": true })}>
              <IconButton aria-label="Email"
                          color="primary"
                          size="large"
                          className="circle-icons">
                <Email/>
              </IconButton>
            </a>
          </div>
          <div className={style.detail}>
            <a href={`mailto:${EMAIL_ID}`} rel="noopener noreferrer"
               onClick={() => sendGoogleAnalyticsEvent("footer_contact_email_click", { "footer_contact_email_click": true })}>
              <Typography variant="h6" component="div">
                Email
              </Typography>
              <Typography paragraph>
                {EMAIL_ID}
              </Typography>
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="lg" className={style.form}>
      <Grid container spacing={5}>
        <Grid item md={6} sm={12} xs={12}>
          <form onSubmit={sendEmail}>
            <Grid container>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Input placeholder="+44 7400 123456"
                       value={phone}
                       type="tel"
                       onChange={handlePhoneChange}
                       className={style.input}
                       endAdornment={
                         phone ? <InputAdornment position="end" onClick={handlePhoneClear}>
                           <IconButton aria-label="Clear">
                             <Clear/>
                           </IconButton>
                         </InputAdornment> : null}/>
              </Grid>
              <Grid item xs={12}>
                Project budget
                <Grid container className={style.budgetList}>
                  <Slider getAriaLabel={() => "Budget"}
                          value={budget}
                          min={MIN_BUDGET}
                          max={MAX_BUDGET}
                          onChange={handleBudgetSelection}
                          valueLabelDisplay="on"
                          disableSwap/>

                  <Typography variant="h6">
                    Min : ${budget[0]}
                  </Typography>
                  <Typography variant="h6" className={style.maxBudget}>
                    Max : ${budget[1]}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Input rows={5}
                       multiline
                       required={true}
                       type="textarea"
                       value={message}
                       onChange={handleMessageChange}
                       className={style.input}
                       endAdornment={
                         message ? <InputAdornment position="end" onClick={handleMessageClear}>
                           <IconButton aria-label="Clear">
                             <Clear/>
                           </IconButton>
                         </InputAdornment> : null}
                       placeholder={CONTACT_MESSAGE}/>
              </Grid>
              <Grid item sm={12} className={style.footerCTA}>
                <div className={style.submitButtonContainer}>
                  <Button type="submit" variant="contained" className={style.submitButton} disabled={isLoading}>
                    Send Message <Send className={style.icon} fontSize="large"/>
                  </Button>
                  {isLoading ? <CircularProgress size="2rem"/> : null}
                </div>

                <Typography variant="h6" className={emailMessage ? "visible" : "invisible"}>
                  {emailMessage}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={style.mapContainer}>
          <Card>
            {renderMap}
          </Card>
        </Grid>
      </Grid>
    </Container>
    <Container maxWidth="lg">
      <Typography variant="h6" className={style.subFooter}>
        Made with<span className={style.love}>&nbsp;❤&nbsp;</span>by <b>{MY_NAME}</b>
        &nbsp;-&nbsp;&copy; Copyright {new Date().getFullYear()}
      </Typography>
    </Container>
  </section>;
};
export default Footer;