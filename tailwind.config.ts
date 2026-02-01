import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "var(--font-display)",
          "Georgia",
          "Cambria",
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Times New Roman",
          "Times",
          "serif",
        ],
        accent: [
          "var(--font-accent)",
          "Garamond",
          "Book Antiqua",
          "Baskerville",
          "Baskerville Old Face",
          "Didot",
          "Hoefler Text",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        body: [
          "var(--font-body)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Gill Sans",
          "Gill Sans MT",
          "Verdana",
          "Roboto",
          "Trebuchet MS",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
