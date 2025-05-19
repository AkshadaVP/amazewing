import React from "react";
import { Link } from "react-router-dom";
import jet1 from "../assets/cirrus-vision-sf50.jpg";
import jet2 from "../assets/embraer-phenom-100.jpg";
import jet3 from "../assets/hondajet-ha-420.png";
import jet4 from "../assets/NewProject.png";
import Footer from "../Components/Footer";

const jets = [
  {
    name: "Cirrus Vision SF50",
    image: jet1,
    flightTime: "4 hours",
    capacity: "5-6",
    description: "A revolutionary personal jet offering luxury and performance in a compact design.",
  },
  {
    name: "Embraer Phenom 100",
    image: jet2,
    flightTime: "4.5 hours",
    capacity: "6-7",
    description: "Efficient and elegant, this light jet is perfect for short hops in executive style.",
  },
  {
    name: "HondaJet HA-420",
    image: jet3,
    flightTime: "3.5 hours",
    capacity: "4-5",
    description: "Innovative engine-over-wing design, quiet cabin, and great speed for its class.",
  },
  {
    name: "Vision Concept Jet",
    image: jet4,
    flightTime: "TBD",
    capacity: "Custom",
    description: "A conceptual luxury aircraft designed to push the boundaries of innovation and design.",
  },
];

const HeavyJets = () => {
  return (
    <div className="bg-black text-white min-h-screen animate-fadeIn">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-2 animate-fadeInUp">
          Aircraft
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-luxury tracking-wide leading-tight animate-fadeInUp">
          Heavy Jet Models
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg md:text-xl animate-fadeInUp">
          Discover our unique collection of advanced personal and luxury jets built for range, comfort, and innovation.
        </p>
      </section>

      {/* Jet Cards */}
      <section className="space-y-10 px-4 sm:px-6 max-w-6xl mx-auto pb-16 sm:pb-20">
        {jets.map((jet, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-2xl shadow-md flex flex-col md:flex-row items-center md:justify-between gap-6 p-6 md:p-8 animate-slideInCard hover:scale-[1.015] hover:shadow-xl hover:animate-glowUp transition-all duration-300"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={jet.image}
              alt={jet.name}
              className="w-full md:w-[40%] h-[200px] sm:h-[240px] md:h-[220px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex-1 text-left space-y-4">
              <h2 className="text-xl sm:text-2xl font-luxury">{jet.name}</h2>
              <div className="flex flex-wrap gap-3 text-sm sm:text-base md:text-lg">
                <span className="bg-white/10 px-4 py-1 rounded-full">⏱ {jet.flightTime}</span>
                <span className="bg-white/10 px-4 py-1 rounded-full">👥 {jet.capacity}</span>
              </div>
              <p className="text-white/70 text-sm sm:text-base">{jet.description}</p>
              <Link
                to="/book"
                className="inline-block border border-white px-5 py-2 text-sm sm:text-base rounded-full hover:bg-white hover:text-black transition-all duration-300 active:animate-pulseIn"
              >
                → BOOK NOW
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default HeavyJets;
