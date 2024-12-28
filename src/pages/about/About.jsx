import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState("");
  const ref = useRef();

  const contactInfo = [
    {
      id: 1,
      platform: "Instagram",
      handle: "@max zai",
      icon: FaInstagram,
      link: "https://instagram.com/max._.zai",
      color: "from-pink-500/50 to-purple-500/50",
    },
    {
      id: 2,
      platform: "Email",
      handle: "Maxwell@email.com",
      icon: FaEnvelope,
      link: "mailto:tejadarosadomaxwellmax@email.com",
      color: "from-blue-500/50 to-teal-500/50",
    },
    {
      id: 3,
      platform: "LinkedIn",
      handle: "Maxwell Tejada Rosado",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/maxwell-tejada-rosado-23586a259/l",
      color: "from-blue-600/50 to-blue-400/50",
    },
    {
      id: 4,
      platform: "GitHub",
      handle: "deadmasacre48",
      icon: FaGithub,
      link: "https://github.com/deadmasacre48",
      color: "from-gray-700/50 to-gray-500/50",
    },
  ];

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

  const copyToClipboard = (text, platform) => {
    navigator.clipboard.writeText(text);
    setCopied(platform);
    setTimeout(() => setCopied(""), 2000);
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
            <span className="break-words">CONTACT</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-12">
            Estas son las mejores formas de contactarme
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
        >
          {contactInfo.map((contact) => (
            <motion.div
              key={contact.id}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}
              />
              <button
                onClick={() =>
                  copyToClipboard(contact.handle, contact.platform)
                }
                className="relative w-full p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <contact.icon className="w-8 h-8 text-white" />
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-white">
                      {contact.platform}
                    </h3>
                    <p className="text-gray-300">{contact.handle}</p>
                  </div>
                  {copied === contact.platform ? (
                    <span className="text-green-400 text-sm">¡Copiado!</span>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      Click para copiar
                    </span>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
    </div>
  );
};

export default ContactPage;
