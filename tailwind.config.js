/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Unicorn Marketers brand colors
        'um-dark': '#0a0a0a',
        'um-darker': '#050505',
        'um-gray': '#35393B',
        'um-cyan': '#00ACE9',
        'um-cyan-dark': '#0090c5',
        'um-blue': '#007aff',
        'um-platinum': '#e5e5e5',
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(0,172,233,0.1) 0%, transparent 50%, rgba(0,122,255,0.1) 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,172,233,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0,172,233,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
