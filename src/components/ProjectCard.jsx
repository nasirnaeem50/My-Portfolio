// ProjectCard.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiCode } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
      style={{ minHeight: '420px', maxHeight: '500px' }}
    >
      {/* Image with overlay */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="GitHub"
                title="View on GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="Live Demo"
                title="View Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Mobile buttons - always visible on mobile */}
        <div className="md:hidden absolute bottom-3 right-3 flex space-x-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-md"
              aria-label="GitHub"
              title="View on GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-md"
              aria-label="Live Demo"
              title="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            Featured
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          {project.stats && (
            <div className="flex space-x-2">
              {project.stats.stars && (
                <span className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded" title={`${project.stats.stars} stars`}>
                  <FiStar className="mr-1" /> {project.stats.stars}
                </span>
              )}
              {project.stats.forks && (
                <span className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded" title={`${project.stats.forks} forks`}>
                  <FiCode className="mr-1" /> {project.stats.forks}
                </span>
              )}
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium hover:bg-indigo-100 transition-colors"
                title={tech}
              >
                {tech.length > 10 ? `${tech.substring(0, 8)}..` : tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium" title={`+${project.technologies.length - 4} more`}>
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Additional metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3">
            {project.date && (
              <span>{new Date(project.date).toLocaleDateString()}</span>
            )}
            {project.type && (
              <span className="bg-gray-100 px-2 py-1 rounded">
                {project.type}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}