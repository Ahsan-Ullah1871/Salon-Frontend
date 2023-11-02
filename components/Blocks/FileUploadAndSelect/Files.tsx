/* eslint-disable @next/next/no-img-element */
import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import { Category, UserFile } from "@/types/CommonTypes";
import { IMeta } from "@/types/DataResponseTypes";
import Image from "next/image";
import React, { useState } from "react";
import ActionButtons from "../Action/ActionButtons";
import { usePathname, useRouter } from "next/navigation";
import { useGetFilesQuery } from "@/redux/features/file/fileApi";
import { ICONS } from "@/icons/AllIcons";
import UploadImage from "./UploadImage";

const FilesList = ({
	onSelectImage,
}: {
	onSelectImage: (file: UserFile) => void;
}) => {
	//filter state and effect for update
	const [filter, setFilter] = useState({
		title: "",
		url: "",
		id: "",
		user_id: "",
		search: "",
	});

	// Get categories query
	const {
		data: files_data,
		isLoading,
		isError,
		error,
	} = useGetFilesQuery({
		title: filter?.title,
		url: filter?.url,
		id: filter?.id,
		user_id: filter?.user_id,
		search: filter?.search,
		size: 200,
	});

	const files_list: UserFile[] = files_data?.data?.data;

	return (
		<div className=" w-full h-[99%]   overflow-y-auto   py-10 flex items-start justify-center gap-6 flex-wrap">
			<UploadImage user_file_length={files_list?.length || 0} />
			{files_list?.map((file) => {
				return (
					<img
						onClick={() => onSelectImage(file)}
						key={file.id}
						src={file?.url}
						alt={file?.id}
						className=" object-cover w-[150px] h-[150px] rounded-md shadow cursor-pointer"
					/>
				);
			})}
		</div>
	);
};

export default FilesList;

