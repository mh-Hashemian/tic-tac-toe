/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#192a32",
        primary: "#31c4be",
        secondary: "#1f3540",
        yellow: "#f2b237",
      },
      fontFamily: {
        primary: "oswald-regular",
      },
    },
  },
  plugins: [],
};
