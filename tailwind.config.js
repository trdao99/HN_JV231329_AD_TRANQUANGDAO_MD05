/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/src/components/productsPage/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
