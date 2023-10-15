import { cn } from "@/utils/classNames";
import React from "react";

const Divider = ({ divider_style }: { divider_style: string }) => {
	return (
		<div
			className={cn(
				" w-full h-1 bg-black_deep rounded-md  my-2",
				divider_style
			)}
		/>
	);
};

export default Divider;

