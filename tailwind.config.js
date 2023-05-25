/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack: "#15192A",
        myDarkBlue: "#1F273C",
        myLightBlue: "#005DF9",
        myGray: "#8F9BB3",
      },
    },
  },
  plugins: [],
};
