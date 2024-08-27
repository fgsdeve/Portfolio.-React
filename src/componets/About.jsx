import { ABOUT_TEXT } from "../assets/constants";
import AboutMe from "../assets/img/aboutme.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center pb-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
        About
        <span className="bg-gradient-to-tl from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
          {" "}
          Me{" "}
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 mb-8 lg:mb-0">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl w-full max-w-sm lg:max-w-full"
              src={AboutMe}
              alt="AboutMe"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center lg:justify-start lg:pl-40 "
          >
            <p className="my-2 py-6 pt-8 font-light tracking-tighter text-lg text-center lg:text-left ">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
