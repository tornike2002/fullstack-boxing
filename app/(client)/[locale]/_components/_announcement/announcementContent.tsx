"use client";

import { Link } from "@/navigation";
import { AnnouncementTypes } from "@/types/homeTypes";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AnnouncementContent({ title, description, image }: AnnouncementTypes) {
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
          {title[locale]}
        </h1>
        <p className="text-xs max-w-[70%] text-center ">
          {description[locale]}
        </p>
        <Link href={"/contact"}>
          <button className="text-white text-sm font-semibold py-3 px-10 border-white border hover:bg-white hover:text-black transition-all duration-300 ease mt-5">
            LEARN MORE & ABOUT US
          </button>
        </Link>
      </motion.div>

      <motion.div variants={fadeInVariant}>
        <Image
          src={image}
          alt="announcement"
          className="object-cover object-center bg-no-repeat rounded-md"
          width={500}
          height={600}
        />
      </motion.div>
    </motion.div>
  );
}

export default AnnouncementContent;
