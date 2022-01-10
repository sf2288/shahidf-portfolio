import { EMAIL_ID, SEND_GRID_API_KEY, SUBJECT } from "../../../utils/constants";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SEND_GRID_API_KEY);

export default (req, res) => {
  const name = `<div style='margin-bottom: 1rem'><strong>Name:</strong> ${req?.body?.name}</div>`;
  const phone = `<div style='margin-bottom: 1rem'><strong>Phone:</strong> ${req?.body?.phone}</div>`;
  const budget = `<div style='margin-bottom: 1rem'><strong>Budget:</strong> ${req?.body?.min_budget} -  ${req?.body?.max_budget}</div>`;
  const message = `<div style='margin-bottom: 1rem'><strong>Message:</strong> ${req?.body?.message}</div>`;

  const msg = {
    to: EMAIL_ID,
    from: req?.body?.email,
    subject: `${SUBJECT} ${req?.body?.name}`,
    text: req?.body?.message,
    html: `<div>${name + phone + budget + message}</div>`
  };
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ data: { status: "success", message: "Email sent." } });
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