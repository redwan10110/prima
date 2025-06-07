/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-mobile":
          "linear-gradient(176.12deg, #FFFFFF 7.92%, #21268E 98.23%)",
        "gradient-desktop":
          "linear-gradient(162.55deg, rgba(255, 255, 255, 0.5) 12.76%, rgba(33, 38, 142, 0.5) 93.98%)",
      },
      colors: {
        testblue: "#4F46E5", // Custom background color
      },
      fontFamily: {
        myfont: ["MyCustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
}
