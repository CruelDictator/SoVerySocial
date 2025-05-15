/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1DA1F2',
        'secondary': '#E1E8ED',
        'background': '#CFF0DC',
        'text': '#14171A',
      },
    },
  },
  plugins: [],
} 