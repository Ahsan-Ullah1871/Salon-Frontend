import Modal from "@/components/ui/Modal/Modal";
import { ICONS } from "@/icons/AllIcons";
import React from "react";
import FilesList from "./Files";
import { UserFile } from "@/types/CommonTypes";

const FileSelect = ({
	onSelectImage,
}: {
	onSelectImage: (file: UserFile) => void;
}) => {
	return (
		<div className="">
			<Modal
				button_icon={ICONS.camera}
				button_title="Select Imagee"
				button_style=" bg-transparent   border rounded-md border-d_primary h-[100px] w-[100px] flex flex-col gap-2 text-d_primary  items-center justify-center  "
				panel_parent_style=" flex items-center justify-center  "
				panel_style="w-full   max-w-[90%]  min-h-[500px]   sm:max-w-3xl  max-h-[70VH] transform overflow-hidden rounded-2xl bg-white p-6   shadow-md transition-all flex flex-col gap-7  "
				isShowCloseButton={true}
			>
				<FilesList onSelectImage={onSelectImage} />
			</Modal>
		</div>
	);
};

export default FileSelect;

