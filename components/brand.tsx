import Link from "next/link";
import Image from "next/image";

export const Brand = () => {
  return (
    <Link href="/">
      <Image
        src="/images/AYO_LLC_LOGO.png"
        alt="AYO LLC Logo"
        width={32}
        height={32}
      />
    </Link>
  );
};
