/** @type {import('tailwindcss').Config} */
export default {
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
      },
      height:{screen:"100dvh"},
      // height:{screen:"100dvh"},  
      fontFamily:{
        bellefair:["bellefair","sans-serif"],
        Barlow_Condensed:["Barlow Condensed","sans-serif"],
      },
    },
  },
  plugins: [], 
};
