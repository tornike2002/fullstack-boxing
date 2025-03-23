import React from "react";
import { motion } from "framer-motion";
import { InstructorType } from "@/types/instructorTypes";
import { useLocale } from "next-intl";
function InstructorContent({ instructor }: { instructor: InstructorType }) {
  const locale = useLocale() as "en" | "ka" | "ru";
  return (
    <div className="flex flex-col gap-6  mt-10 justify-center items-center w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-full text-center text-3xl md:text-6xl font-bold py-4"
      >
        {instructor.header[locale]}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch mb-16 w-full">
        <div className="w-full md:w-1/2 flex items-center px-6 md:pl-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 max-w-prose leading-relaxed">
              {instructor.description[locale]}
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={instructor.image}
              alt="Instructor"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-lg overflow-hidden opacity-75"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InstructorContent;
