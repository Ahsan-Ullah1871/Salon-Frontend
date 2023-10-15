import { ICONS } from "@/icons/AllIcons";
import { VECTORS } from "@/icons/Vectors";
import { cn } from "@/utils/classNames";
import React from "react";

const Heading1 = ({
	children,
	styles,
}: {
	children: string;
	styles: string;
}) => {
	return (
		<h1
			className={cn(
				" font text-black_deep font-normal  font-main  text-[26px] md:text-[40px] leading-[29px] md:leading-[44px] text-center ",
				styles
			)}
		>
			{children}
		</h1>
	);
};

export default Heading1;

