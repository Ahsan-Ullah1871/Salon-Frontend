"use client";

import { ButtonType } from "@/types/ButtonTypes";
import { cn } from "@/utils/classNames";
import Link from "next/link";

const SimpleLink = ({ title, url, className }: ButtonType) => {
	return (
		<Link
			href={url}
			className={cn(
				" text-base font-medium  text-green hover:text-primary duration-300 ",
				className
			)}
		>
			{title}
		</Link>
	);
};

export default SimpleLink;

