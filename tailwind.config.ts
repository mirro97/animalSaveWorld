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
        lightgreen: "rgb(181 218 193 / 60%)",
        lightyellow: "rgb(255 212 155 / 60%)",
        lightblue: "rgb(201 221 255 / 60%)",
        lightdeepgray: "rgb(204 203 210 / 60%)",
        green: "rgb(57 159 90)",
        yellow: "rgb(254 144 0)",
        blue: "rgb(80 146 255)",
        deepgray:
          "https://www.figma.com/file/qYlxQAoUCOOD7hiIsVKo0S/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80-%EC%84%B8%EC%83%81%EC%9D%84-%EA%B5%AC%ED%95%9C%EB%8B%A4?node-id=41%3A505&mode=dev",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
