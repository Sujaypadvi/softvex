/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Poppins', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      animation: {
        blob: 'blob 10s infinite ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translateY(0px) scale(1)',
          },
          '50%': {
            transform: 'translateY(-25px) scale(1.05)',
          },
          '100%': {
            transform: 'translateY(0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
