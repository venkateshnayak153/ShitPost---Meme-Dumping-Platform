/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#0a0a0a',
          950: '#0a0a0a',
          900: '#111111',
          850: '#151515',
          800: '#1c1c1c',
          750: '#1f1f1f',
          700: '#242424',
          600: '#2c2e31',
          500: '#646669',
          400: '#8c8e92',
          300: '#a8a8a3',
          200: '#b8b7ad',
          100: '#d1d0c5',
          50: '#f6f6f6',
        },
        cyber: {
          DEFAULT: '#e2b714',
          300: '#fef08a',
          400: '#fde047',
          500: '#e2b714', // Signature Monkeytype Yellow
          600: '#ca8a04',
          700: '#a16207',
        },
        brand: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#e2b714', // Monkeytype Yellow
          600: '#ca8a04',
          700: '#a16207',
        },
        surface: {
          light: '#f8fafc',
          DEFAULT: '#111111',
          dark: '#0e0e0e',
          darkCard: '#161616',
        },
        vote: {
          up: '#e2b714',
          down: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Luckiest Guy"', '"Titan One"', '"Bangers"', 'cursive', 'sans-serif'],
        luckiest: ['"Luckiest Guy"', 'cursive', 'sans-serif'],
        cartoon: ['"Titan One"', '"Luckiest Guy"', 'cursive', 'sans-serif'],
        meme: ['"Luckiest Guy"', '"Titan One"', '"Bangers"', 'cursive', 'sans-serif'],
        bangers: ['"Bangers"', 'cursive', 'sans-serif'],
        comic: ['"Comic Neue"', '"Comic Sans MS"', 'cursive', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
