import axios from "axios";
import { WEBINAR_CONFIG } from "@/config/webinar";
import {
  emailButton,
  emailDetails,
  emailFinePrint,
  emailHeading,
  emailLink,
  emailParagraph,
  escapeHtml,
  renderEmailLayout,
} from "@/lib/email-template";

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

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

/**
 * Get SendPulse access token via OAuth2 credentials (with in-memory caching)
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

  // Return cached token if still valid (with 60s buffer)
  if (cachedToken && Date.now() < tokenExpiresAt - 60000) {
    return cachedToken;
  }

  try {
    const response = await axios.post(SENDPULSE_TOKEN_URL, {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    });

    cachedToken = response.data.access_token;
    const expiresIn = response.data.expires_in || 3600;
    tokenExpiresAt = Date.now() + expiresIn * 1000;

    return cachedToken;
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
    const emailData: Record<string, unknown> = {
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

  const resourceUrl = `https://ayollc.com${WEBINAR_CONFIG.leadMagnet.downloadUrl}`;
  const safeName = escapeHtml(name);
  const safeMeetingLink = escapeHtml(meetingLink);

  const htmlContent = renderEmailLayout({
    title: "You're registered: The Author's Blueprint",
    preheader: `Your seat is confirmed for ${WEBINAR_CONFIG.shortDates}. Your access link is inside.`,
    content: [
      emailHeading("You're in."),
      emailParagraph(
        `Hi ${safeName}, your payment is confirmed and your seat is reserved for The Author&#39;s Blueprint, a 2-day virtual experience.`,
      ),
      emailDetails([
        { label: "Dates", value: escapeHtml(WEBINAR_CONFIG.dates) },
        { label: "Time", value: escapeHtml(WEBINAR_CONFIG.times) },
        { label: "Where", value: "Online meeting room" },
      ]),
      emailButton("Join the meeting room", safeMeetingLink),
      emailFinePrint(
        `Button not working? Copy this link into your browser:<br/>${emailLink(safeMeetingLink, safeMeetingLink)}`,
      ),
      emailParagraph(
        `<strong style="color:#0F172A;" class="em-ink">Your free author resource.</strong> ${emailLink("Download A Beginner&#39;s Guide to Publishing (PDF)", resourceUrl)}`,
      ),
      emailParagraph(
        "Questions before the day? Reply to this email and our team will help.",
      ),
    ].join("\n"),
  });

  const emailData = {
    email: {
      html: Buffer.from(htmlContent).toString("base64"),
      text: `Hi ${name},\n\nYour payment is confirmed and your seat is reserved for The Author's Blueprint, a 2-day virtual experience.\n\nDates: ${WEBINAR_CONFIG.dates}\nTime: ${WEBINAR_CONFIG.times}\nWhere: Online meeting room\n\nJoin the meeting room:\n${meetingLink}\n\nYour free author resource (A Beginner's Guide to Publishing):\nhttps://ayo-llc.com${WEBINAR_CONFIG.leadMagnet.downloadUrl}\n\nQuestions before the day? Reply to this email and our team will help.\n\nThe AYO LLC Team\nRiverside, California, USA`,
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
