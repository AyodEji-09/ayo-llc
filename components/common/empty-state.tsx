import React from "react";
import Image from "next/image";

export const EmptyState = () => {
  return (
    <div
      className="animate-fade-in mx-auto flex max-w-sm items-center justify-center py-20"
      data-aos="fade-up"
    >
      <div className="relative h-32 w-48">
        <Image
          src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          alt="No Data"
          fill
          priority
          className="object-contain opacity-70"
        />
      </div>
    </div>
  );
};
