import { SelectFromListType } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";
import PopOver from "../PopOver/PopOver";
import { ICONS } from "@/icons/AllIcons";

const SelectFromList = ({
	title,
	current_value,
	set_new_value,
	note,
	drop_down_items,
	title_styles,
	field_styles,
	component_styles,
	default_option_text,
	options_style,
	is_disabled,
}: SelectFromListType) => {
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

			<PopOver
				is_disabled={is_disabled ?? false}
				className=" w-full  right-0 mt-3 rounded-md shadow-md   "
				popOverButtonClassName={cn(
					" relative w-full px-4 py-3 border outline outline-1 outline-[#E5EAEF] rounded-md bg-transparent placeholder-[#6F767E]  border-r-[20px] border-transparent",
					field_styles
				)}
				button={
					<button className="flex items-center gap-4 outline-none ring-0">
						{current_value
							? current_value
							: default_option_text}
						<span className=" hidden md:block4">
							{ICONS.dow_arrow}
						</span>
					</button>
				}
			>
				<div className="overflow-hidden  p-5  shadow-sm bg-white rounded-lg   min-h-[100px] flex  flex-col   justify-start gap-4">
					{drop_down_items?.map((menu) => {
						return (
							<button
								type="button"
								key={menu.value}
								onClick={() => {
									set_new_value(
										menu.value
									);
								}}
								className={cn(
									` text-d_black_normal hover:text-green duration-500 text-base  flex items-center gap-4  ${
										current_value ===
											menu.value &&
										"text-green"
									}`,

									options_style
								)}
							>
								<span className="  ">
									{menu.label}
								</span>
							</button>
						);
					})}
				</div>
			</PopOver>
		</div>
	);
};

export default SelectFromList;

