/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#213547',
      },
      animation : {
        blink : 'blink 1s ease-in-out infinite'
      },
      keyframes: {
        blink:{
          '0%, 100%' : { opacity: 1 },
          '50%' : {opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

