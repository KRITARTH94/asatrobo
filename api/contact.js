import nodemailer from 'nodemailer';

const CONTACT_EMAIL = 'vikram@asatrobo.com';

const ALLOWED_ORIGINS = [
  'https://asatrobo.com',
  'https://www.asatrobo.com',
  'https://asatrobo1.vercel.app',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT = 200;
const MAX_LONG = 5000;

// Simple per-instance rate limit: resets on cold start, best-effort only.
// Not a substitute for a real store, but stops rapid-fire abuse for free.
const hits = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const isRateLimited = (ip) => {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
};

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildHtml = ({ fullName, companyName, email, phone, requirements }) => {
  const row = (label, value) => `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #edf0f2;font-size:13px;font-weight:600;color:#6b6b70;text-transform:uppercase;letter-spacing:0.4px;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:14px 20px;border-bottom:1px solid #edf0f2;font-size:15px;color:#17171a;vertical-align:top;">${value}</td>
    </tr>`;

  return `
  <div style="background-color:#f7f7f7;padding:32px 16px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;border-collapse:collapse;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
      <tr>
        <td style="background-color:#121212;padding:24px 28px;">
          <span style="font-size:20px;font-weight:700;color:#4c97cc;">ASAT<span style="color:#e10b0b;">Robo</span></span>
          <div style="margin-top:4px;font-size:13px;color:#c9c9cc;">New Product Inquiry</div>
        </td>
      </tr>
      <tr>
        <td style="padding:0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${row('Full Name', escapeHtml(fullName))}
            ${row('Company Name', escapeHtml(companyName))}
            ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#154051;text-decoration:none;">${escapeHtml(email)}</a>`)}
            ${row('Phone', escapeHtml(phone))}
            ${row('Requirements', escapeHtml(requirements).replace(/\n/g, '<br/>'))}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px;background-color:#f7f7f7;font-size:12px;color:#9a9a9e;">
          Submitted via the Contact Us form on asatrobo.com &middot; Reply-to is set to the sender's email above.
        </td>
      </tr>
    </table>
  </div>`;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests, please try again later' });
  }

  const { fullName, companyName, email, phone, requirements, website } = req.body || {};

  // Honeypot: a hidden field real users never see or fill. Bots that
  // auto-fill every input trip this, and we quietly no-op on them.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!fullName || !companyName || !email || !phone || !requirements) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (
    fullName.length > MAX_SHORT ||
    companyName.length > MAX_SHORT ||
    phone.length > MAX_SHORT ||
    email.length > MAX_SHORT ||
    requirements.length > MAX_LONG
  ) {
    return res.status(400).json({ error: 'One or more fields are too long' });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ASATRobo Website" <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${fullName} (${companyName})`,
      text: `Full Name: ${fullName}\nCompany Name: ${companyName}\nEmail Address: ${email}\nPhone Number: ${phone}\n\nProduct Requirements:\n${requirements}`,
      html: buildHtml({ fullName, companyName, email, phone, requirements }),
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
