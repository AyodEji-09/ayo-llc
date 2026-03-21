import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/images/bg.png"
        alt="Background Image"
        fill
        priority
        className="-z-10 object-cover"
      />
      <Navbar home />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center space-y-5 px-4 text-center">
        <h1 className="bg-[linear-gradient(176.64deg,#FFFFFF_15.1%,#CEC9FF_88%)] bg-clip-text text-6xl font-bold text-transparent">
          Welcome to AYO LLC, Where Innovation Meets Excellence
        </h1>
        <p className="text-xl font-normal text-white">
          Your one-stop finance empower platform.
          <br /> Manage all your business expenses with our supafast app.
        </p>
      </div>
    </section>
  );
}
