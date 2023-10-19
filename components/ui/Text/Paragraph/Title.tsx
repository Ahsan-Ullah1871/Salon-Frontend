import { cn } from "@/utils/classNames";
import React from "react";

const Title = ({
	children,
	styles,
}: {
	styles?: string;
	children: React.ReactNode;
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

export default Title;

