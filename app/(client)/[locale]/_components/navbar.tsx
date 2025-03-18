"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NavLinks } from "../../../../lib/links";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import MainContainer from "./MainContainer";

function Navbar() {
  const t = useTranslations("NavLinks");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-[rgba(0,0,0,0.9)]  fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <MainContainer>
        <div className="text-white flex justify-between items-center px-5">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/JG-FREE.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-auto h-auto"
                priority
              />
            </Link>
            <h2 className="font-bold">{t("logo-title")}</h2>
          </div>
          <div className="hidden items-center gap-4 pl-10 sm:flex font-semibold">
            {NavLinks.map((link) => (
              <Link key={link.id} href={link.path}>
                {t(link.name)}
              </Link>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Navbar;
