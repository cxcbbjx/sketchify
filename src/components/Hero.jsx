import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onGenerateClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-center items-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white font-extrabold text-5xl md:text-6xl leading-tight max-w-4xl"
      >
        Turn Any Photo Into a <span className="text-purple-400">Timeless Sketch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="mt-6 text-white/80 max-w-xl text-lg md:text-xl"
      >
        Upload your favorite moment — we’ll turn it into a hand-drawn masterpiece.
      </motion.p>

      <motion.button
        onClick={onGenerateClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="mt-10 bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
      >
        Generate Your Sketch
      </motion.button>
    </section>
  );
};

export default Hero;
