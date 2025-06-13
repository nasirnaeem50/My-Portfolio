"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section 
      id="about" 
      className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden"
      ref={ref}
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square w-full bg-slate-200">
                <img 
                  src="/path-to-your-image.jpg" 
                  alt="Profile photo"
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='72' dy='.35em' text-anchor='middle' x='100' y='100'%3E👨‍💻%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-semibold">Your Name</h3>
                  <p className="text-slate-300">Frontend Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="prose prose-slate max-w-none text-slate-700">
              <motion.p 
                className="mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                I'm a passionate frontend developer with 2 years of experience specializing in 
                creating responsive, accessible, and performant web interfaces. My focus is on 
                crafting exceptional user experiences using modern technologies like React, 
                JavaScript, and CSS.
              </motion.p>

              <motion.p 
                className="mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                I love turning complex problems into simple, beautiful, and intuitive designs. 
                When I'm not coding, I enjoy staying up-to-date with the latest frontend trends, 
                contributing to open-source projects, and sharing knowledge with the developer 
                community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {[ 
                  { name: "React.js", icon: "⚛️" },
                  { name: "JavaScript", icon: "📜" },
                  { name: "HTML5", icon: "🖥️" },
                  { name: "CSS3", icon: "🎨" },
                  { name: "Responsive Design", icon: "📱" },
                  { name: "UI Development", icon: "✨" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 bg-white rounded-lg shadow-md flex items-center gap-2 cursor-default"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium text-slate-700">{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
