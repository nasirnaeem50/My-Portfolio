"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#f97316", bgColor: "bg-orange-100" },
  { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#3b82f6", bgColor: "bg-blue-100" },
  { name: "JavaScript", level: 88, icon: <FaJs />, color: "#facc15", bgColor: "bg-yellow-100" },
  { name: "React", level: 85, icon: <FaReact />, color: "#22d3ee", bgColor: "bg-cyan-100" },
  { name: "TypeScript", level: 80, icon: <SiTypescript />, color: "#2563eb", bgColor: "bg-blue-100" },
  { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss />, color: "#06b6d4", bgColor: "bg-cyan-100" },
  { name: "Next.js", level: 82, icon: <SiNextdotjs />, color: "#000000", bgColor: "bg-gray-100" },
  { name: "Node.js", level: 78, icon: <SiNodedotjs />, color: "#22c55e", bgColor: "bg-green-100" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const circleVariants = {
  hidden: { strokeDashoffset: 283 },
  visible: (level) => ({
    strokeDashoffset: 283 - (283 * level) / 100,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  }),
  hover: {
    strokeWidth: 10,
    transition: { duration: 0.3 }
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-cyan-300 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies I've mastered and my proficiency level in each.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover="hover"
              className="flex flex-col items-center"
            >
              <div className="relative w-36 h-36 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                  />
                  {/* Animated progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="8"
                    strokeDasharray="283"
                    stroke={skill.color}
                    variants={circleVariants}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    custom={skill.level}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={`text-3xl p-4 rounded-full ${skill.bgColor} mb-1`} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-xl font-semibold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </motion.div>
                </div>
              </div>
              <motion.h3 
                className="text-lg font-medium text-slate-800 text-center"
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {skill.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info section */}
        {hasAnimated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-600 max-w-2xl mx-auto">
              I continuously expand my skill set to deliver cutting-edge solutions. 
              These percentages reflect my confidence and experience with each technology.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}