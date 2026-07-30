import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Background Blobs */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-blue-400 text-lg mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Prajwal 
            <span > P</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-gray-300">

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">

            Passionate Computer Science graduate focused on
            building scalable full-stack web applications using
            React, Node.js, Express.js and MongoDB.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-full"
            >
              Hire Me
              <ArrowRight size={18} />
            </a>

            <a
              href="/Prajwal's deployed resume-hackerresume (1).pdf"
              target="_blank"
              className="flex items-center gap-2 border border-white/10 hover:bg-white/10 transition px-7 py-4 rounded-full"
            >
              Resume
              <Download size={18} />
            </a>

          </div>

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/prajwal7p"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
             <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/prajwal-p-nair"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={28} />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity:0, x:80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Prajwal"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down Indicator */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >

        <div className="w-7 h-12 rounded-full border-2 border-gray-400 flex justify-center">

          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>

        </div>

      </motion.div>

    </section>
  );
}