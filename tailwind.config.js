/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	// prefix: "tw-",
	theme: {
		extend: {
			fontFamily: {
				default: '"Montserrat", ui-serif',
			},
			colors: {
				red: "var(--calc-color-red)",
				blue: "var(--calc-color-blue)",
				gray: "var(--calc-color-gray)",
				darkGray: "var(--calc-color-dark-gray)",
				lightGray: "var(--calc-color-light-gray)",
				lightBlue: "var(--calc-color-light-blue)",
				middleBlue: "var(--calc-color-middle-blue)",
				lightRed: "var(--calc-color-light-red)",
				black: "var(--calc-color-black)",
				select: "var(--calc-color-select)",
			},
			screens: {
				sm: {max: '600px'},
				md: {max: '900px'}
			}
		},
		flex: {
			'custom': '0 0 auto'
		}
	},
}
