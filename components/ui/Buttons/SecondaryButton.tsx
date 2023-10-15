import { cn } from "@/utils/classNames";
import React, { SVGProps } from "react";

//  button type
type buttonType = {
	title: string;
	onClickHandler: Function;
	className: string;
	icon?: React.ReactNode;
};

const SecondaryButton = ({
	title,
	onClickHandler,
	className: buttonStyle,
	icon,
}: buttonType) => {
	return (
		<button
			onClick={() => onClickHandler}
			className={cn(
				"   text-center text-base font-medium  text-black_normal px-12 py-3 bg:transparent hover:bg-primary duration-300 rounded-tl-2xl rounded-br-2xl  flex items-center justify-center gap-2  ",
				buttonStyle
			)}
		>
			{icon && icon}
			<span className="  whitespace-nowrap"> {title}</span>
		</button>
	);
};

export default SecondaryButton;

