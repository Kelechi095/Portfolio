
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        lightCyan: "#f9fcfd",
        lighterCyan: "#fcfdfe",
        textColor: "#000"
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif', "Roboto"],
        opensans: ['Open Sans', 'sans-serif'],
      },
      
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [],
}