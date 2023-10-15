import { ICONS } from "@/icons/AllIcons";
import { cn } from "@/utils/classNames";
import React from "react";

const Rating = ({
	current_value,
	clickHandler,
	className,
}: {
	current_value: number;
	clickHandler?: (value: number) => void;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"flex items-center justify-center",
				className
			)}
		>
			<button
				type="button"
				className={[
					"w-6 h-6",
					current_value >= 1
						? "text-primary"
						: "text-gray-300",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(1)}
			>
				{ICONS.star}
			</button>
			<button
				type="button"
				className={[
					current_value >= 2
						? "text-primary"
						: "text-gray-300",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(2)}
			>
				{ICONS.star}
			</button>
			<button
				type="button"
				className={[
					current_value >= 3
						? "text-primary"
						: "text-gray-300",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(3)}
			>
				{ICONS.star}
			</button>
			<button
				type="button"
				className={[
					current_value >= 4
						? "text-primary"
						: "text-gray-300",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(4)}
			>
				{ICONS.star}
			</button>
			<button
				type="button"
				className={[
					current_value >= 5
						? "text-primary"
						: "text-gray-300",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(5)}
			>
				{ICONS.star}
			</button>
		</div>
	);
};

export default Rating;

