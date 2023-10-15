import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sub: "var(--sub_body-font)",
				main: "var(--main-font)",
				spacial: "var(--spacial-font)",
				"sub-spacial": "var(--sub-spacial-font)",
			},
			colors: {
				bg_color: "#F6F3EB",
				primary: "#FFCE00",
				black_normal: "#353535CC",
				black_deep: "#353535",
				green: "#034A46",
			},
			spacing: {
				body: "1440px",
			},
			maxWidth: {
				body: "1440px",
			},

			backgroundImage: {
				"footer-background": "url('/img/BG.svg')",
			},
		},
	},
	plugins: [],
};
export default config;

