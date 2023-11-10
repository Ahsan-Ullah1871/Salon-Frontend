import DesktopHeader from "@/components/Blocks/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import {
	Open_Sans,
	Raleway,
	Albert_Sans,
	Tienne,
	Merriweather,
	Seaweed_Script,
} from "next/font/google";
import MobileHeader from "@/components/Blocks/Header/MobileHeader";
import MainFooter from "@/components/Blocks/Footer/MainFooter";

const open_sans = Open_Sans({
	subsets: ["latin"],
	variable: "--sub_body-font",
});
const albert_sans = Albert_Sans({
	subsets: ["latin"],
	variable: "--main-font",
});

const tienne = Tienne({
	variable: "--spacial-font",
	subsets: ["latin"],
	weight: ["400"],
});
const merriweather = Merriweather({
	variable: "--sub-spacial-font",
	subsets: ["latin"],
	weight: ["400"],
});
const seaweed_Script = Seaweed_Script({
	variable: "--art-type-font",
	subsets: ["latin"],
	weight: ["400"],
});

// Meta Data
export const metadata: Metadata = {
	title: "Your Beauty Care Haven",
	description:
		"Discover the latest beauty tips, products, and advice for a radiant and confident you.",
	creator: "Ahsan Ullah",
	authors: [{ name: "Ahsan Ullah" }],
	publisher: "AHTemplates",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${albert_sans.variable} ${open_sans.variable}  ${tienne.variable}  ${seaweed_Script.variable} ${merriweather.variable}   min-h-screen w-full bg-bg_color_home `}
			>
				{children}
			</body>
		</html>
	);
}

