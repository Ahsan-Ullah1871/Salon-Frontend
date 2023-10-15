import { cn } from "@/utils/classNames";

type TextINputType = {
	title?: string;
	current_value: string;
	set_new_value: Function;
	note?: string;
	placeholder: string;
	type?: "text" | "number" | "email" | "password" | "tel";
	title_styles?: string;
	field_styles?: string;
	component_styles?: string;
};

const TextInput = ({
	title,
	current_value,
	set_new_value,
	note,
	placeholder,
	type,
	title_styles,
	field_styles,
	component_styles,
}: TextINputType) => {
	return (
		<div
			className={cn(
				" w-full flex flex-col gap-1 ",
				component_styles
			)}
		>
			{title && (
				<p
					className={cn(
						" text-sm font-semibold text-[#172327]",
						title_styles
					)}
				>
					{title}
				</p>
			)}

			<input
				className={cn(
					" w-full px-4 py-3 border border-[#E5EAEF] rounded-md bg-transparent  outline-none   placeholder-[#6F767E]  ",
					field_styles
				)}
				value={current_value}
				onChange={(e) => set_new_value(e.target.value)}
				type={type ?? "text"}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextInput;

