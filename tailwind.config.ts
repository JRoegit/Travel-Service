import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        emerald: {
          '900' : '#003835'
        },
        zinc: {
          '800' : '#070707'
        } 
      },
      backgroundImage: {
        'hero': "url('../public/heroBgImage.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
