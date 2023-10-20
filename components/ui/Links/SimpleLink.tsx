"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";

//  button type
type buttonType = {
	title: string;
	url: string;
	className: string;
};

const SimpleLink = ({ title, url, className }: buttonType) => {
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

