import { ICONS } from "@/icons/AllIcons";
import { SM_ICONS } from "@/icons/SmalllIcon";
import React from "react";

const ActionButtons = ({
	previewButtonCLick,
	editButtonCLick,
	deleteButtonCLick,
}: {
	previewButtonCLick: () => void;
	editButtonCLick: () => void;
	deleteButtonCLick: () => void;
}) => {
	return (
		<div className=" flex items-center justify-start gap-2">
			<button
				onClick={previewButtonCLick}
				className=" p-2 text-d_black_normal hover:text-primary  duration-500"
			>
				{SM_ICONS.eye}
			</button>
			<button
				onClick={editButtonCLick}
				className=" p2 text-d_black_normal hover:text-green  duration-500"
			>
				{SM_ICONS.pencil}
			</button>
			<button
				onClick={deleteButtonCLick}
				className=" p-2 text-d_black_normal hover:text-error  duration-500"
			>
				{SM_ICONS.delete}
			</button>
		</div>
	);
};

export default ActionButtons;

