/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(57, 57, 57, 0.6)', // Define your custom color
      },
    },
  },
  plugins: [],
}