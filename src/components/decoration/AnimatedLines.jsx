import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaRegSquare } from "react-icons/fa";

const AnimatedLines = () => {
  const lines = useMemo(
    () => [
      { width: "w-96", color: "bg-purplelin1" },
      { width: "w-60", color: "bg-purplelin2" },
      { width: "w-80", color: "bg-purplelin3" },
      { width: "w-40", color: "bg-purplelin4" },
      { width: "w-52", color: "bg-purplelin5" },
      { width: "w-72", color: "bg-purplelin6" },
    ],
    []
  );

  const lineAnimation = {
    initial: { scaleX: 1 },
    animate: { scaleX: [1, 1.1, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  const squareAnimation = (clockwise = true) => ({
    animate: { rotate: clockwise ? 360 : -360 },
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  });

  return (
    <div className="relative -space-y-1.5 w-96">
      {lines.map(({ width, color }, index) => (
        <motion.div key={index} {...lineAnimation}>
          <div
            className={`${color} ${width} h-5 rounded-r-xl ${
              index % 2 === 0 ? "drop-shadow-xl" : "shadow-xl"
            }`}
          />
        </motion.div>
      ))}

      <div className="absolute inset-5 flex justify-start items-center space-x-6 pt-10">
        <motion.div {...squareAnimation(true)} className="absolute">
          <FaRegSquare className="text-purpletoy3 text-8xl rotate-12" />
        </motion.div>
        <motion.div {...squareAnimation(false)}>
          <FaRegSquare className="text-purpletoy2 text-5xl rotate-45" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedLines;
