import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'star-wars': {
          '50': '#fefce8',
          '100': '#fdf8c4',
          '200': '#fcef8c',
          '300': '#fade4b',
          '400': '#f6ca19',
          '500': '#e6b10c',
          '600': '#c78907',
          '700': '#9e620a',
          '800': '#834d10',
          '900': '#6f3f14',
          '950': '#412007',
        },
      },
    },
  },
  plugins: [forms, typography],
} satisfies Config

