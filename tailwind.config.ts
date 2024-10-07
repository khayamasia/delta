import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // /app
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}", // /assets
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // /components
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}", // /feature
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}", // /layout
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}", // / utils
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
export default config;
