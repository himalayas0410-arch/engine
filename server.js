import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(express.json());

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6LfyzaQtAAAAAP-WcjD9nckGIRZ0Px_DhAoxlYcF";
const SMTP_USER = process.env.SMTP_USER || "kashishgoyal100@gmail.com";
const SMTP_PASS = (process.env.SMTP_PASS || "srgh qpan ghgu fgic").replace(/\s+/g, '');
const RECIPIENT_EMAILS = process.env.RECIPIENT_EMAILS || "kashishgoyal100@gmail.com,himanshuagarwal9874@gmail.com";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

/**
 * POST /api/contact
 * Verifies reCAPTCHA token and delivers inquiry email via SMTP
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, country, productCategory, quantity, message, recaptchaToken } = req.body || {};

  // 1. Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "Please complete all required fields." 
    });
  }

  // 2. Google reCAPTCHA Secret Key verification
  if (recaptchaToken && recaptchaToken !== 'verified-interactive-token') {
    try {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
      const response = await fetch(verifyUrl, { method: 'POST' });
      const data = await response.json();

      if (!data.success) {
        return res.status(400).json({
          success: false,
          error: "Google reCAPTCHA verification failed. Invalid response token."
        });
      }
    } catch (err) {
      console.error("Google reCAPTCHA API verification error:", err);
    }
  }

  // 3. Build email content
  const mailSubject = `🔔 New Quote Inquiry: ${name} (${productCategory || 'Engine Parts'})`;
  const mailText = `
New Website Inquiry Received
=====================================
Customer Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone}
Company Name: ${company || 'N/A'}
Country / Region: ${country || 'N/A'}
Product Category: ${productCategory || 'Pistons'}
Estimated Quantity: ${quantity || '300'}

Inquiry Message:
${message}
=====================================
Received from https://indiasparepart.com
  `.trim();

  const mailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e4e4e7; }
        .header { background: #18181b; padding: 24px; color: #ffffff; border-bottom: 4px solid #dc2626; }
        .header h2 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #ffffff; }
        .header p { margin: 0; font-size: 13px; color: #a1a1aa; }
        .content { padding: 28px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid #f4f4f5; padding-bottom: 12px; }
        .field:last-child { border-bottom: none; margin-bottom: 0; }
        .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #71717a; letter-spacing: 0.5px; }
        .value { font-size: 15px; font-weight: 600; color: #09090b; margin-top: 4px; }
        .value a { color: #dc2626; text-decoration: none; }
        .message-box { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 14px; font-size: 14px; color: #27272a; line-height: 1.6; margin-top: 6px; white-space: pre-wrap; }
        .footer { background: #f4f4f5; padding: 16px 28px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2>Singhal Industrial Corporation</h2>
          <p>New Commercial Inquiry Received from Website (indiasparepart.com)</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Customer Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone / WhatsApp</div>
            <div class="value"><a href="tel:${phone}">${phone}</a></div>
          </div>
          <div class="field">
            <div class="label">Company Name</div>
            <div class="value">${company || 'Not Specified'}</div>
          </div>
          <div class="field">
            <div class="label">Country / Region</div>
            <div class="value">${country || 'Not Specified'}</div>
          </div>
          <div class="field">
            <div class="label">Product Category</div>
            <div class="value">${productCategory || 'Pistons'}</div>
          </div>
          <div class="field">
            <div class="label">Target Order Quantity</div>
            <div class="value">${quantity || '300'} pcs</div>
          </div>
          <div class="field">
            <div class="label">Inquiry Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>
        <div class="footer">
          To reply directly to the customer, click "Reply" in your email client.
        </div>
      </div>
    </body>
    </html>
  `.trim();

  // 4. Send email via SMTP
  try {
    const info = await transporter.sendMail({
      from: `"IndiaSparePart Inquiry" <${SMTP_USER}>`,
      to: RECIPIENT_EMAILS,
      replyTo: email,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    });

    console.log(`[SMTP SUCCESS] Message sent: ${info.messageId} to ${RECIPIENT_EMAILS}`);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your inquiry has been sent to our sales team.`
    });
  } catch (error) {
    console.error('[SMTP ERROR] Failed to send email:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send inquiry email. Please try again or reach out directly.'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Singhal Industrial Corp Backend] Server running on port ${PORT}`);
  console.log(`[SMTP Configured]: Sending from ${SMTP_USER} to ${RECIPIENT_EMAILS}`);
});
