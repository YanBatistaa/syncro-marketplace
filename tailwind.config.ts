import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#020508',
          secondary: '#040a12',
          card:      '#060d18',
          hover:     '#091220',
          surface:   '#0b1624',
        },
        border: {
          DEFAULT: '#0e2035',
          hover:   '#163050',
          strong:  '#1a3a5c',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover:   '#1d4ed8',
          light:   '#60a5fa',
          muted:   'rgba(37,99,235,0.12)',
          glow:    'rgba(37,99,235,0.20)',
        },
        text: {
          primary:   '#e8f0fe',
          secondary: '#4d7498',
          muted:     '#253a52',
          faint:     '#162233',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
