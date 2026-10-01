import { RiReactjsLine } from "react-icons/ri"; // React icon
import { TbAtom } from "react-icons/tb"; // NetSquid (no brand icon)
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import {
  SiPython,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiCisco,
  SiWireshark,
  SiKalilinux,
  SiBurpsuite,
  SiMetasploit,
  SiLinux,
  SiPowershell,
  SiRaspberrypi,
  SiArduino,
  SiNextdotjs,
  SiMysql,
  SiGit,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";
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

const TECH_GROUPS = [
  {
    title: "Quantum & Research",
    items: [
      { name: "NetSquid", Icon: TbAtom, color: "text-violet-400" },
      { name: "Python", Icon: SiPython, color: "text-yellow-500" },
      { name: "PyTorch", Icon: SiPytorch, color: "text-orange-500" },
      { name: "Pandas", Icon: SiPandas, color: "text-indigo-400" },
      { name: "NumPy", Icon: SiNumpy, color: "text-sky-400" },
    ],
  },
  {
    title: "Security & Networking",
    items: [
      { name: "Cisco", Icon: SiCisco, color: "text-sky-500" },
      { name: "Wireshark", Icon: SiWireshark, color: "text-blue-400" },
      { name: "Kali Linux", Icon: SiKalilinux, color: "text-blue-500" },
      { name: "Burp Suite", Icon: SiBurpsuite, color: "text-orange-600" },
      { name: "Metasploit", Icon: SiMetasploit, color: "text-blue-300" },
      { name: "Linux", Icon: SiLinux, color: "text-yellow-300" },
      { name: "PowerShell", Icon: SiPowershell, color: "text-blue-400" },
    ],
  },
  {
    title: "Hardware",
    items: [
      { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "text-rose-600" },
      { name: "Arduino", Icon: SiArduino, color: "text-teal-500" },
      { name: "C++", Icon: SiCplusplus, color: "text-blue-600" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "React", Icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
      { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
      { name: "MySQL", Icon: SiMysql, color: "text-blue-500" },
      { name: "Git", Icon: SiGit, color: "text-orange-500" },
    ],
  },
];

const DURATIONS = [2, 6, 3, 2.5, 4, 5];

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="space-y-12">
        {TECH_GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className="mb-6 text-center text-sm uppercase tracking-widest text-neutral-500">
              {group.title}
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-4">
              {group.items.map(({ name, Icon, color }, index) => (
                <motion.div
                  key={name}
                  variants={iconVariants(DURATIONS[index % DURATIONS.length])}
                  initial="initial"
                  animate="animate"
                  className="flex w-24 flex-col items-center gap-2"
                >
                  <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <Icon className={`text-5xl ${color}`} />
                  </div>
                  <span className="text-xs text-neutral-400">{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
