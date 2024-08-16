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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-bg': "url('/images/como3.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
      };

      addUtilities(newUtilities);
    },
  ],
};
