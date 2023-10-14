"use client";

import SelectFromList from "@/components/ui/FormFileds/SelectFromList";
import TextArea from "@/components/ui/FormFileds/TextArea";
import TextInput from "@/components/ui/FormFileds/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [value, setValue] = useState("");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
			<SelectFromList
				title="Hello"
				current_value={value}
				set_new_value={(vl: string) => setValue(vl)}
				placeholder="Test Email"
				field_styles="w-[600px]"
			/>
		</main>
	);
}

