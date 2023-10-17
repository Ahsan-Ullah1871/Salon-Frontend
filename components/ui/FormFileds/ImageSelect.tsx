import FileSelect from "@/components/Blocks/FileUploadAndSelect/FileSelect";
import { ICONS } from "@/icons/AllIcons";
import { ImageSelectType } from "@/types/FormFieldTypes";
import { cn } from "@/utils/classNames";
import Image from "next/image";
import React from "react";

const ImageSelect = ({
	title,
	current_value,
	set_new_value,
	height,
	width,
	objectFit,
	isfill,
	image_styles,
	component_styles,
	set_new_image_value,
}: ImageSelectType) => {
	return (
		<div className={cn("w-auto h-auto relative", component_styles)}>
			{!current_value && (
				<FileSelect onSelectImage={set_new_image_value} />
			)}
			{current_value && (
				<Image
					alt="Image Select"
					src={current_value}
					height={height}
					width={width}
					objectFit={objectFit}
					fill={isfill}
					className={cn(
						"w-full h-full rounded-md",
						image_styles
					)}
				/>
			)}
			{current_value && (
				<button
					type="button"
					onClick={() => set_new_value("")}
					className=" absolute top-2  right-4 text-error "
				>
					{ICONS.close_icon}
				</button>
			)}
		</div>
	);
};

export default ImageSelect;

