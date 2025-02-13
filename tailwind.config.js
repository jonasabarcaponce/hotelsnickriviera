/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        nickelodeonGreen: '#90c858', 
        nickelodeonOrange: '#f37021',
      },
      boxShadow: {
        'cg-big': '0px -10px 100px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

