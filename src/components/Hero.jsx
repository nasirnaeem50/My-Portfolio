import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from "react-icons/fi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -3,
      backgroundColor: "#c2410c",
      boxShadow: "0 10px 20px -5px rgba(234, 88, 12, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      y: 1,
      scale: 0.98,
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      y: -3,
      color: "#ea580c",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] text-white overflow-hidden"
    >
      {/* Animated background - simplified for mobile */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute top-10 right-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#ea580c] mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-5 left-5 w-30 h-30 md:w-60 md:h-60 rounded-full bg-[#7c3aed] mix-blend-multiply filter blur-xl animate-float-delay"></div>
      </motion.div>

      {/* Particle Background - reduced number for mobile */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 8 + 3 + "px",
                height: Math.random() * 8 + 3 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 60],
                x: [0, (Math.random() - 0.5) * 30],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center md:flex-row md:justify-between md:items-center">
        {/* Content - mobile first */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-[#ea580c] inline-block"
              whileHover={{
                y: -3,
                textShadow: "0 5px 15px rgba(234, 88, 12, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              Nasir Naeem Khan
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 text-gray-200"
            variants={itemVariants}
          >
            A{" "}
            <span className="font-semibold text-white">
              passionate Frontend Developer
            </span>{" "}
            building modern web experiences with React.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-block bg-[#ea580c] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-base sm:text-lg relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ea580c] to-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="#projects"
              className="inline-block bg-transparent text-white border-2 border-white/30 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium text-base sm:text-lg relative overflow-hidden group"
              whileHover={{
                y: -3,
                borderColor: "#ea580c",
                backgroundColor: "rgba(234, 88, 12, 0.1)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ y: 1, scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
            </motion.a>
          </motion.div>

          {/* Social Links - centered on mobile */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/nasirnaeem50"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-xl sm:text-2xl text-white/80 hover:text-[#ea580c] transition-colors"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-xl sm:text-2xl text-white/80 hover:text-[#ea580c] transition-colors"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="text-xl sm:text-2xl text-white/80 hover:text-[#ea580c] transition-colors"
            >
              <FiTwitter />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              variants={socialIconVariants}
              whileHover="hover"
              className="flex items-center gap-1 text-white/80 hover:text-[#ea580c] transition-colors text-sm sm:text-base"
            >
              <FiDownload className="text-xl sm:text-2xl" /> 
              <span className="hidden sm:inline">Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image - smaller on mobile */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white/20 overflow-hidden shadow-xl relative mt-6 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <img
            src="/images/nasir.JPG"
            alt="Nasir Naeem Khan"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/default-profile.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/30 to-transparent"></div>
          <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div>
          {/* Status indicator - smaller on mobile */}
          <div className="absolute bottom-2 right-2 w-3 h-3 sm:bottom-3 sm:right-3 sm:w-4 sm:h-4 md:bottom-4 md:right-4 md:w-5 md:h-5 bg-green-400 rounded-full border-2 border-white"></div>
        </motion.div>
      </div>

      {/* Scroll indicator - smaller on mobile */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HiOutlineChevronDoubleDown className="text-2xl sm:text-3xl text-white/60" />
      </motion.div>
    </section>
  );
}