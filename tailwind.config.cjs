module.exports = {
  content:["./src/**/*.{js,jsx}"],
  variants: {
    animation: ["motion-safe"]
},
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
 
  },
  plugins: [
    require('@tailwindcss/typography'),('@tailwindcss/forms'),('@tailwindcss/aspect-ratio'),
    // ...
  ],
}