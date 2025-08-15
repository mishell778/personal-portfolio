/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        bodoni: ['Bodoni Moda', 'sans-serif'],
        abel: ['Abel', 'sans-serif'],
        philosopher: ['Philosopher', 'sans-serif'], 
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(270deg, #ede7e7ff, #deccd8ff,  #bcb7bcff)', 
        // 'animated-gradient': 'linear-gradient(270deg, #fed6f1ff, #ddd8f5ff, #f2ead3ff)'
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      animation: {
        'gradientShift': 'gradientShift 10s ease infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

