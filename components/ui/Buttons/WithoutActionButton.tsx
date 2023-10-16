"use client";

import { ICONS } from "@/icons/AllIcons";
import { cn } from "@/utils/classNames";

//  button type
type buttonType = {
	title: string;
	icon?: React.ReactNode;
	className: string;
};

const WithoutActionButton = ({ title, className, icon }: buttonType) => {
	return (
		<button
			className={cn(
				className,
				"  w-auto  text-start text-base font-medium  text-black_normal flex items-center    gap-3     "
			)}
		>
			<span className=" whitespace-nowrap">{title}</span>
			{icon && <span className="w-5 h-5">{icon}</span>}
		</button>
	);
};

export default WithoutActionButton;

