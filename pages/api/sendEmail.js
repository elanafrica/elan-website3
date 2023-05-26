export default function (req, res) {
  require('dotenv').config()
  const PASSWORD = process.env.password
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'elanafrica753@gmail.com',
      pass: 'process.env.password',
    },
    secure: true,
  });

  console.log(req.body)
}