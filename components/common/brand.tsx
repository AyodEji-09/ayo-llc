import Link from "next/link";
import Image from "next/image";

export const Brand = ({ logoBlue }: { logoBlue?: boolean }) => {
  return (
    <Link href="/">
      <Image
        src={logoBlue ? "/images/AYO_LLC_LOGO.png" : "/images/logo-white.png"}
        alt="AYO LLC Logo"
        width={60}
        height={30}
        priority
      />
    </Link>
  );
};
