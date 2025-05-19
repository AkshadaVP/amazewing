// src/components/JetCard.jsx
import React from "react";

const JetCard = ({ image, sizeLabel, button, capacityRange }) => {
  return (
    <div className="text-white">
      {/* Jet Image */}
      <div className="overflow-hidden rounded-[30px]">
        <img src={image} alt={sizeLabel} className="w-full h-auto" />
      </div>

      {/* Label + Button */}
      <div className="flex items-center justify-between mt-4 gap-2">
        <p className="text-xl">{sizeLabel}</p>
        {button}
      </div>

      {/* Divider */}
      <hr className="border-t border-white/30 mt-4 mb-2" />

      {/* Capacity Badge */}
      <div className="flex items-center text-xl bg-white/10 rounded-full px-3 py-1 w-max gap-2">
        <span className="text-white">👥</span>
        <span className="text-white">{capacityRange}</span>
      </div>
    </div>
  );
};

export default JetCard;
