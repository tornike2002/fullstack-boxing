"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MainContainer from "@/app/(client)/[locale]/_components/MainContainer";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

function HomeHero() {
  const t = useTranslations("hero");

  const { scrollY } = useScroll();

  const parallaxY = useTransform(scrollY, [0, 300], ["0%", "-20%"]);

  return (
    <section className="bg-black relative">
      <MainContainer>
        <div className="relative h-screen w-full overflow-hidden">
          <motion.div
            style={{
              backgroundImage: "url('/assets/home.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              y: parallaxY,
            }}
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <motion.div
            className="absolute inset-0 bg-black opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-8 md:px-16"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t("main-title")}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-6">
              {t("sub-title")}
            </h2>
            <Link href={"/contact"}>
              <button
                className="text-white text-sm font-semibold py-3 px-10
                   border-white border hover:bg-white
                   hover:text-black transition-all duration-300 ease"
              >
                {t("btn")}
              </button>
            </Link>
          </motion.div>
        </div>
      </MainContainer>
    </section>
  );
}

export default HomeHero;
