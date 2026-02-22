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
          primary:   '#060d1b',
          secondary: '#091222',
          card:      '#0c1a2e',
          hover:     '#0f2040',
        },
        border: {
          DEFAULT: '#162840',
          hover:   '#1d3f66',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover:   '#1d4ed8',
          light:   '#3b82f6',
          muted:   'rgba(37,99,235,0.15)',
        },
        text: {
          primary:   '#eef4ff',
          secondary: '#7a9bbe',
          muted:     '#3d5a78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}

export default config
