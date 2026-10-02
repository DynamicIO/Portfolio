import { HERO_CONTENT } from "../constants"; // Ensure this path is correct
import profilePic from "../assets/360_F_473789682_zFhtTAvdjkq5d9NkUrWw8yaN8MpoMVRI.jpg"; // Check this file exists
import { motion } from "framer-motion";

// Motion container function
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

// Hero component
const Hero = () => {
  return (
    <div id="top" className="border-b border-neutral-900 pb-4 pt-12 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl"
            >
              Ben Abraham
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center text-2xl tracking-tight text-transparent lg:text-left lg:text-3xl"
            >
              Computer Science Graduate Student
              <span className="hidden lg:inline"> · </span>
              <span className="mt-1 block text-lg lg:mt-0 lg:inline lg:text-3xl">
                Quantum Networking Research
              </span>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} 
              alt="Ben" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
