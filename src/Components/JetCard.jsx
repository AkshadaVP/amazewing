import React from "react";

const JetCard = ({ image, sizeLabel, button, capacityRange }) => {
  return (
    <div className="text-white w-full">
      {/* Jet Image */}
      <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
        <img
          src={image}
          alt={sizeLabel}
          className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-[24px] sm:rounded-[30px]"
        />
      </div>

      {/* Label + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4">
        <p className="text-lg sm:text-xl">{sizeLabel}</p>
        <div>{button}</div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/30 mt-4 mb-2" />

      {/* Capacity Badge */}
      <div className="flex items-center text-base sm:text-lg bg-white/10 rounded-full px-3 py-1 w-max gap-2 flex-wrap">
        <span className="text-white">👥</span>
        <span className="text-white">{capacityRange}</span>
      </div>
    </div>
  );
};

export default JetCard;
