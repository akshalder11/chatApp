/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      gilroy100: ["Gilroy-Light", "sans-serif"],
      gilroy200: ["Gilroy-Regular", "sans-serif"],
      gilroy300: ["Gilroy-Medium", "sans-serif"],
      gilroy400: ["Gilroy-SemiBold", "sans-serif"],
      gilroy500: ["Gilroy-Bold", "sans-serif"],
      gilroy600: ["Gilroy-ExtraBold", "sans-serif"],
      avenir100: ["Avenir-Book", "sans-serif"],
      avenir200: ["Avenir-Roman", "sans-serif"],
      avenir300: ["Avenir-Medium", "sans-serif"],
      productSans100: ["ProductSans-Regular", "sans-serif"],
      productSans200: ["ProductSans-Bold", "sans-serif"],
    }
  },
  plugins: [],
}