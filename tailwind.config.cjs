/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		extend: {
			fontFamily: {
			'sans': ['Gabarito', 'sans-serif'],
			'title': ['Poiret One', 'sans-serif']
		},
		},
	},
	plugins: [],
}
