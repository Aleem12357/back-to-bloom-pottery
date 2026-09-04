/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#FFF9F6',
          100: '#FCEEE9',
          200: '#F7D6C8',
          300: '#EEB7A3',
          400: '#E4997E',
          500: '#D98A6C',
          600: '#C26F51',
          700: '#A1533A',
          800: '#7B3F2C',
          900: '#4A2E2B',
          950: '#2A1816',
        },
        terracotta: '#D98A6C',
        sand: '#F5ECE5',
        blush: '#FCEEE9',
        warmbrown: '#4A2E2B',
        sage: '#A8C3B8',
        cream: '#FFF9F6',
      },
      fontFamily: {
        sans: ['Comfortaa', 'Quicksand', 'Nunito', 'sans-serif'],
        heading: ['Comfortaa', 'Fredoka', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
