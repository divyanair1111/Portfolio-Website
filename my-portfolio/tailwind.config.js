/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1F1F1F', // Darker gray for gradient start
          950: '#141414', // Even darker gray for gradient end
        },
      },
      backgroundImage: {
        'gradient-to-r-gray': 'linear-gradient(to right, #1F1F1F, #141414)', // Custom gray gradient
      },
    },
  },
  plugins: [],
}
