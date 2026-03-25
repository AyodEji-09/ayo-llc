import { ServicesSection } from "@/components/sections/services-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AYO LLC's comprehensive range of creative services including social media management, website design, graphic design, book publishing, illustration, animation, and video production.",
};

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      <ServicesSection />
    </div>
  );
}
