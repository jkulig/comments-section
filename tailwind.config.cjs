/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontFamily: {
      sans: ['Rubik']
    },
    colors: {
      'white': 'white',
      'blue-300': 'hsl(238, 40%, 52%)',
      'blue-600': 'hsl(239, 57%, 85%)',
      'red-200': 'hsl(358, 79%, 66%)',
      'red-600': 'hsl(357, 100%, 86%)',
      'gray-100': 'hsl(212, 24%, 26%)',
      'gray-200': 'hsl(211, 10%, 45%)',
      'gray-500': 'hsl(223, 19%, 93%)',
      'gray-600': 'hsl(228, 33%, 97%)'
    },
    extend: {},
  },
  plugins: [],
}
