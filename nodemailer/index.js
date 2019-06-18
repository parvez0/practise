const nodemailer = require("nodemailer");
//create a server object:
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "admin@prudenceconsultancy.com", // your domain email address
    pass: "E0L3rfS3vpDA" // your password
  }
});

var mailOptions = {
  from: 'admin@prudenceconsultancy.com',
  to: "parvez@yellowmessenger.com",
  subject: "Hello",
  html: "Here goes the message body"
};
console.log("Sending mail");
transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
    return "Error while sending email" + err;
  } else {
    console.log("Email sent");
    return "Email sent";
  }
});
