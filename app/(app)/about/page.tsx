import { GridWrapper } from "@/components/common/grid-wrapper";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about AYO LLC - Your trusted creative solutions partner. Discover our mission, values, and commitment to delivering exceptional services.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      {/* about  */}
      <section>
        <GridWrapper
          header="About AYO LLC"
          subtitle="LOREM IPSUM DOLOR"
          description="AYO LLC is a USA-based creative solutions agency headquartered in Riverside, California. For over five years, we have partnered with businesses and creators to transform ideas into impactful brands through innovative design, strategic content, and digital excellence."
        />

        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-primary mt-6 text-base leading-relaxed font-normal sm:text-lg">
            We specialize in delivering high-quality services including Website
            Design, Social Media Management, Graphic Design, Book Publishing,
            Illustration, Animation, and Video Production. At AYO LLC,
            creativity meets excellence. We don’t just create, we help your
            brand tell its story, connect with its audience, and grow with
            purpose. Let’s build something extraordinary together.
          </p>
        </div>
      </section>

      {/* why choose ayo llc */}
      <WhyChooseSection />

      {/* reviews */}
      <ReviewsSection />
    </div>
  );
}
