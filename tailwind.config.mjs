/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-background)",
        secondary: "var(--secondary-background)",
        accent: "var(--accent)",
      },
      fontFamily: {
        grotesk: ["Grotesk", "serif"],
        josefin: ["Josefin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
