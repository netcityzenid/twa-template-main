/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        mono: ["Onest"],
        sans: ["Onest"],
      },
    },
  },
  plugins: [],
};
