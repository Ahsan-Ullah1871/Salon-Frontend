import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import { Category } from "@/types/CommonTypes";
import { IGenericErrorResponse, IMeta } from "@/types/DataResponseTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ActionButtons from "../Action/ActionButtons";
import CategoryEdit from "./CategoryEdit";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/Redux";
import { useDeleteCategoryMutation } from "@/redux/features/catgeories/categoryApi";
import { get_error_messages } from "@/utils/error_messages";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import Alert from "../Alerts/Alerts";

const CategoriesList = ({
	categories,
	meta_data,
}: {
	categories: Category[];
	meta_data: IMeta;
}) => {
	const router = useRouter();
	const pathName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [deleteCategory, { data, isLoading, isError, error, isSuccess }] =
		useDeleteCategoryMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	useEffect(() => {
		if (error && "data" in error) {
			setISAlertOpen(true);
			setAlertType("error");
			const error_messages = get_error_messages(
				error?.data as IGenericErrorResponse
			);
			setAlertMessage(error_messages);
		} else if (isSuccess) {
			setISAlertOpen(true);
			setAlertType("success");
			setAlertMessage("Edited  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div className=" ">
			{/*Alert  */}
			<Alert
				alert_type={alert_type}
				alert_message={alert_message}
				is_alert_open={is_alert_open}
				setISAlertOpen={setISAlertOpen}
				setAlertMessage={setAlertMessage}
				closeAlert={() => setISAlertOpen(false)}
			/>

			<DynamicTable
				is_table_body_hide={isLoading}
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
										deleteButtonCLick={() =>
											deleteCategory(
												ct.id
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

