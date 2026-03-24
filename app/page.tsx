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
      <section className="relative min-h-screen">
        <Image
          src="/images/bg.png"
          alt="Background Image"
          fill
          priority
          className="-z-10 object-cover"
        />
        <Navbar home />

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6">
          <h1 className="bg-[linear-gradient(176.64deg,#FFFFFF_15.1%,#CEC9FF_88%)] bg-clip-text text-4xl leading-[1.1] font-bold tracking-tight text-transparent sm:text-5xl sm:leading-[1.08] md:text-6xl md:leading-[1.06]">
            Welcome to AYO LLC, Where Innovation Meets Excellence
          </h1>
          <p className="max-w-xl text-lg leading-relaxed font-normal text-white sm:text-xl">
            Your one-stop finance empower platform.
            <br /> Manage all your business expenses with our supafast app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-4 pt-14 pb-28 sm:space-y-28 sm:px-6 lg:space-y-32">
        {/* partners */}
        <PartnersMarquee partners={partners} />

        {/* about */}
        <section>
          <GridWrapper
            subtitle="Lorem Ipsum Dolor"
            header="About AYO LLC"
            description="
              Lorem ipsum dolor sit amet consectetur. Viverra orci auctor
              vulputate duis enim imperdiet viverra amet. Sem facilisis mattis
              mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl
              condimentum sed placerat eget lacus."
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
