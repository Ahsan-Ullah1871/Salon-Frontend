import { ICONS } from "@/icons/AllIcons";
import { VECTORS } from "@/icons/Vectors";
import { cn } from "@/utils/classNames";
import React from "react";

const SpecialHeader = ({
	start_text,
	spacial_text,
	end_ext,
	full_text_style,
}: {
	start_text: string;
	spacial_text: string;
	end_ext: string;
	full_text_style?: string;
}) => {
	return (
		<h1
			className={cn(
				" font text-black_deep font-normal  font-spacial  text-[40px] md:text-[74px] leading-[44px] md:leading-[84px] text-center ",
				full_text_style
			)}
		>
			{start_text}{" "}
			<span className="text-green mx-2 bg relative  ">
				<span className="z-[1]">{spacial_text}</span>
				<span className="z-[-1]  w-full absolute -bottom-0 left-0 overflow-hidden">
					{VECTORS.text_vector}
				</span>
			</span>
			{end_ext}
		</h1>
	);
};

export default SpecialHeader;

