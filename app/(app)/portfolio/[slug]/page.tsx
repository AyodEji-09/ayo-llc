import PortfolioCard from "@/components/common/portfolio-card";
import { services } from "@/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Portfolio({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  console.log(params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      <section>
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-secondary font-semibold uppercase">
            OUR PORTFOLIO
          </p>
          <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
            {service.title}
          </h2>
          <p className="text-primary mb-10 text-base font-normal sm:text-lg">
            {service.description}
          </p>
        </div>

        <div className="mt-16 grid justify-items-center gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="w-full"
            >
              <PortfolioCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
