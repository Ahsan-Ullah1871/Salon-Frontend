import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import { Category, Schedule, Service, Worker } from "@/types/CommonTypes";
import { IGenericErrorResponse, IMeta } from "@/types/DataResponseTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ActionButtons from "../Action/ActionButtons";
import ServiceEdit from "./ScheduleEdit";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/Redux";
import { useDeleteCategoryMutation } from "@/redux/features/catgeories/categoryApi";
import { get_error_messages } from "@/utils/error_messages";
import TableSkeleton from "@/components/ui/Skeleton/TableSkeleton";
import { useDeleteServiceMutation } from "@/redux/features/service/serviceApi";
import { ICONS } from "@/icons/AllIcons";
import { useDeleteWorkerMutation } from "@/redux/features/workers/workerApi";
import { useDeleteScheduleMutation } from "@/redux/features/schedule/scheduleApi";

const DashboardSchedulesList = ({
	schedules,
	meta_data,
}: {
	schedules: Schedule[];
	meta_data: IMeta;
}) => {
	const router = useRouter();
	const pathName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [deleteSchedule, { data, isLoading, isError, error, isSuccess }] =
		useDeleteScheduleMutation();

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
			setAlertMessage("Deleted  successfully");
		}
	}, [error, isSuccess]);

	return (
		<div className=" ">
			<DynamicTable
				is_table_body_hide={isLoading}
				data={schedules?.map((schedule) => ({
					id: schedule.id,
					className: " bg-white p-5 rounded-md shadow mb-5 ",
					columns: [
						{
							className: "hidden md:block  ",
							component: (
								<Title styles=" text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{
										schedule
											?.service
											?.name
									}
								</Title>
							),
						},
						{
							className: "px-4",
							component: (
								<Title styles="  text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{new Date(
										schedule?.date
									).toLocaleDateString()}
								</Title>
							),
						},
						{
							className: "hidden md:flex items-center justify-center",
							component: (
								<Title
									styles={`text-sm font-medium `}
								>
									{new Date(
										schedule?.start_time
									).toLocaleTimeString()}
								</Title>
							),
						},
						{
							className: " flex items-center justify-center",
							component: (
								<Title
									styles={`text-sm font-medium `}
								>
									{new Date(
										schedule?.end_time
									).toLocaleTimeString()}
								</Title>
							),
						},
						{
							className: " flex items-center justify-center",
							component: (
								<Title
									styles={`text-sm font-medium ${
										schedule?.available
											? " text-green"
											: "text-error"
									}`}
								>
									{schedule?.available
										? "Open for book"
										: "Booked"}
								</Title>
							),
						},
						{
							className: " ",
							component: (
								<div className="w-full flex items-center justify-end pl-6">
									<ActionButtons
										editButtonCLick={() =>
											router.push(
												`${pathName}/${schedule.id}`
											)
										}
										deleteButtonCLick={() =>
											deleteSchedule(
												schedule.id
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
						header: "Service",
						className: " hidden md:block px-4 text-lg font-medium text-d_black",
					},
					{
						header: "Date",
						className: "px-6 text-lg font-medium text-d_black",
					},
					{
						header: "Start Time",
						className: " hidden md:block text-center text-lg font-medium text-d_black",
					},
					{
						header: "End Time",
						className: "  text-center text-lg font-medium text-d_black",
					},
					{
						header: "Status",
						className: "  text-center text-lg font-medium text-d_black",
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

export default DashboardSchedulesList;

