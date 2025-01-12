import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaDesktop, FaFileDownload } from "react-icons/fa";
import { IoPlanetOutline } from "react-icons/io5";
import { LuGamepad2 } from "react-icons/lu";
import { MdOutlinePhoneAndroid, MdOutlineGamepad } from "react-icons/md";

const HomePage = () => {
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

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MiPortafolio/cv.pdf";
    link.download = "Maxwell-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const iconInfo = [
    {
      Icon: MdOutlinePhoneAndroid,
      text: "Desarrollo de Apps",
      description: "Creación de aplicaciones intuitivas y responsivas",
    },
    {
      Icon: MdOutlineGamepad,
      text: "Desarrollo de Juegos",
      description: "Experiencias interactivas y entretenidas",
    },
    {
      Icon: IoPlanetOutline,
      text: "Desarrollo Web",
      description: "Sitios web modernos y dinámicos",
    },
    {
      Icon: FaDesktop,
      text: "Software de Escritorio",
      description: "Aplicaciones robustas y eficientes",
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
            <span className="break-words">WELCOME</span>
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
              <LuGamepad2 className="text-purpletoy w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={descriptionVariants}
          className="relative z-10"
        >
          <h2 className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed pl-4 sm:pl-12 md:pl-20">
            Me llamo <span className="text-purpletoy font-bold">Maxwell</span>,{" "}
            <span className="font-bold text-white">
              desarrollador de videojuegos, apps, web y sueños
            </span>{" "}
            quien quiere presentarte todo mi camino hasta ahora en este
            portafolio.
            <br />
            <br />
            Aunque mi trabajo se basa en mi creatividad y espontaneidad,{" "}
            <span className="text-white">
              me apasiona participar en proyectos serios y crecer aprendiendo de
              mi entorno
            </span>
            .
          </h2>

          <motion.button
            onClick={handleDownloadCV}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
            }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 ml-4 sm:ml-12 md:ml-20 flex items-center gap-2 bg-purpletoy2 text-white px-6 py-3 rounded-full
                     hover:bg-purpletoy hover:shadow-lg hover:shadow-purpletoy2/30 transition-all duration-300
                     text-sm sm:text-base font-medium"
          >
            <FaFileDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            Descargar CV
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30,
          }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 md:mt-12 pl-4 sm:pl-12 md:pl-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-16">
            {iconInfo.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.5,
                }}
              >
                <div
                  className="bg-white/5 backdrop-blur-sm drop-shadow-md rounded-full p-3 flex items-center justify-center shadow-lg 
                   group-hover:bg-purpletoy2 group-hover:shadow-purpletoy2/50 transition-all duration-300
                   w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                >
                  <item.Icon
                    className="text-purpletoy2 group-hover:text-white transition-colors duration-300
                    w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
                <div
                  className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-36 sm:w-48 bg-white rounded-lg shadow-xl 
                   p-2 sm:p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                   z-50"
                >
                  <p className="font-semibold text-purpletoy2 mb-1 text-sm sm:text-base">
                    {item.text}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.description}
                  </p>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default HomePage;
