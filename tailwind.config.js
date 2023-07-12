/** @type {import('tailwindcss').Config} */

const COLORS = ["orange", "yellow", "green", "purple", "fuchsia", "pink"];

const COLOR_CLASSES = COLORS.map((color) => `bg-${color}-500`);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "custom-pulse": {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.7,
          },
        },
      },
      animation: {
        "custom-pulse": "custom-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
  safelist: [...COLOR_CLASSES],
};
