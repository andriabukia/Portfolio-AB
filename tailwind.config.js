/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00F0FF',
          hover: '#3bf4ff',
        },
        secondary: {
          DEFAULT: '#10B981',
          hover: '#34d399',
        },
        tertiary: {
          DEFAULT: '#6366F1',
          hover: '#818cf8',
        },
        neutral: {
          DEFAULT: '#0B0F17',
          darker: '#070a10',
          card: '#111827',
          surface: '#0f172a',
          border: '#1e293b',
          input: '#151d2f',
          textMuted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['"Fira GO"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -3px rgba(0, 240, 255, 0.35)',
        'neon-green': '0 0 15px -2px rgba(16, 185, 129, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

