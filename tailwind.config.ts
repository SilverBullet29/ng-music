import type { Config } from "tailwindcss";
import customColor from "./src/styles/colors";
const config: Config = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      ...customColor,
    },
    extend: {
      height: {
        "max-mobile": "680px",
      },
      width: {
        "max-mobile": "340px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
