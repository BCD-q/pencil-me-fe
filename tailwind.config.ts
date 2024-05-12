import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 0px 0px rgba(0, 0, 0, 0.3)',
      },
    },
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
    themes: [
      {
        mytheme: {
          primary: '#a991f7',
          accent: '#78be5e',
        },
      },
      'cupcake',
      'halloween',
    ],
  },
};
export default config;
