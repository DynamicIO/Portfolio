import { PROJECTS } from "../constants"; // Importing the projects data
import { motion } from "framer-motion"; // Import Framer Motion

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate to this state
            exit={{ opacity: 0, y: -20 }} // Exit animation
            transition={{ duration: 0.5 }} // Animation duration
          >
            <div className="w-full lg:w-1/4">
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                />
              )}
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
