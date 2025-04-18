/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
    "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1fb6ff',
        'secondary-pink': '#ff49db',
        'accent-orange': '#ff7849',
        'success-green': '#13ce66',
        'gray-dark': '#273444',
        'gray-medium': '#8492a6',
        'gray-light': '#d3dce6',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],

  // enable dark mode via class strategy
  darkMode: 'class',
  plugins: [require('flowbite/plugin')({
    charts: true,
}),],
}