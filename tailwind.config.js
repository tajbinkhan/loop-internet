/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"shadow-blue": "#232f4e",
				gredish: "#cdcdcd",
				button: "#1cbfff",
				"button-hover": "#6afff3",
				"transparent-white": "#ffffff8a",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			screens: {
				"2xl": { max: "1535px" },
				xl: { max: "1279px" },
				lg: { max: "1023px" },
				md: { max: "767px" },
				sm: { max: "639px" },
				"app-400": { max: "639px" },
				"app-355": { max: "355px" },
			},
		},
	},
	plugins: [],
};
