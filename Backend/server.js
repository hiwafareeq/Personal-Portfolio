import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

/* ----------------------------------
   MIDDLEWARE
---------------------------------- */
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON bodies

// ----------------------------------
// SIMPLE IN-MEMORY RATE LIMIT
// ----------------------------------
const emailLimits = new Map();
const MAX_EMAILS_PER_IP = 3;

/* ----------------------------------
   HEALTH CHECK
---------------------------------- */
app.get("/", (req, res) => {
  res.json({ status: "Server running" });
});

/* ----------------------------------
   CONTACT FORM ENDPOINT
---------------------------------- */
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const ip = req.ip;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Rate limit check
  const sentCount = emailLimits.get(ip) || 0;

  if (sentCount >= MAX_EMAILS_PER_IP) {
    return res.status(429).json({
      error: "LIMIT_REACHED",
      message: "You have reached the maximum number of messages.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Increment count
    emailLimits.set(ip, sentCount + 1);

    res.status(200).json({
      success: true,
      remaining: MAX_EMAILS_PER_IP - (sentCount + 1),
    });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Email failed" });
  }
});


/* ----------------------------------
   START SERVER
---------------------------------- */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
