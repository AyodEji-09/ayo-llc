import { AppCarousel } from "@/components/common/app-carousel";

interface BookPublishingSectionProps {
  subtitle?: string;
  header?: string;
  description?: string | React.ReactNode;
}

export const BookPublishingSection = ({
  subtitle = "Lorem Ipsum Dolor",
  header = "Book Publishing",
  description = (
    <>
      Discover our collection of published books, offering diverse
      <br className="hidden md:block" /> insights and knowledge across various
      topics.
    </>
  ),
}: BookPublishingSectionProps) => {
  return (
    <section>
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
