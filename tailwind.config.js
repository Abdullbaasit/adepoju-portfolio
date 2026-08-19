/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBD4",
        creamDeep: "#F7F2C4",
        olive: "#BDB76B",
        oliveDeep: "#8F8A4D",
        oliveSoft: "#E9E6C9",
        ink: "#2B2A1E",
        inkSoft: "#6B6650",
        // dark theme tokens
        darkBg: "#1B1A12",
        darkSurface: "#242216",
        darkSurfaceSoft: "#33301C",
        darkLine: "#3A3722",
        darkOliveDeep: "#D7D192",
        darkInkSoft: "#A9A488",
        darkText: "#F3F1DE"
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        floatChip: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" }
        },
        floatChipReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        spinSlowReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" }
        },
        gradientDrift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease both",
        fadeIn: "fadeIn 1s ease both",
        scaleIn: "scaleIn 0.9s ease both",
        floatChip: "floatChip 4.5s ease-in-out infinite",
        floatChipReverse: "floatChipReverse 4.5s ease-in-out infinite",
        spinSlow: "spinSlow 40s linear infinite",
        spinSlowReverse: "spinSlowReverse 60s linear infinite",
        pulseSoft: "pulseSoft 1.8s ease-in-out infinite",
        gradientDrift: "gradientDrift 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
