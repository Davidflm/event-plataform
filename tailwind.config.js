// @type {import('tailwindcss').Config}
 
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      }
    },
  },
  plugins: [],
}
