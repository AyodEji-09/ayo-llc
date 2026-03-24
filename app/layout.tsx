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
  title: "AYO LLC",
  description:
    "Official website of AYO LLC, a leading company in innovative solutions. Explore our services, projects, and contact information.",
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
