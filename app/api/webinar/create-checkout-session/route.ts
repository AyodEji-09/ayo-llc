import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { CURRENCIES, CurrencyType } from "@/lib/currency";
import { normalizePhoneNumber } from "@/lib/sendpulse";

function getStripeClient(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;
  return new Stripe(secretKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, stage, currency = "USD" } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();
    const origin = request.headers.get("origin") || "http://localhost:3000";

    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe is not yet configured with secret key. Please set STRIPE_SECRET_KEY in environment.",
        },
        { status: 500 }
      );
    }

    const selectedCurrency: CurrencyType = currency === "NGN" ? "NGN" : "USD";
    const currencyConfig = CURRENCIES[selectedCurrency];
    const normalizedPhone = normalizePhoneNumber(phone);

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currencyConfig.code.toLowerCase(),
            product_data: {
              name: WEBINAR_CONFIG.theme,
              description: `${WEBINAR_CONFIG.subtitle} (${WEBINAR_CONFIG.dates})`,
            },
            unit_amount: currencyConfig.centsOrKobo,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      metadata: {
        name,
        email,
        phone: normalizedPhone,
        stage: stage || "",
        currency: selectedCurrency,
        amount: currencyConfig.formatted,
        webinarTheme: WEBINAR_CONFIG.theme,
      },
      success_url: `${origin}/webinar/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/webinar`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Error creating Stripe checkout session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to initialize checkout session." },
      { status: 500 }
    );
  }
}
