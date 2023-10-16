"use client";

import { cn } from "@/utils/classNames";
import Link from "next/link";

//  button type
type buttonType = {
	title: string;
	url: string;
	className: string;
};

const PrimaryLink = ({ title, url, className }: buttonType) => {
	return (
		<Link
			href={url}
			className={cn(
				"   text-center text-base font-medium  text-black_normal  text-clip px-12 py-3  bg-primary rounded-tl-2xl rounded-br-2xl  ",
				className
			)}
		>
			{title}
		</Link>
	);
};

export default PrimaryLink;

