/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Helvetica LT Std"', "Arial Narrow", "sans-serif"],
        body: ['"Helvetica LT Std"', "Arial", "sans-serif"],
        extra: ['"Helvetica LT Std Extra"', "Arial Narrow", "sans-serif"], // Extra Compressed
        ultra: ['"Helvetica LT Std Ultra"', "Arial Narrow", "sans-serif"], // Ultra Compressed
      },
    },
  },
  plugins: [],
};
