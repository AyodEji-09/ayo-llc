import { BookCard } from "@/components/common/book-card";
import { SearchBox } from "@/components/common/searchbox";
import { books } from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Publishing",
  description:
    "Discover our book publishing services at AYO LLC. Browse our collection of published books and learn how we can help you bring your story to life through professional publishing services.",
};

export default function BookPublishing() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      <section>
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-secondary font-semibold uppercase">
            Lorem ipsum dolor
          </p>
          <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
            Book Publishing
          </h2>
          <p className="text-primary mb-10 text-base font-normal sm:text-lg">
            Discover our expertly published books and explore a wide range of
            insightful titles across fiction, non-fiction, business, self-help,
            and more.
          </p>
          <SearchBox />
        </div>

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
