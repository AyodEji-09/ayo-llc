import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import {
  emailButton,
  emailDetails,
  emailHeading,
  emailLink,
  emailParagraph,
  escapeHtml,
  escapeHtmlWithBreaks,
  renderEmailLayout,
} from "@/lib/email-template";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// SendPulse API endpoints
const SENDPULSE_TOKEN_URL = "https://api.sendpulse.com/oauth/access_token";
const SENDPULSE_EMAIL_URL = "https://api.sendpulse.com/smtp/emails";

/**
 * Get SendPulse access token using OAuth2
 */
async function getSendPulseToken(): Promise<string> {
  const clientId = process.env.SENDPULSE_CLIENT_ID;
  const clientSecret = process.env.SENDPULSE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("SendPulse credentials not configured");
  }

  try {
    const response = await axios.post(SENDPULSE_TOKEN_URL, {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting SendPulse token:", error);
    throw new Error("Failed to authenticate with SendPulse");
  }
}

/**
 * Send email via SendPulse
 */
async function sendEmail(data: ContactFormData, token: string): Promise<void> {
  const fromEmail =
    process.env.SENDPULSE_FROM_EMAIL || "ayollc.company@gmail.com";
  const fromName = process.env.SENDPULSE_FROM_NAME || "AYO LLC";
  const toEmail = process.env.SENDPULSE_TO_EMAIL || "info@ayo-llc.com";

  const htmlContent = renderEmailLayout({
    title: "New contact form submission",
    preheader: `${data.name} sent a message through the website.`,
    footerNote: "Sent from the AYO LLC website contact form.",
    content: [
      emailHeading("New message"),
      emailParagraph("Someone just reached out through the contact form."),
      emailDetails([
        { label: "Name", value: escapeHtml(data.name) },
        {
          label: "Email",
          value: emailLink(escapeHtml(data.email), `mailto:${escapeHtml(data.email)}`),
        },
      ]),
      emailParagraph(escapeHtmlWithBreaks(data.message)),
      emailButton("Reply to " + escapeHtml(data.name), `mailto:${escapeHtml(data.email)}`),
    ].join("\n"),
  });

  const emailData = {
    email: {
      html: Buffer.from(htmlContent).toString("base64"),
      text: `New Contact Form Submission\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}\n\n---\nThis email was sent from the AYO LLC contact form`,
      subject: `New Contact Form Submission from ${data.name}`,
      from: {
        name: fromName,
        email: fromEmail,
      },
      to: [
        {
          name: "AYO LLC",
          email: toEmail,
        },
      ],
    },
  };

  try {
    const response = await axios.post(SENDPULSE_EMAIL_URL, emailData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("SendPulse response:", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("SendPulse API error:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      // Provide more specific error messages
      if (error.response?.data?.message) {
        throw new Error(`SendPulse: ${error.response.data.message}`);
      }
    }
    console.error("Error sending email:", error);
    throw new Error("Failed to send email via SendPulse");
  }
}

/**
 * POST /api/contact - Handle contact form submission
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Get SendPulse access token
    const token = await getSendPulseToken();

    // Send email
    await sendEmail(body, token);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
