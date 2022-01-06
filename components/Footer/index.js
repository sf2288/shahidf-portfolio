import { Routes } from "../../utils";
import style from "./Styles.module.scss";
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Clear, Email, LocationOn, Send, WhatsApp } from "@mui/icons-material";
import {
  COUNTRY,
  EMAIL_ID,
  LATITUDE,
  LONGITUDE,
  MAX_BUDGET,
  MIN_BUDGET,
  MY_NAME,
  MY_SOCIAL_PROFILES,
  PHONE_NUMBER
} from "../../utils/constants";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { TitlePattern } from "../Common/TitlePattern";
import Slider from "@mui/material/Slider";

const MapComponent = dynamic(() => import("./../Common/MapComponent"));

const minDistance = 10;

const Footer = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState([MIN_BUDGET, 5000]);
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNameChange = e => {
    setName(e?.target?.value);
  };

  const handleEmailChange = e => {
    setEmail(e?.target?.value);
  };

  const handlePhoneChange = e => {
    setPhone(e?.target?.value);
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

  return <section id={Routes[4].id} className={`${style.contacts} commonSecondarySection`}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <Typography variant="div" component="h1" className="title">
            <TitlePattern/> {Routes[4].title}
          </Typography>
          <Typography variant="div" component="h2" className="subTitle">
            Let’s create something amazing together
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
            <a href={MY_SOCIAL_PROFILES[3].url} target={MY_SOCIAL_PROFILES[3].target}>
              <IconButton aria-label="Phone"
                          color="primary"
                          size="large"
                          className="circle-icons">
                <WhatsApp/>
              </IconButton>
            </a>
          </div>
          <div className={style.detail}>
            <a href={MY_SOCIAL_PROFILES[3].url} target={MY_SOCIAL_PROFILES[3].target}>
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
            <a href={`mailto:${EMAIL_ID}`}>
              <IconButton aria-label="Email"
                          color="primary"
                          size="large"
                          className="circle-icons">
                <Email/>
              </IconButton>
            </a>
          </div>
          <div className={style.detail}>
            <a href={`mailto:${EMAIL_ID}`}>
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
          <form>
            <Grid container>
              <Grid item xs={12}>
                <Input placeholder="David Scott"
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
                <Input placeholder="david@example.com"
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
                       inputProps={{ pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
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
                  {/*{BUDGET_LIST.map(d => {
                    return <Grid key={d} item lg={4} md={6} sm={4} xs={12}>
                      <Chip label={d}
                            className={style.chip}
                            classes={{ root: d === budget ? style.selected : style.nonSelected }}
                            onClick={() => handleBudgetSelection(d)}
                            onDelete={() => handleBudgetSelection(d)}
                            deleteIcon={d === budget ? <CheckCircle classes={{ root: "colorWhite" }}/> :
                              <CheckCircleOutline classes={{ root: "colorWhite" }}/>}
                      />
                    </Grid>;
                  })}*/}
                </Grid>
              </Grid>

              {/*Add How did you find me selection. eg: https://michaelpumo.com/*/}

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
                       placeholder="Hi there! I would like to get in touch with you to inquiry about a project."/>
              </Grid>
              <Grid item sm={12}>
                <Button type="submit" variant="contained" className={style.submitButton}>
                  Send Message <Send className={style.icon} fontSize="large"/>
                </Button>
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
        Made with<span className={style.love}>&nbsp;❤&nbsp;</span>by {MY_NAME}
      </Typography>
    </Container>
  </section>;
};
export default Footer;