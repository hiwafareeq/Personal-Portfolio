import nodemailer from "nodemailer";

const RATE_LIMIT = new Map(); // simple in-memory limit

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || "unknown";
  const now = Date.now();

  const entry = RATE_LIMIT.get(ip) || { count: 0, time: now };

  if (now - entry.time < 60 * 60 * 1000 && entry.count >= 3) {
    return res.status(429).json({ error: "LIMIT_REACHED" });
  }

  RATE_LIMIT.set(ip, {
    count: now - entry.time > 60 * 60 * 1000 ? 1 : entry.count + 1,
    time: entry.time,
  });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
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
      from: `"Personal Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Email failed" });
  }
}
