import { AppCarousel } from "@/components/common/app-carousel";

interface BookPublishingSectionProps {
  subtitle?: string;
  header?: string;
  description?: string | React.ReactNode;
}

export const BookPublishingSection = ({
  subtitle = "DISCOVER EXCELLENCE IN PUBLISHING",
  header = "Some of the Books We've Published",
  description = (
    <>
      A selection of published works that reflects the range, care, and{" "}
      <br className="hidden md:block" /> craftsmanship we bring to every
      publishing project.
    </>
  ),
}: BookPublishingSectionProps) => {
  return (
    <section id="book-publishing">
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <p className="text-secondary font-semibold uppercase">{subtitle}</p>
        <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
          {header}
        </h2>
        <p className="text-primary text-base font-normal sm:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-16 sm:mt-20" data-aos="fade-up" data-aos-delay="200">
        <AppCarousel type="book" />
      </div>
    </section>
  );
};
