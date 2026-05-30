/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Obsidian Craft palette
        bg: {
          primary: '#0d0d0f',
          secondary: '#141416',
          card: '#1a1a1e',
          hover: '#1f1f24',
        },
        accent: {
          gold: '#f0a500',
          'gold-light': '#f5bc3d',
          'gold-dim': '#f0a50020',
          teal: '#00d4aa',
          'teal-dim': '#00d4aa18',
        },
        text: {
          primary: '#f0ede8',
          secondary: '#a09d98',
          muted: '#5c5a56',
        },
        border: {
          subtle: '#ffffff0d',
          default: '#ffffff1a',
          strong: '#ffffff30',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(240, 165, 0, 0.15)',
        'teal': '0 0 30px rgba(0, 212, 170, 0.12)',
        'card': '0 1px 0 rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.4)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
