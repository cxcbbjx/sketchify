import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "1", title: "Upload Your Image", desc: "Select any image to begin sketch transformation." },
  { step: "2", title: "AI Converts to Sketch", desc: "Our AI applies pencil-style transformation." },
  { step: "3", title: "Download the Result", desc: "Instantly view and save your new sketch!" },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#111827] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold mb-4 text-purple-400">Step {item.step}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
