"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export const PartnersMarquee = ({ partners }: { partners: string[] }) => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee autoFill gradient pauseOnHover>
        <div className="mr-12 flex items-center gap-x-12 sm:mr-16 sm:gap-x-16 md:mr-20 md:gap-x-20">
          {partners.map((partner, idx) => (
            <div key={idx} className="relative h-15 w-30">
              <Image
                src={partner}
                alt={`Partner ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
