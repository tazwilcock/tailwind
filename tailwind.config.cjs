/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Red Rose", "serif"],
      },
    },
  },
  plugins: [],
};
