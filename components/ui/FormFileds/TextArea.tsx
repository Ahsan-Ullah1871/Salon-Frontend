import { cn } from "@/utils/classNames";

type TextAreaType = {
	title: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
};

const TextArea = ({
	title,
	current_value,
	set_new_value,
	note,
	placeholder,
	title_styles,
	field_styles,
	component_styles,
}: TextAreaType) => {
	return (
		<div className={cn(" flex flex-col gap-1 ", component_styles)}>
			<p
				className={cn(
					" text-sm font-semibold text-[#172327]",
					title_styles
				)}
			>
				{title}
			</p>

			<textarea
				cols={5}
				className={cn(
					" w-full px-4 py-3 border border-[#E5EAEF] rounded-md bg-transparent  outline-none   placeholder-[#6F767E]  ",
					field_styles
				)}
				value={current_value}
				onChange={(e) => set_new_value(e.target.value)}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
