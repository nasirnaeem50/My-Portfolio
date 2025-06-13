import { motion } from "framer-motion";
import { projects } from '../assets/data/projects';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#f8fafc] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-[#1e293b] mb-2 font-['Calibre',_'_Inter',_sans-serif]"
            variants={itemVariants}
          >
            PORTFOLIO
          </motion.h2>
          <motion.p 
            className="text-xl text-[#64748b]"
            variants={itemVariants}
          >
            Featured projects I've built
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-[#4338ca] mx-auto mt-4 rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}