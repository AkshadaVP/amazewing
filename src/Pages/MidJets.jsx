import React from "react";
import { Link } from "react-router-dom";
import jet1 from "../assets/hawker-800xp-exterior-new-js-mj.jpg";
import jet2 from "../assets/gulfstream-g150-mj.jpg";
import jet3 from "../assets/cessna-citation-xlsplus-mj.jpg";
import Footer from "../Components/Footer";




const jets = [
  {
    name: "Hawker 800XP",
    image: jet1,
    flightTime: "5 hours",
    capacity: "7-9",
    description: "A classic midsize business jet, known for its spacious cabin and smooth ride.",
  },
  {
    name: "Gulfstream G150",
    image: jet2,
    flightTime: "5.5 hours",
    capacity: "6-8",
    description: "Fast, fuel-efficient, and built for comfort in shorter hops and cross-country trips.",
  },
  {
    name: "Cessna Citation XLS+",
    image: jet3,
    flightTime: "4.5 hours",
    capacity: "7-8",
    description: "Luxury meets reliability in one of the most popular midsize jets ever made.",
  },
];


const MidJets = () => {
  return (
    <div className="bg-black text-white min-h-screen animate-fadeIn">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="uppercase text-xl tracking-widest text-white/60 mb-2 animate-fadeInUp">
          Aircraft
        </p>
        <h1 className="text-2xl md:text-5xl font-luxury tracking-wide leading-tight animate-fadeInUp">
          Mid-Size Jet Models
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-xl animate-fadeInUp">
          Designed for longer journeys without sacrificing speed or luxury, our midsize jets offer the perfect balance.
        </p>
      </section>

      <section className="space-y-10 px-4 max-w-6xl mx-auto pb-20">
        {jets.map((jet, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-2xl shadow-md flex flex-col md:flex-row items-center md:justify-between gap-6 p-6 md:p-8 animate-slideInCard hover:scale-[1.015] hover:shadow-xl hover:animate-glowUp transition-all duration-300"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={jet.image}
              alt={jet.name}
              className="w-full md:w-[40%] h-[220px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex-1 text-left space-y-4">
              <h2 className="text-2xl font-luxury">{jet.name}</h2>
              <div className="flex gap-3 text-xl">
                <span className="bg-white/10 px-4 py-1 rounded-full">⏱ {jet.flightTime}</span>
                <span className="bg-white/10 px-4 py-1 rounded-full">👥 {jet.capacity}</span>
              </div>
              <p className="text-white/70 text-xl">{jet.description}</p>
              <Link
                to="/book"
                className="inline-block border border-white px-5 py-2 text-base rounded-full hover:bg-white hover:text-black transition-all duration-300 active:animate-pulseIn"
              >
                → BOOK NOW
              </Link>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default MidJets;
