import { SelectFromList } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";

const SelectFromList = ({
	title,
	current_value,
	set_new_value,
	note,
	placeholder,
	type,
	title_styles,
	field_styles,
	component_styles,
}: SelectFromList) => {
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

			<select
				name=""
				id=""
				className={cn(
					" w-full px-4 py-3 border outline outline-1 outline-[#E5EAEF] rounded-md bg-transparent placeholder-[#6F767E]  border-r-[20px] border-transparent",
					field_styles
				)}
			>
				<option value="test">Hello</option>
			</select>

			{/* <input
				value={current_value}
				onChange={(e) => set_new_value(e.target.value)}
				type={type ?? "text"}
				placeholder={placeholder}
			/> */}
		</div>
	);
};

export default SelectFromList;
