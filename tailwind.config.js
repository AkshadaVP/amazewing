/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInCard: {
          "0%": { opacity: "0", transform: "translateY(60px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        slideInCard: "slideInCard 0.6s ease-out forwards",
      },
      fontFamily: {
        luxury: ["'LuxuryWide'", "sans-serif"], // You can change 'LuxuryWide' based on your font import
      }
    },
  },
  plugins: [],
};
