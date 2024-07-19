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
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 1.5s steps(20) alternate, blink .7s infinite',
      },
      colors: {
        start: '#021861',
        end: '#521638',
        textStart: '#8c0f56',
        textEnd: '#1447f0',
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
