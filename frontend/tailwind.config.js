/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        start: '#021861',
        end: '#521638',
      },
      size: {
        ninety: '90%',
        almost_full: '95%',
      },
      width: {
        ninety: '90%',
      },
      transitionPropert: {
        spacing: 'margin, padding',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
