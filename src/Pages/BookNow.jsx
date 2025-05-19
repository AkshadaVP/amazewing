import React, { useState } from "react";

const BookNow = () => {
  const [tripType, setTripType] = useState("");
  const [contactMethod, setContactMethod] = useState([]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Book Your Private Jet ✈️
        </h2>

        {/* Trip Type */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Trip Type</label>
          <div className="flex flex-wrap gap-4">
            {["One-Way", "Round Trip", "Multi-leg"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                  className="accent-white"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Airports & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Departure City / Airport</label>
            <input type="text" className="w-full px-3 py-2 bg-black border border-white rounded" />
          </div>
          <div>
            <label className="block mb-1">Destination City / Airport</label>
            <input type="text" className="w-full px-3 py-2 bg-black border border-white rounded" />
          </div>
          <div>
            <label className="block mb-1">Departure Date & Time</label>
            <input type="datetime-local" className="w-full px-3 py-2 bg-black border border-white rounded" />
          </div>
          {tripType === "Round Trip" && (
            <div>
              <label className="block mb-1">Return Date & Time</label>
              <input type="datetime-local" className="w-full px-3 py-2 bg-black border border-white rounded" />
            </div>
          )}
          <div>
            <label className="block mb-1">Preferred Jet Type</label>
            <select className="w-full px-3 py-2 bg-black border border-white rounded">
              <option>Light</option>
              <option>Midsize</option>
              <option>Heavy</option>
              <option>Ultra Long Range</option>
              <option>Not Sure</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Number of Passengers</label>
            <input type="number" className="w-full px-3 py-2 bg-black border border-white rounded" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <input type="text" placeholder="Full Name" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="tel" placeholder="Phone Number (+91...)" className="w-full px-3 py-2 bg-black border border-white rounded" />

          {/* Preferred Contact Method */}
          <div>
            <label className="block mb-1">Preferred Contact Method</label>
            <div className="flex gap-4">
              {["Email", "Phone", "WhatsApp"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={method}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setContactMethod((prev) =>
                        checked ? [...prev, method] : prev.filter((m) => m !== method)
                      );
                    }}
                    className="accent-white"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Fields */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Optional Details</h3>
          <textarea placeholder="Special Requests / Notes (catering, medical, pets)" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="text" placeholder="Budget Range (optional)" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="text" placeholder="Company Name (if corporate)" className="w-full px-3 py-2 bg-black border border-white rounded" />
        </div>

        {/* Submit */}
        <div className="mt-10 text-center">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition-colors">
            Confirm Booking Request
          </button>
          <p className="mt-2 text-sm italic text-gray-400">Our flight advisor will get in touch within 30 minutes.</p>
          <p className="mt-1 text-xs text-orange-400">🔒 100% Confidential. Your info is never shared.</p>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
