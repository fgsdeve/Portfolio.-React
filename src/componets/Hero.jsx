import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/projects/portfolio.jpg";
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-30">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Franc Garcia
            </motion.h1>
            <motion.span
              variants={container(0.7)}  // Adjusted delay
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-400 via-teal-500 to-purple-600 
                bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.9)}  // Adjusted delay
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              variants={container(1.1)}  // Adjusted delay
              initial="hidden"
              animate="visible"
              src={profilePic}
              alt="Franc Garcia"
              className="rounded-2xl w-full h-auto max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
