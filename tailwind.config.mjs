/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg': '#FAFAFA',
        'text': '#1A1A1A',
        'primary': '#1E3A5F',
        'primary-hover': '#152C49',
        'secondary': '#475569',
        'accent': '#D97706',
        'cta': '#EA580C',
        'cta-hover': '#DC4E06',
        'muted': '#71717a',
        'card-bg': '#f1f4f8',
        'border': '#d5dce6',
      },
      fontFamily: {
        heading: ["'DM Serif Display'", 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
      borderRadius: {
        'brand': '10px',
      },
    },
  },
  plugins: [],
};
