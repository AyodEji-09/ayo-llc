import Image from "next/image";
import { Button } from "@/components/ui/button";

export const BookCard = () => {
  return (
    <div className="w-full">
      <div className="relative h-60 w-full overflow-hidden rounded-sm">
        <Image
          src="/images/book-sample.png"
          alt="Book"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5 pt-3 pb-4">
        <p className="text-sm leading-snug text-[#040815] sm:text-base">
          Writing and Self Publishing
        </p>
        <Button className="bg-secondary h-auto w-full rounded-sm px-4 py-2.5 text-sm text-white transition-colors duration-300 ease-in-out hover:border hover:border-yellow-500 hover:bg-white hover:text-yellow-500">
          Preview
        </Button>
      </div>
    </div>
  );
};
