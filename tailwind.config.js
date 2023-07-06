/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Raleway', 'serif'],
      body: ['Raleway'],
    },
  },
  plugins: [require('flowbite/plugin')],
};

