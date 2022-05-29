module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1800px',
    },
    extend: {
      colors: {
        site_yellow: "#FFA31A",
        site_black: '#1B1B1B',
        light_text: '#808080',
      },
      boxShadow:{
        stepShadow: '-4px -4px 10px rgba(58, 58, 58, 0.7)',
        Shadow2: '4px 4px 10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}