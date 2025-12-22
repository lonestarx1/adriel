export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        surface: "#1e293b",
        primary: "#7c3aed",
        secondary: "#22c55e",
        text: "#f1f5f9",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

