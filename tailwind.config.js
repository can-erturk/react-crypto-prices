/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#141416",
        "secondary": "#18191d",
        "brand": "#3772ff",
      },
    },
  },
  plugins: [],
}
