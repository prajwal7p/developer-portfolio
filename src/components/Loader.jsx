import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#030712] flex flex-col justify-center items-center z-[9999]">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="text-2xl mt-6 font-semibold text-white"
      >
        Loading Portfolio...
      </motion.h2>

    </div>
  );
}