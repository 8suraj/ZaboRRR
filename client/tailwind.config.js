/**  @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			Roboto: ['Roboto', 'sans-serif'],
			Poppins: ['Poppins', 'sans-serif'],
			Poiret: ['Poiret One', 'cursive'],
			Inter: ['Inter', 'sans-serif'],
		},
		colors: {
			'color-primary': '#51AF5B',
			'primary-light': '#B3E55E',
			'color-tertiary': '#E8F0CB',
			gray: '#737373',
			black: '#000',
			white: '#FFF',
			red: '#ff7849',
		},
		extend: {},
	},
	plugins: [],
};