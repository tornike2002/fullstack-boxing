"use client";
import { useGetContact } from "@/hooks/useGetContact";
import NoDataAnimation from "../../../_components/noDataAnimation";
import { motion } from "framer-motion";
import { ContactTypes } from "@/types/contactTypes";
import SmallerContainer from "../../../_components/smallerContianer";
import { useLocale, useTranslations } from "next-intl";
import ContactUsSkeleton from "./contactusSkeleton";

function ContactUs() {
  const { data, error, isLoading, isError } = useGetContact();
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

  if (isLoading) return <ContactUsSkeleton />;
  if (!data || data.length === 0) return <NoDataAnimation />;
  if (isError) return <div>{error.message}</div>;

  return (
    <section className="bg-black mx-auto p-4 min-h-screen pt-32">
      <SmallerContainer>
        <motion.div>
          {data.map((contact: ContactTypes) => (
            <motion.div
              key={contact.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-2 place-items-center"
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
                  {contact.title[locale]}
                </motion.h1>

                <motion.p
                  variants={paragraphVariants}
                  className="text-[18px] mediumSm:text-[22px]"
                >
                  <strong>{t("email")}:</strong> {contact.email}
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="text-[18px] mediumSm:text-[22px]"
                >
                  <strong>{t("phone")}:</strong> {contact.phone}
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="text-[18px] mediumSm:text-[22px]"
                >
                  <strong>{t("address")}:</strong> {contact.address[locale]}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </SmallerContainer>
    </section>
  );
}

export default ContactUs;
