/** @type {import('tailwindcss').Config} */
export default {
content: ["*",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {
      gridTemplateRows: {
        '0': '0'
      },
      transitionDuration: {
        '2000': '2000ms'
    },
      transitionDelay: {
        '5000': '5000ms'
      }
  },
  plugins: [],
}

}