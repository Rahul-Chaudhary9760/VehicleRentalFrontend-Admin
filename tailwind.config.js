/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        White: '#FFFFFF',
        WhiteSecondary: '#F5F5F5',
        textSecondary: '#6e7171',
        teritory: '#D6D6D6'
      },
      fontFamily: {
        serif: ['PT Serif' , 'serif']
      }
      
    },
  },
  plugins: [],
}

