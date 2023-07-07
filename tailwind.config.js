/** @type {import('tailwindcss').Config} */

const COLORS = ["orange", "yellow", "green", "purple", "fuchsia", "pink"];

const COLOR_CLASSES = COLORS.map((color) => `bg-${color}-500`);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [...COLOR_CLASSES],
};
