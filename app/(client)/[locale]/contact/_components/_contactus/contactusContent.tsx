import { ContactTypes } from "@/types/contactTypes";
import {motion} from "framer-motion"
import { useLocale, useTranslations } from "next-intl";

function ContactusContent({title, email, phone, address}:ContactTypes) {
    const t = useTranslations("contact");
    const locale = useLocale() as "en" | "ka" | "ru";
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };
  
    const titleVariants = {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      },
    };
  
    const paragraphVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeInOut" },
      },
    };
  
    const cardVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };
  return (
    <motion.div

    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid md:grid-cols-1 grid-cols-1 gap-8 md:gap-2 place-items-center"
  >
    <motion.div
      variants={cardVariants}
      className="text-white flex flex-col items-start gap-6"
    >
      <motion.h1
        variants={titleVariants}
        className="text-[30px] mediumSm:text-[55px] font-bold"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {title[locale]}
      </motion.h1>

      <motion.p
        variants={paragraphVariants}
        className="text-[18px] mediumSm:text-[22px]"
      >
        <strong>{t("email")}:</strong> {email}
      </motion.p>

      <motion.p
        variants={paragraphVariants}
        className="text-[18px] mediumSm:text-[22px]"
      >
        <strong>{t("phone")}:</strong> {phone}
      </motion.p>

      <motion.p
        variants={paragraphVariants}
        className="text-[18px] mediumSm:text-[22px]"
      >
        <strong>{t("address")}:</strong> {address[locale]}
      </motion.p>
    </motion.div>
  </motion.div>
  )
}

export default ContactusContent