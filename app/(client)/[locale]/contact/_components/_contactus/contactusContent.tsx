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
      <motion.div
        variants={fadeInVariants}
        className="w-full max-w-2xl text-white text-left"
      >
        <motion.h1
          variants={fadeInVariants}
          className="text-[32px] md:text-[40px] font-bold text-white"
        >
          {title[locale]}
        </motion.h1>

        <motion.div variants={fadeInVariants} className="mt-4 space-y-3">
          <div className="text-lg md:text-xl flex items-center space-x-2">
            <strong className="text-gray-200 font-sans">{t("email")}:</strong>
            <span className="text-gray-400 font-bold text-xl">{email}</span>
          </div>
          <div className="text-lg md:text-xl flex items-center space-x-2">
            <strong className="text-gray-200 font-sans">{t("phone")}:</strong>
            <span className="text-gray-400 font-bold text-xl">{phone}</span>
          </div>
          <div className="text-lg md:text-xl flex items-center space-x-2">
            <strong className="text-gray-200 font-sans">{t("address")}:</strong>
            <span className="text-gray-400 font-bold text-xl">
              {address[locale]}
            </span>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div variants={fadeInVariants} className="mt-8">
          <motion.h2
            variants={fadeInVariants}
            className="text-[28px] md:text-[36px] font-bold"
          >
            About Club
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400">{t("desc")}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactusContent;
