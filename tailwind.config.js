/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#020617',
        surface: '#0f172a',
        border: '#1e293b',
        primary: '#6366f1',
        secondary: '#a855f7',
      },
    },
  },
  plugins: [],
}
