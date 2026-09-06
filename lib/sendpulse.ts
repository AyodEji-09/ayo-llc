import axios from "axios";

const SENDPULSE_TOKEN_URL = "https://api.sendpulse.com/oauth/access_token";
const SENDPULSE_EMAIL_URL = "https://api.sendpulse.com/smtp/emails";
const SENDPULSE_ADDRESS_BOOKS_URL = "https://api.sendpulse.com/addressbooks";

/**
 * Ensures phone number is formatted with a leading + and valid international structure.
 * Strips trunk zeros (e.g. +234080... -> +23480...) and normalizes local formats.
 */
export function normalizePhoneNumber(phone?: string): string {
  if (!phone) return "";

  // 1. Remove all spaces, dashes, dots, parentheses, and extra whitespace
  let cleaned = phone.replace(/[\s\-\(\)\.]/g, "").trim();
  if (!cleaned) return "";

  // 2. If starts with 00, convert to +
  if (cleaned.startsWith("00")) {
    cleaned = `+${cleaned.slice(2)}`;
  }

  // 3. If starts with 0 followed by 10 digits (Nigerian local format: 08012345678, 070..., 090..., 081...)
  if (/^0[789]\d{9}$/.test(cleaned)) {
    cleaned = `+234${cleaned.slice(1)}`;
  } else if (!cleaned.startsWith("+")) {
    cleaned = `+${cleaned}`;
  }

  // 4. Strip trunk zero immediately following country code:
  // Nigeria (+234): +23408012345678 -> +2348012345678
  cleaned = cleaned.replace(/^\+2340([789]\d{8,9})$/, "+234$1");
  cleaned = cleaned.replace(/^\+2340/, "+234");
  // UK (+44): +4407... -> +447...
  cleaned = cleaned.replace(/^\+440/, "+44");
  // Kenya (+254): +2540... -> +254...
  cleaned = cleaned.replace(/^\+2540/, "+254");
  // Ghana (+233): +2330... -> +233...
  cleaned = cleaned.replace(/^\+2330/, "+233");
  // South Africa (+27): +270... -> +27...
  cleaned = cleaned.replace(/^\+270/, "+27");

  return cleaned;
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
        Phone: normalizedPhone,
        phone: normalizedPhone,
        ...variables,
      },
    };

    const url = `${SENDPULSE_ADDRESS_BOOKS_URL}/${addressBookId}/emails`;
    await axios.post(
      url,
      { emails: [emailData] },
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
  meetingId?: string;
  passcode?: string;
}

/**
 * Send automated Webinar confirmation email with meeting link to attendee
 */
export async function sendWebinarConfirmationEmail({
  email,
  name,
  meetingLink = process.env.WEBINAR_MEETING_LINK ||
    "https://zoom.us/j/meeting-link",
  meetingId = process.env.WEBINAR_MEETING_ID || "",
  passcode = process.env.WEBINAR_MEETING_PASSCODE || "",
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
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The Author's Blueprint Registration Confirmation</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #1a1c1c;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .container {
          max-width: 600px;
          margin: 0;
          padding: 32px 24px;
          text-align: left;
        }
        .greeting {
          font-size: 16px;
          font-weight: 600;
          color: #1a1c1c;
          margin-bottom: 12px;
          text-align: left;
        }
        .paragraph {
          font-size: 15px;
          color: #4b5563;
          margin: 0 0 16px 0;
          line-height: 1.6;
          text-align: left;
        }
        .details-section {
          border-top: 1px solid #E2E2E9;
          border-bottom: 1px solid #E2E2E9;
          padding: 18px 0;
          margin: 24px 0;
          text-align: left;
        }
        .detail-row {
          margin-bottom: 8px;
          font-size: 14px;
          display: flex;
        }
        .detail-row:last-child {
          margin-bottom: 0;
        }
        .detail-label {
          font-weight: 600;
          width: 105px;
          color: #5d5d6f;
          font-size: 13px;
        }
        .detail-value {
          color: #1a1c1c;
          font-weight: 500;
          font-size: 14px;
        }
        .btn-wrapper {
          text-align: left;
          margin: 24px 0;
        }
        .btn {
          display: inline-block;
          background-color: #5f3add;
          color: #ffffff !important;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 8px;
        }
        .link-clean {
          color: #5f3add;
          font-weight: 600;
          text-decoration: underline;
        }
        .link-fallback {
          font-size: 12px;
          color: #6b7280;
          margin-top: 16px;
          line-height: 1.5;
          text-align: left;
        }
        .link-url {
          color: #5f3add;
          text-decoration: underline;
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        .footer {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid #f3f4f6;
          text-align: left;
          color: #6b7280;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="greeting">Hi ${name},</div>
        <p class="paragraph">
          Thank you for registering! Your payment has been successfully confirmed, and your seat is reserved for this 2-day virtual experience.
        </p>

        <div class="details-section">
          <div class="detail-row">
            <span class="detail-label">📅 Dates:</span>
            <span class="detail-value">9th &amp; 10th October 2026</span>
          </div>
          <div class="detail-row" style="margin-top: 10px;">
            <span class="detail-label">⏰ Time:</span>
            <span class="detail-value">2PM CST / 3PM EST / 8PM WAT / 12PM PST</span>
          </div>
          ${
            meetingId
              ? `
          <div class="detail-row" style="margin-top: 10px;">
            <span class="detail-label">🆔 Meeting ID:</span>
            <span class="detail-value">${meetingId}</span>
          </div>`
              : ""
          }
          ${
            passcode
              ? `
          <div class="detail-row" style="margin-top: 10px;">
            <span class="detail-label">🔑 Password:</span>
            <span class="detail-value">${passcode}</span>
          </div>`
              : ""
          }
        </div>

        <div class="btn-wrapper">
          <a href="${meetingLink}" target="_blank" class="btn">Join Meeting Room</a>
        </div>

        <p class="link-fallback">
          If the button above does not open, copy and paste this direct link into your browser:<br/>
          <a href="${meetingLink}" class="link-url">${meetingLink}</a>
        </p>

        <p class="paragraph" style="margin-top: 24px;">
          We look forward to seeing you there! If you have any questions, feel free to reply directly to this email.
        </p>

        <div class="footer">
          <p style="margin: 0 0 4px 0; font-weight: 600; color: #1a1c1c;">The AYO LLC Team</p>
          <p style="margin: 0; color: #9ca3af;">&copy; 2026 AYO LLC &bull; Riverside, California, USA</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const emailData = {
    email: {
      html: Buffer.from(htmlContent).toString("base64"),
      text: `Hi ${name},\n\nThank you for registering! Your payment has been successfully confirmed, and your seat is reserved for this 2-day virtual experience.\n\nDates: 9th & 10th October 2026\nTime: 2PM CST / 3PM EST / 8PM WAT / 12PM PST\nLink: ${meetingLink}${meetingId ? `\nMeeting ID: ${meetingId}` : ""}${passcode ? `\nPassword: ${passcode}` : ""}\n\nWe look forward to seeing you there!\n\nBest regards,\nAYO LLC Team\nRiverside, California, USA`,
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
