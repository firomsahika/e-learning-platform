import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
             
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },

      fontFamily: {
        poppins: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#9158fa',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(0deg, #F8FCFD 0%, #40B1D8 0%, #F8FCFD 90%)',
      }),
      // animation: {
      //   gradient: "gradient 8s linear infinite",
      // },
      // keyframes: {
      //   gradient: {
      //     to: {
      //       backgroundPosition: "var(--bg-size) 0",
      //     },
      //   },
      // },
      
     
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config