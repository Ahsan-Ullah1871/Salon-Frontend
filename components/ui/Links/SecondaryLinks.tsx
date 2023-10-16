import { cn } from "@/utils/classNames";
import Link from "next/link";
import React, { SVGProps } from "react";

//  button type
type buttonType = {
	title: string;
	url: string;
	className: string;
	icon?: React.ReactNode;
};

const SecondaryLink = ({
	title,
	url,
	className: buttonStyle,
	icon,
}: buttonType) => {
	return (
		<Link
			href={url}
			className={cn(
				"   text-center text-base font-medium  text-black_normal px-12 py-3 bg:transparent hover:bg-primary duration-300 rounded-tl-2xl rounded-br-2xl  flex items-center justify-center gap-2  ",
				buttonStyle
			)}
		>
			{icon && icon}
			<span className="  whitespace-nowrap"> {title}</span>
		</Link>
	);
};

export default SecondaryLink;

