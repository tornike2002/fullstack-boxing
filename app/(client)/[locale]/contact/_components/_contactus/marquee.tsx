"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import MainContainer from "../../../_components/MainContainer";

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
    <MainContainer>
      <div className="pt-32 w-full">
        <div className="relative mx-auto  flex h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
          <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
            This is your life and it&apos;s ending one{" "}
            <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
              moment
            </span>{" "}
            at a time.
          </h2>

          {/* overlay */}
          <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={images}
          />
        </div>
      </div>
    </MainContainer>
  );
}
