"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLinks } from "@/lib/links";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavLinks");
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const burgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0, transition: { type: "spring", stiffness: 150, damping: 25 } },
  };

  const closeButtonVariants = {
    closed: { scale: 0 },
    open: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative">
      <motion.div
        className="flex flex-col justify-around items-center w-8 h-8 cursor-pointer z-50"
        onClick={toggleMenu}
        variants={burgerVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full h-1 bg-white"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-full h-1 bg-white"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-full h-1 bg-white"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 1, rotate: -90, y: 5 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="fixed inset-0 bg-black z-50 h-screen"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
      >
        <div className="flex justify-end p-8">
          <motion.button
            className="text-white text-3xl"
            onClick={toggleMenu}
            variants={closeButtonVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            &times;
          </motion.button>
        </div>
        <motion.div
          className="flex flex-col items-center mt-16 space-y-8"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {NavLinks.map(({ id, path, name }) => (
            <Link
              key={id}
              href={path}
              className="text-white text-2xl font-semibold font-mono uppercase hover:text-gray-300 transition-all transform hover:scale-105 border-b-2 border-white pb-2"
              onClick={toggleMenu}
            >
              {t(name)}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BurgerMenu;
