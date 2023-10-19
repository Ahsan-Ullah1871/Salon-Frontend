import { TextINputType } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";

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
	is_required = true,
	is_disabled = false,
	onClick,
	onKeyDown,
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
				onChange={(e) =>
					set_new_value &&
					set_new_value(e.target.value)
				}
				type={type ?? "text"}
				placeholder={placeholder}
				disabled={is_disabled}
				required={is_required}
				onClick={onClick && onClick}
				onKeyDown={onKeyDown && ((e: any) => onKeyDown(e))}
			/>
		</div>
	);
};

export default TextInput;

