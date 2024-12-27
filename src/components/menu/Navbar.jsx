import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegChessKing,
  FaRegChessKnight,
  FaRegChessRook,
  FaRegChessBishop,
  FaBars,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function NavbarMenu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"].map((id) =>
      document.getElementById(id)
    );

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(
            (section) => section === entry.target
          );
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () =>
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
  }, []);

  const navItems = [
    { icon: FaRegChessKing, text: "HOME", id: "home" },
    { icon: FaRegChessKnight, text: "SKILLS", id: "skills" },
    { icon: FaRegChessRook, text: "PROJECTS", id: "projects" },
    { icon: FaRegChessBishop, text: "CONTACT", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: -20,
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-50 font-sans w-full md:w-auto"
    >
      {isMobile && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 text-white p-2 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      )}

      <AnimatePresence>
        {(!isMobile || isOpen) && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`
              ${
                isMobile
                  ? "flex flex-col bg-black/90 backdrop-blur-sm min-h-screen w-full pt-16"
                  : "flex flex-row space-x-14 p-12"
              }
            `}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.text}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => {
                  scrollToSection(item.id);
                  console.log("item.id", item.id);
                  setActiveSection(index);
                  if (isMobile) setIsOpen(false);
                }}
                className={`
                  group cursor-pointer flex flex-col items-center
                  ${isMobile ? "my-4" : ""}
                `}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center">
                  <item.icon className="mr-2 text-white fill-white" size={16} />
                  <span className="text-lg font-light text-white no-underline">
                    {item.text}
                  </span>
                </div>
                <div className="relative w-full">
                  <motion.div
                    className="h-0.5 bg-white mt-1 absolute w-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredItem === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavbarMenu;
