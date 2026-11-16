/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#008744",
          dark: "#007038",
          light: "#e8f5e9",
        },
      },
    },
  },
  plugins: [],
};
