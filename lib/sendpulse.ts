import axios from "axios";

const SENDPULSE_TOKEN_URL = "https://api.sendpulse.com/oauth/access_token";
const SENDPULSE_EMAIL_URL = "https://api.sendpulse.com/smtp/emails";
const SENDPULSE_ADDRESS_BOOKS_URL = "https://api.sendpulse.com/addressbooks";

/**
 * Ensures phone number is formatted with a leading + for SendPulse international delivery.
 * Users type in their country code (e.g. +234... or +1...).
 */
export function normalizePhoneNumber(phone?: string): string {
  if (!phone) return "";

  const cleaned = phone.replace(/[\s\-\(\)\.]/g, "").trim();
  if (!cleaned) return "";

  return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
}

/**
 * Get SendPulse access token via OAuth2 credentials
 */
export async function getSendPulseToken(): Promise<string | null> {
  const clientId = process.env.SENDPULSE_CLIENT_ID;
  const clientSecret = process.env.SENDPULSE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.warn(
      "SendPulse credentials missing; skipping SendPulse API calls.",
    );
    return null;
  }

  try {
    const response = await axios.post(SENDPULSE_TOKEN_URL, {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error authenticating with SendPulse:", error);
    return null;
  }
}

/**
 * Add a contact to a SendPulse Address Book (Mailing List)
 */
export async function addContactToAddressBook(
  email: string,
  name: string,
  phone?: string,
  variables: Record<string, string> = {},
): Promise<boolean> {
  const addressBookId = process.env.SENDPULSE_ADDRESS_BOOK_ID;
  if (!addressBookId) {
    console.warn(
      "SENDPULSE_ADDRESS_BOOK_ID not configured; skipping address book sync.",
    );
    return false;
  }

  const token = await getSendPulseToken();
  if (!token) return false;

  const normalizedPhone = normalizePhoneNumber(phone);

  try {
    const emailData: Record<string, any> = {
      email,
      variables: {
        name,
        phone: normalizedPhone,
        Phone: normalizedPhone,
        ...variables,
      },
    };

    const url = `${SENDPULSE_ADDRESS_BOOKS_URL}/${addressBookId}/emails`;
    await axios.post(
      url,
      { emails: JSON.stringify([emailData]) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log(
      `Successfully added ${email} (Phone: ${normalizedPhone}) to SendPulse Address Book ID ${addressBookId}`,
    );
    return true;
  } catch (error) {
    console.error("Error adding contact to SendPulse address book:", error);
    return false;
  }
}

interface SendWebinarEmailParams {
  email: string;
  name: string;
  meetingLink?: string;
}

/**
 * Send automated Webinar confirmation email with meeting link to attendee
 */
export async function sendWebinarConfirmationEmail({
  email,
  name,
  meetingLink = process.env.WEBINAR_MEETING_LINK ||
    "https://zoom.us/j/meeting-link",
}: SendWebinarEmailParams): Promise<boolean> {
  const token = await getSendPulseToken();
  if (!token) {
    console.warn("No SendPulse token available. Skipping email delivery.");
    return false;
  }

  const fromEmail = process.env.SENDPULSE_FROM_EMAIL || "info@ayo-llc.com";
  const fromName = process.env.SENDPULSE_FROM_NAME || "AYO LLC";

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f3f4f6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #000061 0%, #1e1b4b 100%); color: #ffffff; padding: 36px 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
        .header p { margin-top: 8px; font-size: 14px; opacity: 0.9; }
        .content { padding: 32px 24px; }
        .greeting { font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 16px; }
        .card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .card-item { display: flex; margin-bottom: 10px; font-size: 14px; }
        .card-label { font-weight: 600; width: 110px; color: #64748b; }
        .card-value { color: #0f172a; font-weight: 500; }
        .btn-container { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; background-color: #7C5CFC; color: #ffffff !important; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 10px rgba(124, 92, 252, 0.3); }
        .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Registration Confirmed! 🎉</h1>
          <p>THE AUTHOR'S BLUEPRINT: From Book Idea to a Published Work</p>
        </div>
        <div class="content">
          <div class="greeting">Hi ${name},</div>
          <p>Thank you for registering! Your payment has been successfully confirmed. You're all set to join us for this transformative 2-day virtual experience.</p>
          
          <div class="card">
            <div class="card-item">
              <span class="card-label">📅 Dates:</span>
              <span class="card-value">9th & 10th October 2026</span>
            </div>
            <div class="card-item">
              <span class="card-label">⏰ Time:</span>
              <span class="card-value">2PM CST / 3PM EST / 8PM WAT / 12PM PST</span>
            </div>
            <div class="card-item">
              <span class="card-label">📍 Venue:</span>
              <span class="card-value">Online Virtual Meeting Room</span>
            </div>
          </div>

          <p>Below is your private access link to enter the meeting room when the event begins:</p>

          <div class="btn-container">
            <a href="${meetingLink}" target="_blank" class="btn">Join Meeting Room</a>
          </div>

          <p style="font-size: 13px; color: #6b7280;">If the button above does not work, copy and paste this link into your web browser:<br/><a href="${meetingLink}" style="color: #7C5CFC; word-break: break-all;">${meetingLink}</a></p>

          <p>We look forward to seeing you there!</p>
          <p style="margin-top: 24px;">Best regards,<br/><strong>The AYO LLC Team</strong></p>
        </div>
        <div class="footer">
          <p>© 2026 AYO LLC. All rights reserved.<br/>Riverside, California, USA</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const emailData = {
    email: {
      html: Buffer.from(htmlContent).toString("base64"),
      text: `Registration Confirmed!\n\nHi ${name},\n\nThank you for registering for THE AUTHOR'S BLUEPRINT: From Book Idea to a Published Work.\n\nDate: 9th & 10th October 2026\nTime: 2PM CST / 3PM EST / 8PM WAT / 12PM PST\n\nYour Private Access Link:\n${meetingLink}\n\nBest regards,\nAYO LLC Team`,
      subject: `[Confirmed] Access Link for The Author's Blueprint Webinar`,
      from: { name: fromName, email: fromEmail },
      to: [{ name, email }],
    },
  };

  try {
    await axios.post(SENDPULSE_EMAIL_URL, emailData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(`Confirmation email sent successfully to ${email}`);
    return true;
  } catch (error) {
    console.error("Error sending webinar confirmation email:", error);
    return false;
  }
}
