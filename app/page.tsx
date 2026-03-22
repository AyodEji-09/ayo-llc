import { BenefitCard } from "@/components/benefit-card";
import { AppCarousel } from "@/components/app-carousel";
import { Card } from "@/components/card";
import { GridWrapper } from "@/components/grid-wrapper";
import { Navbar } from "@/components/navbar";
import { services, partners, benefits } from "@/data";
import Image from "next/image";

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

        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center space-y-5 px-4 text-center">
          <h1 className="bg-[linear-gradient(176.64deg,#FFFFFF_15.1%,#CEC9FF_88%)] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            Welcome to AYO LLC, Where Innovation Meets Excellence
          </h1>
          <p className="text-lg font-normal text-white sm:text-xl">
            Your one-stop finance empower platform.
            <br /> Manage all your business expenses with our supafast app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-4 pt-12 pb-24 sm:px-6">
        {/* partners */}
        <section className="w-full overflow-hidden">
          <div className="flex w-max items-center gap-16">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative h-15 w-30 shrink-0">
                <Image
                  src={partner}
                  alt={`Partner ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

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

          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((benefit, idx) => (
              <Card key={idx} {...benefit} />
            ))}
          </div>
        </section>

        {/* why choose ayo llc */}
        <section>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-secondary font-semibold uppercase">
              Why Choose Ayo LLC
            </p>
            <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
              Easy, Simple, Affordable
            </h2>
            <p className="text-primary text-base font-normal sm:text-lg">
              Choose Ayo LLC - where innovative technology meets exceptional
              solutions <br />
              for a smarter future.
            </p>
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
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

          <div className="mt-12">
            <AppCarousel type="book" />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-secondary font-semibold uppercase">
              WHAT OUR CLIENTS SAYS
            </p>
            <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
              Our Clients Kind Words
            </h2>
            <p className="text-primary text-base font-normal sm:text-lg">
              Choose Ayo LLC - where innovative technology meets <br />
              exceptional
            </p>
          </div>

          <div className="my-12">
            <AppCarousel type="review" />
          </div>
        </section>
      </section>
    </>
  );
}
