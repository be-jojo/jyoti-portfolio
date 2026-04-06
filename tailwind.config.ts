import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: {
          DEFAULT: '#59E3A7',
          secondary: '#60A5FA',
          tertiary: '#F59E0B',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(96, 165, 250, 0.18)',
        glass: '0 12px 40px rgba(15, 23, 42, 0.28)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(89, 227, 167, 0.18), transparent 30%), radial-gradient(circle at 85% 10%, rgba(96, 165, 250, 0.2), transparent 25%), linear-gradient(180deg, rgba(10, 14, 27, 0.95), rgba(4, 7, 14, 1))',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.04)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
