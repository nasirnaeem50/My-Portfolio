import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-[#1e293b] text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-3">
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-[#4338ca] mb-4 font-['Calibre',_'_Inter',_sans-serif]"
            >
              Nasir.
            </motion.h2>
            <motion.p 
              whileHover={{ x: 5 }}
              className="text-gray-300"
            >
              Web Developer
            </motion.p>
            <motion.p 
              whileHover={{ x: 5 }}
              className="text-gray-300"
            >
              Frontend Developer
            </motion.p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl font-semibold mb-6 text-gray-100"
            >
              Navigation
            </motion.h3>
            <ul className="space-y-4">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    color: '#4338ca'
                  }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 block"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl font-semibold mb-6 text-gray-100"
            >
              Contact
            </motion.h3>
            <ul className="space-y-4">
              {[
                'nasirnaeem66@gmail.com',
                '+923138059759',
                'Pakistan'
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    color: '#fff'
                  }}
                  className="text-gray-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl font-semibold mb-6 text-gray-100"
            >
              Follow Me
            </motion.h3>
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { staggerChildren: 0.1 }
              }}
            >
              <SocialIcons />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={containerVariants}
          className="border-t border-[#334155] pt-10 text-center"
        >
          <motion.p 
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: '#fff' }}
            className="text-gray-400 text-sm"
          >
            &copy; {new Date().getFullYear()} Nasir. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}