import { EMAIL_ID, SEND_GRID_API_KEY, WEBSITE_TECHNICAL_REPORT } from "../../../utils/constants";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SEND_GRID_API_KEY);

export default (req, res) => {
  const name = `<div style='margin-bottom: 1rem'><strong>Name:</strong> ${req?.body?.name}</div>`;
  const website = `<div style='margin-bottom: 1rem'><strong>Website:</strong> 
<a href={req?.body?.website} target="_blank" rel="noopener noreferrer">${req?.body?.website}</a></div>`;

  const msg = {
    to: EMAIL_ID,
    from: req?.body?.email,
    subject: `${WEBSITE_TECHNICAL_REPORT} ${req?.body?.website}`,
    html: `<div>${name + website}</div>`
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ data: { status: "success", message: `Inquiry received! Thank you ${name}.` } });
    }, error => {
      console.error(error);

      if (error?.response) {
        const body = error?.response?.body?.errors;
        console.error(body);
        res.status(401).json({
          data: {
            status: "failed",
            message: body && body.length ? "Failed to sent your details. Please try again later!" : ""
          }
        });
      }
    });
};