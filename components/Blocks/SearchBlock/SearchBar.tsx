"use client";

import TextArea from "@/components/ui/FormFileds/TextArea";
import TextInput from "@/components/ui/FormFileds/TextInput";
import { ICONS } from "@/icons/AllIcons";
import React, { useState } from "react";

const SearchBar = ({
	searchParam,
	setSearchParam,
}: {
	searchParam: string;
	setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [temp_vale, setTRempValue] = useState(searchParam);
	return (
		<div className=" max-w-[350px]  relative w-full">
			<TextInput
				component_styles="max-w-[350px]  "
				field_styles="  pl-14 w-full rounded-md border-d_gray_text border-opacity-70"
				placeholder="Search categories by name"
				current_value={temp_vale}
				set_new_value={(vl) => setTRempValue(vl)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						setSearchParam(temp_vale);
					}
				}}
			/>
			<span className=" absolute  left-3  top-0 bottom-0 my-auto flex  items-center justify-center text-d_gray_text">
				{ICONS.search}{" "}
			</span>
		</div>
	);
};

export default SearchBar;

