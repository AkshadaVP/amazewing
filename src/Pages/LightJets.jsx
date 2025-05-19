import React from "react";
import { Link } from "react-router-dom";
import jet1 from "../assets/pilatus-pc24-lg1.jpg";
import jet2 from "../assets/learjet-75-liberty-lg2.jpg";
import jet3 from "../assets/embraer-phenom-300-lg3.jpg";
import jet4 from "../assets/cessna-cj3cj4-lg4.jpeg";
import Footer from "../Components/Footer";

const jets = [
  {
    name: "Pilatus PC-24",
    image: jet1,
    flightTime: "4 hours",
    capacity: "6-8",
    description: "A versatile jet offering runway flexibility and luxurious comfort.",
  },
  {
    name: "Learjet 75 Liberty",
    image: jet2,
    flightTime: "3.5 hours",
    capacity: "6-8",
    description: "Fast and stylish, ideal for executive travel and short hops.",
  },
  {
    name: "Embraer Phenom 300",
    image: jet3,
    flightTime: "4.5 hours",
    capacity: "6-8",
    description: "Sleek performance and spacious interior for modern flyers.",
  },
  {
    name: "Cessna Citation CJ3/CJ4",
    image: jet4,
    flightTime: "5 hours",
    capacity: "6-8",
    description: "Efficient and elegant — a favorite for short to mid-range trips.",
  },
];

const LightJets = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <p className="uppercase text-sm sm:text-base tracking-widest text-white/60 mb-2 animate-fadeInUp">
          Aircraft
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-luxury tracking-wide leading-tight animate-fadeInUp">
          Light Jet Models
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg md:text-xl animate-fadeInUp">
          Explore our elite collection of light jets — designed for speed, efficiency and style in short- to mid-range luxury travel.
        </p>
      </section>

      {/* Jet Cards */}
      <section className="space-y-10 px-4 sm:px-6 max-w-6xl mx-auto pb-16 sm:pb-20">
        {jets.map((jet, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-6 md:p-8 animate-slideInCard hover:scale-[1.015] hover:shadow-xl transition-all duration-300"
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

              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                {jet.description}
              </p>

              <Link
                to="/book"
                className="inline-block border border-white px-5 py-2 text-sm sm:text-base rounded-full hover:bg-white hover:text-black transition-all duration-300"
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

export default LightJets;
