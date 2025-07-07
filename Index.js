import "dotenv/config";
import { log } from "node:console";
import { createTransport } from "nodemailer";

const transpoter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transpoter.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test Email",
    text: "This is my first Node Mail Project with nodemailer",
  },
  (err, info) => {
    if (err) {
      log("There is an error can not send email");
      log(err);
    } else {
      log("Email Send");
    }
  }
);
