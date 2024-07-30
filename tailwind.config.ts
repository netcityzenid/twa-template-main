import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      padding: {
        "0.8px": "0.8px",
      },
      backgroundColor: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 0% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["Space Grotesk"],
        sans: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
export default config;
