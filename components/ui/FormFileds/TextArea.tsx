import { TextAreaType } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";

const TextArea = ({
	title,
	current_value,
	set_new_value,
	note,
	placeholder,
	title_styles,
	field_styles,
	component_styles,
	is_required,
	is_disabled = false,
	row,
	col,
}: TextAreaType) => {
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
			<textarea
				required={is_required}
				disabled={is_disabled}
				cols={col ?? 5}
				rows={row ?? 5}
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

