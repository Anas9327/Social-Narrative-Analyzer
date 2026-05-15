import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        panel: "#101827",
        line: "#253044",
        signal: "#5eead4",
        amber: "#f6c85f",
        coral: "#ff7a7a"
      }
    }
  },
  plugins: []
};

export default config;
