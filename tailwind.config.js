/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nico: ["Nico Moji"],
        khyay: ["MyanmarKhyay", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
        syncopate: ["Syncopate", "sans-serif"],
        goldman: ["Goldman", "sans-serif"],
        dela: ["Dela Gothic One", "sans-serif"],
      },
      colors: {
        primary: "#016331",
      },
    },
  },
  plugins: [],
};
