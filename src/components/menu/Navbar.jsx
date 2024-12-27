import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegChessKing,
  FaRegChessKnight,
  FaRegChessRook,
  FaRegChessBishop,
} from "react-icons/fa6";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState(0); // Estado para la sección activa

  const navItems = [
    { icon: FaRegChessKing, text: "HOME" },
    { icon: FaRegChessKnight, text: "SKILLS" },
    { icon: FaRegChessRook, text: "PROJECTS" },
    { icon: FaRegChessBishop, text: "CONTACT" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-12 right-8 z-50 flex flex-col pr-10 font-sans"
    >
      <div className="flex flex-row space-x-14">
        {navItems.map((item, index) => (
          <motion.div
            key={item.text}
            onHoverStart={() => setHoveredItem(index)}
            onHoverEnd={() => setHoveredItem(null)}
            onClick={() => setActiveSection(index)}
            className="group cursor-pointer flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex items-center">
              <item.icon className="mr-2 text-white fill-white" size={16} />
              <span className="text-lg font-light text-white no-underline">
                {item.text}
              </span>
            </div>
            <div className="relative">
              {/* Línea de hover */}
              <motion.div
                className="h-0.5 bg-white mt-1 absolute w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredItem === index ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              {/* Línea de sección activa */}
              <motion.div
                className="h-0.5 bg-white mt-1"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: activeSection === index ? 1 : 0,
                  opacity: activeSection === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
