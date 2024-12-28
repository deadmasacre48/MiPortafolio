import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import { FaAndroid, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";
import {
  SiFirebase,
  SiGodotengine,
  SiTailwindcss,
  SiUnrealengine,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    {
      icon: <FaReact size={65} />,
      category: "Desarrollo Web",
    },
    {
      icon: <FaAndroid size={65} />,
      category: "Desarrollo Android",
    },
    {
      icon: <FaFlutter size={65} />,
      category: "Desarrollo Multiplataforma",
    },
    {
      icon: <SiUnrealengine size={65} />,
      category: "Unreal Ungine para Juegos",
    },
    {
      icon: <IoLogoJavascript size={65} />,
      category: "JavaScript para Web",
    },
    {
      icon: <SiGodotengine size={65} />,
      category: "Godot engine para Juegos",
    },
    {
      icon: <SiTailwindcss size={65} />,
      category: "Tailwind CSS para Diseño Web",
    },
    {
      icon: <TbBrandMysql size={65} />,
      category: "MySQL para Bases de Datos",
    },
    {
      icon: <SiFirebase size={65} />,
      category: "Firebase para Backend",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-28 relative"
    >
      <div className="w-full mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={titleVariants}
          className="relative"
        >
          <h1 className="flex flex-row items-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold py-5 md:py-10">
            <span className="break-words">SKILLS</span>
            <motion.div
              animate={
                isVisible
                  ? {
                      rotate: [0, -10, 10, -10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }
                  : { rotate: 0 }
              }
              className="ml-2 sm:ml-5"
            >
              <GiSkills className="text-purpletoy w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={descriptionVariants}
          className="relative z-10"
        >
          <h2 className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed pl-4 sm:pl-12 md:pl-20 max-w-3xl">
            Como <span className="text-purpletoy font-bold">desarrollador</span>{" "}
            <span className="font-bold text-white">
              en varios ambitos, combino diferentes tecnologías para crear
              soluciones completas
            </span>
            . Mi experiencia abarca desde el desarrollo web hasta la creación de
            videojuegos, siempre buscando la mejor herramienta para cada
            proyecto.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30,
          }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 md:mt-12 pl-4 sm:pl-12 md:pl-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{
                delay: 1.2 + index * 0.2,
                duration: 0.5,
              }}
              className="bg-white/5 backdrop-blur-sm shadow-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <h3 className="text-purpletoy font-bold text-9x1 p-2">
                {skillGroup.icon}
              </h3>
              <h3 className="text-white font-bold text-lg mb-4">
                {skillGroup.category}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default SkillsPage;
