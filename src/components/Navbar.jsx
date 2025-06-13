import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    const resumeUrl = "/Resume/NasirnewCv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nasir_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "skills", label: "Skills" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -3,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
  };

  const outlineVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.4 },
    },
    hover: {
      y: -3,
      backgroundColor: "#6d28d9",
      boxShadow: "0 4px 15px -3px rgba(124, 58, 237, 0.4)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      },
    },
    tap: {
      y: 1,
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="text-2xl font-bold text-[#7c3aed] font-['Calibre',_'_Inter',_sans-serif] cursor-pointer"
            variants={navItemVariants}
            whileHover={{
              y: -2,
              textShadow: "0 0 12px rgba(124, 58, 237, 0.4)",
              transition: { duration: 0.3 }
            }}
            onClick={() => scrollToSection("home")}
          >
            Nasir
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
            variants={containerVariants}
          >
            {navItems.map((item) => (
              <motion.div 
                key={item.id}
                className="relative"
                variants={navItemVariants}
                whileHover="hover"
              >
                <div
                  className="relative px-3 py-2 text-sm font-medium cursor-pointer group"
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="relative z-10 block text-gray-800 group-hover:text-[#7c3aed] transition-colors duration-300">
                    {item.label}
                  </span>
                  
                  {/* Outline effect */}
                  <motion.span
                    className="absolute inset-0 border-2 border-[#7c3aed] rounded-lg opacity-0"
                    variants={outlineVariants}
                    initial="hidden"
                    whileHover="hover"
                  />
                  
                  {/* Background highlight */}
                  <motion.span
                    className="absolute inset-0 bg-indigo-50 rounded-lg z-0 opacity-0"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileHover={{ 
                      scale: 1,
                      opacity: 0.6,
                      transition: { duration: 0.4 }
                    }}
                  />
                </div>
              </motion.div>
            ))}
            
            <motion.button
              onClick={handleResumeClick}
              className="bg-[#7c3aed] text-white px-4 py-2 rounded-md text-sm font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Resume
            </motion.button>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-center">
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden mt-4 pb-4"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 rounded-lg shadow-lg">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={mobileItemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#7c3aed] hover:bg-indigo-50 cursor-pointer"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </motion.div>
                ))}
                <motion.button
                  onClick={handleResumeClick}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-[#7c3aed] hover:bg-[#6d28d9] mt-2"
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}