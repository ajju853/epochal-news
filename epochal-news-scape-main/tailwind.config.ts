
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				paper: 'hsl(var(--paper))',
				ink: 'hsl(var(--ink))',
				'accent-red': 'hsl(var(--accent-red))',
				'vintage-dark': 'hsl(var(--vintage-dark))',
				'vintage-light': 'hsl(var(--vintage-light))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--accent))' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'fold': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(10deg)' }
				},
				'paper-ripple': {
					'0%': { 
						boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
						transform: 'scale(0.98)'
					},
					'100%': { 
						boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'ink-spread': {
					'0%': { 
						filter: 'blur(0px)',
						opacity: '1'
					},
					'100%': { 
						filter: 'blur(1px)',
						opacity: '0.9'
					}
				},
				'fold-corner': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0.98) rotate(-2deg)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 3.5s steps(40, end) infinite',
				'cursor-blink': 'blink 0.75s step-end infinite',
				'marquee': 'marquee 25s linear infinite',
				'fold': 'fold 0.5s ease-out forwards',
				'paper-ripple': 'paper-ripple 0.5s ease-in-out',
				'float': 'float 6s ease-in-out infinite',
				'ink-spread': 'ink-spread 0.5s ease-out forwards',
				'fold-corner': 'fold-corner 0.3s ease-out',
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Source Sans Pro', 'sans-serif'],
			},
			gridTemplateColumns: {
				'newspaper': '2fr 1fr',
				'newspaper-mobile': '1fr',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
