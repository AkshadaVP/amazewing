import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 tracking-widest uppercase">
            ABOUT US
          </h2>
          {/* Sleek gold line, no glow */}
          <div className="w-24 h-[0.5px] bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Amazewing is a premium, tech-powered private aviation brokerage redefining global air mobility.
            We connect high-end travelers with luxury charter jets faster, smarter, and more transparently.
            Acting as the bridge between elite clients and trusted operators, we make private aviation
            seamless, secure, and ultra-personalized.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center mt-10"
        >
          <div className="inline-block px-8 py-4 border-2 border-white rounded-full">
            <p className="text-xl text-white font-semibold text-center leading-relaxed italic">
              “To reshape private aviation through trust, technology, and timeless elegance.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;