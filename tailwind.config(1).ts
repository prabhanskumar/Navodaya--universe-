import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: "#00000A",
          dark: "#05050F",
          deep: "#080818",
        },
        galaxy: {
          blue: "#0B1EFF",
          mid: "#1A3AFF",
          light: "#3D5CFF",
        },
        cyan: {
          electric: "#00F0FF",
          mid: "#00C8FF",
          soft: "#7FFFFF",
        },
        nebula: {
          purple: "#7B2FFF",
          violet: "#A855F7",
          pink: "#D946EF",
        },
        gold: {
          accent: "#FFD700",
          light: "#FFE55C",
          warm: "#FFA500",
        },
        glow: {
          white: "#F0F8FF",
          blue: "#4FC3F7",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Exo 2", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "orbit": "orbit 10s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "meteor": "meteor 3s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(0, 240, 255, 0.8), 0 0 100px rgba(0, 240, 255, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.5)" },
        },
        meteor: {
          "0%": { transform: "translateX(-100px) translateY(-100px)", opacity: "1" },
          "100%": { transform: "translateX(300px) translateY(300px)", opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "galaxy-gradient": "radial-gradient(ellipse at center, #1a0533 0%, #050520 40%, #00000A 100%)",
        "hero-radial": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(11,30,255,0.15) 0%, transparent 60%)",
        "cyan-glow": "radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "cyan-glow": "0 0 30px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.2)",
        "purple-glow": "0 0 30px rgba(123, 47, 255, 0.4), 0 0 60px rgba(123, 47, 255, 0.2)",
        "gold-glow": "0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
