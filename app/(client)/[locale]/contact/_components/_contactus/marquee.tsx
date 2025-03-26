"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ContactUs from "./contactus";

export function Marquee() {
  const images = [
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
    "/assets/ggg.jpg",
  ];
  return (
    <section className="w-full">
      <div className="relative mx-auto  flex h-[700px] w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
        <ContactUs />
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
    </section>
  );
}
