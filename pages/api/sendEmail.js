import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Retrieve the email details from the request body
    const { to, subject, text } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to,
        subject,
        text,
      });

      // Email sent successfully
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      // An error occurred while sending the email
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}