/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  		},
  		backgroundImage: {
  			'homepage-background': "url('/homepagebg3.jpg')",
  			'category-background': "url('/categorybg2.jpg')"
  		},
  		boxShadow: {
  			'soft': 'var(--shadow)',
  			'soft-md': 'var(--shadow-md)',
  			'soft-lg': 'var(--shadow-lg)',
  		},
  		colors: {
  			textdark: 'rgb(var(--color-text-dark))',
  			textlight: 'rgb(var(--color-text-light))',
  			texthoverlight: 'rgb(var(--color-text-hover-light))',
  			texthoverdark: 'rgb(var(--color-text-hover-dark))',
  			backgroundlight: 'rgb(var(--color-background-light))',
  			backgrounddark: 'rgb(var(--color-background-dark))',
  			backgroundhoverdark: 'rgb(var(--color-background-hover-dark))',
  			backgroundhoverlight: 'rgb(var(--color-background-hover-light))',
			backgroundgray: 'rgb(var(--color-background-gray))',
			brand: 'rgb(var(--color-accent))',
			brandhover: 'rgb(var(--color-accent-hover))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  variants: {
    extend: {
      overflow: ['hover', 'focus'],
      whitespace: ['hover', 'focus'],
    },
  },
  plugins: [
    require("daisyui"),
      require("tailwindcss-animate")
],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
  darkMode: ['selector', '[data-theme="dark"]'],
}