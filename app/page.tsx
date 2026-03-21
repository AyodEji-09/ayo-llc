import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative  min-h-screen">
      <Image
        src="/images/bg.png"
        alt="Background Image"
        fill
        priority
        className="object-cover -z-10"
      />
      <Navbar home />

      <div className="flex flex-col items-center space-y-5 justify-center text-center min-h-screen max-w-4xl mx-auto px-4">
        <h1 className="font-bold text-6xl bg-[linear-gradient(176.64deg,#FFFFFF_15.1%,#CEC9FF_88%)] bg-clip-text text-transparent">
          Welcome to AYO LLC, Where Innovation Meets Excellence
        </h1>
        <p className="font-normal text-xl text-white">
          Your one-stop finance empower platform.
          <br /> Manage all your business expenses with our supafast app.
        </p>
      </div>
    </section>
  );
}
