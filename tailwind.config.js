/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgNav: 'url(https://static.wixstatic.com/media/c1b522_db6cc2be10fd4988b870c4c9426c3836~mv2.png/v1/fill/w_1512,h_328,al_c,q_90,enc_auto/c1b522_db6cc2be10fd4988b870c4c9426c3836~mv2.png)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
