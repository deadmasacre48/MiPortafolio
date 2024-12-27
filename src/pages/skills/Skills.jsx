import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";

const SkillsPage = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-28 relative">
      <div className="w-full mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="relative"
        >
          <h1 className="flex flex-row items-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold py-5 md:py-10">
            <span className="break-words">SKILLS</span>
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
              <GiSkills className="text-purpletoy w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </motion.div>
          </h1>
        </motion.div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default SkillsPage;
