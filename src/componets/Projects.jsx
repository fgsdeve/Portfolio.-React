import { PROJECTS } from "../assets/constants";
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-3">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{ opacity: 0, y: -100}}
      transition={{duration: 1}}
      className="my-20 text-center pb-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
        Proj
        <span className="bg-gradient-to-tl from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
          ects
        </span>
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4">
              <img
                src={project.Image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
             whileInView={{opacity: 1, x:0}}
             initial={{ opacity: 0, x: 100}}
             transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>

              {/* Conditional rendering for project description as bullet points */}
              {project.description && Array.isArray(project.description) ? (
                <ul className="list-disc pl-4 mb-4 text-neutral-400">
                  {project.description.map((desc, i) => (
                    <li key={i} className="mb-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc pl-4 mb-4 text-neutral-400">
                  {project.description.split('.').map((desc, i) => (
                    desc.trim() && <li key={i} className="mb-1">{desc.trim()}.</li>
                  ))}
                </ul>
              )}

              {/* Rendering technologies as badges */}
              {project.technologies && (
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 mb-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium bg-gradient-to-r from-cyan-400 via-teal-500 to-purple-600 
                      bg-clip-text text-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Conditional rendering for project links */}
              {project.links && (
                <div className="mt-4">
                  {project.links.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-4 text-teal-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:underline"
                    >
                      Repository
                    </a>
                  )}
                  {project.links.frontendRepo && (
                    <a
                      href={project.links.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-4 text-teal-500 hover:underline"
                    >
                      Frontend Repo
                    </a>
                  )}
                  {project.links.backendRepo && (
                    <a
                      href={project.links.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:underline"
                    >
                      Backend Repo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
