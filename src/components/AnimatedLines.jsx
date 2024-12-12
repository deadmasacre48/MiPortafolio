import React from "react";
import { motion } from "framer-motion";
import { FaRegSquare } from "react-icons/fa";

const AnimatedLines = () => {
  const lines = [
    { className: "bg-purplelin1 w-96 h-5 rounded-r-xl drop-shadow-xl" },
    { className: "bg-purplelin2 w-60 h-5 rounded-r-xl shadow-xl" },
    { className: "bg-purplelin3 w-80 h-5 rounded-r-xl drop-shadow-xl" },
    { className: "bg-purplelin4 w-40 h-5 rounded-r-xl shadow-xl" },
    { className: "bg-purplelin5 w-52 h-5 rounded-r-xl drop-shadow-xl" },
    { className: "bg-purplelin6 w-72 h-5 rounded-r-xl shadow-xl" },
  ];

  return (
    <div className="relative -space-y-1.5 w-96">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={line.className} />
        </motion.div>
      ))}
      <div className="absolute inset-5 flex justify-start items-center space-x-6 pt-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute"
        >
          <FaRegSquare className="text-purpletoy3 text-8xl rotate-12" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <FaRegSquare className="text-purpletoy2 text-5xl rotate-45" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedLines;
