"use client";

import { Link } from "@/navigation";
import { AnnouncementTypes } from "@/types/homeTypes";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AnnouncementContent({ title, description, image }: AnnouncementTypes) {
  const t = useTranslations("hero");
  const locale = useLocale() as "en" | "ka" | "ru";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-2 place-items-center"
    >
      <motion.div
        variants={fadeInVariant}
        className="text-white flex flex-col items-center gap-2"
      >
        <h1 className="text-[25px] mediumSm:text-[35px] text-center font-bold">
          {locale === "en" ? title.en : locale === "ka" ? title.ka : title.ru}
        </h1>
        <p className="text-xs max-w-[70%] text-center ">
          {locale === "en" ? description.en : locale === "ka" ? description.ka : description.ru}
        </p>
        <Link href={"/contact"}>
          <button className="text-white text-sm font-semibold py-3 px-10 border-white border hover:bg-white hover:text-black transition-all duration-300 ease mt-5">
            {t("btn")}
          </button>
        </Link>
      </motion.div>

      <motion.div variants={fadeInVariant}>
        <Image
          src={image}
          alt="announcement"
          className="object-cover object-center bg-no-repeat rounded-md filter brightness-75"
          width={500}
          height={600}
        />
      </motion.div>
    </motion.div>
  );
}

export default AnnouncementContent;
