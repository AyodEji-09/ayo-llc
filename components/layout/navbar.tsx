"use client";

import Link from "next/link";
import Image from "next/image";
import { Brand } from "../common/brand";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { NAVIGATION_LINKS } from "@/data";
import { usePathname } from "next/navigation";

export const Navbar = ({ home }: { home?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onClose = () => setOpen(false);
  const isActiveLink = (url: string) =>
    url === "/"
      ? pathname === "/"
      : pathname === url || pathname.startsWith(`${url}/`);

  return (
    <header
      className={
        home
          ? "absolute top-0 z-20 h-20 w-full border-b border-white/20"
          : "relative z-20 h-20 w-full shrink-0 border-b border-white/20"
      }
    >
      {!home && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/nav-bg.png"
            alt="Navbar Background"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-top"
          />
        </div>
      )}
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-8">
            {NAVIGATION_LINKS.map((link, idx) => (
              <NavigationMenuItem key={idx}>
                <Link
                  href={link.url}
                  className={`text-base leading-snug transition-all duration-200 hover:-translate-y-0.5 ${isActiveLink(link.url) ? "text-[#7C5CFC] underline underline-offset-4" : "text-white hover:text-[#7C5CFC]"}`}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="border-0! bg-transparent! ring-0! focus:ring-0!"
            >
              <Menu className="size-6 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            showCloseButton={false}
            className="w-60 px-5 py-10 sm:w-75 md:hidden"
          >
            <div className="mb-8 flex items-center">
              <Brand logoBlue />
            </div>
            <SheetTitle className="sr-only" />
            <SheetDescription className="sr-only" />
            <nav className="flex flex-col space-y-4">
              <div className="flex flex-col items-start gap-6 text-base font-medium">
                {NAVIGATION_LINKS.map((item, idx) => (
                  <Link
                    href={item.url}
                    key={idx}
                    className={`transition-colors duration-200 ${
                      isActiveLink(item.url)
                        ? "text-secondary underline underline-offset-4"
                        : "hover:text-primary"
                    }`}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
