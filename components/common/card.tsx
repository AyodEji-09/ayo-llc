import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  slug: string;
  title: string;
  description: string;
}

export const Card = ({ imageUrl, slug, title, description }: CardProps) => {
  const showViewLink = [
    "social-media-management",
    "web-design-management",
    "book-publishing",
  ].includes(slug);

  return (
    <Link href={`/portfolio/${slug}`} className="block w-full">
      <div className="group w-full max-w-sm cursor-pointer">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={382}
            height={382}
            className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-5 space-y-2.5 transition-transform duration-500 group-hover:-translate-y-1">
          <h2 className="group-hover:text-secondary text-xl font-semibold tracking-tight text-[#040815] transition-colors duration-300">
            {title}
          </h2>
          <p className="text-primary leading-relaxed">{description}</p>

          {/* Conditionally render 'View Portfolio' link only for services with portfolio pages */}
          {showViewLink && (
            <div className="text-secondary inline-flex items-center gap-1.5 pt-1 text-sm font-semibold transition-all duration-300 group-hover:underline">
              <span>View Portfolio</span>
              <MoveUpRight size={15} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
