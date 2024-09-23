/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        tone: ["TitanOne-Regular", "sans-serif"],
        zdots: ["ZenDots-Regular", "sans-serif"],
        cblack: ["Cairo-Black", "sans-serif"],
        cbold: ["Cairo-Bold", "sans-serif"],
        cextrabold: ["Cairo-ExtraBold", "sans-serif"],
        cextralight: ["Cairo-ExtraLight", "sans-serif"],
        clight: ["Cairo-Light", "sans-serif"],
        cmed: ["Cairo-Medium", "sans-serif"],
        creg: ["Cairo-Regular", "sans-serif"],
        csbold: ["Cairo-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

