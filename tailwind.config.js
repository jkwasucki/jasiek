/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./out/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

