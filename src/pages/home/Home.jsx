import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";
import HomeItem from "../../components/home/HomeItem";
import { HomeIcons } from "../../components/home/HomeIcons";

const HomePage = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MiPortafolio/cv.pdf";
    link.download = "Maxwell-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-28 relative">
      <div className="w-full mx-auto">
        <motion.div className="relative">
          <h1 className="flex flex-row items-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold py-5 md:py-10">
            <span className="break-words">WELCOME</span>
            <div className="ml-2 sm:ml-5">
              <LuGamepad2 className="text-purpletoy w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
          </h1>
        </motion.div>

        <div className="relative z-10">
          <h2 className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed pl-4 sm:pl-12 md:pl-20">
            Me llamo{" "}
            <span className="text-purpletoy font-bold">Maxwell Tejada R.</span>{" "}
            desarrollador de Videojuegos, Apps y Webside quien quiere
            presentarte todo mi camino hasta ahora en este portafolio.
            <br />
            <br />
            Aunque mi trabajo se basa en mi creatividad y espontaneidad,{" "}
            <span className="text-white">
              me apasiona participar en proyectos serios y crecer aprendiendo de
              mi entorno
            </span>
            .
          </h2>

          <button
            onClick={handleDownloadCV}
            className="mt-6 ml-4 sm:ml-12 md:ml-20 flex items-center gap-2 bg-purpletoy2 text-white px-6 py-3 rounded-full
                     hover:bg-purpletoy hover:shadow-lg hover:shadow-purpletoy2/30 transition-all duration-300
                     text-sm sm:text-base font-medium"
          >
            <FaFileDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            Descargar CV
          </button>
        </div>

        <div className="mt-8 md:mt-12 pl-4 sm:pl-12 md:pl-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-16">
            {HomeIcons.map((item) => (
              <HomeItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default HomePage;
