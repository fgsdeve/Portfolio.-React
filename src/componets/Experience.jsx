import { experience as experienceData } from "../assets/constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-3">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center pb-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
      >
        Exper
        <motion.span className="bg-gradient-to-tl from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
          ience
        </motion.span>
      </motion.h2>
      <div>
        {experienceData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 2, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{item.duration}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 2, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {item.title} -{" "}
                <span
                  className="text-sm bg-gradient-to-r from-cyan-400 via-teal-500 to-purple-600 
                bg-clip-text text-4xl tracking-tight text-transparent"
                >
                  {item.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{item.location}</p>

              {/* Conditional rendering for responsibilities */}
              {item.responsibilities && (
                <ul className="list-disc pl-4 mb-4 text-neutral-400">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              )}

              {/* Conditional rendering for technologies */}
              {item.technologies && (
                <div className="flex flex-wrap">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-2 mb-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium bg-gradient-to-r from-cyan-400 via-teal-500 to-purple-600 
                      bg-clip-text text-4xl tracking-tight text-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
