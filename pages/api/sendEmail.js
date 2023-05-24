import { sendEmailToRecipient } from "../../utils/emailUtils"; // Import your email utility function

export default async function sendEmailHandler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await sendEmailToRecipient(name, email, message); // Call your email utility function
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
