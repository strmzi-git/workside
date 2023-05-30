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
    screens: {
      "3xs": "375px",
      xxs: "515px",
      xs: "560px",
      sm: "680px",
      md: "768px",
      "2md": "975px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
