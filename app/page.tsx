import { BenefitCard } from "@/components/benefit-card";
import { AppCarousel } from "@/components/app-carousel";
import { Card } from "@/components/card";
import { GridWrapper } from "@/components/grid-wrapper";
import { Navbar } from "@/components/navbar";
import { services, partners, benefits } from "@/data";
import Image from "next/image";
import { PartnersMarquee } from "@/components/partners-marquee";

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

      <section className="mx-auto max-w-7xl space-y-24 px-4 pt-14 pb-28 sm:space-y-28 sm:px-6 lg:space-y-32">
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
        <section>
          <GridWrapper
            subtitle="What We Offer"
            header="Lorem, Ipsum, Remsum"
            description="
              Empowering businesses with cutting-edge tech solutions to drive
              innovation an Empowering businesses with cutting-edge tech."
          />

          <div className="mt-16 grid justify-items-center gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {services.map((benefit, idx) => (
              <Card key={idx} {...benefit} />
            ))}
          </div>
        </section>

        {/* why choose ayo llc */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
              Why Choose Ayo LLC
            </p>
            <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
              Easy, Simple, Affordable
            </h2>
            <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
              Choose Ayo LLC - where innovative technology meets exceptional
              solutions <br />
              for a smarter future.
            </p>
          </div>

          <div className="mt-16 grid justify-items-center gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
            {benefits.map((benefits, idx) => (
              <BenefitCard key={idx} {...benefits} />
            ))}
          </div>
        </section>

        {/* book publishing */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-secondary font-semibold uppercase">
              Lorem Ipsum Dolor
            </p>
            <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
              Book Publishing
            </h2>
            <p className="text-primary text-base font-normal sm:text-lg">
              Discover our collection of published books, offering diverse
              <br /> insights and knowledge across various topics.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <AppCarousel type="book" />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
              WHAT OUR CLIENTS SAYS
            </p>
            <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
              Our Clients Kind Words
            </h2>
            <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
              Choose Ayo LLC - where innovative technology meets <br />
              exceptional
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <AppCarousel type="review" />
          </div>
        </section>
      </section>
    </>
  );
}
