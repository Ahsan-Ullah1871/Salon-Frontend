"use client";

import { cn } from "@/utils/classNames";

//  button type
type buttonType = {
	title?: string;
	onClickHandler?: Function;
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: React.ReactNode;
	is_loading?: boolean;
};

const PrimaryButton = ({
	title,
	onClickHandler,
	className,
	type = "button",
	is_loading = false,
	icon,
}: buttonType) => {
	return (
		<button
			onClick={() => onClickHandler && onClickHandler()}
			className={cn(
				"   text-center text-base font-medium  text-black_normal  text-clip px-12 py-3  bg-primary rounded-tl-2xl rounded-br-2xl  flex items-center justify-center gap-2 ",
				className
			)}
			type={type ?? "button"}
			disabled={is_loading}
		>
			<span className=" whitespace-nowrap">{title}</span>
			{icon && <span className="w-5 h-">{icon}</span>}
		</button>
	);
};

export default PrimaryButton;

