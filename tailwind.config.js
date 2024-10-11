/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        customGray: '#151424', // Custom color name
        customGray2: '#1e1c32;', // Custom color name
      },
    },
  },
};
