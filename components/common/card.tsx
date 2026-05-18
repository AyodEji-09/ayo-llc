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
    <Link href={`/portfolio/${slug}`}>
      <div className="group w-full max-w-sm cursor-pointer">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={382}
            height={382}
            className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex cursor-pointer items-center gap-2 text-lg text-white underline">
              View Portfolio <MoveUpRight size={20} />
            </span>
          </div>
        </div>

        <div className="mt-5 space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-[#040815]">
            {title}
          </h2>
          <p className="text-primary leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
};
