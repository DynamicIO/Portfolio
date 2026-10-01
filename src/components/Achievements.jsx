import { LuTrophy, LuGraduationCap, LuShieldCheck, LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";

const ICONS = {
  Competitions: LuTrophy,
  Training: LuGraduationCap,
  Leadership: LuShieldCheck,
  Affiliations: LuUsers,
};

const Achievements = () => {
  return (
    <div id="achievements" className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Achievements</h1>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {ACHIEVEMENTS.map((group, index) => {
          const Icon = ICONS[group.title];
          return (
            <motion.div
              key={group.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border-4 border-neutral-800 p-6"
            >
              <h2 className="mb-4 flex items-center gap-3 text-xl">
                <span className="rounded-lg border border-neutral-800 p-2">
                  <Icon className="text-xl text-neutral-400" strokeWidth={1.5} />
                </span>
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-neutral-400">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
