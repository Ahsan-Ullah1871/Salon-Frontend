import { cn } from "@/utils/classNames";

//  button type
type buttonType = {
	title: string;
	onClickHandler: Function;
	className: string;
};

const PrimaryButton = ({ title, onClickHandler, className }: buttonType) => {
	return (
		<button
			className={cn(
				"   text-center text-base font-medium  text-black_normal  text-clip px-12 py-3  bg-primary rounded-tl-2xl rounded-br-2xl  ",
				className
			)}
		>
			{title}
		</button>
	);
};

export default PrimaryButton;

