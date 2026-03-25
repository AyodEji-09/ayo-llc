import { AppCarousel } from "@/components/common/app-carousel";

interface ReviewsSectionProps {
  subtitle?: string;
  header?: string;
  description?: string | React.ReactNode;
}

export const ReviewsSection = ({
  subtitle = "WHAT OUR CLIENTS SAYS",
  header = "Our Clients Kind Words",
  description = (
    <>
      Choose Ayo LLC - where innovative technology meets
      <br className="hidden md:block" />
      exceptional
    </>
  ),
}: ReviewsSectionProps) => {
  return (
    <section>
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          {subtitle}
        </p>
        <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
          {header}
        </h2>
        <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-16 sm:mt-20" data-aos="fade-up" data-aos-delay="200">
        <AppCarousel type="review" />
      </div>
    </section>
  );
};
