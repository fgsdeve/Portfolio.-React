import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const tagVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: 0.1,
    },
  },
});

const Tags = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className="ml-10 my-10 text-center text-5xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
        Core&nbsp;
        <motion.span 
        className="bg-gradient-to-tl from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
          Competencies
        </motion.span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={tagVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <RiReactjsLine className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={tagVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <TbBrandNextjs className="text-7xl text-gray-600" />
        </motion.div>
        <motion.div
          variants={tagVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={tagVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <DiRedis className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={tagVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={tagVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={tagVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-full ring-offset-2 ring border-neutral-900 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Tags;
