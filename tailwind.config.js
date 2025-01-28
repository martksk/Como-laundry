/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '1.25rem',
      widest: '3.5rem',
    },
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }),

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-bg': "url('/images/como3.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  
};
