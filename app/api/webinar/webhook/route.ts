import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
  addContactToAddressBook,
  sendWebinarConfirmationEmail,
  normalizePhoneNumber,
} from "@/lib/sendpulse";

function getStripeClient(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;
  return new Stripe(secretKey);
}

export async function POST(request: NextRequest) {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await request.text();

    if (webhookSecret) {
      const signature = request.headers.get("stripe-signature");
      if (!signature) {
        return NextResponse.json(
          { error: "Missing stripe-signature header" },
          { status: 400 }
        );
      }
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret
      );
    } else {
      // In development without webhook secret setup yet
      event = JSON.parse(rawBody) as Stripe.Event;
    }
  } catch (err: any) {
    console.error(`Webhook Signature Verification Failed: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle successful checkout payment
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    const name = metadata.name || session.customer_details?.name || "Valued Guest";
    const email = metadata.email || session.customer_details?.email;
    const currency = session.currency?.toUpperCase() || metadata.currency || "NGN";
    const rawPhone = metadata.phone || session.customer_details?.phone || "";
    const phone = normalizePhoneNumber(rawPhone);
    const stage = metadata.stage || "";

    if (email) {
      console.log(`Processing paid registration for ${name} (${email}, phone: ${phone})...`);

      // Execute address book sync and email dispatch concurrently
      await Promise.all([
        addContactToAddressBook(email, name, phone, { stage, currency }),
        sendWebinarConfirmationEmail({ email, name }),
      ]);
    }
  }

  return NextResponse.json({ received: true });
}
