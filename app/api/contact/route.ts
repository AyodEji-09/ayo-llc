import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

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

  // Base64 encode the HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #000061; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #596780; }
        .value { margin-top: 5px; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the AYO LLC contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;

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
