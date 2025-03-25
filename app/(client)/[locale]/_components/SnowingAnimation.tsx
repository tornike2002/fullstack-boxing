"use client";
import { motion } from "framer-motion";

const BoxingEnergyEffect = () => {
  const particles = Array.from({ length: 80 }); // Number of falling sparks/sweat
  const containerWidth = 200;
  const containerHeight = 724;

  return (
    <div
      className="relative w-[200px] h-[724px] overflow-hidden hidden 2xl:block"
      style={{ top: "0", left: "0", pointerEvents: "none", zIndex: 0 }}
    >
      {particles.map((_, i) => {
        const randomX = Math.random() * containerWidth; // Random horizontal position
        const randomDelay = Math.random() * 2; // Staggered animation effect
        const randomSpeed = 5 + Math.random() * 4; // Faster falling effect
        const randomSize = Math.random() * 3 + 2; // Varying particle size
        const randomOpacity = Math.random() * 0.5 + 0.5; // Semi-transparent effect
        const colorVariants = ["#ff4500", "#ffcc00", "#ffffff"]; // Fire/Sweat colors
        const randomColor =
          colorVariants[Math.floor(Math.random() * colorVariants.length)];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomX}px`,
              backgroundColor: randomColor,
              opacity: randomOpacity,
            }}
            initial={{ y: -200, opacity: 0, scale: 0.5 }} // Starts smaller for impact
            animate={{
              y: containerHeight,
              opacity: randomOpacity,
              scale: [1, 1.2, 1], // Slight pulsing effect
              x: ["0px", "2px", "-2px", "0px"], // Slight shaking effect
            }}
            transition={{
              duration: randomSpeed,
              repeat: Infinity,
              ease: "linear",
              delay: randomDelay,
            }}
          />
        );
      })}
    </div>
  );
};

export default BoxingEnergyEffect;
