module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),('@tailwindcss/forms')
    // ...
  ],
}