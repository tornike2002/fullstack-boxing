"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  // Languages list
  const languages = [
    { code: "en", label: "EN" },
    { code: "ka", label: "KA" },
    { code: "ru", label: "RU" },
  ]; 

  // Extract the current language from the URL
  const currentLang = pathname.split("/")[1];

  // Handle the language change
  const handleChange = (lang: string) => {
    if (lang !== currentLang) {
      const newPath = pathname.replace(/^\/(en|ka|ru)/, `/${lang}`);
      router.push(newPath, { scroll: false });
      router.refresh()
    }
  };

  // Update the selected language when the URL changes
  useEffect(() => {
    if (currentLang !== selectedLanguage) {
      setSelectedLanguage(currentLang);
    }
  }, [currentLang]);

  return (
    <Select value={selectedLanguage} onValueChange={handleChange}>
      <SelectTrigger className="w-[70px] bg-black text-white border-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-black text-white border-white">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
