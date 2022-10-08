/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			latoFont: ['Lato', 'sans-serif'],
			quicksand: ['Quicksand', 'sans-serif'],
		},
		colors: {
			black: '#151515',
			white: '#fff',
			grey: '#f6f6f6',
			red: '#d1517b',
			green: '#3dbd8d',
			blue: { 500: '#6a90f5', 100: '#b5c7f7' },
		},
	},
	plugins: [],
}
