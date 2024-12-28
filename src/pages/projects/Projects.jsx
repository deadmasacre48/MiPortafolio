import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import atenaImage from "../../assets/atena.png";
import elchismeImage from "../../assets/elchisme.png";
import strunggleImage from "../../assets/strunggle.png";
import medvuoImage from "../../assets/medvuo.png";
import bathroomImage from "../../assets/bathroom.png";

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      id: 1,
      title: "El Chisme",
      description:
        "Aplicacion para Android y iOS para compartir chismes e historias de forma anónima. Cuenta con un sistema de autenticación y base de datos en tiempo real.",
      image: elchismeImage,
      tags: ["MySQL", "Flutter", "Firebase"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "El Chisme Web",
      description:
        "Port de la aplicación de El Chisme para la web. Cuenta con las mismas funcionalidades que la aplicación móvil.",
      image: elchismeImage,
      tags: ["React", "Firebase", "MySQL", "TailwindCSS"],
      liveUrl: "http://Elchismes.com",
    },
    {
      id: 3,
      title: "Atenas",
      description:
        "Aplicacion para Android de punto de venta para pequeños negocios. Cuenta con un sistema de inventario y ventas, funciona a traves de mequinas de facturacion por via Bluetooth. Cabe decir que este proyecto fue en colaboracion de 3 personas.",
      image: atenaImage,
      tags: ["Android Studio", "Java", "Kotlin", "Firebase", "MySQL"],
      githubUrl: "https://github.com/iC0d1g0/Atenas_POS_Oficial/",
    },
    {
      id: 4,
      title: "Strunggle Zombie",
      description:
        "Videojuego de supervivencia en 3D para Android y Pc. El jugador debe sobrevivir a hordas de zombies y recolectar recursos para mejorar sus armas y equipo en la ciudad Zilcon.",
      image: strunggleImage,
      tags: ["Godot", "GdScript", "Blender", "InKScape", "MagicaVoxel"],
      liveUrl: "https://lunarygame.itch.io/strunggle-zombie",
    },
    {
      id: 5,
      title: "MedVuo",
      description:
        "Aplicacion para Android de aprendizaje sobre medicina y documentacion sobre medicamentos, enfermedades y sintomas. Cuenta con un sistema de autenticación y base de datos en tiempo real.",
      image: medvuoImage,
      tags: ["Android Studio", "Java", "InKScape", "Firebase"],
    },
    {
      id: 6,
      title: "Bathroom Manager",
      description:
        "Videojuego de simulación de gestión de un baño de escuela. El jugador debe desordenar el baño y molestar a los demas usuarios sin ser descubierto por el profesor quien entrara cada 5 minutos.",
      image: bathroomImage,
      tags: ["Unreal Engine", "Blueprint", "Blender", "InkSpace"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-start justify-start px-4 sm:px-8 md:px-16 lg:px-28 relative pb-20"
    >
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="flex flex-row items-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold py-5 md:py-10">
            <span className="break-words">PROJECTS</span>
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="ml-2 sm:ml-5"
            >
              <FaProjectDiagram className="text-purpletoy w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end space-x-4">
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default ProjectsPage;
