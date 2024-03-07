/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F23869",
        secondary: "#110559",
        tertiary: "#21118C",
        quaternary: "#030226",
      },
      fontFamily: {
        poppins: ["Poppins", "Noto Sans JP", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/image/heroBackground.jpg')",
      },
    },
  },
  plugins: [],
};
