import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default function (req, res) {
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ err: true }));
  }

  const mailOptions = {
    from: "Joseph Sawaya <contact-form@josephsawaya.com>",
    to: "josephsawaya938@gmail.com",
    subject: "Invoices due",
    text: JSON.stringify(req.body),
  };

  transport.sendMail(mailOptions, function (err, info) {
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
