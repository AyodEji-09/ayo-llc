import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <AnnouncementBar />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow overflow-hidden">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
