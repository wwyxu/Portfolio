const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const message = {
    from: "wwyxhelper@gmail.com",
    to: "wwyxhelper@gmail.com",
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
      user: "wwyxhelper@gmail.com",
      pass: "gU_&#!Gs645Mobula2231gobula",
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
