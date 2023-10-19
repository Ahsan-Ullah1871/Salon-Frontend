import DynamicTable from "@/components/ui/Table/Table";
import Title from "@/components/ui/Text/Paragraph/Title";
import {
	Appointment,
	Category,
	Schedule,
	Service,
	Worker,
} from "@/types/CommonTypes";
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
import { title } from "process";
import AppointmentStatus from "@/types/ServiceStatus";
import {
	getAdminStatusOptions,
	getStatusClasses,
	statusClasses,
	statusColors,
} from "@/utils/appointmentStatusHelper";
import { useEditAppointmentMutation } from "@/redux/features/appointment/appointmentApi";
import Alert from "../Alerts/Alerts";
import { cn } from "@/utils/classNames";

const AppointmentsList = ({
	appointments,
	meta_data,
}: {
	appointments: Appointment[];
	meta_data: IMeta;
}) => {
	const router = useRouter();
	const pathName = usePathname();

	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [editAppointment, { data, isLoading, isError, error, isSuccess }] =
		useEditAppointmentMutation();

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
			setAlertMessage("Status changed  successfully");
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
			{/*  */}
			<DynamicTable
				is_table_body_hide={isLoading}
				data={appointments?.map((appointment) => ({
					id: appointment.id,
					className: " bg-white p-5 rounded-md shadow mb-5 ",
					columns: [
						{
							className: "hidden md:block  ",
							component: (
								<Title styles=" text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{
										appointment
											?.user
											?.name
									}
								</Title>
							),
						},
						{
							className: "hidden md:block  ",
							component: (
								<Title styles=" px-4 text-sm font-medium text-d_black_normal w-full   overflow-clip  ">
									{
										appointment
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
										appointment?.created_at
									).toDateString()}
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
										appointment?.date
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
										appointment?.start_time
									).toLocaleTimeString()}
								</Title>
							),
						},
						{
							className: " flex items-center justify-center",
							component: (
								<Title
									styles={cn(
										`text-sm font-medium capitalize  `
										// getStatusClasses(
										// 	appointment?.status
										// )
									)}
								>
									{
										appointment?.status
									}
								</Title>
							),
						},
						{
							className: " ",
							component: (
								<div className="w-full flex items-center justify-end pl-6">
									<ActionButtons
										// editButtonCLick={() =>
										// 	router.push(
										// 		`${pathName}/${appointment.id}`
										// 	)
										// }
										dropdown_action={{
											not_found_text:
												"There have not any status for change",
											title: "Change Status",
											menus: getAdminStatusOptions(
												appointment?.status
											).map(
												(
													item
												) => {
													return {
														title: `Change to "${item}"`,

														classes: `!text-[${
															statusColors[
																appointment
																	.status
															]
														}]`,
														onCLickHandle:
															() => {
																editAppointment(
																	{
																		appointmentID:
																			appointment.id,
																		appointment_data:
																			{
																				status: item,
																			},
																	}
																);
															},
													};
												}
											),
										}}
									/>
								</div>
							),
						},
					],
				}))}
				columns={[
					{
						header: "Customer",
						className: "block px-4 text-lg font-medium text-d_black",
					},
					{
						header: "Service",
						className: " hidden md:block px-4 text-lg font-medium text-d_black",
					},
					{
						header: "Created AT",
						className: " hidden md:block px-6 text-lg font-medium text-d_black",
					},
					{
						header: " Working Date",
						className: " hidden md:block text-center text-lg font-medium text-d_black",
					},
					{
						header: "Start Time",
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

export default AppointmentsList;

