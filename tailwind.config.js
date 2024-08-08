/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-background': "url('/homepagebg3.jpg')",
        'category-background': "url('/categorybg2.jpg')",
      },
      colors: {
        textdark: "rgba(var(--color-text-dark))",
        textlight: "rgba(var(--color-text-light))",
        texthoverlight: "rgba(var(--color-text-hover-light))",
        texthoverdark:"rgba(var(--color-text-hover-dark))",
        backgroundlight: "rgba(var(--color-background-light))",
        backgrounddark: "rgba(var(--color-background-dark))",
        backgroundhoverdark: "rgba(var(--color-background-hover-dark))",
        backgroundhoverlight: "rgba(var(--color-background-hover-light))",
      },
    },
  },
  variants: {
    extend: {
      overflow: ['hover', 'focus'],
      whitespace: ['hover', 'focus'],
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
  darkMode: ['selector', '[data-theme="dark"]'],
}