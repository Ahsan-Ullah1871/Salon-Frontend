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
				art: "var(--art-type-font)",
				"sub-spacial": "var(--sub-spacial-font)",
			},
			colors: {
				success: "#00FF00",
				error: " #FF0000",
				warning: " #FFFF00",
				info: "#FFA500",
				bg_color: "var(--bg_color)",
				bg_color_home: "#F6F3EB",
				primary: "#FFCE00",
				black_normal: "#353535CC",
				black_deep: "#353535",
				green: "#034A46",
				d_primary: "#4170FF",
				d_black: "#3D474D",
				d_gray: "#F2F2F2",
				d_black_normal: "#83878B",
				d_body: "#F8F8FE",
				d_gray_text: "#BBC1C9",
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

