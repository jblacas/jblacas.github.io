/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
        'bold': ["Satoshi-Bold"],
        'light': ["Satoshi-Light"],
        'black': ["Satoshi-Black"],
    },
    listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        emoji: '"▸"'
      }
  },
  plugins: [],
};
