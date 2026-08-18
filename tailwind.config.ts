import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          2: 'hsl(var(--surface-2))',
        },
        line: 'hsl(var(--line))',
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        violet: {
          DEFAULT: 'hsl(var(--violet))',
          soft: 'hsl(var(--violet-soft))',
        },
        mint: 'hsl(var(--mint))',
        amber: 'hsl(var(--amber))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        glow: '0 0 60px -10px hsl(var(--violet) / 0.6)',
        'glow-mint': '0 0 60px -10px hsl(var(--mint) / 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
