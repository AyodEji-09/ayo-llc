import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { AOSInit } from "@/components/common/aos-init";

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
        <AOSInit />
        <div className="flex min-h-full flex-col">
          <main className="grow overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
