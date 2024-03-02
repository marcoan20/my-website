import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        firaCode: ['Fira Code', ...defaultTheme.fontFamily.sans],
      },
			backgroundImage: {
				'main': "url('/background.png')",
			},
			colors: {
				'enterprise-bar': "#222222",
				'header': "#250C56",
			}
		},
	},
	plugins: [],
}
