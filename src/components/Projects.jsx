import { useRef, useState } from "react";
import { PROJECTS, FEATURED_PROJECT_COUNT } from "../constants"; // Importing the projects data
import { motion } from "framer-motion"; // Import Framer Motion
import { LuSmartphone, LuChevronDown } from "react-icons/lu";

// Project image, or a muted placeholder tile when a project has no image yet.
// App icons are square, so they're sized to the ~76px height of the 150px-wide screenshots.
const renderImage = (project) =>
  project.image ? (
    <img
      src={project.image}
      width={project.isAppIcon ? 76 : 150}
      height={project.isAppIcon ? 76 : 150}
      alt={project.title}
      className={`mb-6 transform hover:scale-105 hover:shadow-lg transition-all duration-300 ${
        project.isAppIcon ? "h-[76px] w-[76px] rounded-[18px]" : "rounded"
      }`}
    />
  ) : (
    <div className="mb-6 flex h-[150px] w-[150px] items-center justify-center rounded border border-neutral-800 transition-all duration-300 hover:scale-105">
      <LuSmartphone className="text-5xl text-neutral-500" strokeWidth={1.25} aria-hidden="true" />
    </div>
  );

const renderCard = (project) => (
  <motion.div
    key={project.title}
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
          className="block w-fit hover:opacity-80 transition-opacity"
        >
          {renderImage(project)}
        </a>
      ) : (
        renderImage(project)
      )}
    </div>
    <div className="w-full max-w-xl lg:w-3/4">
      <h6 className="mb-2 flex flex-wrap items-center gap-2 font-semibold">
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
        {project.badge && (
          <span className="rounded border border-neutral-800 px-2 py-0.5 text-xs font-medium text-neutral-400">
            {project.badge}
          </span>
        )}
      </h6>
      <p className="mb-4 text-neutral-400">{project.description}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);

  const featured = PROJECTS.slice(0, FEATURED_PROJECT_COUNT);
  const more = PROJECTS.slice(FEATURED_PROJECT_COUNT);

  const toggle = () => {
    // When collapsing, keep the button in view instead of leaving the reader far below
    if (showAll) {
      requestAnimationFrame(() => buttonRef.current?.scrollIntoView({ block: "center" }));
    }
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {featured.map(renderCard)}
        {showAll && more.map(renderCard)}
      </div>
      {more.length > 0 && (
        <div className="mb-12 flex justify-center">
          <button
            ref={buttonRef}
            type="button"
            onClick={toggle}
            aria-expanded={showAll}
            className="flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-800 px-5 text-sm text-neutral-300 transition-colors duration-200 hover:border-neutral-600 hover:text-white"
          >
            {showAll ? "Show fewer projects" : `More projects (${more.length})`}
            <LuChevronDown
              className={`text-base transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
