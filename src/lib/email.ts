import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendVerificationEmailParams {
  to: string
  code: string
  userName?: string
}

export async function sendVerificationEmail({ to, code, userName }: SendVerificationEmailParams) {
  const formattedCode = code.slice(0, 3) + ' ' + code.slice(3)
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'FastSubmit <noreply@fastsubmit.hostspica.com>',
      to: [to],
      subject: 'Verify your FastSubmit account',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #fafafa;
      color: #1f2937;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .header {
      padding: 32px 40px 24px;
      text-align: center;
      border-bottom: 1px solid #e5e7eb;
    }
    .logo {
      font-size: 24px;
      font-weight: 600;
      color: #111827;
      letter-spacing: -0.5px;
    }
    .logo-dot {
      color: #6366f1;
    }
    .content {
      padding: 40px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
      color: #111827;
    }
    .message {
      font-size: 15px;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 24px;
    }
    .code-container {
      text-align: center;
      margin: 32px 0;
      padding: 24px;
      background-color: #f9fafb;
      border-radius: 12px;
      border: 2px dashed #d1d5db;
    }
    .code-label {
      font-size: 13px;
      color: #6b7280;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
    .code {
      font-size: 36px;
      font-weight: 700;
      color: #111827;
      letter-spacing: 8px;
      font-family: 'Courier New', monospace;
    }
    .expiry-notice {
      margin-top: 24px;
      padding: 12px 16px;
      background-color: #fef3c7;
      border-left: 3px solid #f59e0b;
      border-radius: 6px;
      font-size: 14px;
      color: #92400e;
    }
    .footer {
      padding: 32px 40px;
      background-color: #f9fafb;
      border-top: 1px solid #e5e7eb;
      text-align: center;
    }
    .footer-text {
      font-size: 13px;
      color: #6b7280;
      line-height: 1.6;
    }
    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 24px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">fastsubmit<span class="logo-dot">.</span></div>
    </div>
    
    <div class="content">
      <div class="greeting">Hi ${userName || 'there'}! 👋</div>
      
      <div class="message">
        Thanks for signing up for <strong>FastSubmit</strong>. To verify your email address, please enter this code in the app:
      </div>

      <div class="code-container">
        <div class="code-label">Your Verification Code</div>
        <div class="code">${formattedCode}</div>
      </div>

      <div class="expiry-notice">
        ⏱️ This code will expire in <strong>10 minutes</strong> for security reasons.
      </div>

      <div class="divider"></div>

      <div class="message" style="font-size: 14px;">
        If you didn't create a FastSubmit account, you can safely ignore this email.
      </div>
    </div>

    <div class="footer">
      <div class="footer-text">
        © 2024 FastSubmit. All rights reserved.<br>
        Simple form backend for developers.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Email sending error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error }
  }
}
