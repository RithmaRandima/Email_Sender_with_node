import "dotenv/config";
import { log } from "node:console";
import { createTransport } from "nodemailer";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    html: `
    <html>
      <head></head>
      <body>
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7; color: #333;">
          <h2 style="color: #0056b3; margin-bottom: 10px;">Hello from Nodemailer 👋</h2>
          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 10px;">
            This is a <strong style="color: #d6336c;">sample HTML email</strong> sent using Nodemailer through Outlook SMTP.
          </p>
          <a href="https://example.com" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: #fff; text-decoration: none; border-radius: 4px;">
          Visit Our Site
          </a>
        </div>
      </body>
    </html>
    
    `,
    attachments: [
      {
        filename: "mail.txt",
        path: join(__dirname, "mail.txt"),
      },
    ],
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
