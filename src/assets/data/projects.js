// Utility function to generate technologies based on project type
const getTechnologies = (projectType) => {
  const baseTech = ['React', 'JavaScript'];
  
  const techMap = {
    ecommerce: [...baseTech, 'Tailwind CSS', 'Context API'],
    Resume: [...baseTech, 'Tailwind CSS', 'Context Api'],
    portfolio: [...baseTech, 'Tailwind CSS', 'Framer motion'],
    api: [...baseTech, 'REST API', 'Axios'],
    auth: [...baseTech, 'Firebase Auth', 'JWT'],
    animation: [...baseTech, 'Framer Motion', 'Three.js']
  };

  return techMap[projectType] || baseTech;
};

export const projects = [
  {
    title: 'Hoodies E-commerce',
    description: 'An online store specializing in premium hoodies.',
    image: '/images/e1.PNG',
    technologies: getTechnologies('ecommerce'), // Dynamically generated
    githubUrl: 'https://github.com/nasirnaeem50/ecommerce-Hoodies-React-project',
    liveUrl: 'https://ecommerce-hoodies-react-project-prt.vercel.app',
    type: 'ecommerce'
  },
  {
    title: 'E-commerce Plaza',
    description: 'Online platform for electronics and fashion.',
    image: '/images/e6.PNG',
    technologies: getTechnologies('ecommerce'), // Same type gets same base tech
    githubUrl: 'https://github.com/nasirnaeem50/E-commerce',
    liveUrl: 'https://e-commerce-plaza.vercel.app/',
    type: 'ecommerce',
     // Project-specific additions
  },
  {
    title: 'Ai Resume Builder',
    description: 'A React.js app to create professional resumes with live preview and AI-based content suggestions.',
    image: '/images/resume.PNG',
    technologies: getTechnologies('Resume'),
    githubUrl: 'https://github.com/nasirnaeem50/Ai-Resume-Builder.git',
    liveUrl: 'https://ai-resume-builder-nine-rose.vercel.app/',
    type: 'Resume'
  },
  {
    title: 'My Portfolio',
    description: 'Modern React portfolio to present my work and experience.',
    image: '/images/portfolio.PNG',
    technologies: [...getTechnologies('portfolio')], // Combined with extra tech
    githubUrl: 'https://github.com/nasirnaeem50/My-Portfolio.git',
    liveUrl: 'https://my-portfolio-three-bay-62.vercel.app/',
    type: 'Portfolio'
  }
];

// Helper function to merge additional technologies
projects.forEach(project => {
  if (project.additionalTech) {
    project.technologies = [...new Set([...project.technologies, ...project.additionalTech])];
  }
});