import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				dark: '#272325',
				darkNavy: '#38D6FE',
				light: '#f5f5f5',
				primary: '#B63E96',
				primaryDark: '#64ffda'
			}
		}
	},
	plugins: []
};
export default config;
