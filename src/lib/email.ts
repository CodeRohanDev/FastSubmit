import { Resend } from 'resend'

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured')
    }
    resend = new Resend(apiKey)
  }
  return resend
}

interface SendVerificationEmailParams {
  to: string
  code: string
  userName?: string
}

export async function sendVerificationEmail({ to, code, userName }: SendVerificationEmailParams) {
  const resendClient = getResendClient()
  const formattedCode = code.slice(0, 3) + ' ' + code.slice(3)
  
  try {
    const { data, error } = await resendClient.emails.send({
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


interface FormSubmissionSummary {
  formId: string
  formName: string
  submissionCount: number
}

interface SendNotificationDigestParams {
  to: string
  userName?: string
  submissions: FormSubmissionSummary[]
}

export async function sendNotificationDigest({ to, userName, submissions }: SendNotificationDigestParams) {
  const resendClient = getResendClient()
  const totalSubmissions = submissions.reduce((acc, s) => acc + s.submissionCount, 0)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
  
  try {
    const { data, error } = await resendClient.emails.send({
      from: 'FastSubmit <notifications@fastsubmit.hostspica.com>',
      to: [to],
      subject: `📬 ${totalSubmissions} new submission${totalSubmissions > 1 ? 's' : ''} on FastSubmit`,
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
    .stats-card {
      text-align: center;
      margin: 32px 0;
      padding: 24px;
      background-color: #f0fdf4;
      border-radius: 12px;
      border: 1px solid #bbf7d0;
    }
    .stats-number {
      font-size: 48px;
      font-weight: 700;
      color: #16a34a;
      line-height: 1;
    }
    .stats-label {
      font-size: 14px;
      color: #4b5563;
      margin-top: 8px;
    }
    .form-list {
      margin: 24px 0;
    }
    .form-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: #f9fafb;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .form-name {
      font-weight: 500;
      color: #111827;
    }
    .form-count {
      font-size: 14px;
      color: #6366f1;
      font-weight: 600;
    }
    .cta-button {
      display: inline-block;
      padding: 14px 28px;
      background-color: #111827;
      color: #ffffff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      font-size: 15px;
      text-align: center;
    }
    .cta-container {
      text-align: center;
      margin: 32px 0;
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
    .unsubscribe {
      font-size: 12px;
      color: #9ca3af;
      margin-top: 16px;
    }
    .unsubscribe a {
      color: #6b7280;
      text-decoration: underline;
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
        You've received new form submissions today. Here's a quick summary:
      </div>

      <div class="stats-card">
        <div class="stats-number">${totalSubmissions}</div>
        <div class="stats-label">new submission${totalSubmissions > 1 ? 's' : ''}</div>
      </div>

      <div class="form-list">
        ${submissions.map(s => `
          <div class="form-item">
            <span class="form-name">${s.formName}</span>
            <span class="form-count">${s.submissionCount} new</span>
          </div>
        `).join('')}
      </div>

      <div class="cta-container">
        <a href="${baseUrl}/dashboard/forms" class="cta-button">View All Submissions →</a>
      </div>
    </div>

    <div class="footer">
      <div class="footer-text">
        © ${new Date().getFullYear()} FastSubmit. All rights reserved.<br>
        Simple form backend for developers.
      </div>
      <div class="unsubscribe">
        <a href="${baseUrl}/dashboard/settings">Manage notification preferences</a>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Notification email error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Notification email error:', error)
    return { success: false, error }
  }
}


interface SendNotificationOptInParams {
  to: string
  userName?: string
}

export async function sendNotificationOptInEmail({ to, userName }: SendNotificationOptInParams) {
  const resendClient = getResendClient()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
  
  try {
    const { data, error } = await resendClient.emails.send({
      from: 'FastSubmit <notifications@fastsubmit.hostspica.com>',
      to: [to],
      subject: '✅ Email notifications enabled',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#fafafa;color:#1f2937;">
  <div style="max-width:600px;margin:40px auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #e5e7eb;">
      <div style="font-size:24px;font-weight:600;color:#111827;letter-spacing:-0.5px;">fastsubmit<span style="color:#6366f1;">.</span></div>
    </div>
    
    <div style="padding:40px;">
      <div style="font-size:18px;font-weight:500;margin-bottom:16px;color:#111827;">Hi ${userName || 'there'}! 👋</div>
      
      <div style="font-size:15px;line-height:1.6;color:#4b5563;margin-bottom:24px;">
        You've successfully enabled email notifications for your FastSubmit forms.
      </div>

      <div style="text-align:center;margin:32px 0;padding:24px;background-color:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;">
        <div style="font-size:48px;margin-bottom:8px;">🔔</div>
        <div style="font-size:16px;font-weight:600;color:#16a34a;">Notifications Enabled</div>
        <div style="font-size:14px;color:#4b5563;margin-top:8px;">You'll receive daily digest emails at 12:00 AM IST</div>
      </div>

      <div style="font-size:14px;line-height:1.6;color:#6b7280;">
        You'll only receive an email when there are new form submissions. No spam, we promise!
      </div>

      <div style="text-align:center;margin:32px 0;">
        <a href="${baseUrl}/dashboard/settings" style="display:inline-block;padding:14px 28px;background-color:#111827;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:500;font-size:15px;">Manage Settings</a>
      </div>
    </div>

    <div style="padding:32px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
      <div style="font-size:13px;color:#6b7280;line-height:1.6;">
        © ${new Date().getFullYear()} FastSubmit. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Opt-in email error:', error)
      return { success: false, error }
    }
    return { success: true, data }
  } catch (error) {
    console.error('Opt-in email error:', error)
    return { success: false, error }
  }
}

interface SendNotificationOptOutParams {
  to: string
  userName?: string
}

export async function sendNotificationOptOutEmail({ to, userName }: SendNotificationOptOutParams) {
  const resendClient = getResendClient()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
  
  try {
    const { data, error } = await resendClient.emails.send({
      from: 'FastSubmit <notifications@fastsubmit.hostspica.com>',
      to: [to],
      subject: '🔕 Email notifications disabled',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#fafafa;color:#1f2937;">
  <div style="max-width:600px;margin:40px auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #e5e7eb;">
      <div style="font-size:24px;font-weight:600;color:#111827;letter-spacing:-0.5px;">fastsubmit<span style="color:#6366f1;">.</span></div>
    </div>
    
    <div style="padding:40px;">
      <div style="font-size:18px;font-weight:500;margin-bottom:16px;color:#111827;">Hi ${userName || 'there'}! 👋</div>
      
      <div style="font-size:15px;line-height:1.6;color:#4b5563;margin-bottom:24px;">
        You've disabled email notifications for your FastSubmit forms.
      </div>

      <div style="text-align:center;margin:32px 0;padding:24px;background-color:#f3f4f6;border-radius:12px;border:1px solid #e5e7eb;">
        <div style="font-size:48px;margin-bottom:8px;">🔕</div>
        <div style="font-size:16px;font-weight:600;color:#6b7280;">Notifications Disabled</div>
        <div style="font-size:14px;color:#4b5563;margin-top:8px;">You won't receive submission digest emails</div>
      </div>

      <div style="font-size:14px;line-height:1.6;color:#6b7280;">
        You can still view all your submissions in the dashboard. Re-enable notifications anytime!
      </div>

      <div style="text-align:center;margin:32px 0;">
        <a href="${baseUrl}/dashboard/settings" style="display:inline-block;padding:14px 28px;background-color:#111827;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:500;font-size:15px;">Re-enable Notifications</a>
      </div>
    </div>

    <div style="padding:32px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
      <div style="font-size:13px;color:#6b7280;line-height:1.6;">
        © ${new Date().getFullYear()} FastSubmit. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Opt-out email error:', error)
      return { success: false, error }
    }
    return { success: true, data }
  } catch (error) {
    console.error('Opt-out email error:', error)
    return { success: false, error }
  }
}
