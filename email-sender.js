var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "selmaL@gmail.com",
    pass: "30ebk2",
  },
});

var mailOptions = {
  from: "selmaL@gmail.com",
  to: "lindaL@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
