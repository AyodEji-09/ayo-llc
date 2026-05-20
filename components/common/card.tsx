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
          <h2 className="text-xl font-semibold tracking-tight text-[#040815] transition-colors duration-300 group-hover:text-secondary">
            {title}
          </h2>
          <p className="text-primary leading-relaxed">{description}</p>
          
          {/* Always visible 'View Portfolio' link for all screen sizes, perfect for mobile/touch screens */}
          <div className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm pt-1 transition-all duration-300 group-hover:underline">
            <span>View Portfolio</span>
            <MoveUpRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
};
