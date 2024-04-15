import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cupcake', 'emerald'],
  },
};
export default config;
