import { ICONS } from "@/icons/AllIcons";
import { VECTORS } from "@/icons/Vectors";
import { cn } from "@/utils/classNames";
import React from "react";

const Heading5 = ({
	children,
	styles,
}: {
	children: string | React.ReactNode;
	styles: string;
}) => {
	return (
		<h5
			className={cn(
				"   text-[26px] leading-[36px]  font-medium text-black_deep ",
				styles
			)}
		>
			{children}
		</h5>
	);
};

export default Heading5;

