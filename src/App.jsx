import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import BookNow from "./Pages/BookNow";
import RequestQuote from "./Pages/RequestQuote";
import RegisterJet from "./Pages/RegisterJet";
import LightJets from "./Pages/LightJets"; // ✅ NEW
import MidJets from "./Pages/MidJets";
import HeavyJets from "./Pages/HeavyJets";


const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/quote" element={<RequestQuote />} />
          <Route path="/register-jet" element={<RegisterJet />} />
          <Route path="/aircraft/light-jets" element={<LightJets />} />
          <Route path="/aircraft/mid-jets" element={<MidJets />} />       {/* ✅ Mid Jet Page */}
          <Route path="/aircraft/heavy-jets" element={<HeavyJets />} />  {/* ✅ Light Jet Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
