const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app.{ts,js,vue}",
    "./components/**/*.{ts,js,vue}",
    "./layouts/**/*.{ts,js,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightTheme: "#ffffff",
        darkTheme: "#121212",
        black: {
          500: "#191919",
          600: "#111111",
          700: "#0D0D0D",
          800: "#070707",
          900: "#000000",
        },
        white: {
          500: "#EEEEEE",
          700: "#FAFAFA",
          900: "#ffffff",
        },
        gray: {
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
        },
        cyan: {
          200: "#80DEEA",
          300: "#4DD0E1",
          400: "#26C6DA",
          500: "#00BCD4",
          600: "#00ACC1",
          700: "#51CDED",
        },
        blue: {
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#105FD6", 
        },
        pink: {
          200: "#F48FB1",
          300: "#F06292",
          400: "#EC407A",
          500: "#E91E63",
          600: "#D81B60",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "none",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      transitionProperty: {
        top: "top",
      },
      fontFamily: {
        display: ["Rubik", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
    },
  },
  plugins: [],
};
