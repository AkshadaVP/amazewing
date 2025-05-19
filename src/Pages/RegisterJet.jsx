import React from "react";

const inputStyle = "w-full bg-black border border-white text-white px-4 py-2 rounded-md focus:outline-none";
const labelStyle = "block text-sm font-semibold text-white mb-1";

const RegisterJet = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-black rounded-xl border border-white p-10">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase">Register Your Jet</h2>

        {/* Section: Operator Details */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold border-b border-white pb-2 mb-6">1. Operator Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Company Name</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Contact Person Name</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Official Email Address</label>
              <input type="email" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Phone Number (with country code)</label>
              <input type="tel" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Company Website (optional)</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Country of Operation</label>
              <input type="text" className={inputStyle} />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelStyle}>Preferred Contact Method</label>
            <div className="flex flex-wrap gap-6">
              {["Email", "Phone", "WhatsApp"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input type="radio" name="contactMethod" className="accent-white" />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Aircraft Details */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold border-b border-white pb-2 mb-6">2. Aircraft Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Aircraft Make & Model</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Tail Number / Registration ID</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Year of Manufacture</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Seating Capacity</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Home Base Airport (ICAO/IATA)</label>
              <input type="text" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Range (nautical miles or km)</label>
              <input type="text" className={inputStyle} />
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Available Amenities</label>
              <textarea className={inputStyle} rows="3" />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelStyle}>Jet Category</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Light Jet", "Midsize", "Heavy", "Ultra Long Range", "Helicopter", "Other"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-white" />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Legal & Compliance */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold border-b border-white pb-2 mb-6">3. Legal & Compliance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>AOC Certificate Upload</label>
              <input type="file" className="w-full text-white" />
            </div>
            <div>
              <label className={labelStyle}>Insurance Certificate Upload</label>
              <input type="file" className="w-full text-white" />
            </div>
          </div>

          <div className="mt-6">
            <label className={labelStyle}>Maintenance Compliance Status</label>
            <div className="flex gap-6">
              {["Up to date", "Needs review"].map((status) => (
                <label key={status} className="flex items-center gap-2">
                  <input type="radio" name="maintenanceStatus" className="accent-white" />
                  {status}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Optional */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold border-b border-white pb-2 mb-6">4. Optional</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Upload Jet Images</label>
              <input type="file" className="w-full text-white" />
            </div>
            <div>
              <label className={labelStyle}>Available for Charter</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="charter" className="accent-white" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="charter" className="accent-white" /> No
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Other Comments / Notes</label>
              <textarea className={inputStyle} rows="3" />
            </div>
          </div>
        </section>

        {/* Submit */}
        <div className="text-center mt-8">
          <button className="bg-white text-black font-bold px-10 py-3 rounded-full hover:bg-neutral-200 transition-colors">
            Submit for Review
          </button>
          <p className="mt-3 text-sm italic text-white opacity-70">
            Our team will contact you within 24–48 hours for onboarding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterJet;
