/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        bodoni: ["Bodoni Moda", "sans-serif"],
        abel: ["Abel", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display2: ['Cormorant', 'serif'],
        cursive: ['Petit Script', 'cursive'],
        ballet: ['Ballet', 'cursive'],
        luxurious: ['"Luxurious Script"', 'cursive'],
        formal: ['"Petit Formal Script"', 'cursive'],
      },
      backgroundImage: {
        "mesh-gradient": `
        radial-gradient(at 15% 20%, #C9D8F6 0%, transparent 60%),
        radial-gradient(at 80% 70%, #E6EAF9 0%, transparent 60%),
        radial-gradient(at 30% 75%, #F6EEDB 0%, transparent 60%)
        `,
      },
    },
  },
  plugins: [],
};
