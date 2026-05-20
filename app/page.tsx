import { GridWrapper } from "@/components/common/grid-wrapper";
import { Navbar } from "@/components/layout/navbar";
import { partners } from "@/data";
import Image from "next/image";
import { PartnersMarquee } from "@/components/common/partners-marquee";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { BookPublishingSection } from "@/components/sections/book-publishing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/bg.png"
          alt="Background Image"
          fill
          priority
          fetchPriority="high"
          className="-z-10 object-cover"
        />
        <Navbar home />

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="bg-[linear-gradient(176.64deg,#FFFFFF_15.1%,#CEC9FF_88%)] bg-clip-text text-4xl leading-[1.1] font-bold tracking-tight text-transparent sm:text-5xl sm:leading-[1.08] md:text-6xl md:leading-[1.06]"
          >
            Welcome to AYO LLC, Where Innovation Meets Excellence
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="max-w-xl text-lg leading-relaxed font-normal text-white sm:text-xl"
          >
            A creative agency delivering world-class solutions.
            <br />
            Design, digital excellence, and publishing for modern brands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-4 pt-14 pb-28 sm:space-y-28 sm:px-6 lg:space-y-32">
        {/* partners */}
        <div data-aos="fade-up">
          <PartnersMarquee partners={partners} />
        </div>

        {/* about */}
        <section>
          <GridWrapper
            subtitle="ABOUT US"
            header="About AYO LLC"
            description="AYO LLC is a USA-based creative solutions agency headquartered in Riverside, California. For over five years, we have partnered with businesses and creators to transform ideas into impactful brands through innovative design, strategic content, and digital excellence."
            link={{ text: "Know more", url: "/about" }}
          />
        </section>

        {/* what we offer */}
        <ServicesSection />

        {/* why choose ayo llc */}
        <WhyChooseSection />

        {/* book publishing */}
        <BookPublishingSection />

        {/* reviews */}
        <ReviewsSection />
      </section>
    </>
  );
}
