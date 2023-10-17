import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import { Category } from "@/types/CommonTypes";
import { IMeta } from "@/types/DataResponseTypes";
import Image from "next/image";
import React from "react";
import ActionButtons from "../Action/ActionButtons";
import CategoryEdit from "./CategoryEdit";
import { usePathname, useRouter } from "next/navigation";

const CategoriesList = ({
	categories,
	meta_data,
}: {
	categories: Category[];
	meta_data: IMeta;
}) => {
	const router = useRouter();
	const pathName = usePathname();
	return (
		<div className=" ">
			<DynamicTable
				data={categories?.map((ct) => ({
					id: ct.id,
					className: " bg-white p-5 rounded-md shadow mb-5 ",
					columns: [
						{
							className: "hidden md:block  ",
							component: (
								<Title styles=" text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{ct?.id}
								</Title>
							),
						},
						{
							className: "px-4",
							component: (
								<Title styles="  text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{ct?.name}
								</Title>
							),
						},
						{
							className: "hidden md:flex items-center justify-center",
							component: (
								<Image
									width={60}
									height={60}
									src={
										ct?.image_url
									}
									alt={ct.name}
									objectFit="cover"
									className="rounded-md"
								/>
							),
						},
						{
							className: " ",
							component: (
								<div className="w-full flex items-center justify-end pl-6">
									<ActionButtons
										editButtonCLick={() =>
											router.push(
												`${pathName}/${ct.id}`
											)
										}
									/>
								</div>
							),
						},
					],
				}))}
				columns={[
					{
						header: "ID",
						className: " hidden md:block px-4 text-lg font-medium text-d_black",
					},
					{
						header: "Name",
						className: "px-6 text-lg font-medium text-d_black",
					},
					{
						header: "Image",
						className: " hidden md:block text-center text-lg font-medium text-d_black",
					},
					{
						header: " Action",
						className: " text-end px-6 text-lg font-medium text-d_black",
					},
				]}
				table_style="  "
				table_header_style="   bg-transparent shadow p-5  border-t border-b border-d_gray "
				table_body_style=" mt-4  bg-transparent gap-5"
			/>
		</div>
	);
};

export default CategoriesList;

