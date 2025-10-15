/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "retro-black": "#1a1a1a",
        "retro-dark-grey": "#2e2e2e",
        "retro-light-grey": "#b0b0b0",
        "retro-electric-blue": "#00ffff",
        "retro-purple": "#9933ff",
        "retro-neon-green": "#39ff14",
        "retro-vibrant-red": "#ff073a",
        "retro-orange": "#ff9900",
        "retro-light-blue": "#00ccff",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      keyframes: {
        // REMOVIDA AQUI
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "pulse-glow": {
          from: {
            textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff",
          },
          to: {
            textShadow: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14",
          },
        },
        "button-pulse": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.02)" },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        // REMOVIDA AQUI
        glitch: "glitch 3s infinite linear alternate",
        "pulse-glow": "pulse-glow 2s infinite alternate",
        "button-pulse": "button-pulse 1.5s infinite alternate",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
