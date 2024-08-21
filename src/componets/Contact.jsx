import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-3">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-1 text-center pb-5 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
      >
        Talk T
        <span className="bg-gradient-to-tl from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
          o Me
        </span>
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="border-b border-neutral-700 text-neutral-300 hover:text-neutral-500 transition-colors"
          href={`mailto:${CONTACT.email}`}
        >
          {CONTACT.email}
        </motion.a>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
