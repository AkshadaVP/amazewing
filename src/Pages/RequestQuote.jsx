import React, { useState } from "react";

const RequestQuote = () => {
  const [tripType, setTripType] = useState("");
  const [contactMethod, setContactMethod] = useState([]);
  const [purpose, setPurpose] = useState([]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Request a Quote 📝
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

        {/* Flight Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="From (Airport / City)" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="text" placeholder="To (Airport / City)" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="datetime-local" placeholder="Preferred Departure" className="w-full px-3 py-2 bg-black border border-white rounded" />
          {tripType === "Round Trip" && (
            <input type="datetime-local" placeholder="Preferred Return" className="w-full px-3 py-2 bg-black border border-white rounded" />
          )}
          <input type="number" placeholder="Number of Passengers" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <select className="w-full px-3 py-2 bg-black border border-white rounded">
            <option>Jet Category (Optional)</option>
            <option>Light Jet</option>
            <option>Midsize Jet</option>
            <option>Heavy Jet</option>
            <option>Ultra Long Range</option>
            <option>Not Sure</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <input type="text" placeholder="Full Name" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 bg-black border border-white rounded" />
          <input type="tel" placeholder="Phone Number (+91...)" className="w-full px-3 py-2 bg-black border border-white rounded" />

          {/* Contact Method */}
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

        {/* Purpose of Travel */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Purpose of Travel</h3>
          <div className="flex flex-wrap gap-4">
            {["Business", "Leisure", "Medical", "Other"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={type}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setPurpose((prev) =>
                      checked ? [...prev, type] : prev.filter((p) => p !== type)
                    );
                  }}
                  className="accent-white"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10 text-center">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition-colors">
            Submit Quote Request
          </button>
          <p className="mt-2 text-sm italic text-gray-400">Our team will respond shortly with options tailored to you.</p>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
