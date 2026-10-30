/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nardo: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d5d9dc',
          300: '#b0b7bd',
          400: '#828b94',
          500: '#636d77',
          600: '#4f5760',
          700: '#414849',
          800: '#3a3f40',
          900: '#0a0a0a',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#141414',
          muted: '#1c1c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', lg: '2rem' },
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [],
};
