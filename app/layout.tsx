import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { AOSInit } from "@/components/common/aos-init";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AYO LLC - Your Creative Solutions Partner",
    template: "%s | AYO LLC",
  },
  description:
    "Welcome to AYO LLC - Your Creative Solutions Partner. We offer social media management, website design, graphic design, book publishing, illustration, animation, and video production services.",
  keywords: [
    "AYO LLC",
    "creative solutions",
    "social media management",
    "website design",
    "website management",
    "graphic design",
    "book publishing",
    "self publishing",
    "illustration services",
    "animation services",
    "video production",
    "digital marketing",
    "branding services",
    "content creation",
    "creative agency",
  ],
  authors: [{ name: "AYO LLC" }],
  creator: "AYO LLC",
  publisher: "AYO LLC",
  metadataBase: new URL("https://ayollc.com"),
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="overflow-x-hidden overflow-y-auto">
        <GoogleAnalytics />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1623138489207682');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1623138489207682&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <AOSInit />
        <Toaster position="top-right" />
        <div className="flex min-h-full flex-col">
          <AnnouncementBar />
          <main className="grow overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
