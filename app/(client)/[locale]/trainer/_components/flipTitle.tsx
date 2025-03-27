import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

export function FlipTitle() {
  const locale = useLocale() as "en" | "ka" | "ru";
  const t = useTranslations("trainer");
  const translations = {
    en: ["Body", "Mind", "Life"],
    ka: ["სხეულისთვის", "გონებისთვის", "ცხოვრებისთვის"],
    ru: ["Тело", "Разум", "Жизнь"],
  };

  const words = translations[locale];

  return (
    <div className="flex justify-center items-center px-4 font-mono tracking-tight mb-10 bg-black text-white py-6 w-full">
      <div className="text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-200">
        {t("animatedTitle")} <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipTitle;
