import { ContactTypes } from "@/types/contactTypes";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

function ContactusContent({ title, email, phone, address }: ContactTypes) {
  const t = useTranslations("contact");
  const locale = useLocale() as "en" | "ka" | "ru";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid place-items-center p-6"
    >
      <motion.div variants={fadeInVariants} className="w-full max-w-2xl text-white text-left">
        <motion.h1
          variants={fadeInVariants}
          className="text-[32px] md:text-[40px] font-bold text-white"
        >
          {title[locale]}
        </motion.h1>

        <motion.div variants={fadeInVariants} className="mt-4 space-y-3">
          <p className="text-lg md:text-xl">
            <strong className="text-gray-300">{t("email")}:</strong> {email}
          </p>
          <p className="text-lg md:text-xl">
            <strong className="text-gray-300">{t("phone")}:</strong> {phone}
          </p>
          <p className="text-lg md:text-xl">
            <strong className="text-gray-300">{t("address")}:</strong> {address[locale]}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactusContent;
