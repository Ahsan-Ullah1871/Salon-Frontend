import { cn } from "@/utils/classNames";
import React from "react";

const NormalDescription = ({
	children,
	styles,
}: {
	styles?: string;
	children: string;
}) => {
	return (
		<p
			className={cn(
				"  text-base md:text-lg text-black_normal",
				styles
			)}
		>
			{children}
		</p>
	);
};

export default NormalDescription;

