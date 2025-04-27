import atenaImage from "../../assets/atena.png";
import bathroomImage from "../../assets/bathroom.png";
import elchismeImage from "../../assets/elchisme.png";
import strunggleImage from "../../assets/strunggle.png";
import medvuoImage from "../../assets/medvuo.png";
import zapateria from "../../assets/zapateria.png";

export const ProjectIcons = [
  {
    id: 1,
    title: "Zapateria",
    description:
      "Aplicacion de ventas para una zapateria. Cuenta con un sistema de inventario y ventas, funciona a traves de mequinas de facturacion por via Bluetooth.",
    image: zapateria,
    tags: ["SQLflite", "Flutter", "Dart", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "El Chisme",
    description:
      "Red social de chismes tanto web como aplicacion. Los usuarios pueden publicar chismes anonimos y comentar en chismes de otros usuarios. Cuenta con un sistema de autenticación y base de datos en tiempo real.",
    image: elchismeImage,
    tags: ["React", "Firebase", "MySQL", "TailwindCSS", "NodeJS", "Vite"],
    liveUrl: "http://Elchismes.com",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Atenas",
    description:
      "Aplicacion para Android de punto de venta para pequeños negocios. Cuenta con un sistema de inventario y ventas, funciona a traves de mequinas de facturacion por via Bluetooth. Cabe decir que este proyecto fue en colaboracion de 3 personas.",
    image: atenaImage,
    tags: ["Android Studio", "Java", "Kotlin", "Firebase", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/iC0d1g0/Atenas_POS_Oficial/",
  },
  {
    id: 4,
    title: "Strunggle Zombie",
    description:
      "Videojuego de supervivencia en 3D para Android y Pc. El jugador debe sobrevivir a hordas de zombies y recolectar recursos para mejorar sus armas y equipo en la ciudad Zilcon.",
    image: strunggleImage,
    tags: ["Godot", "GdScript", "Blender", "InkScape", "MagicaVoxel"],
    liveUrl: "https://lunarygame.itch.io/strunggle-zombie",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "MedVuo",
    description:
      "Aplicacion para Android de aprendizaje sobre medicina y documentacion sobre medicamentos, enfermedades y sintomas. Cuenta con un sistema de autenticación y base de datos en tiempo real.",
    image: medvuoImage,
    tags: ["Android Studio", "Java", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Bathroom Manager",
    description:
      "Videojuego de simulación de gestión de un baño de escuela. El jugador debe desordenar el baño y molestar a los demas usuarios sin ser descubierto por el profesor quien entrara cada 5 minutos.",
    image: bathroomImage,
    tags: ["Unreal Engine", "Blueprint", "Blender", "InkSpace"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
