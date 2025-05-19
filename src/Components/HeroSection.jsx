import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import heroVideo from "../assets/HeroVideo.mp4";
import AboutSection from "./AboutSection";
import AircraftSection from "./AircraftSection";


const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
  }, []);

  return (
    <section className="relative w-full mt-0 pt-0 bg-black overflow-hidden">
      {/* Hero Video Container */}
      <div
        ref={heroRef}
        className="relative w-screen h-[90vh] overflow-hidden"
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex="-1"
          controls={false}
          disablePictureInPicture
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
        />
        {/* Smooth fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"
        />
      </div>

      {/* Spacer below video */}
      <div className="h-16 sm:h-20 bg-black" />

      {/* Heading and Button */}
      <div className="flex flex-col items-center justify-center text-center py-12 bg-black text-white">
        <h1 className="text-4xl md:text-4xl font-semibold tracking-wider mb-8">
          WHERE LUXURY TAKES FLIGHT
        </h1>
        <Link
          to="#book"
          className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-lg"
        >
          BOOK NOW
        </Link>
      </div>

      <AboutSection />
      <AircraftSection />
    </section>
  );
};

export default HeroSection;
