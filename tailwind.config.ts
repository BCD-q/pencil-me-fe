import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        footer: 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cupcake', 'emerald'],
  },
};
export default config;
