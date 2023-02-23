/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        peach: "#e7816b",
        black: "#1d1c1e",
        // white

        // Secondary colors
        "light-peach": "#ffad9b",
        "dark-grey": "#333136",
        "light-grey": "#f1f3f5",
      },
    },
  },
  plugins: [],
};
