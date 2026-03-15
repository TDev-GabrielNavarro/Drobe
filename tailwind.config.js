/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "drobe-bg-lg": "#FAF7F2",
        "drobe-bg-dk": "#18120E",
        "txt-lg": "#2C1A0E",
        "txt-dk": "#F5EFE8",
        "tint-lg": "#7C5C3E",
        "tint-dk": "#C9956A",
        "muted-lg": "#B8977E",
        "muted-dk": "#8A7060",
        "navbar-dk": "#241A14",
        "navbar-lg": "#EDE8E0",
      },
    },
  plugins: [],
}
}
