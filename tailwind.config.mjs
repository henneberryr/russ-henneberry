/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg': '#F8FAFC',
        'text': '#1E3A5F',
        'primary': '#1E3A5F',
        'primary-hover': '#152C49',
        'secondary': '#94A3B8',
        'accent': '#2563EB',
        'cta': '#2563EB',
        'cta-hover': '#1D4ED8',
        'muted': '#94A3B8',
        'card-bg': '#FFFFFF',
        'border': '#E2E8F0',
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", 'sans-serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
      borderRadius: {
        'brand': '10px',
      },
    },
  },
  plugins: [],
};
