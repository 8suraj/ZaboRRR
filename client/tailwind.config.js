/**  @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			Roboto: ['Roboto', 'sans-serif'],
			Poppins: ['Poppins', 'sans-serif'],
			Poiret: ['Poiret One'],
			Inter: ['Inter', 'sans-serif'],
			Jetbrains: ['JetBrains Mono'],
		},
		colors: {
			'color-primary': '#51AF5B',
			'primary-light': '#B3E55E',
			'color-tertiary': '#E8F0CB',
			transparent: 'transparent',
			gray: '#737373',
			black: '#000',
			white: '#FFF',
			red: '#ba1004',
		},
		extend: {},
	},
	plugins: [],
};
