import { BookCard } from "@/components/app-carousel";
import { SearchBox } from "@/components/searchbox";

export default function BookPublishing() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-secondary font-semibold uppercase">
            Lorem ipsum dolor
          </p>
          <h2 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
            Book Publishing
          </h2>
          <p className="text-primary mb-10 text-base font-normal sm:text-lg">
            Discover our collection of published books, offering diverse
            insights and knowledge across various topics.
          </p>
          <SearchBox />
        </div>

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(10)].map((_, i) => (
            <BookCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
