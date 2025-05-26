import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Revolutionize <br /> Your Imagination
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-xl text-lg text-gray-300"
        >
          Transform photos into artistic pencil sketches using cutting-edge AI.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/sketch"
            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-300 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Showcase Section */}
      <section className="px-6 py-20 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Upload", "Transform", "Download"].map((step, i) => (
            <motion.div
              key={step}
              className="p-6 border rounded-xl shadow-lg bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">{step}</h3>
              <p className="text-gray-600">Just {step.toLowerCase()} and let AI do the magic.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        Built with ❤️ by Shivang
      </footer>
    </div>
  );
};

export default LandingPage;
