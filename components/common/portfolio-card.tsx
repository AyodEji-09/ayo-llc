import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

const PortfolioCard = () => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 ring-0">
      <div className="relative aspect-video w-full">
        <Image
          src="/images/portfolio.png"
          alt="Event cover"
          fill
          priority
          className="z-20 w-full object-cover object-top"
        />
      </div>
      <CardHeader className="gap-2.5">
        <CardTitle>Comprehensive Spine and Joint</CardTitle>
        <CardDescription>
          Comprehensive Spine and Joint helps people of all ages overcome...
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-2 flex items-center justify-between gap-2">
        <div className="text-primary flex items-center gap-2 text-sm">
          <span>
            <MapPin size={18} />
          </span>
          <p>Michigan, USA</p>
        </div>
        <Button className="bg-secondary hover:bg-secondary/70 h-auto cursor-pointer rounded-sm px-4 py-2.5 text-sm text-white">
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
