import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("--bg"),
        fg: c("--fg"),
        panel: c("--panel"),
        line: c("--line"),
        accent: c("--accent"),
        onaccent: c("--onaccent"),
        tint: c("--tint"),
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        kenburns: { from: { transform: "scale(1.05)" }, to: { transform: "scale(1.16)" } },
        rise: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } },
        fade: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        flow: { to: { strokeDashoffset: "-40" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        kenburns: "kenburns 14s ease-in-out infinite alternate",
        rise: "rise .8s ease both",
        fade: "fade .5s ease both",
        marquee: "marquee 32s linear infinite",
        flow: "flow 1.6s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
