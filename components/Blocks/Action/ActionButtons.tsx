import PopOver from "@/components/ui/PopOver/PopOver";
import Title from "@/components/ui/Text/Paragraph/Title";
import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { cn } from "@/utils/classNames";
import React from "react";

const ActionButtons = ({
	previewButtonCLick,
	editButtonCLick,
	deleteButtonCLick,
	dropdown_action,
}: {
	previewButtonCLick?: () => void;
	editButtonCLick?: () => void;
	deleteButtonCLick?: () => void;
	dropdown_action?: {
		not_found_text: string;
		title: string;
		button_style?: string;
		menus: Array<{
			title: string;
			onCLickHandle: () => void;
			classes?: string;
			icon?: React.ReactNode;
		}>;
	};
}) => {
	return (
		<div className=" flex items-center justify-start gap-2">
			{previewButtonCLick && (
				<button
					onClick={previewButtonCLick}
					className=" p-2 text-d_black_normal hover:text-primary  duration-500"
				>
					{SM_ICONS.eye}
				</button>
			)}
			{editButtonCLick && (
				<button
					onClick={editButtonCLick}
					className=" p2 text-d_black_normal hover:text-green  duration-500"
				>
					{SM_ICONS.pencil}
				</button>
			)}
			{deleteButtonCLick && (
				<button
					onClick={deleteButtonCLick}
					className=" p-2 text-d_black_normal hover:text-error  duration-500"
				>
					{SM_ICONS.delete}
				</button>
			)}

			{dropdown_action && (
				<PopOver
					className=" w-[250px]   right-0 mt-3 rounded-md shadow-md   "
					button={
						<button
							className={cn(
								dropdown_action?.button_style,
								"flex items-center gap-4 outline-none ring-0"
							)}
						>
							{dropdown_action?.title}
							<span className=" hidden md:block4">
								{ICONS.dow_arrow}
							</span>
						</button>
					}
				>
					<div className="overflow-hidden  p-5  shadow-sm bg-white rounded-lg   min-h-[100px] flex  flex-col   justify-start gap-4">
						{dropdown_action?.menus?.length > 0 &&
							dropdown_action?.menus.map(
								(menu) => {
									return (
										<button
											type="button"
											key={
												menu.title
											}
											onClick={() => {
												menu.onCLickHandle();
											}}
											className={cn(
												" text-d_black_normal hover:text-green duration-500  rounded px-1 py-2 text-center text-base  flex items-center gap-4   ",
												menu.classes
											)}
										>
											{menu.icon && (
												<span className="  ">
													{
														menu.icon
													}
												</span>
											)}
											{
												menu.title
											}
										</button>
									);
								}
							)}

						{dropdown_action?.menus?.length ===
							0 && (
							<Title styles="text-center  my-auto">
								{dropdown_action?.not_found_text ??
									"Not Found"}
							</Title>
						)}
					</div>
				</PopOver>
			)}
		</div>
	);
};

export default ActionButtons;

