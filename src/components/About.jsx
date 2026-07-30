import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const cards = [
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    description:
      "Bachelor of Engineering in Computer Science from SDM Institute of Technology with a CGPA of 8.6.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Experience",
    description:
      "Completed MERN Stack training at Dhee Coding Labs, where I built full-stack applications using React, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Passion",
    description:
      "Passionate about developing scalable web applications, solving real-world problems, and continuously improving my technical skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#030712] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            I'm <span className="text-white font-semibold">Prajwal P</span>, a
            Computer Science graduate and aspiring Software Developer with a
            strong interest in Full Stack Web Development. I enjoy building
            responsive, scalable, and user-friendly web applications using the
            MERN Stack while continuously learning modern technologies and best
            practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg hover:border-blue-500 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">8.6</h3>
            <p className="text-gray-400 mt-2">CGPA</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-400 mt-2">Major Projects</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">8+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">2026</h3>
            <p className="text-gray-400 mt-2">Graduate</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}