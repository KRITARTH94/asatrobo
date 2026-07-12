import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, companyName, email, phone, requirements } = req.body || {};

  if (!fullName || !companyName || !email || !phone || !requirements) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New inquiry from ${fullName} (${companyName})`,
      text: `Full Name: ${fullName}\nCompany Name: ${companyName}\nEmail Address: ${email}\nPhone Number: ${phone}\n\nProduct Requirements:\n${requirements}`,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
