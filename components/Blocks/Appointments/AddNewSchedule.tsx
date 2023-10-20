import { Form } from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal/Modal";
import { SM_ICONS } from "@/icons/SmalllIcon";
import { Category, Service, User, UserFile, Worker } from "@/types/CommonTypes";
import React, { useEffect, useState } from "react";
import Alert from "../Alerts/Alerts";
import { ICONS } from "@/icons/AllIcons";
import { get_error_messages } from "@/utils/error_messages";
import { IGenericErrorResponse } from "@/types/DataResponseTypes";
import { useRouter } from "next/navigation";
import {
	useAddCategoryMutation,
	useEditCategoryMutation,
} from "@/redux/features/catgeories/categoryApi";
import Heading5 from "@/components/ui/Text/Headers/Heading5";
import { useAppSelector } from "@/hooks/Redux";
import { useAddServiceMutation } from "@/redux/features/service/serviceApi";
import { useAddWorkerMutation } from "@/redux/features/workers/workerApi";
import { useAddScheduleMutation } from "@/redux/features/schedule/scheduleApi";

const AddNewSchedule = ({
	workers,
	services,
}: {
	workers: Worker[];
	services: Service[];
}) => {
	const router = useRouter();
	const { user } = useAppSelector((state) => state.auth);

	// login mutation hook
	const [addSchedule, { data, isLoading, isError, error, isSuccess }] =
		useAddScheduleMutation();

	//
	const [is_alert_open, setISAlertOpen] = useState(false);
	const [alert_message, setAlertMessage] = useState("");
	const [alert_type, setAlertType] = useState<
		"error" | "success" | "warning" | "info"
	>("success");

	const [scheduleForm, setScheduleForm] = useState({
		date: new Date(),
		start_time: new Date(),
		end_time: new Date(),
		service_id: "",
		provider_id: "",
		available: true,
	});

	// const current value
	const current_value = (key_name: "service_id" | "provider_id") => {
		return scheduleForm?.[key_name] || "";
	};
	// const current value
	const update_value = (key_name: string, value: string) => {
		setScheduleForm((prev) => ({ ...prev, [key_name]: value }));
	};

	//

	const formSubmitHandler = async () => {
		addSchedule({
			...scheduleForm,
			date: scheduleForm.date.toISOString(),
			start_time: `${
				scheduleForm.date.toISOString().split("T")[0]
			}T${scheduleForm.start_time.toISOString().split("T")[1]}`,
			end_time: `${
				scheduleForm.date.toISOString().split("T")[0]
			}T${scheduleForm.end_time.toISOString().split("T")[1]}`,
		});
	};

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

			router.push(`/admin/dashboard/schedules`);
		}
	}, [error, isSuccess]);

	return (
		<div>
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
			<Heading5 styles="text-center font-spacial">
				New Schedule
			</Heading5>

			{/*  */}
			<div className=" w-full mt-5">
				<Form
					button_title="Save new schedule"
					is_loading={isLoading}
					button_icon={
						isLoading
							? ICONS.button_loading_icon
							: ""
					}
					button_stye="w-full mt-4 bg-d_primary text-white col-span-2 "
					formSubmitHandler={() => formSubmitHandler()}
					form_style=" max-w-5xl mx-auto p-6 bg-white shadow rounded-lg  grid grid-cols-1 grid-cols-2"
					fields_list={[
						{
							data_filed_key: "service_id",
							key: "select-box",
							properties: {
								title: "Service tem",
								default_option_text:
									"Select service",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									services?.map(
										(
											service
										) => ({
											label: service.name,
											value: service.id,
										})
									),

								current_value:
									current_value(
										"service_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"service_id",
										value
									),
							},
						},
						{
							data_filed_key: "provider_id",
							key: "select-box",
							properties: {
								title: "Worker  select",
								default_option_text:
									"Select worker",
								component_styles:
									"col-span-2 md:col-span-1",
								drop_down_items:
									workers?.map(
										(
											worker
										) => ({
											label: worker.name,
											value: worker.id,
										})
									),

								current_value:
									current_value(
										"provider_id"
									),
								set_new_value: (
									value: string
								) =>
									update_value(
										"provider_id",
										value
									),
							},
						},

						{
							data_filed_key: "start_time",
							key: "date-picker",
							properties: {
								title: "Start time",
								placeholder: "",
								showTimeSelect: true,
								component_styles:
									"col-span-2 md:col-span-1",

								current_value:
									scheduleForm?.start_time,
								set_new_value: (
									value: Date
								) => {
									setScheduleForm(
										(
											prev
										) => ({
											...prev,
											start_time:
												value,
										})
									);
								},
							},
						},

						{
							data_filed_key: "end_time",
							key: "date-picker",
							properties: {
								title: "End time",
								placeholder: "",
								showTimeSelect: true,
								component_styles:
									"col-span-2 md:col-span-1",

								current_value:
									scheduleForm?.end_time,
								set_new_value: (
									value: Date
								) => {
									setScheduleForm(
										(
											prev
										) => ({
											...prev,
											end_time: value,
										})
									);
								},
							},
						},
						{
							data_filed_key: "date",
							key: "date-picker",
							properties: {
								title: "Date",
								placeholder: "",
								component_styles:
									"col-span-2 md:col-span-1",

								current_value:
									scheduleForm?.date,
								set_new_value: (
									value: Date
								) => {
									setScheduleForm(
										(
											prev
										) => ({
											...prev,
											date: value,
										})
									);
								},
							},
						},
					]}
				/>
			</div>
		</div>
	);
};

export default AddNewSchedule;

