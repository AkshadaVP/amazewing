import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Private Jet Charters",
      desc: "Seamless private jet charters offering luxury, speed, and privacy with real-time booking and elite operators.",
    },
    {
      title: "Concierge Services",
      desc: "VIP concierge with onboard catering, ground transfers, and 24/7 personal assistance.",
    },
    {
      title: "Empty Leg Flights",
      desc: "Exclusive discounts on one-way flights through our Empty Leg Deals.",
    },
    {
      title: "Web3 Features",
      desc: "Future-ready with crypto payments and NFT memberships, enhancing your booking experience.",
    },
  ];

  return (
    <section id="services" className="pt-20 sm:pt-24 pb-4 bg-black text-white px-4 sm:px-6 lg:px-32">
      <div className="container mx-auto min-h-[120vh]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-wide uppercase">
            WHAT WE ARE SERVING
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-[1px] bg-yellow-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start relative">
          {/* Sticky Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="sticky top-20 md:top-24 h-fit pr-0 md:pr-8 lg:pr-16 px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 leading-relaxed uppercase tracking-wide">
              A PERSONAL EXPERIENCE,
              <br />
              TAILORED TO YOUR NEEDS
            </h3>
          </motion.div>

          {/* Services Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-gray-700 p-6 sm:p-10 rounded-xl space-y-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.3,
                },
              },
              hidden: {},
            }}
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="pb-6 sm:pb-8 border-b border-gray-700 last:border-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.7,
                }}
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-2 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
