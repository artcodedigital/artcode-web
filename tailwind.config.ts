import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'hsl(var(--paper))',
          2: 'hsl(var(--paper-2))',
        },
        ink: {
          DEFAULT: 'hsl(var(--ink))',
          2: 'hsl(var(--ink-2))',
        },
        muted: 'hsl(var(--muted))',
        violet: {
          DEFAULT: 'hsl(var(--violet))',
          deep: 'hsl(var(--violet-deep))',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
