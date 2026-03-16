import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003957",
          50: "#e6f0f6",
          100: "#cce1ed",
          200: "#99c3db",
          300: "#66a5c9",
          400: "#3387b7",
          500: "#0069a5",
          600: "#005484",
          700: "#003f63",
          800: "#003957",
          900: "#001e2e",
          950: "#000f17",
        },
        accent: {
          DEFAULT: "#a8c941",
          50: "#f4f9e8",
          100: "#e9f3d1",
          200: "#d3e7a3",
          300: "#bddb75",
          400: "#a8c941",
          500: "#8aab2d",
          600: "#6c8823",
          700: "#4e641a",
          800: "#304110",
          900: "#121d07",
        },
        sage: {
          DEFAULT: "#c6ccb0",
          50: "#f5f6f0",
          100: "#ebeee1",
          200: "#d7dcc3",
          300: "#c6ccb0",
          400: "#b0b895",
          500: "#9aa37a",
          600: "#7d875f",
          700: "#606847",
          800: "#434930",
          900: "#262a1c",
        },
        surface: "#f8faf5",
        dark: "#001e2e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #001e2e 0%, #003957 50%, #004d70 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #8aab2d 0%, #a8c941 100%)",
        "gradient-card":
          "linear-gradient(145deg, #ffffff 0%, #f8faf5 100%)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0, 57, 87, 0.08)",
        "card-hover": "0 8px 40px rgba(0, 57, 87, 0.16)",
        "cta": "0 8px 32px rgba(168, 201, 65, 0.4)",
        "cta-hover": "0 12px 48px rgba(168, 201, 65, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
