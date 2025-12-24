import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

/**
 * Generates a clean, responsive HTML email template
 */
const generateEmailTemplate = (name, email, message) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    <div style="background-color: #2563eb; padding: 25px; text-align: center;">
      <h2 style="margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 0.5px;">New Inquiry Received</h2>
    </div>
    <div style="padding: 30px; background-color: #ffffff;">
      <div style="margin-bottom: 20px;">
        <p style="margin: 0; font-size: 14px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Sender Details</p>
        <p style="margin: 5px 0; font-size: 16px; color: #18181b;"><strong>${name}</strong></p>
        <p style="margin: 0; font-size: 15px; color: #2563eb;"><a href="mailto:${email}" style="text-decoration: none; color: #2563eb;">${email}</a></p>
      </div>
      
      <div style="height: 1px; background-color: #f4f4f5; margin: 25px 0;"></div>
      
      <div style="margin-bottom: 10px;">
        <p style="margin: 0 0 10px 0; font-size: 14px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Message Content</p>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3f3f46; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
    <div style="background-color: #f4f4f5; padding: 15px; text-align: center; font-size: 12px; color: #a1a1aa;">
      This email was sent from your website's contact form. 
      <br> You can reply directly to this email to contact <strong>${name}</strong>.
    </div>
  </div>
`;

// Match the URL used in your component: /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 Mail From Portfolio: ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`, // Plain text fallback
      html: generateEmailTemplate(name, email, message), // The high-quality HTML version
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer Error:', err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

export default app;