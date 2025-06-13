"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "React Development",
    description: "Building dynamic, component-based web applications with React.js and Next.js.",
    icon: "⚛️",
    color: "from-[#61dafb] to-[#087ea4]"
  },
  {
    title: "Web Development",
    description: "Building responsive, performant websites with modern technologies.",
    icon: "💻",
    color: "from-[#4338ca] to-[#4f46e5]"
  },
  {
    title: "UI Design",
    description: "Creating beautiful, intuitive user interfaces that enhance user experience.",
    icon: "🎨",
    color: "from-[#7c3aed] to-[#9333ea]"
  },
  {
    title: "Frontend Optimization",
    description: "Improving performance, accessibility, and SEO of your frontend applications.",
    icon: "⚡",
    color: "from-[#ea580c] to-[#f97316]"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          >
            SERVICES
          </motion.h2>
          <motion.p 
            className="text-gray-500 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            What I offer to help your business grow
          </motion.p>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-[#4338ca] to-[#7c3aed] mx-auto mt-3 sm:mt-4 rounded-full"
            variants={dividerVariants}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              viewport={{ once: true }}
              className="w-full"
            >
              <motion.div
                className={`bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 hover:border-transparent transition-all h-full flex flex-col relative overflow-hidden group`}
                variants={cardVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}
                />
                
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${service.color} text-white text-xl sm:text-2xl flex items-center justify-center mb-4 sm:mb-6`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1,
                    duration: 0.5,
                    type: "spring"
                  }}
                  viewport={{ once: true }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{ backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <motion.div
                  className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3 sm:my-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ 
                    delay: 0.2 + index * 0.1,
                    duration: 0.6
                  }}
                  viewport={{ once: true }}
                />
                
                <motion.button
                  className="text-xs sm:text-sm font-medium text-[#4338ca] hover:text-[#3730a3] self-start flex items-center gap-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}