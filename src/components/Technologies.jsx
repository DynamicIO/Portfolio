import { RiReactjsLine } from "react-icons/ri"; // React icon
import { TbBrandNextjs } from "react-icons/tb"; // Next.js icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { DiRedis } from "react-icons/di"; // Redis icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiPython } from "react-icons/si"; // Python icon
import { SiMysql } from "react-icons/si"; // MySQL icon
import { motion } from "framer-motion"; // Animation

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-yellow-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
