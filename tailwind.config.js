/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Yellow
          dark: '#FFC700',
          light: '#FFE44D',
        },
        dark: {
          DEFAULT: '#0A0A0A', // Darker background
          light: '#1A1A1A',
          lighter: 'rgba(26, 26, 26, 0.8)',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}