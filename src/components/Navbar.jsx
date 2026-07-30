import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navItems = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold cursor-pointer"
        >
          <span className="text-blue-500">P</span>rajwal
        </motion.h1>

        <div className="hidden md:flex gap-10">

          {navItems.map((item) => (

            <Link
              key={item}
              to={item}
              smooth
              duration={600}
              offset={-70}
              className="capitalize cursor-pointer text-gray-300 hover:text-white transition relative group"
            >

              {item}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

            </Link>

          ))}

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-xl">

          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={600}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block py-5 text-center capitalize border-b border-white/10 hover:text-blue-400"
            >
              {item}
            </Link>
          ))}

        </div>
      )}

    </motion.nav>
  );
}