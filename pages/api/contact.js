import nodemailer from "nodemailer";
import * as rateLimiter from "express-rate-limit";

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP to 100 requests per windowMs
});

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default function (req, res) {
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ err: true }));
  } else {
    console.log("made it ");
    runMiddleware(req, res, limiter);
    console.log("ran middleware");

    const mailOptions = {
      from: "Joseph Sawaya <contact-form@josephsawaya.com>",
      to: "josephsawaya938@gmail.com",
      subject: "Invoices due",
      text: JSON.stringify(req.body),
    };

    transport.sendMail(mailOptions, function (err, _info) {
      if (err) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ err: true, message: err.message }));
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ err: false, body: req.body }));
      }
    });
  }
}
