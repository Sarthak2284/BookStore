const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or your email provider
  auth: {
    user: "sarthakjm2284@gmail.com",
    pass: "sogk cwca xngm bayl" 
  },
});

function sendOTP(email, otp) {
  const mailOptions = {
    from: "sarthakjm2284@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendOTP;
