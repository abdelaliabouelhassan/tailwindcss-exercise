/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors:{
        primary:'#EC3A47',
        secondary:"#1E293B",
        "opaque-blue-grey":"#F8F8F8"
      },
      fontFamily:{
        lato:['Lato', 'ui-serif'],
        nunito:['Nunito', 'ui-serif']
      }
    },
  },
  plugins: [],
};
