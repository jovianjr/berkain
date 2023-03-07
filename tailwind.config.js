/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ['Lora'],
				nunito: ['Nunito'],
			},
			colors: {
				primary: '#A39886',
				secondary: '#FFF',
				shades: {
					100: '#FFFCE3',
					300: '#D2BFA6',
					400: '#6D614F',
					500: '#40392C',
					700: '#23201B',
				},
				'c-blue': {
					500: '#324448',
				},
			},
		},
	},
	plugins: [],
};
