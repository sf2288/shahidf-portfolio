import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment
} from "@mui/material";
import style from "../Styles.module.scss";
import { Clear, Send } from "@mui/icons-material";
import { CONTACT_MESSAGE, EMAIL_ID, REGEX_ONLY_NUMBERS } from "../../../utils/constants";
import { sendGoogleAnalyticsEvent } from "../../../utils";
import Snackbar from "@mui/material/Snackbar";

const FormComponent = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(CONTACT_MESSAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = { name, email, phone, message };
    if (email && email !== EMAIL_ID) {
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
        setShowMessage(true);
        handleNameClear();
        handlePhoneClear();
        handleEmailClear();
        handleMessageClear();
        sendGoogleAnalyticsEvent("footer_contact_send_message", { "footer_contact_send_message": email });
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

  return <Container maxWidth="lg" className={style.formContainer}>

    {emailMessage ? <Snackbar anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
                              open={showMessage}
                              autoHideDuration={6000}
                              message={emailMessage}/> : null}

    <Grid container spacing={5}>
      <Grid item md={7} sm={12} xs={12} className={style.form}>
        <Card className="bgGray">
          <CardContent>
            <form onSubmit={sendEmail}>
              <Grid container spacing={3}>
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
                <Grid item xs={12}>
                  Phone (optional)
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
                  Message
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
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>;
};
export default FormComponent;