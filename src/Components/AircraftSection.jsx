import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JetCard from "./JetCard";
import Light from "../assets/light.webp";
import Mid from "../assets/mid.webp";
import Heavy from "../assets/heavy.webp";

const AircraftSection = () => {
  const aircraftData = [
    {
      image: Light,
      label: "Light Jets",
      capacity: "6-8",
      link: "/aircraft/light-jets",
    },
    {
      image: Mid,
      label: "Mid Jets",
      capacity: "7-9",
      link: "/aircraft/mid-jets",
    },
    {
      image: Heavy,
      label: "Heavy Jets",
      capacity: "12-16",
      link: "/aircraft/heavy-jets",
    },
  ];

  return (
    <section id="aircraft" className="py-16 sm:py-20 bg-black text-white">
      <motion.div
        className="text-center mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-wide uppercase">
          AIRCRAFT
        </h2>
        <div className="w-20 sm:w-24 h-[1px] bg-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {aircraftData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <JetCard
              image={item.image}
              sizeLabel={item.label}
              capacityRange={item.capacity}
              button={
                <Link
                  to={item.link}
                  className="border border-white px-4 py-2 mt-4 block text-center hover:bg-white hover:text-black transition text-sm sm:text-base"
                >
                  → View Jets
                </Link>
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AircraftSection;
