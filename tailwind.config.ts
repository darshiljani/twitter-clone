import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        twitter: "#1DA1F2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        circle: "50%",
      },
    },
  },
  plugins: [],
} satisfies Config;
