"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import PortfolioCard from "@/components/common/portfolio-card";
import { BookCard } from "@/components/common/book-card";
import { EmptyState } from "@/components/common/empty-state";
import { services, books, webProjects } from "@/data";

type FilterSlug = "all" | (typeof services)[number]["slug"];

// For now, only include services that have portfolio content (or are intended to be shown)
const allowedFilterSlugs: FilterSlug[] = [
  "social-media-management",
  "web-design-management",
  "book-publishing",
];

const filters: { label: string; slug: FilterSlug }[] = [
  { label: "All", slug: "all" },
  ...services
    .filter((s) => allowedFilterSlugs.includes(s.slug as FilterSlug))
    .map((s) => ({ label: s.title, slug: s.slug as FilterSlug })),
];

// Helper to render section headers with optional "View All" link
const SectionHeader = ({
  title,
  slug,
  showViewAll,
}: {
  title: string;
  slug: string;
  showViewAll: boolean;
}) => (
  <div className="mb-8 flex items-center justify-between" data-aos="fade-up">
    <h2 className="text-2xl font-bold text-[#040815]">{title}</h2>
    {showViewAll && (
      <Link
        href={`/portfolio/${slug}`}
        className="text-secondary inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
      >
        View All <MoveUpRight size={15} />
      </Link>
    )}
  </div>
);

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterSlug>("all");

  const hasContent = (slug: string) =>
    slug === "web-design-management" || slug === "book-publishing";

  const showAll = activeFilter === "all";

  // Limit to 3 items in "All" view, show everything when filtered
  const displayedWebProjects = showAll ? webProjects.slice(0, 3) : webProjects;
  const displayedBooks = showAll ? books.slice(0, 3) : books;

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pt-16 pb-28 sm:px-6 sm:pt-20 lg:px-8">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            OUR WORK
          </p>
          <h1 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
            Portfolio
          </h1>
          <p className="text-primary text-base font-normal sm:text-lg">
            Explore our creative work across web design, book publishing, social
            media management, and more.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-auto max-w-5xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              onClick={() => setActiveFilter(filter.slug)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-2.5 ${
                activeFilter === filter.slug
                  ? "bg-secondary border-secondary text-white shadow-md"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Content */}
      <section>
        {/* Web Design Projects */}
        {(showAll || activeFilter === "web-design-management") &&
          webProjects.length > 0 && (
            <div className="mb-16">
              <SectionHeader
                title="Web Design & Management"
                slug="web-design-management"
                showViewAll={showAll && webProjects.length > 3}
              />
              <div className="grid justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
                {displayedWebProjects.map((project, i) => (
                  <div
                    key={`web-${i}`}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="w-full"
                  >
                    <PortfolioCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Book Publishing */}
        {(showAll || activeFilter === "book-publishing") &&
          books.length > 0 && (
            <div className="mb-16">
              <SectionHeader
                title="Book Publishing"
                slug="book-publishing"
                showViewAll={showAll && books.length > 3}
              />
              <div className="grid justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
                {displayedBooks.map((book, i) => (
                  <div
                    key={`book-${i}`}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="w-full"
                  >
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Empty state for services without projects */}
        {!showAll && !hasContent(activeFilter) && (
          <div className="mt-4">
            <EmptyState />
          </div>
        )}
      </section>
    </div>
  );
}
