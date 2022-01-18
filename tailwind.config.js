module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily : {
      sans: ['Reem Kufi','sans-serif'],
    }, 
    colors: {
      brightred: {
        50: '#fb0f0f',
        100: '#e20e0e',
        200: '#c90c0c',
        300: '#b00b0b',
        400: '#970909',
        500: '#7e0808',
        600: '#640606',
        700: '#4b0404',
        800: '#320303',
        900: '#190101'
      },
      navy: {
        50: '#70778e',
        100: '#58617b',
        200: '#404a69',
        300: '#283456',
        400: '#101d43',
        500: '#101d43',
        600: '#0e1a3c',
        700: '#0d1736',
        800: '#0d1736',
        900: '#0b142f',
      }
  }
},
  },
  plugins: [ require("@tailwindcss/forms")({
    strategy: 'class'
  })],
}
