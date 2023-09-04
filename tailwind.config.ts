import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        normal: "#949495",
        secondary: "#868e96",
        lightgray: "#dee2e6",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
