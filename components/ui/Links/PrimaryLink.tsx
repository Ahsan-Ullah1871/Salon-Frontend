"use client";

import { ButtonType } from "@/types/ButtonTypes";
import { cn } from "@/utils/classNames";
import Link from "next/link";

const PrimaryLink = ({ title, url, className }: ButtonType) => {
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

