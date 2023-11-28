import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/images/buyCover.jpg')",
      },
      screens: {
        ml: "840px",
        xs: "480px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6d00ff",
          secondary: "#008500",
          accent: "#00cb00",
          neutral: "#262022",
          "base-100": "#fff7ff",
          info: "#18cdff",
          success: "#43e770",
          warning: "#ff9300",
          error: "#f9003b",
          body: {
            "background-color": "f2f3f8",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
