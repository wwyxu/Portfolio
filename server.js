const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const dirPath = path.join(__dirname, "build");
app.use(express.json());
app.use(express.static(dirPath));

app.post("/contact", (req, res) => {
  const message = {
    from: req.body.email,
    to: process.env.email,
    subject: req.body.message,
    html: `
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `,
  };

  // Account to send from
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(message, function (err, info) {
    if (err) {
      res.status(500).send({
        success: false,
      });
    } else {
      res.send({
        success: true,
      });
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
