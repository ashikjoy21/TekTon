module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          100: '#f5f5f0',
          200: '#e0e0d1',
          300: '#ccccb3',
          400: '#b8b894',
          500: '#a3a375',
          600: '#8f8f56',
          700: '#7a7a38',
          800: '#66661a',
          900: '#52520d',
        },
        'wood-brown': {
          100: '#f2e6d9',
          200: '#e6ccb3',
          300: '#d9b38c',
          400: '#cc9966',
          500: '#bf8040',
          600: '#a66c2c',
          700: '#8c591a',
          800: '#734d15',
          900: '#593d0d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}

