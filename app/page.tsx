"use client";

import HeroSection from "@/components/Blocks/HeroSection/HeroSection";
import HomePage from "@/components/PagesComponents/Home/HomePage";
import SelectFromList from "@/components/ui/FormFileds/SelectFromList";
import TextArea from "@/components/ui/FormFileds/TextArea";
import TextInput from "@/components/ui/FormFileds/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [value, setValue] = useState("");
	return (
		<main className="">
			<HomePage />
		</main>
	);
}

