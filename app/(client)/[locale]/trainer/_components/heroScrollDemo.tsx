"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useTranslations } from "next-intl";


export function HeroScrollDemo() {
  const t = useTranslations("tablet")
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
        <h1 className="text-4xl font-semibold text-white dark:text-white">
        {t("title")} <br />
          <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          {t("subtitle")}
          </span>
        </h1>
          </>
        }
      >
        <iframe
          src="https://www.youtube.com/embed/89Jt1gDXHs4"
          className="mx-auto rounded-2xl w-full h-[400px] md:h-[600px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </ContainerScroll>
    </div>
  );
}
