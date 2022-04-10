module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
